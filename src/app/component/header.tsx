import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 py-4">
    <div className="container mx-auto px-4">
      <nav className="flex items-center justify-between">
        <div>
          <Link href="/" className='text-white text-lg font-semibold'>
            Home
          </Link>
        </div>
        <div>
          <Link href="/blogs" className='text-white text-lg font-semibold ml-4'>
            Blogs
          </Link>
          <Link href="/yogaschools" className='text-white text-lg font-semibold ml-4'>
            Yoga Schools
          </Link>
          <Link href="/iternary" className='text-white text-lg font-semibold ml-4'>
            Iternary
          </Link>
        </div>
      </nav>
    </div>
  </header>
  )
}
