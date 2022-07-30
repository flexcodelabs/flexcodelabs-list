import React from 'react';
var List = function (_a) {
    var items = _a.items;
    return (React.createElement("ul", { style: { listStyle: 'none' } }, items.map(function (item, index) {
        if (typeof item === 'object') {
            if (index === 0) {
                return (React.createElement("h3", { key: index },
                    item.item,
                    " ",
                    item.child));
            }
            else {
                return (React.createElement("li", { key: index },
                    item.item,
                    " ",
                    item.child));
            }
        }
        else {
            if (index === 0) {
                return React.createElement("h3", { key: index }, item);
            }
            else {
                return React.createElement("li", { key: index }, item);
            }
        }
    })));
};
export default List;
