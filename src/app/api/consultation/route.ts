import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, organization, topic, message } = body;

    if (!name || !contact || !message) {
      return NextResponse.json(
        { success: false, error: "Semua kolom wajib harus diisi." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

    // 1. Simpan backup lokal CSV (data/consultations.csv)
    const csvDir = path.join(process.cwd(), "src", "data");
    const csvPath = path.join(csvDir, "consultations.csv");

    if (!fs.existsSync(csvDir)) {
      fs.mkdirSync(csvDir, { recursive: true });
    }

    if (!fs.existsSync(csvPath)) {
      const header = "Waktu,Nama,WhatsApp/Email,Instansi/Perusahaan,Topik Layanan,Detail Pesan\n";
      fs.writeFileSync(csvPath, header, "utf-8");
    }

    const cleanName = `"${name.replace(/"/g, '""')}"`;
    const cleanContact = `"${contact.replace(/"/g, '""')}"`;
    const cleanOrg = `"${(organization || "-").replace(/"/g, '""')}"`;
    const cleanTopic = `"${topic.replace(/"/g, '""')}"`;
    const cleanMessage = `"${message.replace(/"/g, '""')}"`;

    const row = `${timestamp},${cleanName},${cleanContact},${cleanOrg},${cleanTopic},${cleanMessage}\n`;
    fs.appendFileSync(csvPath, row, "utf-8");

    // 2. Teruskan data ke Google Spreadsheet jika Webhook URL dikonfigurasi
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    let sheetSuccess = false;

    if (webhookUrl) {
      try {
        const sheetRes = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp,
            name,
            contact,
            organization: organization || "-",
            topic,
            message,
          }),
        });

        if (sheetRes.ok) {
          sheetSuccess = true;
        }
      } catch (err) {
        console.error("Gagal mengirim ke Google Sheet Webhook:", err);
      }
    }

    return NextResponse.json({
      success: true,
      sheetSuccess,
      message: "Data konsultasi berhasil diproses dan disimpan.",
      data: { timestamp, name, contact, organization, topic, message },
    });
  } catch (error) {
    console.error("Error API Consultation:", error);
    return NextResponse.json(
      { success: false, error: "Gagal memproses data konsultasi." },
      { status: 500 }
    );
  }
}
