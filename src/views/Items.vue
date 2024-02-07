<template>
    <div>
        <item-list :items="items" />
    </div>
</template>

<script>
import ItemList from "@/components/ItemListComponent.vue";
import data from "../data.json";

export default {
    data() {
        return {
            items: data,
        };
    },
    components: {
        ItemList,
    },
};
</script>
