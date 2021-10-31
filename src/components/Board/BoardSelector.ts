import { Sortable } from '@shopify/draggable';
import { DragSensor } from '@shopify/draggable/lib/draggable.bundle.legacy';
import { BOARD_CLASSNAME, COLUMN_CLASSNAME } from '../constant';

export const BoardSelector = () => {
    const boardSelector = `.${BOARD_CLASSNAME}`;
    const boards = document.querySelectorAll(boardSelector);

    if (boards.length === 0) {
        return false;
    }

    const sortable = new Sortable(boards, {
        draggable: `.${COLUMN_CLASSNAME}`,
        mirror: {
            appendTo: boardSelector,
            constrainDimensions: true,
        },
    });

    sortable.on('drag:start', (evt) => {
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        
        // dispatch event to inner component
        evt.originalEvent.target?.dispatchEvent(event);

        console.log(evt, 'start dragging')
      });

      sortable.on('drag:over', (evt) => {
        console.log(evt, 'over')
      });

    return sortable;
};
