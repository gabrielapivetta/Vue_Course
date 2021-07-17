<template>
  <header>
    <h1>More on Vue Components</h1>
  </header>
</template>

<!-- the scoped tag tells vue that the css in here only affects this component,
otherwise it would be considered global -->
<style scoped>
  header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #14005e;
  }

  header h1 {
    color: white;
    margin: 0;
  }
</style>