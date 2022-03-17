import React, {useEffect, useState} from 'react';
import {getCategories, getItemsInfo, getListItemsOfCategories} from "../actions/actions";
import {useDispatch, useSelector} from "react-redux";
import MainItemList from "./Main-components/main-item-list";
import MainSearch from "./Main-components/main-search";
import classes from "../index.module.css";
import MainCategories from "./Main-components/main-categories";

const Products = () => {
    const dispatch = useDispatch();
    const currentItems = useSelector(state => state.reducers.items);
    const categories = useSelector(state => state.reducers.categories);
    const [items, setItems] = useState(currentItems);

    useEffect(() => {
        setItems(currentItems)
    }, [currentItems]);

    function findItem (value) {
        const arr = currentItems.filter(function (item) {
            return item.title.includes(value);
        })

        setItems(arr);
    }

    useEffect(() => {
        dispatch(getItemsInfo());
        dispatch(getCategories());
    }, [])

    return (
        <div>
        {currentItems.length ?
        <div>
            <MainSearch onChange={findItem}/>
            <div className={classes.container}>
                <MainCategories categories={categories}/>
                <MainItemList currentItems={items}/>
            </div>
        </div>
            : <div className={classes.loader}></div> }
        </div>
    );
};

export default Products;