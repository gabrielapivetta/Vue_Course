const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
      //this.counter++;
    },
    reduce(num) {
      this.counter = this.counter - num;
      //this.counter--;
    },
    setName(event) {
      this.name = event.target.value;
    },
    confirmInput() {
      this.confirmedName = this.confirmedName;
    }
  }
});

app.mount('#events');
