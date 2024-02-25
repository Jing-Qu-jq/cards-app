import { useMemo, useState } from 'react'
import orderBy from 'lodash/orderBy'

export const orders = {
    Ascending: 'asc',
    Descending: 'desc',
}

export function useSort(list, initialSortKey) {
    const [sortKey, setSortKey] = useState(initialSortKey);
    const [sortOrder, setSortOrder] = useState('Ascending');

    const sortedList = useMemo(() => {
        return orderBy(list, [sortKey], [orders[sortOrder]])
    }, [list, sortKey, sortOrder]);

    return [sortedList, { sortKey, setSortKey, sortOrder, setSortOrder }];
}

export default useSort;
