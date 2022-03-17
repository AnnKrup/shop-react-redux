import React from 'react';
import classes from "../../index.module.css";
import MainBtn from "./main-btn";
import {useNavigate} from "react-router-dom";

const MainItem = ({item}) => {
    const navigate = useNavigate();

    const btnAddToCart  = 'Добавить в корзину';
    const btnMoreInfo  = 'Больше инормации';

    function getItemInfo () {
        navigate(`/item/${item.id}`);
    }

    function addToCard () {
        navigate(`/cart/${item.id}`);
    }

    return (
        <div className={classes.itemContainer}>
            <div className={classes.itemWrapper}>
                <img src={item.image} className={classes.itemImg}/>
            </div>
            <br/>
            <div className={classes.itemPrice}>Price: {item.price}$</div>
            <br/>
            <div>{item.title}</div>
            <br/>
            <div className={classes.itemBody}>{item.body}</div>
            <br/>
            <div className={classes.itemBtn}>
                <MainBtn btn={btnMoreInfo} goToLink={getItemInfo}/>
                <MainBtn btn={btnAddToCart} goToLink={addToCard}/>
            </div>
        </div>
    );
};

export default MainItem;