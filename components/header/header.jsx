import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/assets/logo.png";
import styles from "./header.module.css";
import HeaderBackground from "@/components/header/header-background";
import NavLink from "@/components/header/NavLink";

const Header = () => {
    return (
        <>
            <HeaderBackground />
            <header className={styles.header}>
                <Link href={"/"} className={styles.logo}>
                    <Image src={LogoImage} alt={"A plate with food on it"} priority/>
                    NextLevel Food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href={"/meals"}>Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/community"}>Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;