import React from "react";
import classes from "../../index.module.css";
import {getItemsInfo, getListItemsOfCategories} from "../../actions/actions";
import {useDispatch} from "react-redux";

const MainCategories = ({categories}) => {
    const dispatch = useDispatch();

    function renderListItemsCategory(category) {
        dispatch(getListItemsOfCategories(category));
    }

    function getAllGoods() {
        dispatch(getItemsInfo())
    }

    return (
        <div className={classes.categories}>
            <div className={classes.categoriesTitle}>Categories:</div>
            <div className={classes.categoryWrap}>
                {categories.map( (category, index) => <div
                                                      className={classes.category}
                                                      key={index+category}
                                                      onClick={() => renderListItemsCategory(category)}>
                                                      {category}
                                                       </div>
                )}
            </div>
            <div className={classes.allGoods} onClick={() => getAllGoods()}>ALL GOODS</div>
        </div>
    );
};
export default MainCategories;