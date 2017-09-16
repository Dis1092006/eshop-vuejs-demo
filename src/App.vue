<template>
    <v-app>
        <v-navigation-drawer temporary v-model="drawer">
            <v-list>
                <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>{{ item.title }}</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar class="primary">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">
                    <v-avatar size="36px">
                        <img src="/static/v.png" alt="Логотип">
                    </v-avatar>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
                    <v-icon left dark>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <main>
            <router-view></router-view>
        </main>
        <v-footer>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                menuItems: [
                    { icon: 'dvr', title: 'Товары', link: '/goods' },
                    { icon: 'shopping_cart', title: 'Корзина', link: '/basket' },
                    { icon: 'library_books', title: 'Заказы', link: '/orders' },
                    { icon: 'person', title: 'Profile', link: '/profile' },
                    { icon: 'lock_open', title: 'Sign in', link: '/signin' },
                ],
            };
        },
    };
</script>

<style lang="stylus">
    @import './stylus/main'
</style>
