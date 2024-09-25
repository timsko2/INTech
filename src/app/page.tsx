import Image from "next/image";
import logo from "../../public/images/INTech.png";

export default function Home() {
  return (
    <div className="page">
      <header>
          <Image src={logo} alt="Logo d'Intech" height={50}/>
          <button>Collision</button>
          <button>Coupe de France de robotique</button>
      </header>
      <main>
        <div>
          <h1>Bienvenue sur le site d&apos;INTech, l&apos;association de robotique de Télécom SudParis et de L&apos;Institut Mines-Télécom Business School</h1>
        </div>
      </main>
      <footer>
        <button>Mentions légales</button>
        <button>Qui sommes nous ?</button>
        <button>Nous contacter</button>
      </footer>

    </div>
  );
}
