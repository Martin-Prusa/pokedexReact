import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="w-100 pt-20 pb-5 px-20">
            <Link href={{pathname: '/'}}>
                <h1 className="text-3xl">Pokedex</h1>
            </Link>
        </div>
    )
}