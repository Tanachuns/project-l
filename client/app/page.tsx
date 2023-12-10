import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Life Management Dashboard</h1>
      <Link href={'/u'}>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Start
        </button>
      </Link>
    </>
  )
}
