<template>
    <div>
        <input
            type="text"
            v-model="inputValue"
            placeholder="Write something here"
        />
        <p>You wrote here: {{ inputValue }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: "",
        };
    },
};
</script>
