
<!--
PROPS are used to pass information down from a parent to a child component.
Props should be defined in advance in the child component which will receive them. 
(it can be just an array or specified with types)

CUSTOM EVENTS are used to pass info from child to parent
A component can emit a custom event with the '$emit' method to let the parent component know something or
to trigger a method or code in a parent component 
They can also carry data, like from an input field

!!! To talk to a sibling component, they have to talk to the parent and exchange data there !!!

PROVIDE-INJECT are used if data needs to be passed across multiple components ("pass-through")
It allows to provide data in a parent component and inject into any child component no matter how deeply nested it is...
...without passing the data through multiple levels of components
!!! only use if really needed !!!
-->

<template>
  <div>
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <knowledge-base></knowledge-base>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
            'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
            'Components are a core concept for building Vue UIs and apps',
          fullText:
            'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: null,
    };
  },
  //props and custom events should be used instead of provide and inject as a default communication mechanism
  //they're only better when there are pass through components and can save unnecessary code, but makes it harder to understand
  provide() {
    return {
       //refers to the topics in data()
      topics: this.topics,
      selectTopic: this.activateTopic
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
  mounted() {
    setTimeout(() => {
      this.topics.push({
        id: 'events',
        title: 'Events',
        description: 'Events are important in Vue',
        fullText: 'Events allow you to trigger code on demand!',
      });
    }, 3000);
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>