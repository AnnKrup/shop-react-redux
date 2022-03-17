const SET_ITEMS = 'SET_ITEMS';
const SET_CURRENT_ITEM_INFO = 'SET_CURRENT_ITEM_INFO';
const SET_CART = 'SET_CART';
const SET_REMOVE_ITEM = 'SET_REMOVE_ITEM';
const SET_ADD_ITEM = 'SET_ADD_ITEM';
const SET_INPUT = 'SET_INPUT';
const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_CLEAN_BASKET = 'SET_CLEAN_BASKET';
const SET_LIST_ITEMS_CATEGORY = 'SET_LIST_ITEMS_CATEGORY';

const defaultState = {
    items: [],
    currentItemInfo: {},
    cart: [],
    categories: [],
};

export default function reducers (state = defaultState, action) {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload,
            }
        case SET_CURRENT_ITEM_INFO:
            return {
                ...state,
                currentItemInfo: action.payload,
            }
        case SET_CART:
            let arrCart;
            const elem = state.cart.find(el => el.id === action.payload.id);

            if (elem != undefined) {
                arrCart = state.cart.map(function (good) {
                if (good.id == action.payload.id) {
                        good.quantity +=1;
                }
                return good;
            })
            } else if (action.payload) {
                action.payload.quantity = 1;
                arrCart= [...state.cart, action.payload];
            } else {
                arrCart = [];
            }
            return {
                ...state,
                cart: [...arrCart],
            }
        case SET_REMOVE_ITEM:
            let arr;

           if(action.payload.quantity == 1) {
               arr = state.cart.filter(function (item) {
                   return item.id != action.payload.id;
               });
           } else {
               arr = state.cart.map(function (item) {
                   if (item.id == action.payload.id && item.quantity != 1) {
                       item.quantity -= 1;
                   }
                   return item;
               })
           }
            return {
                ...state,
                cart: [...arr]
            }
        case SET_ADD_ITEM:
            const newArr = state.cart.map(function (item) {
                if (item.id == action.payload.id) {
                    item.quantity += 1;
                }
                return item;
            })
            return {
                ...state,
                cart: [...newArr]
            }
        case SET_CLEAN_BASKET:
            return {
                ...state,
                cart: []
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case SET_LIST_ITEMS_CATEGORY:
            console.log(action.payload)
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }

};

export const setItems = (items) => ({type: SET_ITEMS, payload: items});
export const setCurrentItemInfo = (currentItem) => ({type: SET_CURRENT_ITEM_INFO, payload: currentItem});
export const setCart = (cart) => ({type: SET_CART, payload: cart});
export const setRemoveItem = (item) => ({type: SET_REMOVE_ITEM, payload: item});
export const setAddItem = (item) => ({type: SET_ADD_ITEM, payload: item});
export const setInput = (item) => ({type: SET_INPUT, payload: item});
export const setCleanBasket = () => ({type: SET_CLEAN_BASKET});
export const setCategories = (categories) => ({type: SET_CATEGORIES, payload: categories});
export const setListItemsCategories = (list) => ({type: SET_LIST_ITEMS_CATEGORY, payload: list});