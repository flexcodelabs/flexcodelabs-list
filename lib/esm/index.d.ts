import { FC, ReactNode } from 'react';
interface ListProps {
    items: (string | itemObject)[];
}
interface itemObject {
    item: string;
    child: ReactNode;
}
declare const List: FC<ListProps>;
export default List;
