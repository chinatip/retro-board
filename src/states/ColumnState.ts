import { atom } from "recoil";
import { CardProps } from "../components/Card";

export const cardList = atom({
    key: 'cardList',
    default: <CardProps[]>[],
});
