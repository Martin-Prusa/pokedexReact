export interface PokeDetailProps {
    img: string
    name: string
    types: string[]
    weight: number
    height: number
    stats: {name: string, value: number}[]
}