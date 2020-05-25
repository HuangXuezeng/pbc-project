<template>
    <div class="conts">
      <!-- <mt-header title="内聘职位" style="background-color:#fff">
        <router-link to="/personnelTop" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header> -->
      <!-- <div class="online">
        <span></span><span class="count">在招岗位数：</span>
      </div> -->
        <div class="contents" v-for="(item,index) in pstionDatas" :key="item.positionId">
          <a @click="jumpInfo(index,item)">
            <div style="padding-left:10px" ><i class="zhiwei">{{item.name}}</i><i style="float:right;color:#FFA06D">{{item.jobLevel}}</i></div>
            <div style="padding-left:10px"><i class="adress">{{item.workPlace}} | {{item.education}} | {{item.workYears}}</i><i style="float:right" class="adress">{{item.updateTime}}</i></div>
          </a>
        </div>
    </div>
</template>
<script>
import { getPostIdList } from './api'
export default {
  data () {
    return {
      selected: '',
      // options: ['普华永通信息公司']
      pstionDatas: [],
      postId: ''
    }
    },
    created(){
      this._getPostList()
      // console.log(this.$route.params.pstionDatas);
      
    },
    methods:{
      _getPostList(){
        // getPostIdList().then(res=>{
          // console.log(res);
          // let pstionData = []
          this.pstionDatas = JSON.parse(localStorage.getItem('getDatas'))
          // let obj = {}
          // let persons = this.pstionData.reduce((cur,next) => {
          //   obj[next.name] ? "" : obj[next.name] = true && cur.push(next)
          //   return cur
          // },[]) //设置cur默认类型为数组，并且初始值为空的数组
          // this.pstionDatas = persons
          // console.log(this.pstionDatas);
        // })
      },
      jumpInfo(index,item){
          localStorage.setItem('pstionId',item.positionId)
          this.$router.push({name:'personnelDetail'})
        // })
      }
    }
  }
</script>
<style lang="stylus">
  .conts{
    padding 10px
    background-color #fff
  }
  .container{
    background-color #fff
  }
  .contents{
    width 100%
    line-height 36px
    background-color #fff
    margin-top 10px
    padding 0 10px 0 0px
    border-radius 10px
    border-bottom 1px solid #eee
  }
  i{
    font-style normal
    font-size 12px
  }
  .zhiwei{
    font-size 14px
    color #2E3337
    font-weight 700
  }
  .adress{
    color #999C9F
  }
  .online{
    width 100%
    height 35px
    line-height 35px
    background-color #fff
    margin 0 auto
    margin-top 10px
    padding 0 10px
    font-size 14px
    border-radius 5px
  }
  .count{
    float right
    font-size 12px
  }
</style>