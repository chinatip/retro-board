import { BoardSelector } from './BoardSelector';
import { Column, ColumnProps } from './../Column/Column';
import { BOARD_CLASSNAME } from './../constant';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { columnList } from './../../states/BoardState';
import { Button } from '@chakra-ui/button';

const BoardComponent = () => {
    const [name, setName] = useState('BoardName');
    const columns = useRecoilValue(columnList);
    const setColumns = useSetRecoilState(columnList);

    const renderBoardHeader = () => {
        return (
            <div className="Board__Header" style={{ width: '100%', height: '100%', padding: '40px', textAlign: 'center' }}>
                <h1>{name}</h1>
                {renderBoardContent()}
            </div>
        )
    };

    const renderBoardContent = () => {
        const handleAddColumn = () => {
            const newCol: ColumnProps = {
                id: columns.length,
                name: `New Column ${columns.length}`
            };
    
            setColumns(columns.concat(newCol));
        };
        
        const AddColumnButton = () => <Button colorScheme="blue" onClick={handleAddColumn}>+</Button>;
        const ColumnList = () => <>{columns.map(cardProps => <Column {...cardProps} /> )}</>;

        return (
            <div className={BOARD_CLASSNAME} style={{ display: 'flex', flexDirection: 'row' }}>
                <ColumnList />
                <AddColumnButton />
            </div>
        )
    };

    return (
        <div className="Board__Container" style={{ width: '100%', height: '100%', background: '#bdbbbb', display: 'flex', flexDirection: 'column', padding: '40px' }}>
            <h1>{name}</h1>
            {renderBoardContent()}
        </div>
    );
};

export const Board = () => {
    useEffect(() => {
        BoardSelector();
    });

  return <BoardComponent />
}