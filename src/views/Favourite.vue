<template>
  <div>
    <van-search v-model="input" placeholder="Please input your keywords" />

    <van-list>
      <van-cell v-for="(item, index) in computedHeroList" :key="index">
        <div class="left">
          <img :src="item.img" alt="" />
        </div>
        <div class="right">
          <h3>Name: {{ item.name }}</h3>
          <span>Gender: {{ item.gender }}</span>
          <p>Homeworld: {{ item.home }}</p>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      favouriteList: [],
    };
  },
  computed: {
    computedHeroList() {
      if (this.input == null) return this.favouriteList;
      return this.favouriteList.filter(
        (item) =>
          item.name.includes(this.input) || item.gender.includes(this.input)
      );
    },
  },
  methods: {},
  async created() {
    this.favouriteList = JSON.parse(window.localStorage.getItem("favourite"));
    console.log(this.favouriteList);
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
</style>