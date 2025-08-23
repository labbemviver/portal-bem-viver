import MapEmbed from "@/components/MapEmbeded";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8">
      {/* Título */}
      <h1 className="text-4xl font-bold mb-6">
        Laboratório Digital do Bem Viver
      </h1>

      {/* Menu */}
      <nav className="flex gap-6 mb-10">
        <a href="/olabbemviver" className="text-blue-600 hover:underline">
          O Lab Bem Viver
        </a>
        <a href="#projetos" className="text-blue-600 hover:underline">
          Nossos projetos
        </a>
      </nav>

      {/* Mapa via iframe */}
      <MapEmbed />
    </main>
  );
}
