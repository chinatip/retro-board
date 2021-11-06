import { useState } from 'react';
import { Button } from '@chakra-ui/button';

import { COLUMN_CLASSNAME } from '../constant';
import { Card, CardProps } from '../Card';
import { EditButton } from './EditButton';

export interface ColumnProps {
    id: number;
    name: string;
}

const ColumnComponent = (props: ColumnProps) => {
    const [columnName, setcolumnName] = useState(props.name);
    const [cards, setCards] = useState<CardProps[]>([]);

    const getDefaultCard = (): CardProps => ({ content: 'empty card' });

    function handleAppendCard(): void {
        const updatedCardList = cards.concat(getDefaultCard());
        setCards(updatedCardList);
    }

    const renderCards = () => cards.map(c => <Card content="card"/>);

    function renderContent(): JSX.Element {
        const renderCards = () => cards.map(c => <Card content="card"/>);
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Button colorScheme="green" onClick={handleAppendCard}>+</Button>
                {renderCards()}
            </div>
      );
    };

    return (
        <div className={COLUMN_CLASSNAME} style={{ border: '1px solid blue', width: '300px', height: '80%', padding: '10px', margin:'20px' }}>
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