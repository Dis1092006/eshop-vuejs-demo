import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Goods from '@/components/goods/Goods';
import Basket from '@/components/basket/Basket';
import Orders from '@/components/orders/Orders';
import Profile from '@/components/user/Profile';
import Signin from '@/components/user/Signin';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/goods',
            name: 'Товары',
            component: Goods,
        },
        {
            path: '/basket',
            name: 'Корзина',
            component: Basket,
        },
        {
            path: '/orders',
            name: 'Заказы',
            component: Orders,
        },
        {
            path: '/profile',
            name: 'Пользователь',
            component: Profile,
        },
        {
            path: '/signin',
            name: 'Signin',
            component: Signin,
        },
    ],
});
