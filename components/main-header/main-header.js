"use client";
import LogoImg from '@/assets/logo.png'
import Link from "next/link";
import classes from './main-header.module.css'
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import NavLinks from './nav-links';

export default function MainHeader() {

  return <>
    <MainHeaderBackground />
    <header className={classes.header}>

      {/* logo */}
      <Link href="/" className={classes.logo}>
        <Image src={LogoImg} alt='logo' priority />
        NextLevel Food
      </Link>

      {/* navigation */}
      <nav className={classes.nav}>
        <ul>
          <li><NavLinks href="/meals">Browse Meals</NavLinks></li>
          <li><NavLinks href="/community">Foodie Community</NavLinks></li>
        </ul>
      </nav>
    </header>
  </>
}