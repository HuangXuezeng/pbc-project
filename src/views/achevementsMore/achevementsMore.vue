<template>
    <div class="containerr">
        <!-- <mt-header title="最新">
            <router-link to="/" slot="left">
            <mt-button icon="back" style="color:#fff"></mt-button>
            </router-link>
        </mt-header> -->
        <!-- <div class="marginside">
            <div class="newPbc"><i class="cubeic-person" style="color:#FF8D4D"></i> 绩效最新信息</div>
            
        </div> -->
            <div class="marginsides" v-for="items in achlist" :key="items.a0188">
                <div class="myContents">
                    <div class="messageInfoos">
                        <span><img class="img" :src="items.potoURL" alt=""></span>
                        <span class="resuName">{{items.a0101}}</span><br>
                        <span class="resuNamess">岗位：<i style="color:black">{{items.mc0000}}</i></span>
                        <span class="resuNamesss">职级：<i style="color:#ccc">{{items.mc0000Two}}</i></span>
                        <span></span>
                    </div>
                </div>
                <div class="sociologys">
                    <div class="phones">
                        <div>
                            <div class="bboxs"><i class="cubeic-calendar" style="color:black"> {{items.a832005}}年PBC</i></div>
                            <div class="heavys">
                                <span>重点工作:</span><br>
                                <div v-for="item in items.a831s" :key="item.aId">
                                    <span>
                                        {{item}}  
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div>
                        <div class="talkandzan">
                            <span style="font-size:14px;color:#ccc" @click="jixiaoInfo(items)">查看详情<i class="cubeic-arrow"></i></span>
                        </div>
                    </div> -->
                    <div class="comments">
                        <div class="talks">
                            <i class="cubeic-edit" style="color:#ccc"> 更多评论</i>
                            <!-- <span style="float:right">
                                    <i class="cubeic-good" :class="{'active' : isDian > 0}" @click="isDianzan(items)"></i>
                                    <i style="color:#ccc;font-size:12px">{{items.count}}</i>
                                    <i class="cubeic-message" @click="openWrite(items)"></i>
                                    <i style="color:#ccc;font-size:12px">{{items.discussCount}}</i>
                                    <i class="cubeic-more" @click="more(items)"></i>
                            </span> -->
                            
                        </div>
                        <div class="ping" v-for="item in items.discussAppreciates" :key="item.discussAppreciateId">
                            <div>
                                <span><img class="pinimg" src="../../assets/timg.jpg" alt=""></span>
                                <span class="perName"><i> {{item.a0101}} </i></span>
                                <span><i style="color:#8f8f94"> {{item.createTime}}</i></span>
                                <span style="float:right;color:red" @click="delComment(item)">删除</span>
                            </div>
                            <p class="pstyle" v-html="item.discuss.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)"></p>
                        </div>
                    </div>
                </div>
                
                <!-- <div class="talks"><i class="cubeic-edit"></i> 评论 6</div>
                <div class="ping" v-for="item in pinList" :key="item.performanceId">
                    <span><i class="cubeic-person"> {{item.a0101}} </i><i style="color:#8f8f94"> {{item.createTime}}</i></span>
                    <p>{{item.discuss}}</p>
                </div>
                <div class="buttom">亲，到底了~</div> -->
            </div>
        <van-dialog v-model="show" title="评论" show-cancel-button :beforeClose="beforeClose">
            <cube-textarea v-model="value"></cube-textarea>
        </van-dialog>
    </div>
</template>
<script>
import { getNew,getComment,deleteComment,addComment } from './api'
import { List,Notify,Dialog } from 'vant'
export default {
  data () {
    return {
        achlist: [],
        performanceList: [],
        loading: 'false',
        finished: false,
        pinList: [],
        zanList: [],
        zanId: '',
        value: '',
        num: 0,
        pingnum: '',
        isDian: 0,
        show: false,
        viewflag: true,
        recordId: '',
        delflag: false,
    };
  },
  created(){
    this.getNewList()
  },
  methods:{
      getNewList(){
        let queryData = {}
        queryData.recordid = localStorage.getItem('moreRecordid')
        getNew(queryData).then(res=>{
            var itemList = []
                var item = {}
                item.a0101 =res.data.a832.a0101
                item.a0190 =res.data.a832.a0190
                item.mc0000 =res.data.a832.a832019
                item.mc0000Two =res.data.a832.mc0000Two
                item.a832005 =res.data.a832.a832005
                item.discussAppreciates =res.data.a832.discussAppreciateEntity.discussAppreciateList
                item.bflag = res.data.a832.discussAppreciateEntity.bflag
                item.count = res.data.a832.discussAppreciateEntity.count
                item.discussCount = res.data.a832.discussAppreciateEntity.discussCount
                //头像
                if(res.data.a832.potoURL == undefined || res.data.a832.potoURL == ""){
                    item.potoURL = require('@/assets/timg.jpg')
                }else{
                    item.potoURL = res.data.a832.potoURL
                }
                item.a831s = []
                for(let j in res.data.a832.a831s){
                    item.a831s.push(res.data.a832.a831s[j].a831005)
                }
                // debugger
                for(var t in item.a831s){
                    item.a831s[t] = Number(t)+1 +'.'+  item.a831s[t]
                }
                item.recordid = res.data.a832.recordid
                item.discussAppreciateId = res.data.a832.discussAppreciateEntity.discussAppreciateId
                itemList.push(item)
            this.achlist = itemList
            console.log(this.achlist)
            
        })
      },
    //评论
    //打开评论框
    openWrite(items){
        this.recordId = items.recordid
        this.show = true
    },
    beforeClose(action,done){
        if (action === 'confirm') {
            if(this.value !== ''){
            let queryData = {}
            queryData.a0101 = localStorage.getItem('a0101')
            queryData.a0190 = localStorage.getItem('a0190')
            queryData.a0188 = localStorage.getItem('a0188')
            queryData.discuss = this.value
            queryData.typecode = 1
            queryData.performanceId = this.recordId
            addComment(queryData).then(res=>{
                console.log(res);
            })
            this.value = ''
            // this.getCommentList()
            done()
            }else{
                Notify({ type: 'danger', message: '评论空无法提交！' })
                done()
            }
        } else {
            done()
        }
    },
    //点赞
    isDianzan(items){
        console.log(items)
        this.recordId = items.recordid
        this.num = items.count
        this.zanId = items.discussAppreciateId
        if(this.isDian == 0){
            let queryData = {}
            queryData.a0190 = localStorage.getItem('a0190')
            queryData.a0101 = localStorage.getItem('a0101')
            queryData.a0188 = localStorage.getItem('a0188')//首页保存的登录人
            queryData.performanceId = this.recordId
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
    },
    jixiaoInfo(items){
        console.log(items)
        // localStorage.setItem('a832005',item.a832005)
        // localStorage.setItem('a0188',item.a0188)
        // localStorage.setItem('recordid',item.recordid)
        // this.$router.push({name:'achievementsMyInfo'})
    },
    more(items){
        console.log(items)
        // this.$router.push({name:'achevementsMore'})
    },
    //删除评论
    delComment(item){
        console.log(item)
        Dialog.confirm({
        title: '提示',
        message: '确认删除？',
        })
        .then(() => {
            // on confirm
            if(localStorage.getItem('a0188') == item.a0188){
                let queryData = {}
                queryData.discussAppreciateId = item.discussAppreciateId
                deleteComment(queryData).then(res=>{
                    
                })
                this.getNewList()
                Notify({ type: 'success', message: '删除成功！' })
            }else{
                Notify({ type: 'danger', message: '只能删除自己的评论哦！' })
            }
        })
        .catch(() => {
            // on cancel
        })
    },
    // 将匹配结果替换表情图片
    emotion (res) {
      let word = res.replace(/\#|\;/gi,'')
      const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
      let index = list.indexOf(word)
      return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle" width="20px" height="20px">` 
    }
  }
}
</script>
<style lang="stylus" scoped>
    i{
        font-style normal
    }
    .containerr{
        background-color #eee
        // padding-bottom 60px
    }
    .qianduan{
        font-size 14px
    }
    .years{
        font-size 12px
        color #7E7E7E
    }
    li{
        font-size 14px
        color black
        margin-left 10px
    }
    .spann{
        margin-left 15px
    }
    ..marginsides{
        background-color #eee
        margin-top 10px
    }
    .resuName{
        color #3E4146
        font-weight 700
        font-size 16px
        padding-left 5px
    }
     .resuNames{
        color #ccc
        font-size 14px
        padding-left 5px
    }
    .resuNamess{
        color black
        font-size 14px
        padding-left 5px
    }
    .resuNamesss{
        color black
        font-size 14px
        padding-left 5px
        padding-left 5vw
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
    .ping{
        background-color #fff
        border-bottom 1px solid #ccc
        width 100%
        padding 5px 0 5px 10px
        font-size 14px
    }
    .buttom{
        text-align center
        font-size 12px
        padding 5px 0 60px 0
        color darkgray
    }
    .img{
        float left
        border-radius 50%
        border 1px solid #eee
        width 50px
        height 50px
        vertical-align middle
    }
    .pinimg{
        float left
        width 50px
        height 50px
    }
    .myContents{
        background-color #fff
    }
    .phones{
        font-size 13px
        color #7E7E7E
        padding 0 10px 0 18%
    }
    .messageInfoos{
        font-size 14px
        color #8f8f94
        padding 5px 0 5px 10px
        height 10vh
        line-height 4vh
        margin-top 10px
    }
    .messageInfo{
        font-size 12px
        color #8f8f94
        padding 2px 0 2px 10px
    }
    .sociologys{
        background-color #fff
    }
    .bboxs{
        border-bottom 1px solid #eee
    }
    .rightarr{
        float right
        padding-left 10px
        color #ccc
        .cubeic-arrow{
            padding-left 5px
            color #7e7e7e
        }
    }
    .heavy{
        height 10.5vh
        overflow hidden
        text-overflow ellipsis
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical
        padding-bottom 10px
    }
    .talkandzan{
        padding-left 76%
    }
     .cubeic-good{
        font-size 16px
        color orange
    }
    .cubeic-message{
        font-size 16px
        color orange
    }
    .talks{
        background-color #fff
        border-bottom 1px solid #eee
        font-size 14px
        padding 10px 10px 0 10px
        color #FF8C00
    }
    .pstyle{
        margin 0
        padding-top 5px
        padding-left 17%
        padding-right 1%
    }
    // .active {
    //     color red
    // }
    .perName{
        padding 1vh 0 0 1vh
    }
    .comments{
        padding-left 45px
        padding-right 10px
        background-color #fff
    }
</style>