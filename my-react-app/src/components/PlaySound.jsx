import { useEffect } from "react";

export default function PlaySound() {
  useEffect(() => {
    const audio = new Audio("/QR-APP.mp3");
    audio.play().catch((e) => {
      console.log("Автозапуск заблокирован — пользователь должен нажать play:", e);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Добро пожаловать!
      </h1>
      <p className="text-gray-700 mb-2">
        Если не слышно — нажми «Play» ниже 
      </p>
      <audio src="/QR-APP.mp3" controls autoPlay className="mt-2" />
    </div>
  );
}