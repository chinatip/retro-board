import { useState } from 'react';
import { Button } from '@chakra-ui/button';

import { COLUMN_CLASSNAME } from '../constant';
import { Card, CardProps } from '../Card';
import { EditButton } from './EditButton';

export interface ColumnProps {
    id: number;
    name: string;
    cards: CardProps[];
}

const ColumnComponent = (props: ColumnProps) => {
    const [columnName, setcolumnName] = useState(props.name);
    const [cards, setCards] = useState<CardProps[]>([]);

    const handleAddCard = () => {
        const newCard: CardProps = {
            id: cards.length,
            content: `empty card ${cards.length}`,
        };
        const updatedCardList = cards?.concat(newCard);

        setCards(updatedCardList);
    }

    const renderContent = () => {
        const CardList = () => <>{cards.map(c => <Card {...c} />)}</>;
        const AddCardButton = () => <Button colorScheme="blue" onClick={handleAddCard}>+</Button>;

        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <AddCardButton />
                <CardList />
            </div>
      );
    };

    return (
        <div className={COLUMN_CLASSNAME} style={{ border: '1px solid blue', width: '300px', padding: '10px', margin:'20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span>{columnName}</span>
                <EditButton />
            </div>
            {renderContent()}
        </div>
    );
};

export const Column = (props: ColumnProps) => {
    return <ColumnComponent {...props} />;
};