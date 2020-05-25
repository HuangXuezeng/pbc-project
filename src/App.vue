<template>
  <div id="app">
    <!-- 头部部分 -->
    <!-- <van-sticky>
      <mt-header title="顾家PBC">
        <router-link to="/" slot="left">
          <mt-button  @click="back" style="z-index:999 ;" icon='back'>返回</mt-button>
        </router-link>
      </mt-header>
    </van-sticky> -->
  <!-- 内容部分 -->
 <!-- <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
  </keep-alive> -->
<!-- 底部部分 -->

    <div class="container">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
    </div>
    <!-- <m-tab></m-tab> -->
  </div>
</template>

<script>
import MTab from "@/components/m-tab";
import { setDDConfig } from "@/api/dd";
import { mapMutations } from "vuex";
import fetch from "@/api/fetch";
import * as dd from "dingtalk-jsapi";
import { Sticky } from 'vant'
export default {
  name: "app",
  created() {
    // debugger
    // 获取用户 id
    setDDConfig().then(res => {
      var that = this;
      let data = res;
      var is_mobi =
        navigator.userAgent
          .toLowerCase()
          .match(
            /(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i
          ) != null;
          // debugger
          console.log(is_mobi);
          
      if (!is_mobi) {
        // PC
        console.log("pc");
        DingTalkPC.ready(() => {
          DingTalkPC.runtime.permission.requestAuthCode({
            corpId: data.corpId, //企业ID
            onSuccess: function(result) {
              // let url ="/pbcTom/visitor/pbc/getUserV2.htm?accessToken=" +data.token +"&code=" +result.code;
              let url ="/pbcTom/visitor/pbc/getUserV2.htm?code=" +result.code;
              fetch({
                url: url,
                method: "get"
              }).then(res => {
                // console.log(res);
                localStorage.setItem('a0188',res.data.a0188)
                that.save_userId(res.data.userId);
                that.save_userName(res.data.name);
                thst.save_corpId(res.data.corpId);
                thst.save_agentid (res.data.agentid)
              });
            },
            onFail: function(err) {
              window.location.reload();
            }
          });
        });
      } else {
        // 移动
        // debugger
        console.log("mobile");
            dd.ready(() => {
            dd.ui.webViewBounce.disable()
            dd.runtime.permission.requestAuthCode({
              corpId: data.corpId,
              onSuccess: function(result) {
                let url = "/pbcTom/visitor/pbc/getUserV2.htm?code=" + result.code;
                fetch({
                  url: url,
                  method: "get"
                }).then(res => {
                  console.log(res);
                  // if(res.data.a0188 == ''){}
                  localStorage.setItem('a0188',res.data.a0188)
                  localStorage.setItem('a0190',res.data.jobNumber)
                  localStorage.setItem('a0101',res.data.name)
                  localStorage.setItem('avatar',res.data.avatar)
                });
              },
              onFail: function(err) {
                window.location.reload();
              }
            });
          });
      }
    });
  },
  methods: {
    ...mapMutations({
      save_userId: "save_userId",
      save_userName:'save_userName',
      save_corpId:'save_corpId',
      save_agentid:'save_agentid'
    }),
    back(){
      this.$router.go(-1);//返回上一层
    }
  },
  components: {
    MTab
  }
};
</script>

<style>
html,body{
  height: 100vh;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}
#app {
  width: 100%;
  /* height: 100vh; */
  height: 100vh;
  /* max-width: 400px; */
  margin: 0 auto;
  box-sizing: border-box;
  /* overflow: hidden; */
  overflow-y: auto;
  position: relative;
}
.container {
  /* margin-top: 40px; */
  background-color: #fff;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
* {
  -webkit-overflow-scrolling: touch;
}
.mint-header{
  padding-top: 10vh;
  padding-bottom: 4vh;
  background-color: #FF3334;
  color: #fff
  
}


</style>
