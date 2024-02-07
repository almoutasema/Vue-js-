<template>
    <div>
        <h2>Item List</h2>
        <ul>
            <li v-for="item in items" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["items"],
};
</script>
