import Image from "next/image";
import logo from "../../public/images/INTech.png";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="page">
      <Header/>
      <main>
        <div>
          <h1>Bienvenue sur le site d&apos;INTech, l&apos;association de robotique de Télécom SudParis et de L&apos;Institut Mines-Télécom Business School</h1>
        </div>
      </main>
      <footer>
        <p>Photos : Club déclic</p>
      </footer>

    </div>
  );
}
