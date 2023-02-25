import {PokeDetailProps} from "@/components/UI/PokeDetail/pokeDetailProps";

export const PokeDetail = ({img, name, types, weight, height, description}: PokeDetailProps) => {
    return (
        <div>
            <h2 className="text-center capitalize text-3xl">{name}</h2>
            <div className="w-72 rounded-full p-10 mx-auto mt-10 border">
                <img src={img} alt={name}/>
            </div>
            <div className="mx-auto max-w-7xl">
                <div>
                    <ul className="list-disc">
                        <li >Weight: {weight}</li>
                        <li >Height: {height}</li>
                        <li >
                            Types:
                            <ul className="list-disc ml-10">
                                {types.map((type: string) => <li className="py-1" key={type}>{type}</li>)}
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h3 className="text-2xl mb-2">Popis</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}