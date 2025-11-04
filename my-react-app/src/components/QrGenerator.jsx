import { QRCodeCanvas } from "qrcode.react";

export default function QrGenerator() {
  const url = "http://172.16.16.179:5173/#/play";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">QR-код</h1>
      <QRCodeCanvas value={url} size={200} />
    </div>
  );
}