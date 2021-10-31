import { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/react';

import { COLUMN_CLASSNAME } from '../constant';
import { Modal } from '../Modal/Modal';
import { Card, CardProps } from '../Card';

const ColumnComponent = () => {
    const [columnName, setcolumnName] = useState('Column');
    const [cards, setCards] = useState<CardProps[]>([]);

    const getDefaultCard = (): CardProps => ({ content: 'empty card' });

    function handlePrependCard(): void {
      const updatedCardList = [getDefaultCard()].concat(cards);
      setCards(updatedCardList);
    };

    function handleAppendCard(): void {
      const updatedCardList = cards.concat(getDefaultCard());
      setCards(updatedCardList);
    }

    function renderHeader(): JSX.Element {
      const EditButton = () => {
        const disclosureProps = useDisclosure();
        const footer = (
          <>
            <Button colorScheme="blue" mr={3} onClick={disclosureProps.onClose}>
                Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </>
        );
      
        return <Modal buttonText="..." modalTitle={'Edit column name'} body={undefined} footer={footer} disclosureProps={disclosureProps} />;
      };

      return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span>{columnName}</span>
          <EditButton />
        </div>
      );
    };

    const renderCards = () => cards.map(c => <Card content="card"/>);

    function renderContent(): JSX.Element {
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button onClick={handlePrependCard}>+</Button>
          {renderCards()}
          <Button onClick={handleAppendCard}>+</Button>
        </div>
      );
    };

    return (
        <div className={COLUMN_CLASSNAME} style={{ border: '1px solid blue', width: '300px', height: '80%', padding: '10px', margin:'20px' }}>
            {renderHeader()}
            {renderContent()}
        </div>
    );
};

export const Column = () => {
    return <ColumnComponent />;
};