import classes from "./component.module.css";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentItemInfo} from "../../actions/actions";
import {useNavigate, useParams} from "react-router-dom";
import MainBtn from "../Main-components/main-btn";


const Item = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const currentItemInfo = useSelector(state => state.reducers.currentItemInfo);
    const btn = 'Добавить в корзину';
    const btn1 = 'Вернуться к покупкам';

    useEffect(() => {
        dispatch(getCurrentItemInfo(params.id));
    }, [])

    function goToItemsList () {
        navigate(`/`);
    }

    function goToCart () {
        navigate(`/cart/${currentItemInfo.id}`);
    }

    return (
        <div>
            <div className={classes.itemBtn}>
                <MainBtn btn={btn1} goToLink={goToItemsList}></MainBtn>
            </div>
            <div className={classes.item}>
                <div className={classes.itemContainer}>
                    <img src={currentItemInfo.image} className={classes.cartItemImg}/>
                </div>
                <div className={classes.itemTitle}>
                    <strong>
                        <div>{currentItemInfo.title}</div>
                    </strong>
                    <br/>
                    <div>Категория на сайте: {currentItemInfo.category}</div>
                    <br/>
                    <div>{currentItemInfo.description}</div>
                    <br/>
                    <div className={classes.itemPrice}>
                        <div>Цена: {currentItemInfo.price}$</div>
                        <br/>
                        <MainBtn btn={btn} goToLink={goToCart}></MainBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;