import { BoardSelector } from './BoardSelector';
import { Column } from './../Column/Column';
import { BOARD_CLASSNAME } from './../constant';
import { useEffect } from 'react';

const BoardComponent = () => {
    return (
        <div className={BOARD_CLASSNAME} style={{ width: '100%', height: '100%', background: 'grey', display: 'flex', flexDirection: 'row' }}>
          <Column />
          <Column />
          <Column />
      </div>
    )
};

export const Board = () => {
  useEffect(() => {
    BoardSelector();
  });

  return <BoardComponent />
}