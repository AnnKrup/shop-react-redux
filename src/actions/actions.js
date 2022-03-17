import axios from "axios";
import reducers, {setCurrentItemInfo, setItems, setCurrentItemCart, setCategories, setListItemsCategories} from "../reducers/reducers";

export const getItemsInfo = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products', {});
            dispatch(setItems(response.data));
        } catch (e) {
            console.log(e, 78);
        }
    }
}

export const getCurrentItemInfo = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/' + id, {});
            dispatch(setCurrentItemInfo(response.data));
        } catch (e) {
            console.log(e, 78);
        }
    }
}

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/categories', {});
            dispatch(setCategories(response.data));
        } catch (e) {
            console.log(e, 78);
        }
    }
}

export const getListItemsOfCategories = (category) => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/category/' + category, {});
            console.log(444, response)
            dispatch(setListItemsCategories(response.data));
        } catch (e) {
            console.log(e, 78);
        }
    }
}

