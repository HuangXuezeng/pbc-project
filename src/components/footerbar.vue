<template>
  <div>
      <router-view />
      <van-tabbar 
      v-model="active" 
      active-color="#07c160" 
      inactive-color="#000"
      @change="onChange">
        <van-tabbar-item icon="home-o" to="achievementsIndex">PBC</van-tabbar-item>
        <van-tabbar-item icon="search" to="achievementsAbout">关于</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "footerbar",
  data () {
    return {
        active: 0,
    };
  },
  created(){},
  methods:{
    onChange(index) {
      let that = this
        console.log('你切换到了'+index)
    }
  }
}
</script>
<style lang="stylus">
</style>