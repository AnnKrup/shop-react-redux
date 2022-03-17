import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {setCart, setCleanBasket} from "../../reducers/reducers";
import CartItem from "./cartItem";
import MainBtn from "../Main-components/main-btn";
import classes from "./component.module.css";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const items = useSelector(state => state.reducers.items);
    const cart = useSelector(state => state.reducers.cart);
    const btnContinueShopping = 'Вернуться к покупкам';
    const btnPlaceAnOrder = 'Оформить заказ';
    let totalPrice = 0;

    cart.forEach((item) => {
        return totalPrice += item.price * item.quantity;
    });

    useEffect(() => {
        if (params.id) {
            const currentItem = items.find(function (item) {
                    return item.id == params.id;
                }
            )
            dispatch(setCart(currentItem));
        }}, [])

    function goToItemsList () {
        navigate(`/`);
    }

    function goToLink () {
        dispatch(setCleanBasket());
        navigate(`/modal`);
    }

    return (
        <div>
            {cart.length ?
                <div>
                    <div className={classes.btnContinueShopping}>
                        <MainBtn btn={btnContinueShopping} goToLink={goToItemsList}/>
                        <br/>
                    </div>
                    <div>
                        {cart.map(item => <CartItem key={item.id} item={item}/>
                        )}
                    </div>
                    <br/>
                    <div className={classes.totalPrice}>
                        <div>Total price: {totalPrice}$</div>
                        <br/>
                        <MainBtn btn={btnPlaceAnOrder} goToLink={goToLink}/>
                    </div>
                </div>
                : <div>
                     <div>Cart is empty!</div>
                    <br/>
                    <MainBtn btn={btnContinueShopping} goToLink={goToItemsList}/>
                </div>}
            <br/>
        </div>
    );
};

export default Cart;