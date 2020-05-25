<template>
    <div>
        <div class="cellstyless" v-for="item in perlist" :key="item.a0188">
            <a @click="passIn(item)">
                <span><img class="touxiang" :src="item.potoURL" alt=""> </span>
                <span style="padding-left:10px;color:dimgray;font-size:15px"> {{item.a0101}}</span>
            </a>
        </div>
        <div v-if="seeFlag">
            <div class="empty">
                <div class="emptyinfo">
                    <img class="emptyimg" src="../../assets/custom-empty-image.png" alt="">
                </div>
            </div>
            <div class="text">
                抱歉~没有搜索到您想要的内容哦~
            </div>
        </div>
    </div>
</template>
<script>
import { searchApart } from './api'
import { Toast } from 'vant'
export default {
  data () {
    return {
        perlist: [],
        seeFlag: false
    };
  },
  created(){
      this.getSearchApartList()
  },
  methods:{
      //获取搜索的人
      getSearchApartList(){
        let queryData = {}
        queryData.a0188 = localStorage.getItem('a0188')
        queryData.a0101 = localStorage.getItem('searchData')
        searchApart(queryData).then(res=>{
            if(res.data.itemList == '' || res.data.itemList == undefined || res.data.itemList == null){
                Toast.fail('没有搜索到相关信息哦~')
                this.seeFlag = true
            }else{
                for(let i in res.data.itemList){
                    if(res.data.itemList[i].a832.potoURL == undefined || res.data.itemList[i].a832.potoURL == '' || res.data.itemList[i].a832.potoURL == null){
                        res.data.itemList[i].a832.potoURL = require('@/assets/timg.jpg')
                    }
                    this.perlist.push(res.data.itemList[i].a832)
                }
            }
            console.log(this.perlist);
        })
      },
    //进入搜索到人的详情
    passIn(item){
        console.log(item);
        localStorage.setItem('otherinfo',item.a0188)
        this.$router.push({name:'achievementsOtherInfo'})
        
    }
  }
}
</script>
<style lang="stylus" scoped>
    .touxiang{
        float left
        border-radius 50%
        border 1px solid #eee
        vertical-align middle
        width 50px
        height 50px
    }
    .cellstyless{
        border-bottom 1px solid #eee
        padding 5px 5px 5px 5px
        height 60px
        line-height 50px
    }
    .empty{
        padding-top 10vh
        padding-left 40%
        text-align center
        .emptyinfo{
            width 25vw
            height 12vh
            .emptyimg{
                display block
                height 12vh
                line-height 7vh
            }
        }
    }
    .text{
        text-align center
        padding-top 10px
        font-size 13px
        color #ccc
    }
</style>