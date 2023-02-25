import {PokeCardProps} from "@/components/UI/PokeCard/pokeCardProps";
import Link from "next/link";

export const PokeCard = ({name, image, id}: PokeCardProps) => {
    return (
        <div className="m-5">
            <Link href={{ pathname: 'detail', query: { id }}}>
                <div className="w-64 border-gray-300 border p-3">
                    <img src={image} alt={name}/>
                    <h5 className="text-xl text-center capitalize">{name}</h5>
                </div>
            </Link>
        </div>
    )
}