<template>
    <div>
        <router-view/>
        <cube-tab-bar
            v-model="selectedLabelDefault"
            :data="tabs"
            @click="clickHandler"
            @change="changeHandler"
            class="botNav"
            style="background-color: #eee">
        </cube-tab-bar>
    </div>
</template>
<script>
import * as dd from "dingtalk-jsapi";
import { Icon } from 'vant'
export default {
  data () {
    return {
      selectedLabelDefault: '同事',
      tabs: [{
        label: '同事',
        icon: 'cubeic-search'
      },{
        label: '组织',
        icon: 'cubeic-message'
      },{
        label: '工作台',
        icon: 'cubeic-home'
      },{
        label: '我',
        icon: 'cubeic-person'
      }]
    };
  },
  created(){
    //  if(this.$router.currentRoute.path == '/achievementsBotNav/achievementsNew'){
    //    this.selectedLabelDefault = '同事'
    //  }
  },
  methods:{
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      // console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      switch(label){
        case '工作台':
        dd.ready(() => {
          dd.biz.navigation.close({
              onSuccess : function(result) {
                  /*result结构
                  {}
                  */
              },
              onFail : function(err) {
                console.log('关闭错误：' + err)
              }
          })
        })
        break;
        case '我':
        this.$router.push({path:'/achievementsBotNav/achievementsMy'});
        break;
        case '同事':
        this.$router.push({path:'/achievementsBotNav/achievementsNew'});
        break;
        case '组织':
        this.$router.push({path:'/achievementsBotNav/achevementsEyes'});
        break;
      }
    }
  },
}
</script>
<style lang="stylus">
    .cube-tab-bar.botNav{
        position fixed
        bottom 0
        left 0
        z-index 1000
        width 100%
        .cube-tab{
            font-size 14px
            padding-top 3px
        }
        .cube-tab_active i{
            color orange
            font-size 25px
        }
        i{
            font-size 19px
            color #ccc
        }
    }
</style>