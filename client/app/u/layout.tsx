'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  return (
    <>
      <div className=" w-full h-screen bg-gray-100">
        <nav className="flex items-center justify-between bg-white px-4 py-2 shadow-md">
          <Link className="font-bold text-xl text-gray-800" href={'/u'}>
            My App
          </Link>
          <div>
            <p>Welcome: {session?.user?.name}</p>
            <button
              onClick={() => {
                signOut()
              }}
            >
              Logout
            </button>
          </div>
        </nav>
        <div className="flex">
          <div
            id="sidebar"
            className="w-2/12 h-screen bg-gray-800 text-white shadow-md"
          >
            <ul className="flex flex-col items-center py-4">
              <li className="m-3">
                <Link
                  href={'./character'}
                  className="text-xl font-bold py-2 px-4  hover:bg-gray-700"
                >
                  character
                </Link>
              </li>
              <li className="m-3">
                <Link
                  href={'./explore'}
                  className="text-xl font-bold py-2 px-4 hover:bg-gray-700"
                >
                  explore
                </Link>
              </li>
              <li className="m-3">
                <Link
                  href={'./inventory'}
                  className="text-xl font-bold py-2 px-4 hover:bg-gray-700"
                >
                  inventory
                </Link>
              </li>
              <li className="m-3">
                <Link
                  href={'./quest'}
                  className="text-xl font-bold py-2 px-4 hover:bg-gray-700"
                >
                  quests
                </Link>
              </li>
              <li className="m-3">
                <Link
                  href={'./skill'}
                  className="text-xl font-bold py-2 px-4 hover:bg-gray-700"
                >
                  skill
                </Link>
              </li>
            </ul>
          </div>
          <div className=" bg-gray-200 w-10/12 p-10">{children}</div>
        </div>
        <footer className=" h-1/6 flex items-center justify-center bg-black text-white">
          Test
        </footer>
      </div>
    </>
  )
}
