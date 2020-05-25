<template>
    <div>
        <!-- <mt-header title="其他关系人">
            <router-link to="/" slot="left">
            <mt-button icon="back" style="color:#fff"></mt-button>
            </router-link>
        </mt-header> -->
          <div class="footer" v-for="(item,index) in departList" :key="item.deptId">
            <a @click="passInfo(index,item)">
                <div class="aprtment">
                    <span class="departments">{{item.content}}</span><i class="cubeic-arrow"></i>
                    <!-- <span class="postCount">PBC数：<i class="istyle">{{item.departCounts}}</i></span> -->
                </div>
            </a>
         </div>
        <div class="footer" v-for="(item,index) in personList" :key="item.a01102">
            <a @click="passIn(index,item)">
                <div class="aprtment">
                  <span><img class="touxiang" src="../../assets/lunbotu2.jpg" alt=""></span>
                  <span class="departmentss">{{item.a0101}}</span><i class="cubeic-arrow"></i>
                    <!-- <span class="postCount">PBC数：<i class="istyle">{{item.departCounts}}</i></span> -->
                </div>
            </a>
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
      queryData.deptCode = localStorage.getItem('deprtCode1')
      getPerson(queryData).then(res=>{
        this.personList = res.data.a01s
        this.departList = res.data.b01s
      })
    },
    //点击行
    passInfo(index,item){
      console.log(item);
      localStorage.setItem('deprtCode2',item.deptCode)
      this.$router.push({name:'achievementsOtherIn'})
    },
    //点击人信息
    passIn(index,item){
      console.log(item);
      localStorage.setItem('otherinfo',item.a0188)
      this.$router.push({name:'achievementsOtherInfo'})
    }
  }
}
</script>
<style lang="stylus">
   .toptip{
     height 30px
     background-color orange
   }
   .footer{
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
    .departmentss{
        color orange
        padding-left 5px
    }
    .cubeic-arrow{
      float right
    }
    .touxiang{
      float left
      width 11vw
      height 5vh
    }
</style>