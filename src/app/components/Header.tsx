"use client";
import Image from "next/image";
import logo from "../../../public/images/INTech.png";
import { FC } from 'react';
import styles from './Header.module.scss';
import './Header.module.scss';
import { useState } from 'react';

const Header:FC = () => {
    const [menuOpen, setMenuOpen] = useState(false); //État du menu
    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState); // Fonction permettant d'alterner l'état du menu
    };
    return (
        <header className={styles.header}>
        <Image className="styles.image-logo" src={logo} alt="Logo d'Intech" height={50} />
        <div className={styles.buttonContainer}>
            <button>Collision</button>
            <button>Coupe de France de robotique</button>
            <button>Mentions légales</button>
            <button>Qui sommes nous ?</button>
            <button>Nous contacter</button>
        </div>
        <button className={styles.menuButton} onClick={toggleMenu}>
                Menu
        </button>
        {menuOpen && (
                <div className={styles.dropdownMenu}>
                    <button onClick={toggleMenu}>Collision</button>
                    <button onClick={toggleMenu}>Coupe de France de robotique</button>
                    <button onClick={toggleMenu}>Mentions légales</button>
                    <button onClick={toggleMenu}>Qui sommes nous ?</button>
                    <button onClick={toggleMenu}>Nous contacter</button>
                </div>
            )}
    </header>
    );
};
export default Header;