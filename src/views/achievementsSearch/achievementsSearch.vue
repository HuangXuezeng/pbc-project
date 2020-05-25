<template>
    <div>
        <!-- <mt-header title="绩效搜索">
            <router-link to="/" slot="left">
            <mt-button icon="back" style="color:#fff"></mt-button>
            </router-link>
        </mt-header> -->
        <div class="marginside" v-for="item in achlist" :key="item.a0190">
            <div class="myContents">
                <div class="phone"><i class="cubeic-person" style="color:#FF8D4D"></i> 基本信息</div>
                <div class="messageInfoo"><span><img class="img" src="../../assets/jilu.jpg" alt=""></span><span class="resuNamee">{{item.a0101}}</span></div>
                <div class="messageInfo"><span>工号：{{item.a0190}}</span><span class="spann">岗位：{{item.position}}</span></div>
                <div class="messageInfo"><span>一级单位：{{item.oneUnit}}</span><span class="spann">职级：P4</span></div>
                <div class="messageInfo"><span>二级部门：{{item.twoUnit}}</span></div>
                <div class="messageInfo"><span>直接上级：{{item.reportToOne}}</span></div>
                <div class="messageInfo"><span>考核期间：{{item.checkScope}}</span></div>
            </div>
            <div class="experience" v-for="item in performanceList" :key="item.a0190">
                <div class="phone">
                    <div>
                        <div class="bbox"><i class="cubeic-credit-card" style="color:#FF8D4D"> 半年度是否调整</i></div>
                        <p>{{item.bflag}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-tag" style="color:#FF8D4D"> 重点工作</i></div>
                        <p>{{item.heavyWork}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-star" style="color:#FF8D4D"> 主要目标</i></div>
                        <p>{{item.heavyTarget}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-vip" style="color:#FF8D4D"> 权重（合计100%）</i></div>
                        <p>{{item.ratio}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-time" style="color:#FF8D4D"> 计划完成时间</i></div>
                        <p>{{item.planTime}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-alert" style="color:#FF8D4D"> 计算公式/衡量标准</i></div>
                        <p>{{item.standard}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-home" style="color:#FF8D4D"> 数据来源部门/统计部门</i></div>
                        <p>{{item.orginDepart}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-square-right" style="color:#FF8D4D"> 半年度完成情况总结</i></div>
                        <p>{{item.halfConclusion}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-square-right" style="color:#FF8D4D"> 年度完成情况总结</i></div>
                        <p>{{item.totalConclusion}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-square-right" style="color:#FF8D4D"> 自评分</i></div>
                        <p>{{item.yearDiscussSelf}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-square-right" style="color:#FF8D4D"> 年度考核得分</i></div>
                        <p>{{item.yearDiscussLast}}</p>
                    </div>
                </div>
            </div>
            <div class="sociology">
                <div class="phone">
                    <div>
                        <div class="bbox"><i class="cubeic-calendar" style="color:#FF8D4D"> 工作相关人</i></div>
                        <p>{{item.workRelationPerson}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-calendar" style="color:#FF8D4D"> 开放范围</i></div>
                        <p>{{item.openScope}}</p>
                    </div>
                </div>
            </div>
            <div class="sociology">
                <div class="phone">
                    <div>
                        <div class="bbox"><i class="cubeic-calendar" style="color:#FF8D4D"> 年度直接上级评估意见</i></div>
                        <p>{{item.suggestion}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-right" style="color:#FF8D4D"> 计划确认</i></div>
                        <p>承诺人：{{item.accepterOne}}</p>
                        <p>直接上级：{{item.reportToOne}}</p>
                        <p>相关工作人：{{item.workRelationPersonOne}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-right" style="color:#FF8D4D"> 半年度总结及调整确认</i></div>
                        <p>承诺人：{{item.accepterTwo}}</p>
                        <p>直接上级：{{item.reportToTwo}}</p>
                        <p>相关工作人：{{item.workRelationPersonTwo}}</p>
                    </div>
                    <div>
                        <div class="bbox"><i class="cubeic-right" style="color:#FF8D4D"> 结果确认</i></div>
                        <p>承诺人：{{item.accepterThree}}</p>
                        <p>直接上级：{{item.reportToThree}}</p>
                        <p>相关工作人：{{item.workRelationPersonThree}}</p>
                    </div>
                </div>
            </div>
            <div class="talks"><i class="cubeic-edit"></i> 评论 6</div>
            <div class="ping" v-for="item in pinList" :key="item.performanceId">
                <span><i class="cubeic-person"> {{item.a0101}} </i><i style="color:#8f8f94;padding-left:10px"> {{item.createTime}}</i></span>
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
import { getAch,addComment,getComment,deleteComment } from './api'
import { Dialog,Notify } from 'vant'
export default {
    props:{
        isDianZan: {
            type: Number,
            default: 0
        },
        dianZanNum: {
            type: Number,
            default: 0
        },
    },
  data () {
    return {
        achlist: [],
        pinList: [],
        zanList: [],
        performanceList: [],
        zanId: '',
        value: '',
        num: 0,
        isDian: 0,
        show: false,
    };
  },
  created(){
      this.getAchList()
      this.getCommentLists()
      this.getZanLists()
      console.log(this.isDian);
      
  },
  methods:{
    //搜索获取的绩效数据
    getAchList(){
        let queryData = {}
        queryData.a0101 = this.$route.params.personName
        getAch(queryData).then(res=>{
            this.achlist = res.data.itemList
            for(let i in this.achlist){
                this.performanceList = this.achlist[i].performance
            }
            // console.log(this.achlist);
            // console.log(this.performanceList); 
        })
    },
    //获取搜索的人员的评论
    getCommentLists(){
        let that = this
        setTimeout(function(){ 
            let queryData = {}
            queryData.a0190 = that.achlist[0].a0190
            queryData.typecode = 1
            console.log(that.achlist[0].a0190) 
            getComment(queryData).then(res=>{
                // console.log(res); 
                that.pinList = res.data.itemList 
            })
        }, 1000);
    },
    //获取搜索的人员的点赞
    getZanLists(){
        let that = this
        setTimeout(function(){ 
            let queryData = {}
            queryData.a0190 = that.achlist[0].a0190
            queryData.typecode = 2
            console.log(that.achlist[0].a0190) 
            getComment(queryData).then(res=>{
                // console.log(res); 
                //获取点赞人的主键id
                that.num = res.data.itemList.length
                that.zanId = res.data.itemList[0].discussAppreciateId
                console.log(that.zanId); 
            })
        }, 1000);
    },
    //打开评论框
    openWrite(){
        this.show = true
    },
    beforeClose(action,done){
        if (action === 'confirm') {
            let queryData = {}
            queryData.a0101 = localStorage.getItem('a0101')
            queryData.a0190 = localStorage.getItem('a0190')
            queryData.discuss = this.value
            queryData.typecode = 1
            queryData.performanceId = localStorage.getItem('performanceId')
            addComment(queryData).then(res=>{
                console.log(res);
            })
            this.value = ''
            this.getCommentLists()
            done()
        } else {
            done()
        }
    },
    //取消评论
    showNo(){
        
    },
    showSure(){

    },
    isDianzan(){
        if(this.isDian == 0 && localStorage.getItem('dianzan') == 0){
            let queryData = {}
            queryData.a0190 = localStorage.getItem('a0190')
            queryData.a0101 = localStorage.getItem('a0101')
            queryData.performanceId = localStorage.getItem('performanceId')
            queryData.typecode = 2
            addComment(queryData).then(res=>{
                // console.log(res);
                if(res.code == 1000){
                    this.isDian = 1
                    localStorage.setItem('dianzan',this.isDian)
                    this.num++ 
                }else{
                    Notify({ type: 'danger', message: '点赞失败请重试！' })
                }
            })
        }else{
            let queryData = {}
            queryData.discussAppreciateId = this.zanId
            deleteComment(queryData).then(res=>{
                if(res.code == 1000){
                    this.isDian = 0
                    localStorage.setItem('dianzan',this.isDian)
                    this.num--
                }else{
                    Notify({ type: 'danger', message: '取消失败请重试！' })
                }
            })
        }
    }
  },
  watch: {
    isDianZan () {
      this.isDian = this.isDianZan
    },
    dianZanNum () {
      this.num = this.dianZanNum
    }
  },
}
</script>
<style lang="stylus">
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
        line-height 24px
        border-bottom 1px solid #eee
        margin-bottom 4px
        font-size 14px
        font-weight 700
        color #7E7E7E
        margin-left 10px
    }
    .messageInfo{
        font-size 14px
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
    .resuNamee{
        color #3E4146
        font-weight 700
        padding-left 5px
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
    .cubeic-good{
        font-size 22px
        color #FF8C00
    }
    .active {
        color red
    }
    .num {
        position absolute
        display flex
        align-items center
        justify-content center
        font-size 12px
        width 18px
        height 18px
        top 2px
        right 7vw
        background #f74c31
        color #fff
        padding 4px
        border-radius 10px
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
</style>