import { atom } from "recoil";

export const colorsAtom = atom({
    key: 'colors',
    default: [
        'red', 
        'blue', 
        'green', 
        'black', 
        'darkgoldenrod', 
        'orange', 
        'purple', 
        'pink', 
        'cyan'
    ]
});

export const textAtom = atom({
    key: 'text',
    default: ''
});

export const activeColorAtom = atom({
    key: 'activeColor',
    default: 'black'
});