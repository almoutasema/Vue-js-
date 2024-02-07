<template>
    <div>
        <item-detail :itemDetail="selectedItem" />
    </div>
</template>

<script>
import ItemDetail from "@/components/ItemDetailComponent.vue";

export default {
    data() {
        return {
            selectedItem: null,
        };
    },
    components: {
        ItemDetail,
    },
    created() {
        const dummyData = [
            {
                id: 1,
                name: "Dummy Item 1",
                description:
                    "It is a long established fact that a reader will be distracted by the.",
            },
            {
                id: 2,
                name: "Dummy Item 2",
                description:
                    "It is a long established fact that a reader will be distracted by the.",
            },
        ];

        this.selectedItem = dummyData[0];
    },
};
</script>
