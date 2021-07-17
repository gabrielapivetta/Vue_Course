<template>
    <div>
        <!-- slots allow us to reuse wrapper content with a certain style
        they work similar to props but for html and css instead of data 
        if there are more than one slot, they can be named, only one can be unamed and it will be the default --> 
        <header v-if="$slots.header">
            <slot name="header"></slot>
        </header>
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$slots.header);
    }
}
</script>



<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>