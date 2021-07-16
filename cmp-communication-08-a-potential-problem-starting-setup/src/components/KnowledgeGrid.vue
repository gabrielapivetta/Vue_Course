<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {//works like props but with the provided data given by 'provide'
  //only data provided by a parent component can be injected
  inject: ['topics'], 
};
</script>