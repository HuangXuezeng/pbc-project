<template>
    <div>
        <!-- 一级部门 -->
        <div class="sideBoxs">
            <div class="cellstyles" v-for="item in myList" :key="item.id" @click="passinfo(item)">
                <span>
                    {{item.content}}
                </span>
                <i class="cubeic-arrow"></i>
            </div>
            <!-- 人 -->
             <div class="cellstyles" v-for="item in departList" :key="item.a0188" @click="passin(item)">
                <span><img class="touxiang" :src="item.potoURL" alt=""></span>
                <span class="departmentss">{{item.a0101}}</span><i class="cubeic-arrow"></i>
            </div>
        </div>
    </div>
</template>
<script>
import { getDepart } from './api'
export default {
  data () {
    return {
        departList: [],
        myList: [],
    };
  },
  created(){
      this.getDepartList()
  },
  methods:{
    getDepartList(){
    let queryData = {}
    queryData.a0188 = localStorage.getItem('a0188')
    getDepart(queryData).then(res=>{
        this.departList = res.data.a01s
        this.myList = res.data.b01List
    })
    },
    passinfo(item){
    console.log(item)
    localStorage.setItem('depCode',item.deptCode)
    this.$router.push({name:'achevementsEyesInfo'})
    },
      //点击人信息
    passin(item){
    console.log(item);
    localStorage.setItem('otherinfo',item.a0188)
    this.$router.push({name:'achievementsOtherInfo'})
    }
  },
}
</script>
<style lang="stylus" scoped>
    .sideBoxs{
        padding-bottom 50px
    }
    .cubeic-arrow{
        float right
    }
    .cellstyles{
        width 100%
        height 60px
        line-height 50px
        padding-left 10px
        padding-top 4px
        font-size 14px
        color black
        background-color #fff
        border-bottom 1px solid #eee
    }
    .touxiang{
      float left
      border-radius 50%
      border 1px solid #eee
      vertical-align middle
      width 50px
      height 50px
    }
    .departmentss{
        color orange
        padding-left 5px
    }
</style>