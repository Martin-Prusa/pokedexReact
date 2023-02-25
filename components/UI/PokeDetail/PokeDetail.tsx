import {PokeDetailProps} from "@/components/UI/PokeDetail/pokeDetailProps";

export const PokeDetail = ({img, name, types, weight, height, stats}: PokeDetailProps) => {
    return (
        <div className="flex flex-col items-center w-full max-w-[544px] h-[640px] border-[6px] border-[#FEF2A4] bg-white border-gray-300 border p-3">
            <div className="w-52 pb-10 mx-auto mt-[30px] ">
                <img src={img} alt={name}/>
            </div>
            <h2 className="text-center capitalize text-3xl">{name}</h2>
            <div className="flex mt-3">
                {types.map((type: string) => <div className="p-3 bg-[#92CEAC] text-[#18794E] mx-3 rounded-2xl" key={type}>{type}</div>)}
            </div>
            <div className="mx-auto max-w-7xl">
                <div className="my-5 text-center text-xl">Stats</div>
                <div>
                    <ul className="list-disc text-sm">
                        <li className='flex justify-between w-full' ><div>Weight:</div> <div>{weight}</div></li>
                        <li className='flex justify-between w-full'><div>Height:</div> <div>{height}</div></li>
                        {stats.map((stat: {name: string, value: number}) => <li className='flex justify-between w-full' key={stat.name}><div>{stat.name}:</div> <div>{stat.value}</div></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}