"use client";

export default function MapEmbed() {
  return (
    <div className="w-full mt-6">
      <iframe
        src="https://labbemviver.github.io/mapa-digital-interativo-bem-viver/"
        className="w-full h-[800px] rounded-lg shadow"
        title="Mapa Digital do Bem Viver"
        frameBorder="0"
        loading="lazy"
      />
    </div>
  );
}
