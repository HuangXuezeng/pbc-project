<template>
    <div>
        <!-- <mt-header title="我的绩效">
            <router-link to="/" slot="left">
            <mt-button icon="back" style="color:#fff"></mt-button>
            </router-link>
        </mt-header> -->
        <div class="marginside">
            <div class="myContents">
                <div class="phone"><i class="cubeic-person" style="color:#FF8D4D"></i> 基本信息</div>
                <div class="messageInfoo"><span><img class="img" src="../../assets/jilu.jpg" alt=""></span><span class="resuName">{{achlist.a0101}}</span></div>
                <div class="messageInfo"><span>工号：{{achlist.a0190}}</span><span class="spann">岗位：{{achlist.mc0000}}</span><span class="spann">职级：{{achlist.mc0000Two}}</span></div>
                <div class="messageInfo"><span>一级单位：{{achlist.contentOne}}</span></div>
                <div class="messageInfo"><span>二级部门：{{achlist.contentTwo}}</span></div>
                <div class="messageInfo"><span>直接上级：{{achlist.a0101Up}}</span></div>
            </div>
            <div class="experience">
                <div class="phone" v-for="item in performanceList" :key="item.recordid">
                    <div>
                        <div class="bbox"><i class="cubeic-credit-card" style="color:#FF8D4D"> 半年度是否调整</i></div>
                        <p>{{item.a831016}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-tag" style="color:#FF8D4D"> 重点工作</i></div>
                        <p>{{item.a831005}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-star" style="color:#FF8D4D"> 主要目标</i></div>
                        <p>{{item.a831006}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-vip" style="color:#FF8D4D"> 权重（合计100%）</i></div>
                        <p>{{item.a831007}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-time" style="color:#FF8D4D"> 计划完成时间</i></div>
                        <p>{{item.a831008}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-alert" style="color:#FF8D4D"> 计算公式/衡量标准</i></div>
                        <p>{{item.a831009}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-home" style="color:#FF8D4D"> 数据来源部门/统计部门</i></div>
                        <p>{{item.a831010}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-square-right" style="color:#FF8D4D"> 半年度完成情况总结</i></div>
                        <p>{{item.a831011}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-square-right" style="color:#FF8D4D"> 年度完成情况总结</i></div>
                        <p>{{item.a831012}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-square-right" style="color:#FF8D4D"> 自评分</i></div>
                        <p>{{item.a831013}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-square-right" style="color:#FF8D4D"> 年度考核得分</i></div>
                        <p>{{item.a831014}}</p>
                    </div>
                </div>
            </div>
            <div class="talks"><i class="cubeic-edit"></i> 评论 {{pingnum}}</div>
            <div class="ping" v-for="item in pinList" :key="item.discussAppreciateId">
                <span><i class="cubeic-person"> {{item.a0101}} </i><i style="color:#8f8f94"> {{item.createTime}}</i></span>
                <p>{{item.discuss}}</p>
            </div>
            <div class="buttom">亲，到底了~</div>
            <div class="button">
                <div class="pinglun" @click="openWrite">
                    <cube-input class="cubebtn" maxlength:30 v-model="value" placeholder="写点评论吧..."></cube-input>
                </div>
                <div class="dianzan">
                    <i class="cubeic-good" :class="{'active' : isDian > 0}" @click="isDianzan">
                        <div class="num"><span>{{num}}</span></div>
                    </i>
                </div>
            </div>
            <van-dialog v-model="show" title="评论" show-cancel-button :beforeClose="beforeClose">
                <cube-textarea v-model="value"></cube-textarea>
            </van-dialog>
        </div>
    </div>
</template>
<script>
import { getAchInfo,getComment,deleteComment,addComment } from './api'
import { Picker,Popup  } from 'vant';
export default {
  data () {
    return {
        achlist: [],
        performanceList: [],
        pinList: [],
        zanList: [],
        zanId: '',
        value: '',
        num: 0,
        pingnum: '',
        isDian: 0,
        show: false,
    }
  },
  created(){
      this.getAchInfoList()
      this.getCommentList()
      this.getZanLists()
  },
  methods:{
    //获取个人绩效信息
    getAchInfoList(){
        // console.log(this.$route.params.a832005,this.$route.params.a0188,this.$route.params.recordid);
        let queryData = {}
        queryData.a832005 = localStorage.getItem('a832005')
        queryData.a0188 = localStorage.getItem('aindex0188')
        queryData.recordid = localStorage.getItem('recordid')
        // queryData.a832005 = this.$route.params.a832005
        // queryData.a0188 = this.$route.params.a0188
        // queryData.recordid = this.$route.params.recordid
        getAchInfo(queryData).then(res=>{
            console.log(res);
            this.performanceList = res.data.a832.a831s
            this.achlist = res.data.a01
            // this.performanceList = res.data.a832s
        })
    },
    //获取个人绩效评论
    getCommentList(){
        let queryData = {}
        queryData.a0188 = localStorage.getItem('aindex0188')
        queryData.typecode = 1
        getComment(queryData).then(res=>{
            console.log(res);
            this.pinList = res.data.discussAppreciateList
            this.pingnum = res.data.discussAppreciateList.length
            // console.log(this.pinList);
        })
    },
    //评论
    //打开评论框
    openWrite(){
        this.show = true
    },
    beforeClose(action,done){
        if (action === 'confirm') {
            let queryData = {}
            queryData.a0101 = localStorage.getItem('a0101')
            queryData.a0190 = localStorage.getItem('a0190')
            queryData.a0188 = localStorage.getItem('a0188')
            queryData.discuss = this.value
            queryData.typecode = 1
            queryData.performanceId = localStorage.getItem('recordid')
            addComment(queryData).then(res=>{
                console.log(res);
            })
            this.value = ''
            this.getCommentList()
            done()
        } else {
            done()
        }
    },
    //获取点赞
    getZanLists(){
        let queryData = {}
        queryData.a0188 = localStorage.getItem('aindex0188')
        queryData.typecode = 2
        getComment(queryData).then(res=>{
            console.log(res);
            //获取点赞人的主键id
            this.num = res.data.count
            this.zanId = res.data.discussAppreciateId
            this.isDian = res.data.bflag
            // console.log(that.zanId); 
        })
    },
    //点赞
    isDianzan(){
        console.log(this.isDian)
        if(this.isDian == 0){
            let queryData = {}
            queryData.a0190 = localStorage.getItem('a0190')
            queryData.a0101 = localStorage.getItem('a0101')
            queryData.a0188 = localStorage.getItem('a0188')//首页保存的登录人
            queryData.performanceId = localStorage.getItem('recordid')
            queryData.typecode = 2
            addComment(queryData).then(res=>{
                this.isDian = 1
                this.num++ 
            })
        }else{
            let queryData = {}
            queryData.discussAppreciateId = this.zanId
            deleteComment(queryData).then(res=>{
                if(res.code == 1000){
                    this.isDian = 0
                    this.num--
                }else{
                    Notify({ type: 'danger', message: '取消失败请重试！' })
                }
            })
        }
    }
    // otherPeople(){
    //     this.$router.push({name:'achievementsOther'})
    // }
  }
}
</script>
<style lang="stylus">
    .container{
        background-color #eee
    }
    .qianduan{
        font-size 14px
    }
    .years{
        font-size 12px
        color #7E7E7E
    }
    .myContents{
        background-color #fff
    }
    .experience{
        background-color #fff
        margin-top 8px
    }
    .phone{
        border-bottom 1px solid #eee
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
    .messageInfoo{
        font-size 14px
        color #8f8f94
        padding 5px 0 5px 10px
        height 10vh
        line-height 4vh
    }
    .sociology{
        background-color #fff
        margin-top 8px
        padding-bottom 60px
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
    }
    .times{
        color #ccc
        margin 5px 0 5px 10px
    }
    .workCompy{
        color #3E4146
        margin 5px 0 5px 10px
    }
    .resuName{
        color #3E4146
        font-weight 700
        padding-left 5px
    }
    .inColors{
        float left
        height 35px
        line-height 35px
        width 45%
        background-color #fff
        text-align center
        color #FF8D4D
        border-radius 50px
        border 1px solid #FF8D4D
    }
    .outColors{
        width 45%
        margin 0 auto
        height 35px
        line-height 35px
        background-color #FF8D4D
        text-align center
        color #FFF
        border-radius 50px
        float right
    }
    .buttonom{
        position fixed
        bottom 9px
        width 100%
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
        width 15vw
        height 8vh
    }
    .bbox{
        border-bottom 1px solid #eee
    }
    .cubeic-arrow{
        float right
    }
    .button{
        position fixed
        width 100%
        height 50px
        padding 1vh 0 0 1vw
        background-color #fff
        bottom 0
    }
    .pinglun{
        float left
        width 80%
    }
    .dianzan{
        float left
        width 20%
        padding-left 4vw
        padding-top 0.5vw
    }
    .num {
        position absolute
        display flex
        align-items center
        justify-content center
        font-size 12px
        width 18px
        height 18px
        top 0.5vh
        right 7vw
        background #f74c31
        color #fff
        padding 4px
        border-radius 10px
    }
    .cubeic-good{
        font-size 22px
        color #FF8C00
    }
    .active {
        color red
    }
</style>