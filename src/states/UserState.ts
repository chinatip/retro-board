import { atom } from "recoil";

export const theme = atom({
    key: 'theme',
    default: 'white',
});

export const voteLimit = atom({
    key: 'voteLimit',
    default: 3,
});

export const voteCount = atom({
    key: 'voteCount',
    default: 0,
});
