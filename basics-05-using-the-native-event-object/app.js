const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullName: ''
    };
  },
  // watch can execute functions with the same name of a data or computed property and will re execute whenever the property is changed.
  // use for non data updates
  watch: {
    //value refers data 'name', newValue and oldValue can also be used
    counter(value) {
      if(value > 50){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        }, 2000);
      }
    }
    /*name(value) {
      if(value === ''){
        this.fullName = ''
      }else {
        this.fullName = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if(value === ''){
        this.fullName = ''
      }else {
        this.fullName = this.name + ' ' + value;
      }
    }*/
  },
  //computed properties work as methods but will only be re-executed if one of its dependencies change
  //the computed prop. should be named as data
  //only binds data
  //use for data that depends on data
  computed: {
    fullName() {
      // subs the method outputFullName()
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + this.lastName; 
    }
  },
  // events and data can only be bound to methods
  // methods are executed every re-render cycle
  methods: {
    outputFullName() {
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Pivetta'; 
    },
    setName(event, lastName) {
      this.name = event.target.value ;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      //document.querySelector('input').value = '';   <- Vanilla JS
    }
  }
});

app.mount('#events');
