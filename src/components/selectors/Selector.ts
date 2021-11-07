import { Sortable } from '@shopify/draggable';
import { DragSensor, SortableSortedEvent } from '@shopify/draggable/lib/draggable.bundle.legacy';
import { BOARD_CLASSNAME, COLUMN_CLASSNAME } from '../constant';

interface SelectorProps {
    parentClassName: string;
    childClassName: string;

}

export const Selector = (props: SelectorProps) => {
    if (!props) return null;

    const { parentClassName, childClassName } = props;

    const selector = `.${parentClassName}`;
    const selectors = document.querySelectorAll(selector);

    if (selectors.length === 0) {
        return false;
    }

    const sortable = new Sortable(selectors, {
        draggable: `.${childClassName}`,
        mirror: {
            appendTo: selector,
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

    sortable.on('sortable:sorted', (evt: SortableSortedEvent) => console.log(childClassName, evt.oldIndex, evt.newIndex))

    return sortable;
};
