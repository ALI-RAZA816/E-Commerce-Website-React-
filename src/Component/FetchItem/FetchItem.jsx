import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchActions } from '../../Store/fetchItem';
import { HomeActions } from '../../Store/HomeItems';
export default function FetchItem() {

    const intialFetch = useSelector(store => store.intialFetch);
    const dispatch = useDispatch();

    useEffect(() => {

        if(intialFetch.fetchDone) return;
        const controller = new AbortController();
        const signal = controller.signal;
        dispatch(fetchActions.fetchStart());
        fetch("http://localhost:8080/items",{signal})
        .then((res) => res.json())
        .then(({ items }) => {
            dispatch(fetchActions.initialFetch());
            dispatch(HomeActions.addInitialItems(items));
            dispatch(fetchActions.fetchEnd());
        });
        return () => {
            controller.abort();
        }
    }, [intialFetch]);

    return (
        <></>
    )
}
