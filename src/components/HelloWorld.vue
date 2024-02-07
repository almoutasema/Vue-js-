<template>
    <div>
        <h2>Item Detail</h2>
        <p>{{ itemDetail.name }}</p>
    </div>
</template>

<script>
export default {
    props: ["itemDetail"],
};
</script>
