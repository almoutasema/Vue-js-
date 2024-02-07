<template>
    <div>
        <button @click="showUsers">Show users for me</button>
        <div v-if="showUserList">
            <h2>List of users</h2>
            <ul>
                <li v-for="(user, index) in users" :key="index">
                    {{ user.lastname }} - {{ user.email }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showUserList: false,
            users: [
                { lastname: "Ali", email: "ali@example.com" },
                { lastname: "Boo", email: "boo@example.com" },
                { lastname: "Chas", email: "chas@example.com" },
            ],
        };
    },
    methods: {
        showUsers() {
            this.showUserList = true;
        },
    },
};
</script>
