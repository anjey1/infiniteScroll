<template>
  <div :class="['carditem', '' + index]">
    <div class="carditem__image">
      <img :src="pathBase + 'Rating :' + beer.rating.average.toFixed(2)" />
    </div>
    <div class="carditem__info">
      <strong class="carditem__title">
        {{ beer.name}} {{ beer.price }}
      </strong>
      <span>Avg Rating : {{ beer.rating.average.toFixed(2)}}</span>
      <span>Reviews : {{ beer.rating.reviews }}</span>
    </div>
  </div>
</template>
<script>
//import { mapGetters, mapActions } from "vuex";
export default {
  name: "CardItem",

  props: {
    beer: {
      type: Object,    
    },
    index: Number,
    showPage: {
      type: Boolean,
      default: false,
    },
    beersArray: Array,
  },
  data() {
    return {
      pathBase:
        "https://via.placeholder.com/300?text="
    };
  },

  mounted() {
    this.index;
  },
};
</script>
