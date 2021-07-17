<template>
    <ul>
        <!-- scoped slots work for  -->
        <li v-for="goal in goals" :key="goal">
            <slot :goalItem="goal" another-prop="..."></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Finish the course', 'Learn Vue']
        };       
    },
};
</script>
