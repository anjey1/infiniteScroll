<template>
  <div class="infscroll__container">
    <div id="infinite-list" class="infscroll__items">
      <transition name="fade">
        <div class="infscroll__loader-bg" v-show="showLoading">
          <div class="infscroll__loader">{{ textLoading }}</div>
        </div>
      </transition>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfiniteScroll",
  props: {
    showLoading: {
      type: Boolean,
      default: false,
    },
    textLoading: {
      type: String,
      default: "Loading ...",
    },
    beersArray: Array,
  },

  data() {
    return {
      isMobile: false,
      clientHeight: 0,
      lastScrollTop: 0,
    };
  },

  mounted() {
    const listElm = document.querySelector("#infinite-list");
    listElm.addEventListener('scroll', this.handleScroll);

    listElm.addEventListener("scroll", (e) => {
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
          this.loadMore();
        }
    });
  },

  methods: {
    loadMore() {
      this.$emit("loadMore");
    },
  },
};
</script>
