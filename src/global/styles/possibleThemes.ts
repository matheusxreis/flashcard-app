interface IPossibleTheme {
    title: string;
    id:number;
}

const possibleThemes: IPossibleTheme[] = [
    { title: "preferences.theme.light", id: 1},
    { title: "preferences.theme.dark", id:2},
    { title: "preferences.theme.mountain", id:3 },
    { title: "preferences.theme.florest", id: 4},
    { title: "preferences.theme.island", id: 5}
]

export { possibleThemes, IPossibleTheme }