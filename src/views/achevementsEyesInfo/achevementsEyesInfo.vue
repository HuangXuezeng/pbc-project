<template>
    <div>
        <!-- <mt-header title="其他关系人">
            <router-link to="/" slot="left">
            <mt-button icon="back" style="color:#fff"></mt-button>
            </router-link>
        </mt-header> -->
          <div class="sidebox">
            <div class="footers" v-for="(item) in departList" :key="item.deptId">
                <a @click="passInfo(item)">
                    <div class="aprtment">
                        <span class="departments">{{item.content}}</span><i class="cubeic-arrow"></i>
                        <!-- <span class="postCount">PBC数：<i class="istyle">{{item.departCounts}}</i></span> -->
                    </div>
                </a>
            </div>
            <div class="footers" v-for="(item) in personList" :key="item.a01102">
                <a @click="passIn(item)">
                    <div class="aprtmentss">
                      <span><img class="touxiang" :src="item.potoURL" alt=""></span>
                      <span class="departmentss">{{item.a0101}}</span><i class="cubeic-arrow"></i>
                        <!-- <span class="postCount">PBC数：<i class="istyle">{{item.departCounts}}</i></span> -->
                    </div>
                </a>
            </div>
          </div>
    </div>
</template>
<script>
import { getPerson } from './api'
export default {
  data () {
    return {
      personList: [],
      departList: [],
    };
  },
  created(){
      this.getPersonList()
  },
  methods:{
    //获取关系人信息
    getPersonList(){
      let queryData= {}
      queryData.deptCode = localStorage.getItem('depCode')
      getPerson(queryData).then(res=>{
        let itemList = []
        if(res.data.a01s == ''){
          this.personList = res.data.a01s
        }else{
          for(let i in res.data.a01s){
            let item = {}
            item.a0101 = res.data.a01s[i].a0101
            item.a0188 = res.data.a01s[i].a0188
            if(res.data.a01s[i].potoURL == undefined || res.data.a01s[i].potoURL == ''){
              item.potoURL = require('@/assets/timg.jpg')
            }else{
              item.potoURL = res.data.a01s[i].potoURL
            }
            itemList.push(item)
          }
          this.personList = itemList
        }
        // console.log(this.personList)
        this.departList = res.data.b01s
      })
    },
    //点击行
    passInfo(item){
      // console.log(item);
      localStorage.setItem('depCode1',item.deptCode)
      this.$router.push({name:'achievementsOtherIn'})
    },
    //点击人信息
    passIn(item){
      // console.log(item);
      localStorage.setItem('otherinfo',item.a0188)
      this.$router.push({name:'achievementsOtherInfo'})
    }
  },
}
</script>
<style lang="stylus" scoped>
   .toptip{
     height 30px
     background-color orange
   }
   .footers{
        padding 0 10px
        background-color #fff
        border-radius 5px
    }
    .aprtment{
        width 100%
        height 7vh
        line-height 5vh
        padding-left 10px
        padding-top 1vh
        font-size 14px
        color black
        border-bottom 1px solid #eee
    }
    .aprtmentss{
        width 100%
        height 60px
        line-height 50px
        padding-left 10px
        padding-top 4px
        font-size 14px
        color black
        border-bottom 1px solid #eee
    }
    .departmentss{
        color orange
        padding-left 5px
    }
    .cubeic-arrow{
      float right
    }
    .touxiang{
      float left
      border-radius 50%
      border 1px solid #eee
      vertical-align middle
      width 50px
      height 50px
    }
    .sidebox{
      padding-bottom 50px
    }
</style>