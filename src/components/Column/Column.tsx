import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/button';

import { BOARD_CHILD, BOARD_CLASSNAME, COLUMN_CLASSNAME } from '../constant';
import { Card, CardProps } from '../Card';
import { EditButton } from './EditButton';
import { cardList } from './../../states/ColumnState';
import { useSetRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { isColumnDraggable } from '../../states/BoardState';
import { updateDraggableCards } from '../Utils/Draggable';

export interface ColumnProps {
    id: number;
    name: string;
}

interface ComponentProps {
    cards: CardProps[];
    setCards: (cards: CardProps[]) => void;
}

type Props = ColumnProps & ComponentProps

const ColumnComponent = (props: Props) => {
    const { cards, setCards } = props;
    const [columnName, setcolumnName] = useState(props.name);
    const movable = useRecoilValue(isColumnDraggable);

    const handleAddCard = () => {
        const newCard: CardProps = {
            id: cards.length,
            content: `empty card ${cards.length}`,
        };
        const updatedCardList = cards?.concat(newCard);

        setCards(updatedCardList);
    };

    const renderContent = () => {
        const CardList = () => <>{cards.map(c => <Card {...c} />)}</>;
        const AddCardButton = () => <Button colorScheme="blue" onClick={handleAddCard}>+</Button>;

        return (
            <div className={`${COLUMN_CLASSNAME}_${props.id}`} style={{ display: 'flex', flexDirection: 'column' }}>
                <AddCardButton />
                <CardList />
            </div>
      );
    };

    return (
        <div className={`${movable ? BOARD_CHILD : ''}`} style={{ display: 'flex', flexDirection: 'column', border: '1px solid blue', width: '300px', padding: '10px', margin:'20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span>{columnName}</span>
                <br/><br/><br/>

                <EditButton />
            </div>
            {renderContent()}
        </div>
    );
};

export const Column = (props: ColumnProps) => {
    const cards = useRecoilValue(cardList);
    const setCards = useSetRecoilState(cardList);

    useEffect(() => {
        updateDraggableCards(`${COLUMN_CLASSNAME}_${props.id}`);
    }, cards);
    
    return <ColumnComponent cards={cards} setCards={setCards} {...props} />;
};