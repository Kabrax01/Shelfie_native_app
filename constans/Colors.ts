export const Colors: ColorsTypes = {
    primary: "#6849a7",
    warning: "#cc475a",

    dark: {
        text: "#d4d4d4",
        title: "#fff",
        background: "#252231",
        navBackground: "#201e2b",
        iconColor: "#9591a5",
        iconColorFocused: "#fff",
        uiBackground: "#2f2b3d",
    },
    light: {
        text: "#625f72",
        title: "#201e2b",
        background: "#e0dfe8",
        navBackground: "#e8e7ef",
        iconColor: "#686477",
        iconColorFocused: "#201e2b",
        uiBackground: "#d6d5e1",
    },
};

interface ThemeColors {
    text: string;
    title: string;
    background: string;
    navBackground: string;
    iconColor: string;
    iconColorFocused: string;
    uiBackground: string;
}

interface ColorsTypes {
    primary: string;
    warning: string;
    dark: ThemeColors;
    light: ThemeColors;
}
