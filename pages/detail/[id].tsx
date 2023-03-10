import {Navbar} from "@/components/UI/Navbar";
import {useRouter} from 'next/router';
import useSWR from 'swr'
import {PokeDetail, PokeDetailProps} from "@/components/UI/PokeDetail";

export default function Detail() {

    const router = useRouter();
    const {id} = router.query;

    const {data, error, isLoading} = useSWR(`https://pokeapi.co/api/v2/pokemon/${id}/`, fetcher)

    async function fetcher(endpoint: string) {
        const response = await fetch(endpoint);
        return await response.json();
    }

    const getPokemon = (): PokeDetailProps=> {
        if (!error && !isLoading) return {
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            name: data.name,
            weight: data.weight,
            height: data.height,
            stats: data.stats.map((stat: any) => {
                return {name: stat.stat.name, value: stat.base_stat}
            }),
            types: data.types.map((type: {type: {name: string}}) => type.type.name)
        }
        return {img: '', name: '', weight: 0, height: 0, types: [], stats: []};
    }

    return (
        <>
            <Navbar/>
            <main className="m-10">
                {!isLoading && !error ?
                    <PokeDetail {...getPokemon()}></PokeDetail>
                    : null}
            </main>
        </>
    )
}