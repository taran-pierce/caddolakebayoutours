import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about/">About</Link>
          <Link href="/directions/">Directions</Link>
          <Link href="/things-to-do/">Things to Do</Link>
          <Link href="/photo-gallery/">Photo Gallery</Link>
          <Link href="/contact/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
