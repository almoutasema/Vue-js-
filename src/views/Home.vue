<template>
    <div>
        <div>
            <p>my app Version:{{ 8 + 7 }}</p>

            <div>
                <ul>
                    <li v-for="(item, index) in items" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>

            <a :href="url">click here</a>

            <button @click="clickme">click me</button>
            <p v-if="showElement">hidden or visible item!</p>

            <p>Welcome to My {{ app }}</p>
            <p>This is the {{ homepage }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: ["web", " Net", " EE6"],
            url: "https://www.w3schools.com/vue/index.php",
            app: "vite app",
            homepage: "Main Page",
            showElement: true,
        };
    },
    methods: {
        clickme() {
            this.showElement = !this.showElement;
        },
    },
};
</script>
