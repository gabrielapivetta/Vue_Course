const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [] 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx,1);
    }
  }
});

app.mount('#user-goals');


//pure JS example:

if(true){
  //...
}else{
  //...
}

for(const goal of goals){
  //...
}
