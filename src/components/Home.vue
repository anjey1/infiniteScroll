<template>
  <div class="container">
    <div class="column center">
      <InfiniteScroll :showLoading="loading" @loadMore="loadMore()" @loadOld="loadOld()" :beersArray=beers>
        <div class="row between">
          <CardItem
            v-for="(beer, index) in beers"
            :beer="beer"
            :key="index"
            :index="parseInt(index + 1)"
            :beersArray= beers
          />
        </div>
      </InfiniteScroll>
    </div>
     <div class="column center">
      <h1>
        Beers List Size 
      </h1>
      <div class="beer-count">
        <span>{{ beers.length }} </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
import CardItem from "@/components/CardItem";
import InfiniteScroll from "@/components/InfiniteScroll";

export default {
  name: "Home",
  components: {
    CardItem,
    InfiniteScroll,
  },

  data() {
    return {
      loading: false,
      items: [],
      pages: [],
      pageArea: "",
      isMobile: false,
      limitScrollItems: 1300,
    };
  },

  static: {
    limitScrollItems: 1300,
  },

  async created() {
    await this.getBeersList();
  },

  mounted() {
    this.beers;
  },

  methods: {
    ...mapActions(["getBeersList"]),

    loadMore() {
      const listItems = document.querySelector("#infinite-list");
      let heightToTop = listItems.scrollTop;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        setTimeout((e) => {
          listItems.scrollTo(0, heightToTop);
        }, 1200);
      }

      this.loading = true;
      setTimeout((e) => {
        let splicedBeers = this.beers.slice(0, this.limitScrollItems)
        const card = splicedBeers.map((item) => {
          this.beers.push(item);
        });
        this.loading = false;
      }, 800);
    },
  },

  computed: {
    ...mapState(["beerList"]),
    ...mapGetters(["gtrBeers"]),

    beers() {
      const card = this.gtrBeers.map((item) => {
        return item;
      });
      return card;
    },
  },
};
</script>
