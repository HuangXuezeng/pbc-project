<template>
    <div>
        <!-- <mt-header title="我的绩效">
            <router-link to="/" slot="left">
            <mt-button icon="back" style="color:#fff"></mt-button>
            </router-link>
        </mt-header> -->
        <div class="marginside">
            <div class="myContents">
                <div class="phone" style="border-bottom:1px solid #ffe4c4"><i class="cubeic-person" style="color:#FF8D4D"></i> 基本信息</div>
                <div class="messageInfoinfo"><span><img class="img" :src="photos" alt=""></span><span class="resuName">{{achlist.a0101}}</span></div>
                <div class="messageInfo"><span>工号：{{achlist.a0190}}</span><span class="spann">岗位：{{achlist.mc0000}}</span><span class="spann">职级：{{achlist.mc0000Two}}</span></div>
                <div class="messageInfo"><span>一级单位：{{achlist.contentOne}}</span></div>
                <div class="messageInfo"><span>二级部门：{{achlist.contentTwo}}</span></div>
                <div class="messageInfo"><span>直接上级：{{achlist.a0101Up}}</span></div>
            </div>
            <div class="experience">
                <div class="phone" v-for="items in performanceList" :key="items.recordid">
                    <!-- <div>
                        <div class="bbox"><i class="cubeic-credit-card" style="color:#FF8D4D"> 半年度是否调整</i></div>
                        <p>{{item.a831016}}</p>
                    </div> -->
                    <div>
                        <div class="bbox"><i class="cubeic-tag" style="color:#FF8D4D"> 重点工作</i></div>
                        <p>{{items.a831005}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-star" style="color:#FF8D4D"> 主要目标</i></div>
                        <p v-for="item in items.a831006s" :key="item.id">{{item}}</p>
                    </div>
                    <!-- <div>
                        <div class="bbox"><i class="cubeic-vip" style="color:#FF8D4D"> 权重（合计100%）</i></div>
                        <p>{{item.a831007}}</p>
                    </div> -->
                    <div>
                        <div class="bbox"><i class="cubeic-time" style="color:#FF8D4D"> 计划完成时间</i></div>
                        <p>{{items.a831008}}</p>
                    </div>
                </div>
                <!-- 折叠内容 -->
                <!-- <van-collapse v-model="activeNames" v-for="item in performanceList" :key="item.recordid" style="border-bottom:3px solid #ffe4c4">
                    <van-collapse-item title="重点工作" :name="item.recordid">{{item.a831005}}</van-collapse-item>
                    <van-collapse-item title="主要目标" :name="item.recordid">{{item.a831006}}</van-collapse-item>
                    <van-collapse-item title="计划完成时间" :name="item.recordid">{{item.a831008}}</van-collapse-item>
                </van-collapse> -->
            </div>
        </div>
    </div>
</template>
<script>
import { getAchInfo,getComment,deleteComment,addComment } from './api'
import { Picker,Popup,Collapse, CollapseItem } from 'vant';
export default {
  data () {
    return {
        achlist: [],
        photos: '',
        performanceList: [],
        pinList: [],
        zanList: [],
        zanId: '',
        value: '',
        // activeNames: ['']  //默认展示某一折叠的内容
    }
  },
  created(){
      this.getAchInfoList()
  },
  methods:{
    //获取个人绩效信息
    getAchInfoList(){
        // console.log(this.$route.params.a832005,this.$route.params.a0188,this.$route.params.recordid);
        let queryData = {}
        queryData.a832005 = localStorage.getItem('a832005detail')
        queryData.a0188 = localStorage.getItem('a0188detail')
        queryData.recordid = localStorage.getItem('recordiddetail')
        getAchInfo(queryData).then(res=>{
            // console.log(res.data.a832.a831s);
            // let reg = /[;；]/g
            // debugger
            // for(var i in res.data.a832.a831s){
            //     res.data.a832.a831s[i].a831006.replace(reg,"$&\r\n")
            //     console.log(res.data.a832.a831s[i].a831006)
            // }
            this.performanceList = res.data.a832.a831s
            this.achlist = res.data.a01
            if(res.data.a832.potoURL == undefined){
                this.photos = require('@/assets/timg.jpg')
            }else{
                this.photos = res.data.a832.potoURL
            }
            // this.performanceList = res.data.a832s
        })
    },

  }
}
</script>
<style lang="stylus" scoped>
    .myContents{
        background-color #fff
    }
    .experience{
        background-color #fff
        margin-top 8px
    }
    .phone{
        margin-bottom 4px
        font-size 12px
        font-weight 700
        color #7E7E7E
        padding 0 10px 0 10px
    }
    .messageInfo{
        font-size 12px
        color #8f8f94
        padding 2px 0 2px 10px
    }
    .messageInfoinfo{
        font-size 14px
        color #8f8f94
        padding 5px 0 5px 10px
        height 10vh
        line-height 7vh
    }
    li{
        font-size 14px
        color black
        margin-left 10px
    }
    .spann{
        margin-left 15px
    }
    .marginside{
        background-color #eee
        padding-bottom 50px
    }
    .resuName{
        color #3E4146
        font-weight 700
        padding-left 5px
    }
    .ping{
        background-color #fff
        border-bottom 1px solid #ccc
        width 100%
        padding 5px 0 5px 10px
        font-size 14px
    }
    .talks{
        background-color #fff
        color black
        border-bottom 1px solid #ccc
        font-size 14px
        padding-left 10px
    }
    .buttom{
        text-align center
        font-size 12px
        padding 5px 0 50px 0
        color darkgray
    }
    i{
        font-style normal
    }
    .cubeic-edit{
        color #FF8C00
    }
    .cubeic-person{
        color #FF8C00
    }
    .img{
        float left
        border-radius 50%
        border 1px solid #eee
        width 50px
        height 50px
        vertical-align middle
    }
    .bbox{
        border-bottom 1px solid #FFE4C4
    }
</style>