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
