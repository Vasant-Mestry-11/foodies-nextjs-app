import LogoImg from '@/assets/logo.png'
import Link from "next/link";

export default function MainHeader() {

  return <header>

    {/* logo */}
    <Link href="/">
      <img src={LogoImg.src} alt='logo' />
      NextLevel Food
    </Link>

    {/* navigation */}
    <nav>
      <ul>
        <li><Link href="/meals">Browse Meals</Link></li>
        <li><Link href="/community">Foodie Community</Link></li>
      </ul>
    </nav>
  </header>
}