import useSWR from 'swr'
import {useState} from "react";
import {PokeCard, PokeCardProps} from "@/components/UI/PokeCard";
import {OnePokemon} from "@/components/UI/PokemonsList/PokemonResponse";

export const PokemonsList = () => {

    const baseUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'

    const [url, setUrl] = useState(baseUrl)

    const { data, error, isLoading } = useSWR(url, fetcher)

    async function fetcher(endpoint: string) {
        const response = await fetch(endpoint);
        return await response.json();
    }

    const getPokemons = (): PokeCardProps[] => {
        if(!error && !isLoading) return data.results
            .map((pokemon: OnePokemon) => {
                const i = parseInt(pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', ''))
                return {
                    name: pokemon.name,
                    id: i,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`
                }
            })
        return []
    }

    const canNext = () => !error && !isLoading && data.next
    const canPrev = () => !error && !isLoading && data.previous

    const next = () => {
        if(canNext()) setUrl(data.next)
    }

    const prev = () => {
        if(canPrev()) setUrl(data.previous)
    }

    return (
        <div>
            <div className="flex flex-wrap justify-center">
                {!error && !isLoading ?
                    getPokemons()
                        .map((pokemon: PokeCardProps) => <PokeCard name={pokemon.name} image={pokemon.image} id={pokemon.id} key={pokemon.name} />)
                    : null
                }

            </div>
            <div className="flex justify-center">
                <button onClick={prev} disabled={!canPrev()} type="button"
                        className="mx-5 inline-flex items-center rounded-md border border-transparent bg-[#FEF2A4] disabled:bg-[#fffbdb] px-4 py-2 text-base font-medium  shadow-sm hover:bg-[#ffef8a] focus:outline-none focus:ring-2 focus:ring-[#FEF2A4] focus:ring-offset-2">
                    Prev
                </button>
                <button onClick={next} disabled={!canNext()} type="button"
                        className="mx-5 inline-flex items-center rounded-md border border-transparent bg-[#FEF2A4] disabled:bg-[#fffbdb] px-4 py-2 text-base font-medium  shadow-sm hover:bg-[#ffef8a] focus:outline-none focus:ring-2 focus:ring-[#FEF2A4] focus:ring-offset-2">
                    Next
                </button>
            </div>
            <div className="flex justify-center my-5">
                <button onClick={() => setUrl(baseUrl)} type="button"
                        className="mx-5 inline-flex items-center rounded-md border border-transparent bg-[#FEF2A4] disabled:bg-[#fffbdb] px-4 py-2 text-base font-medium  shadow-sm hover:bg-[#ffef8a] focus:outline-none focus:ring-2 focus:ring-[#FEF2A4] focus:ring-offset-2">
                    First Page
                </button>
            </div>
        </div>

    )
}