import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Items from "@/views/Items.vue";
import ItemDetail from "@/views/ItemDetail.vue";
import test from "@/views/v-model.vue";
import test2 from "@/views/showUsers.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/items", component: Items },
    { path: "/items/:id", component: ItemDetail, props: true },
    {
        path: "/test",
        name: "test",
        component: test,
    },

    {
        path: "/test2",
        name: "test2",
        component: test2,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
