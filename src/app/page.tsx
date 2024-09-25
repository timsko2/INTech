import Image from "next/image";
import logo from "../../public/images/INTech.png";

export default function Home() {
  return (
    <div className="page">
      <header>
        <div className="header-sup">
          <Image src={logo} alt="Logo d'Intech" height={50}/>
        </div>
        <div className="header-inf">
          <div><h1>Collision</h1></div>
          <div><h1>Coupe de France de robotique</h1></div>
        </div>
      </header>
      <main>
        <h1>Bienvenue sur le site d'Intech</h1>
        <p>Intech est l'association de Robotique de Télécom SudParis et de L'Institut Mines-Télécom Business School</p>
      </main>
      <footer>
        <h1>Mentions légales</h1>
      </footer>

    </div>
  );
}
