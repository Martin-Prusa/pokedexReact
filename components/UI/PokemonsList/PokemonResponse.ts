export interface PokemonResponse {
    count: number
    next: string
    previous: string
    results: OnePokemon[]
}

export interface OnePokemon {
    name: string
    url: string
}