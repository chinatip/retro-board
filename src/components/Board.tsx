import { Sortable } from '@shopify/draggable';

export const Container = () => {
    return (
        <div className="container" style={{ width: '400px', height: '800px', border: '1px solid red', display: 'flex', flexDirection: 'column' }}>
          <div className="item" style={{ border: '1px solid blue', width: '50px', height: '50px', padding: '10px' }}>
            A
          </div>
          <div className="item" style={{ border: '1px solid green', width: '50px', height: '50px', padding: '10px' }}>
            B
          </div>
          <div className="item" style={{ border: '1px solid grey', width: '50px', height: '50px', padding: '10px' }}>
            C
          </div>
      </div>
    )
};

export const SimpleList = () => {
    const containerSelector = '.container';
    const containers = document.querySelectorAll(containerSelector);

    if (containers.length === 0) {
        return false;
    }

    const sortable = new Sortable(containers, {
        draggable: '.item',
        mirror: {
            appendTo: containerSelector,
            constrainDimensions: true,
        },
    });

    return sortable;
};