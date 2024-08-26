import Link from "next/link";


export default function Menu() {
      return (
        <nav className="bg-white shadow-md">
          <div className="mx-auto px-4 py-4 flex justify-center items-center">
            <div className="flex space-x-4">
              <Link href="/">
              home
              </Link>
              <Link href="/bio">
              bio
              </Link>
              <Link href="/bb">
              bb
              </Link>
            </div>
          </div>
        </nav>
      );
    
}
