export const metadata = {
  title: "Nossos Projetos - Lab Bem Viver",
};

type Projeto = {
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
  creditos: string;
};

const projetos: Projeto[] = [
  {
    titulo: "Lorem ipsum dolor sit amet 1",
    subtitulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagem: "/images/400x250.png",
    creditos: "Desenvolvido por Maria e João",
  },
  {
    titulo: "Lorem ipsum dolor sit amet 2",
    subtitulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagem: "/images/400x250.png",
    creditos: "Autores: Equipe Jovens Criadores",
  },
    {
    titulo: "Lorem ipsum dolor sit amet 3",
    subtitulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagem: "/images/400x250.png",
    creditos: "Autores: Equipe Jovens Criadores",
  },
];

export default function ProjetosPage() {
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover p-8"
      style={{
        backgroundImage: "url('/images/bg-projetos.jpg')",
      }}
    >
      {/* Título central com fundo semi-transparente */}
      <div className="flex justify-center mb-10">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg bg-black/50 px-6 py-3 rounded-lg">
          Nossos Projetos
        </h1>
      </div>

      {/* Grid centralizada */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-center">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg bg-black/70 text-white flex flex-col"
          >
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1">
              <h2 className="text-2xl font-semibold">{projeto.titulo}</h2>
              <h3 className="text-lg opacity-80">{projeto.subtitulo}</h3>
              <p className="mt-2 text-sm leading-relaxed">
                {projeto.descricao}
              </p>
            </div>
            {/* Créditos / Autores */}
            <div className="px-4 py-2 border-t border-white/20 text-xs opacity-80">
              {projeto.creditos}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
