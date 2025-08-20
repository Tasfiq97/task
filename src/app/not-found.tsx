import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000] text-[#fff]">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Not Found</h2>
        <p className="mb-4">Could not find requested resource</p>
        <Link 
          href="/" 
          className="text-[#00E7F9] hover:text-[#FC004E] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 