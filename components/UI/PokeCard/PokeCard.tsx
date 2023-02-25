import {PokeCardProps} from "@/components/UI/PokeCard/pokeCardProps";
import Link from "next/link";

export const PokeCard = ({name, image, id}: PokeCardProps) => {
    return (
        <div className="m-5">
            <Link href={{ pathname: 'detail', query: { id }}}>
                <div className="flex flex-col justify-center items-center w-[315px] h-[271px] border-[6px] border-[#FEF2A4] bg-white border-gray-300 border p-3">
                    <img className="object-cover w-[176px] h-[176px]" width='176px' height='176px' src={image} alt={name}/>
                    <h5 className="text-xl text-center capitalize">{name}</h5>
                </div>
            </Link>
        </div>
    )
}