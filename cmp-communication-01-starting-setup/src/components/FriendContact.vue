<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorites</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {//here the props are written without dash, but in the html it needs dashes, ex: phone-number.
    //the props can be called in the template with this. in front
    //props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
    props: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      emailAddress: {
        type: String,
        required: true,
      },
      isFavorite: {
        type: Boolean,
        required: false,
        default: false, //can also be a function
        //validator: function(value) {
        //  return value === '1' || value === '0';
        //}
      }
    },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      //this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit('toggle-favorite', this.id); //this allows to send data changed by an event back to the data base.
    }
  }
};
</script>