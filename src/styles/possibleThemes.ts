interface IPossibleTheme {
    title: string;
    id:number;
}

const possibleThemes: IPossibleTheme[] = [
    { title: "Planicie (padrão/light)", id: 1},
    { title: "Pântano (dark)", id:2},
    { title: "Montanha", id:3 },
    { title: "Floresta", id: 4},
    { title: "Ilha", id: 5}
]

export { possibleThemes, IPossibleTheme }