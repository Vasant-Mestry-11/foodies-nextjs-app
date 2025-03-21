import LogoImg from '@/assets/logo.png'
import Link from "next/link";
import classes from './main-header.module.css'
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';

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
          <li><Link href="/meals">Browse Meals</Link></li>
          <li><Link href="/community">Foodie Community</Link></li>
        </ul>
      </nav>
    </header>
  </>
}