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

    // 1. Simpan sementara ke file CSV lokal (data/consultations.csv)
    const csvDir = path.join(process.cwd(), "src", "data");
    const csvPath = path.join(csvDir, "consultations.csv");

    if (!fs.existsSync(csvDir)) {
      fs.mkdirSync(csvDir, { recursive: true });
    }

    // Jika file belum ada, buat header tabel
    if (!fs.existsSync(csvPath)) {
      const header = "Waktu,Nama,WhatsApp/Email,Instansi/Perusahaan,Topik Layanan,Detail Pesan\n";
      fs.writeFileSync(csvPath, header, "utf-8");
    }

    // Format baris CSV (escape quote)
    const cleanName = `"${name.replace(/"/g, '""')}"`;
    const cleanContact = `"${contact.replace(/"/g, '""')}"`;
    const cleanOrg = `"${(organization || "-").replace(/"/g, '""')}"`;
    const cleanTopic = `"${topic.replace(/"/g, '""')}"`;
    const cleanMessage = `"${message.replace(/"/g, '""')}"`;

    const row = `${timestamp},${cleanName},${cleanContact},${cleanOrg},${cleanTopic},${cleanMessage}\n`;
    fs.appendFileSync(csvPath, row, "utf-8");

    // 2. Jika ada Webhook Google Sheet (opsional via ENV)
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
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
      } catch (err) {
        console.error("Gagal mengirim ke Google Sheet Webhook:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Data konsultasi berhasil disimpan ke spreadsheet tabel.",
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

// Endpoint GET untuk mengunduh atau melihat file tabel CSV
export async function GET() {
  try {
    const csvPath = path.join(process.cwd(), "src", "data", "consultations.csv");
    if (!fs.existsSync(csvPath)) {
      return new NextResponse("Waktu,Nama,WhatsApp/Email,Instansi/Perusahaan,Topik Layanan,Detail Pesan\n", {
        headers: { "Content-Type": "text/csv; charset=utf-8" },
      });
    }
    const content = fs.readFileSync(csvPath, "utf-8");
    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'inline; filename="consultations.csv"',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Gagal membaca file data." }, { status: 500 });
  }
}
