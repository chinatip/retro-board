import { atom } from "recoil";
import { ColumnProps } from './../components/Column/Column';

export const enableEditing = atom({
    key: 'enableEditing',
    default: true,
});

export const hideCards = atom({
    key: 'hideCards',
    default: false,
});

export const columnList = atom<ColumnProps[]>({
    key: 'columnList',
    default: [
        { id: 0, name: 'New Column 0' }
    ],
});

