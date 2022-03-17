import React from 'react';
import MainItem from "./main-item";
import classes from "../.././index.module.css";

const MainItemList = ({currentItems}) => {
    return (
        <div>
            { currentItems.length == 0 ?
                <div>По Вашему запросу ничего не найдено!</div>
               : <div className={classes.itemsList}>
                    {currentItems.map(item => <MainItem key={item.id} item={item}/>)}
                </div>
            }
        </div>
    );
};

export default MainItemList;