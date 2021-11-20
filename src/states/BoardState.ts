import { atom, atomFamily, useRecoilValue, useSetRecoilState } from "recoil";
import { ColumnProps } from '../components/Column';
import { CardProps } from './../components/Card';

export const enableEditing = atom({
    key: 'enableEditing',
    default: true,
});

export const isColumnDraggable = atom({
    key: 'isColumnDraggable',
    default: false,
});

export const hideCards = atom({
    key: 'hideCards',
    default: false,
});

export const columnList = atom<ColumnProps[]>({
    key: 'columnList',
    default: [
        { id: 0, name: 'New Column 0' },
    ],
});

export const columnCards = atom<CardProps[]>({
    key: 'columnCards',
    default: [
        { id: 0, content: 'empty card 0' }
    ],
});


// export const updateColumnByColumnId = (columnId: number, updatedColumn: ColumnProps) => {
//     const columns = useRecoilValue(columnList);
//     const colIndex = columns?.findIndex(c => c?.id == columnId);

//     if (colIndex == -1) return;

//     const updatedCols = [
//         ...columns.slice(0, colIndex -1),
//         updatedColumn,
//         ...columns.slice(colIndex + 1)
//     ];

//     const setColumns = useSetRecoilState(columnList);
//     setColumns(updatedCols);
// };

// export const updateCardsByColumnId = (columnId: number, cards: CardProps[]) => {
//     const columns = useRecoilValue(columnList);
//     const colIndex = columns?.findIndex(c => c?.id == columnId);

//     if (colIndex == -1) return;

//     const updatedCol = { ...columns[colIndex], cards };
//     const updatedCols = [
//         ...columns.slice(0, colIndex -1),
//         updatedCol,
//         ...columns.slice(colIndex + 1)
//     ];

//     const setColumns = useSetRecoilState(columnList);
//     setColumns(updatedCols);
// };
