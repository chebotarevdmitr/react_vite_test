import "./App.css";

export function Header() {
  return (
    <header>
      <h1>Título principal de Dmitry.</h1>
      <p>
        ¿Por qué la gente va en moto? ¿Quizás lo disfrutan? Y no les da miedo
        chocar.
      </p>
      <button>¿Mudarse a algún lugar?</button>
    </header>
  );
}
export default function App() {
  return (
    <div>
      <Header />
      <main>
        En el bosque azul oscuro donde los álamos anhelan bajo el frío martillo,
        se levanta la sombra de alguien, las liebres cortan la hierba en el
        claro y cantan una canción más rápido por miedo.
      </main>
    </div>
  );
}
