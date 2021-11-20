import { Sortable } from '@shopify/draggable';
import { DragSensor, SortableSortedEvent } from '@shopify/draggable/lib/draggable.bundle.legacy';
import { BOARD_CHILD, BOARD_CLASSNAME, CARD_CLASSNAME } from '../components/constant';

export const updateDraggableColumns = () => SortableSelector(BOARD_CLASSNAME, BOARD_CHILD);
export const updateDraggableCards = (parentClassName: string) => SortableSelector(parentClassName, CARD_CLASSNAME);

export const SortableSelector = (parentClassName: string, childClassName: string) => {
    const parent = `.${parentClassName}`;
    const parents = document.querySelectorAll(`.${parentClassName}`);

    if (parents.length === 0) {
        return false;
    }

    const sortable = new Sortable(parents, {
        draggable: `.${childClassName}`,
        mirror: {
            appendTo: parent,
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

        //console.log(evt, 'start dragging')
    });

    sortable.on('drag:over', (evt) => {
        //console.log(evt, 'over')
    });

    //sortable.on('sortable:sorted', (evt: SortableSortedEvent) => console.log(childClassName, evt.oldIndex, evt.newIndex))

    return sortable;
};
