import Products from "../Components/products";
import About from "../Components/Navbar-components/about";
import Cart from "../Components/Component/cart";
import Item from "../Components/Component/item";
import Modal from "../Components/Component/modal";

export const privetRoutes = [
    { path: '/about', component: <About/>, exact: true },
    { path: '/', component: <Products/>, exact: true },
    { path: '/cart', component: <Cart/>, exact: true },
    { path: '/cart/:id', component: <Cart/>, exact: true },
    { path: '/item/:id', component: <Item/>, exact: true },
    { path: '/modal', component: <Modal/>, exact: true },
];