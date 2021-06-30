const app = Vue.createApp({
    //data is an object (reserved) that receives a function which ALWAYS returns an object.
    data(){
        return {
            //interpolation
            courseGoalA: 'Finish the course!',
            courseGoalB: 'Learn Vue!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                // the data from the data object can be accessed using this.
                return this.courseGoalA;
            }else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal'); //id of the section controlled by Vue