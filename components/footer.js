import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="fixed bottom-0 inset-x-0 bg-gray-800 w-screen flex">
      <Link href="/home"><a className="w-full block py-4 text-center text-yellow-200">Home</a></Link>
      <Link href="/"><a className="w-full block py-4 text-center text-yellow-200">Harga</a></Link>
      <Link href="/promo"><a className="w-full block py-4 text-center text-yellow-200">Promo</a></Link>
    </footer>
  );
}
