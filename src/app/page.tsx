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
        <h1>Bienvenue sur le site d'Intech</h1>
        <p>Intech est l'association de Robotique de Télécom SudParis et de L'Institut Mines-Télécom Business School</p>
      </main>
      <footer>
        <button>Mentions légales</button>
        <button>Qui sommes nous ?</button>
        <button>Nous contacter</button>
      </footer>

    </div>
  );
}
