<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toogleDetails">{‌{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>  
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: "manuel",
                name: "Manuel Silva",
                phone: "123-456-45678",
                email: "manuel@silva.com"
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
};
</script>