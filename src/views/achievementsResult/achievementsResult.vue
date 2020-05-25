<template>
    <div>
        <!-- <mt-header title="规则">
            <router-link to="./" slot="left">
            <mt-button icon="back" style="color:#fff"></mt-button>
            </router-link>
        </mt-header> -->
        <div class="sideBox" v-for="item in results" :key="item.ruleInformationId">
            <span>绩效类型：{{item.performanceTypeName}}</span><br>
            <!-- <span>文件路径：{{item.path}}</span><br> -->
            <span>绩效日期：{{item.bizDate}}</span><span class="xiazai"><a href="www.baidu.com"><van-tag mark type="primary">下载附件</van-tag></a></span><br>
            <span>描述：{{item.notes}}</span>
        </div>
    </div>
</template>
<script>
import { getResult } from './api'
import { Tag } from 'vant'
export default {
  data () {
    return {
        results: []
    };
  },
  created(){
      this.getResultList()
  },
  methods:{
    getResultList(){
        getResult().then(res=>{
            this.results = res.data.itemList
        })
    }
  }
}
</script>
<style lang="stylus">
    .sideBox{
        font-size 12px
        padding-left 5px
        margin-bottom 3px
        border-bottom  1px solid #ccc
        color darkgray
        background-color #fff
    }
    .xiazai{
        float right
        padding-right 10px
    }
</style>