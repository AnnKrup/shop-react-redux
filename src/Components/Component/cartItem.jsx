import React from 'react';
import {setRemoveItem, setAddItem} from "../../reducers/reducers";
import {useDispatch} from "react-redux";
import classes from "./component.module.css";
import {useNavigate} from "react-router-dom";

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function removeItem(item) {
        dispatch(setRemoveItem(item));
    }

    function addItem(item) {
        dispatch(setAddItem(item));
    }

    function getItemInfo () {
        navigate(`/item/${item.id}`);
    }

    return (
        <div>
            <div className={classes.cartItem}>
                <div className={classes.cartItemWrapper}>
                    <img src={item.image} className={classes.cartItemImg}/>
                </div>
                <div className={classes.cartItemTitle}>
                    <div>{item.title}</div>
                </div>
                <div onClick={() => getItemInfo()} style={{cursor:"pointer", color:"grey"}}>Больше информации о товаре...</div>
                <div className={classes.cartItemCounterWr}>
                    <div>Количество: </div>
                    <div>
                        <div className={classes.cartItemCounter}>
                            <input
                                type="button"
                                value="-"
                                onClick={() => removeItem(item)}
                            />
                            <div>{item.quantity}</div>
                            <input
                                type="button"
                                value="+"
                                onClick={() => addItem(item)}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div>Price: {item.price}$</div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;