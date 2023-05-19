import Image from 'next/image'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <>
    <p>HELLO WORLD</p>
    <Link href={'/index'}>BUTTON</Link>
    </>
  )
}
