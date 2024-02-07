<template>
    <div>
        <p v-if="isLoggedIn">Welcome user!</p>
        <button @click="toggleLogin">
            Logga {{ isLoggedIn ? "ut" : "in" }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: false,
        };
    },
    methods: {
        toggleLogin() {
            this.isLoggedIn = !this.isLoggedIn;
        },
    },
};
</script>
