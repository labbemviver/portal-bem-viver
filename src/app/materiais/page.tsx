export default function Materiais() {
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Materiais de aprendizado</h1>

      <p className="mb-6">
        A cada encontro, exploramos temas diferentes da computação e
        desenvolvimento de tecnologias digitais. Neste documento estão
        recomendações de materiais online e gratuitos para aprofundarmos os
        estudos. É só clicar nos links abaixo. Caso tenha alguma dúvida das
        utilizações, pode levar nos encontros.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Pensamento computacional</h2>
        <ul className="list-disc ml-6">
          <li>
            <a href="https://blockly.games/?lang=pt-br" target="_blank">
              Blocky (jogo para aprender pensamento computacional)
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Trabalhando com dados</h2>
        <ul className="list-disc ml-6">
          <li>
            <a
              href="https://www.coursera.org/professional-certificates/google-data-analytics/"
              target="_blank"
            >
              Curso gratuito do Google
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLxjKFMYkZ9OciqkeAGy7w9Rc3CoO80MpK"
              target="_blank"
            >
              Playlist Excel e Planilhas - Hashtag Treinamentos
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Programação</h2>
        <ul className="list-disc ml-6">
          <li>
            <a href="https://solyd.com.br/cursos/python-basico/" target="_blank">
              Curso gratuito de Python
            </a>
          </li>
          <li>
            <a href="https://roadmap.sh/" target="_blank">
              A trilha do programador (em inglês)
            </a>
          </li>
          <li>
            <a href="https://javascript.info/" target="_blank">
              Material para aprender Javascript (em inglês)
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/presentation/d/1hMf6YbI2f_n4knIDngmY3R9aVNI9v3ieeqcfvNbFfKA/edit?usp=drive_link"
              target="_blank"
            >
              Oficina básica de programação do Lab Bem Viver
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Design</h2>
        <ul className="list-disc ml-6">
          <li>
            <a
              href="https://www.udemy.com/course/curso-de-figma-em-portugues-gratis/"
              target="_blank"
            >
              Curso de Figma
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Estudos de Tecnologia</h2>
        <ul className="list-disc ml-6">
          <li>
            <a href="https://newschoolapp.framer.ai/" target="_blank">
              New School - aplicativo com cursos
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
