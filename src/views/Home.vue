<template>
  <div>
    <van-search v-model="input" placeholder="Please input your keywords" />

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="Nothing More"
      @load="onLoad"
    >
      <van-cell v-for="(item, index) in computedHeroList" :key="index">
        <div class="left">
          <img :src="item.img" alt="" />
        </div>
        <div class="right">
          <h3>Name: {{ item.name }}</h3>
          <span>Gender: {{ item.gender }}</span>
          <p>Homeworld: {{ item.home }}</p>
        </div>
        <div class="like">
          <button :class="item.liked ? 'red' : ''" @click="handleClick(item)">
            <font-awesome-icon icon="fa-solid  fa-heart" />
          </button>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import http from "@/util/http";
export default {
  data() {
    return {
      input: "",
      loading: false,
      finished: false,
    };
  },
  computed: {
    computedHeroList() {
      if (this.input == null) return this.$store.state.heroList;
      return this.$store.state.heroList.filter(
        (item) =>
          item.name.includes(this.input) || item.gender.includes(this.input)
      );
    },
  },
  methods: {
    async onLoad() {
      if (
        this.$store.state.heroList.length === this.$store.state.total &&
        this.$store.state.heroList.length != 0
      ) {
        this.finished = true;
        return;
      }

      this.$store.state.current++;

      const { data: res } = await http.get(
        `people/?page=${this.$store.state.current}`
      );
      res.results.forEach((item) => {
        item.liked = false;
        http.get(`${item.homeworld}`).then((res) => {
          item.home = res.data.name;
        });
        item.img = `https://starwars-visualguide.com/assets/img/characters/${
          this.$store.state.imgIndex + 1
        }.jpg`;
        this.$store.state.imgIndex++;
      });
      this.$store.state.heroList = [
        ...this.$store.state.heroList,
        ...res.results,
      ];
      this.loading = false;
    },

    handleClick(item) {
      if (this.$store.state.likeList.includes(item)) {
        var num = this.$store.state.likeList.indexOf(item);
        this.$store.state.likeList.splice(num, 1);
        item.liked = !item.liked;
        window.localStorage.setItem(
          "favourite",
          JSON.stringify(this.$store.state.likeList)
        );
        return;
      }
      this.$store.state.likeList.push(item);
      item.liked = !item.liked;
      window.localStorage.setItem(
        "favourite",
        JSON.stringify(this.$store.state.likeList)
      );
    },
  },
  async mounted() {
    if (this.$store.state.heroList.length === 0) {
      const { data: res } = await http.get("people");
      res.results.forEach((item) => {
        item.liked = false;
        http.get(`${item.homeworld}`).then((res) => {
          item.home = res.data.name;
        });
        item.img = `https://starwars-visualguide.com/assets/img/characters/${this.$store.state.imgIndex}.jpg`;
        this.$store.state.imgIndex++;
      });
      this.$store.commit("setHeroList", res.results);
      this.$store.commit("getTotal", res.count);
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  border: 0;
}
.van-list {
  list-style: none;
  margin-bottom: 60px;
}
.van-cell {
  padding: 15px;
}
img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.van-cell__value {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.like {
  margin-right: 10px;
}
.red {
  color: red;
}
</style>