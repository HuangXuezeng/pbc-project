<template>
    <div class="containerr">
            <div class="marginsides" v-for="items in achlist" :key="items.recordid">
                <div class="myContents">
                    <div class="messageInfoos">
                        <span @click="uploadImg(items)"><img class="img" :src="items.potoURL" alt=""></span>
                        <!-- <span @click="uploadImg(items)"><img class="img" src="../../assets/liuchunxin.png" alt=""></span> -->
                        <span class="resuName">{{items.a0101}}</span><br>
                        <span class="resuNamess">岗位：<i style="color:black">{{items.mc0000}}</i></span>
                        <span class="resuNamesss">职级：<i style="color:#ccc">{{items.mc0000Two}}</i></span>
                        <span></span>
                    </div>
                </div>
                <div class="sociologys">
                    <div class="phones">
                        <div>
                            <div class="bboxs"><i class="cubeic-calendar" style="color:black;font-size:14px"> {{items.a832005}}年PBC</i></div>
                            <div class="heavys" @click="jixiaoInfo(items)">
                                <span>PBC要点:</span><br>
                                <div v-for="item in items.a831s" :key="item.aId">
                                    <span>
                                        {{item}}  
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="talkandzan clearfix">
                            <div class="itemstyle">
                                <span style="font-size:14px;color:#ccc;flex:1" @click="jixiaoUpdate(items)">
                                    <img class="zhaostyle" src="../../assets/edit.png" alt="">
                                    <span>修改</span>
                                </span>
                                <span style="font-size:14px;color:#ccc;flex:1;padding-left:10px" @click="jixiaoInfo(items)">
                                    <img class="zhaostyle" src="../../assets/download.png" alt="">
                                    <span>预览</span>
                                </span>
                                <!-- <span style="font-size:14px;color:#ccc;flex:1;padding-left:10px" @click="jixiaoDetail(items)">
                                    <img class="zhaostyle" src="../../assets/see.png" alt="">
                                    <span>详情</span>
                                </span> -->
                                <span style="font-size:14px;color:#ccc;flex:1;padding-left:10px" @click="share(items)">
                                    <img class="zhaostyle" src="../../assets/share.png" alt="">
                                    <span>分享</span>
                                </span>
                                <span style="font-size:14px;color:#ccc;flex:1;padding-left:10px" @click="shield(items)">
                                    <img class="zhaostyle" src="../../assets/shlid.png" alt="">
                                    <span>屏蔽</span>
                                </span>
                                <!-- <span style="font-size:14px;color:#ccc;flex:1;padding-left:10px" @click="shareList(items)">
                                    <img class="zhaostyle" src="../../assets/see.png" alt="">
                                    <span>分享列表</span>
                                </span>
                                <span style="font-size:14px;color:#ccc;flex:1;padding-left:10px" @click="shieldList(items)">
                                    <img class="zhaostyle" src="../../assets/see.png" alt="">
                                    <span>屏蔽列表</span>
                                </span> -->
                            </div>
                        </div>
                    </div>
                    <div class="comments">
                        <div class="talks">
                            <span style="color:black">评论区</span>
                            <span style="float:right">
                                    <span @click="isDianzan(items,$event)">
                                        <i class="cubeic-good" :class="{'active' : isDian > 0}"></i>
                                        <i style="color:#ccc">赞</i>
                                        <i style="color:#ccc;font-size:14px">{{items.count}}</i>
                                    </span>
                                   <span @click="openWrite(items)">
                                        <i class="cubeic-edit" style="padding-left:8px"></i>
                                        <i style="color:#ccc">评论</i>
                                        <i style="color:#ccc;font-size:14px">{{items.discussCount}}</i>
                                   </span>
                                    <i class="cubeic-more" @click="more(items)"></i>
                            </span>
                            
                        </div>
                        <div class="ping" v-for="item in items.discussAppreciates" :key="item.discussAppreciateId">
                            <div>
                                <span><img class="pinimg" src="../../assets/timg.jpg" alt=""></span>
                                <span class="perName"><i> {{item.a0101}} </i></span>
                                <span><i style="color:#8f8f94"> {{item.createTime}}</i></span>
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
        <van-popup
        v-model="showpopup"
        close-icon="close"
        position="bottom"
        :style="{ height: '50%' }"
        >
        <div style="padding:10px 10px 10px 10px">
            <span><van-button plain type="primary" size="mini" @click="cancel">取消</van-button></span>
            <span style="float:right"><van-button plain type="primary" size="mini" @click="comfirmCom">提交</van-button></span>
        </div>
        <van-field
            v-model="value"
            rows="4"
            autosize
            type="textarea"
            placeholder="评论一下吧~"
            />
            <div class="botpin">
                <!-- 表情 -->
                <div class="emotion-box" v-if="biaoqin">
                    <emotion :height="140" @emotion="handleEmotion"></emotion>
                </div>
            </div>
        </van-popup>
        <van-popup
        v-model="showImg"
        closeable
        close-icon="close"
        position="bottom"
        :style="{ height: '50%' }"
        >
            
            <div class="uploadimg">
                <!-- <van-uploader v-model="fileList" :after-read="afterRead"  :max-count="1" /> -->
                <cube-upload
                :action="actions"
                v-model="fileData"
                :simultaneous-uploads="1"
                @files-added="filesAdded"
                @file-success="successImg"
                :max="1" />
            </div>
            <div class="imgText">
                请选择要上传的图片~(选择后即上传)
            </div>
        </van-popup>
        <!-- 预览图片 -->
        <van-image-preview
        v-model="showpreview"
        :images="images"
        closeable
        @close="onClose"
        >
        </van-image-preview>
        <!-- 弹窗选人 -->
        <!-- <van-dialog v-model="showPick" title="选择" show-cancel-button>
            <van-field v-model="text" label="选人" label-width="40px" @click="picker"/>
        </van-dialog> -->
    </div>
</template>
<script>
import { getNew,getComment,deleteComment,addComment,updateMessage,uploadPhoto } from './api'
import { setDDConfig } from "@/api/dd";
import * as dd from "dingtalk-jsapi";
import Emotion from '@/components/Emotion/index'
import '../../components/comstyle/style.css'
import { List,Notify,Field,Popup,Button,ImagePreview,Dialog } from 'vant'
export default {
props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
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
        showpopup: false,
        showImg: false,
        biaoqin: false,
        commentList: [],
        fileList: [],
        fileData: [],
        actions: '',
        showpreview: false,
        images: [],
        
    };
  },
  created(){
    this.getNewList()
  },
  methods:{
      getNewList(){
        let queryData = {}
        queryData.a0188 = localStorage.getItem('a0188')
        getNew(queryData).then(res=>{
            // console.log(res);
            // debugger
            var itemList = []
            for(var i in res.data){
                var item = {}
                item.a0101 =res.data[i].a832.a0101
                item.a0190 =res.data[i].a832.a0190
                item.mc0000 =res.data[i].a832.a832019
                item.mc0000Two =res.data[i].a832.mc0000Two
                item.a832005 =res.data[i].a832.a832005
                item.a0188 = res.data[i].a832.a0188
                item.discussAppreciates =res.data[i].a832.discussAppreciateEntity.discussAppreciateList
                item.bflag = res.data[i].a832.discussAppreciateEntity.bflag
                item.count = res.data[i].a832.discussAppreciateEntity.count
                item.a832URL = res.data[i].a832.a832URL
                item.a832htmURL = res.data[i].a832.a832htmURL
                //登录进去没有头像就默认一个头像
                if(res.data[i].a832.potoURL == undefined || res.data[i].a832.potoURL == ''){
                    item.potoURL = require('@/assets/timg.jpg')
                }else{
                    item.potoURL = res.data[i].a832.potoURL
                }
                item.discussCount = res.data[i].a832.discussAppreciateEntity.discussCount
                item.a831s = res.data[i].a832.a832021s
                for(var t in item.a831s){
                    item.a831s[t] = Number(t)+1 +'.'+  item.a831s[t]
                }
                item.recordid = res.data[i].a832.recordid
                item.discussAppreciateId = res.data[i].a832.discussAppreciateEntity.discussAppreciateId
                itemList.push(item)
            }
            this.achlist = itemList
            // console.log(this.achlist)
            
        })
      },
    //评论
    //打开评论框
    openWrite(items){
        this.recordId = items.recordid
        this.commentList = items.discussAppreciates
        this.showpopup = true
        this.biaoqin = true
    },
    //添加评论表情
    handleEmotion(i){
        this.value += i
    },
    //下弹窗的提交评论
    comfirmCom(){
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
            var item = {}
            let y = new Date()
            item.a0101 = localStorage.getItem('a0101')
            item.createTime = this.formatDate(y)
            item.discuss = this.value
            this.commentList.push(item)
            this.value = ''
            this.showpopup = false

        }else{
            this.showpopup = false
            Notify({ type: 'danger', message: '评论空无法提交！' })
        }
    },
    //取消评论
    cancel(){
        this.showpopup = false
    },
    //点赞
    isDianzan(items,event){
        // console.log(items)
        // debugger
        this.recordId = items.recordid
        this.num = items.count
        // this.isDian = items.bflag
        this.zanId = items.discussAppreciateId
        // console.log(this.isDian+'fangfa');
        if(this.isDian == items.bflag){
            // console.log('if'+this.isDian);
            this.isDian = 1
            // this.num++
            let queryData = {}
            queryData.a0190 = localStorage.getItem('a0190')
            queryData.a0101 = localStorage.getItem('a0101')
            queryData.a0188 = localStorage.getItem('a0188')//首页保存的登录人
            queryData.performanceId = this.recordId
            queryData.typecode = 2
            addComment(queryData).then(res=>{
                
            })
            // this.getNewList()
            // this.$refs[`achlist${items}`][0].innerText++
            event.currentTarget.lastElementChild.innerText++
        }else{
            // console.log('else'+this.isDian);
            this.isDian = 0
            let queryData = {}
            queryData.discussAppreciateId = this.zanId
            queryData.a0190 = localStorage.getItem('a0190')
            queryData.a0101 = localStorage.getItem('a0101')
            queryData.a0188 = localStorage.getItem('a0188')//首页保存的登录人
            queryData.performanceId = this.recordId
            // console.log(event.currentTarget.lastElementChild.innerText);
            if(event.currentTarget.lastElementChild.innerText == 0){
                event.currentTarget.lastElementChild.innerText++
                let addData = {}
                addData.a0190 = localStorage.getItem('a0190')
                addData.a0101 = localStorage.getItem('a0101')
                addData.a0188 = localStorage.getItem('a0188')//首页保存的登录人
                addData.performanceId = this.recordId
                addData.typecode = 2
                addComment(addData).then(res=>{

                })
                return
            }
            deleteComment(queryData).then(res=>{
                // if(res.code == 1000){
                    
                    // this.$refs[`achlist${items}`][0].innerText--
                    
                // }else{
                //     Notify({ type: 'danger', message: '取消失败请重试！' })
                // }
            })
            event.currentTarget.lastElementChild.innerText--
        }
    },
    jixiaoInfo(items){
        // console.log(items)
        let urlimg = items.a832htmURL + '?dd_nav_bgcolor=FFFF3334'
        console.log(urlimg);
        
        location = urlimg
        // if(items.potoURL == undefined || items.potoURL == '' || items.potoURL == null){
        //     Notify({ type: 'danger', message: '无此人的PBC' })
        //     return
        // }else{
        //     this.images.push(items.a832URL)
        //     this.showpreview = true
        // }
    },
    //关闭预览的回调
    onClose(){
        this.images = []
    },
    //跳转到绩效详情
    // jixiaoDetail(items){
    //     // console.log(items)
    //     // location = items.a832htmURL
    //     localStorage.setItem('a832005detail',items.a832005)
    //     localStorage.setItem('a0188detail',items.a0188)
    //     localStorage.setItem('recordiddetail',items.recordid)
    //     this.$router.push({name:'achievementsMyInfo'})
    // },
    //修改（发送代办流程）
    jixiaoUpdate(items){
        // console.log(items)
        let queryData = {}
        queryData.recordid = items.recordid
        updateMessage(queryData).then(res=>{ 
            if(res.code == 1000){
                Notify({ type: 'success', message: '发送待办流程成功！' })
            }else{
                Notify({ type: 'success', message: `${res.message}` })
            }
        })
    },
    //查看更多评论
    more(items){
        // console.log(items)
        localStorage.setItem('moreRecordid',items.recordid)
        this.$router.push({name:'achevementsMore'})
    },
    //上传头像
    uploadImg(items){
        // console.log(items)
        // items.potoURL
        this.showImg = true
    },
    //选择上传图片
    filesAdded(){
        this.actions = `/pbcTom/visitor/pbc/imageUpload.htm?a0188=${this.achlist[0].a0188}`
        this.showImg = false
    },
    //上传成功后的回调
    successImg(file){
        // debugger
        var that = this
        // console.log(file.file)
        var files = file.file
        var reader = new FileReader(); //创建一个文件读取读取对象
        // console.log(reader)
        reader.readAsDataURL(files); //使用readAsDataURL（）方法，读取已获取的文件，并返回数据
        reader.onload = function() {
          //事件读取对象.onload 事件， onload事件 文件读取完成时触发
        //   that.src = reader.result;
        for (var i in that.achlist){
            // 将img的src属性等于数据
            that.achlist[i].potoURL = reader.result
        }
        //   console.log(reader.result);
        };
        that.showImg = false
    },
    //转换时间戳
    formatDate(date) {    
        var y = date.getFullYear();    
        var m = date.getMonth() + 1;    m = m < 10 ? '0' + m : m;    
        var d = date.getDate();    d = d < 10 ? ('0' + d) : d;       
        return y + '-' + m + '-' + d;  
    },
    // 将匹配结果替换表情图片
    emotion (res) {
      let word = res.replace(/\#|\;/gi,'')
      const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
      let index = list.indexOf(word)
      return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle" width="20px" height="20px">` 
    },
    //分享
    share (items) {
        localStorage.setItem('myrecordid',items.recordid)
        this.$router.push({name:'shareshieldList',params: {sharetype:0}})
        // localStorage.setItem('myflag',0)
        // this.$router.push({name:'achaaPicker1'})
    },
    //屏蔽
    shield(items){
        console.log(items)
        localStorage.setItem('myrecordid',items.recordid)
        this.$router.push({name:'shareshieldList1',params: {sharetype:1}})
        // localStorage.setItem('myflag',1)
        // this.$router.push({name:'achaaPicker1'})
    },
    // //进入分享列表
    // shareList(items){
    //     localStorage.setItem('sharerecordid',items.recordid)
    //     this.$router.push({name:'shareshieldList',params: {sharetype:0}})
    // },
    // //进入屏蔽列表
    // shieldList(items){
    //     localStorage.setItem('shileldrecordid',items.recordid)
    //     this.$router.push({name:'shareshieldList',params: {sharetype:1}})
    // }
  },
  components: {
    Emotion
  }
}
</script>
<style lang="stylus" scoped>
    i{
        font-style normal
    }
    .containerr{
        background-color #eee
        // padding-bottom 55px
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
        border-bottom 1px solid #eee
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
        width 12vw
        height 6vh
    }
    .myContents{
        background-color #fff
    }
    .phones{
        font-size 13px
        color #7E7E7E
        padding 0 10px 5px 18%
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
        padding-bottom 55px
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
        padding 0 10px 10px 0
    }
     .cubeic-good{
        font-size 16px
        color #ccc
    }
     .cubeic-edit{
        font-size 16px
        color #ccc
    }
    .cubeic-more{
        font-size 16px
        padding-left 8px
        color #ccc
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
    .zhaostyle{
        display block
        width 20px
        height 20px
        margin auto
    }
    .itemstyle{
        display flex
        float right
    }
    .uploadimg{
        text-align center
        padding-top 10vh
        padding-left 40%
    }
    .imgText{
        text-align center
        font-size 12px
        color #ccc
    }
</style>