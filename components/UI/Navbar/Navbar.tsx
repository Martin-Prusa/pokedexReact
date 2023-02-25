import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="w-100 bg-gray-700 py-5 pl-10">
            <Link href={{pathname: '/'}}>
                <h1 className="text-2xl text-white">Pokedex</h1>
            </Link>
        </div>
    )
}