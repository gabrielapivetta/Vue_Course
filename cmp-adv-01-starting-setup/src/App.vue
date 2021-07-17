<template>
  <div>
    <!-- <TheHeader/> also works -->
    <the-header></the-header>
    <!--
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
     #default = v-slot:dafault and subs the template tag
    <course-goals #default="slotProps">
      <h2>{{slotProps.goalItem}}</h2>
      <p>{{slotProps['another-prop']}}</p>
    </course-goals>-->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!--<active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>
    These work as DYNAMIC COMPONENTS and can be simplified using the component tag-->
    <!-- keep alive makes sure the component isn't destroyed from the DOM when switched -->
    <keep-alive> 
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
//import BadgeList from './components/BadgeList.vue';
//import UserInfo from './components/UserInfo.vue';
//import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    //BadgeList,
    //UserInfo,
    //CourseGoals,
    ActiveGoals,
    ManageGoals
    //or 'the-header': TheHeader
    //or TheHeader: TheHeader
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};

</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>