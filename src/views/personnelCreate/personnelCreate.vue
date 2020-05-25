<template>
    <div class="container">
        <mt-header title="基本信息">
            <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="personMessage">
            <div class="personMessageInfo"><i class="cubeic-smile" style="color:red"></i><span class="message">基本信息</span><i style="float:right" class="cubeic-arrow"></i></div>
            <div>
                <div style="float:left;margin-top:10px"><img style="width:60px;height:60px" src="" alt=""></div>
                <div class="messageDetail">
                    <div class="boxInfo"><span style="font-weight:700;font-size:15px">张三丰</span> <span> |男|100岁</span></div>
                    <div class="boxInfo" style="font-weight:700;font-size:14px">大专</div>
                    <div class="boxInfo"><span>计算机</span><span style="margin-left:10px">毕业时间：2012-1014</span></div>
                </div>
            </div>
        </div>
        <div class="personMessage">
            <div class="personMessageInfo"><i class="cubeic-credit-card" style="color:red"></i><span class="message">顾家工作经历</span><i style="float:right" class="cubeic-arrow"></i></div>
            <div>
                <div class="classification"><span class="workTitle">岗 位</span> <span class="workContent">人力资源信息系统专员</span></div>
                <div class="classification"><span class="workTitle">时间</span> <span class="workContent">2013.9-2014.9</span></div>
                <div class="classification"><span class="workTitle">单位</span> <span class="workContent">IT</span></div>
            </div>
        </div>
        <div class="personMessage">
            <div class="personMessageInfo"><i class="cubeic-credit-card" style="color:red"></i><span class="message">社会工作履历</span><i style="float:right" class="cubeic-arrow"></i></div>
            <div>
                <div class="classification"><span class="workContent">2016/07 - 至今</span></div>
                <div class="classification"><span class="workTitle">单位</span> <span class="workContent">IT</span></div>
                <div class="classification"><span class="workTitle">部门</span> <span class="workContent">开发部</span></div>
                <div class="classification"><span class="workTitle">岗位</span> <span class="workContent">java开发</span></div>
            </div>
        </div>
        <button @click="ceshi">测试ding</button>
    </div>
</template>
<script>
import { setDDConfig } from "@/api/dd";
export default {
  data () {
    return {
        corpId: '',
        appId: ''
    };
  },
  created(){
    setDDConfig().then(res=>{
        console.log(res);
        this.corpId = res.corpId,
        this.appId = res.agentid
        console.log(this.corpId)
        console.log(this.appId)
    })
  },
  methods:{
      ceshi(){
        let that = this
        dd.biz.ding.create({
            users : ['100', '101'],// 用户列表，工号
            corpId: that.corpId, // 企业id
            type: 1, // 附件类型 1：image  2：link
            alertType: 2, // 钉发送方式 0:电话, 1:短信, 2:应用内
            alertDate: {"format":"yyyy-MM-dd HH:mm","value":"2015-05-09 08:00"},
            attachment: {
                images: [''],
            }, // 附件信息
            text: '',  // 正文
            bizType :0, // 业务类型 0：通知DING；1：任务；2：会议；
            confInfo:{
            bizSubType:0, // 子业务类型如会议：0：预约会议；1：预约电话会议；2：预约视频会议；（注：目前只有会议才有子业务类型）
            location:'某某会议室' , //会议地点；（非必填）
            startTime:{"format":"yyyy-MM-dd HH:mm","value":"2015-05-09 08:00"},// 会议开始时间
            endTime:{"format":"yyyy-MM-dd HH:mm","value":"2015-05-09 08:00"}, // 会议结束时间
            remindMinutes:30, // 会前提醒。单位分钟-1：不提醒；0：事件发生时提醒；5：提前5分钟；15：提前15分钟；30：提前30分钟；60：提前1个小时；1440：提前一天；
            remindType:2 // 会议提前提醒方式。0:电话, 1:短信, 2:应用内
            },
        
            taskInfo:{
            ccUsers: ['100', '101'], // 抄送用户列表，工号
            deadlineTime:{"format":"yyyy-MM-dd HH:mm","value":"2015-05-09 08:00"} , // 任务截止时间
            taskRemind:30// 任务提醒时间，单位分钟0：不提醒；15：提前15分钟；60：提前1个小时；180：提前3个小时；1440：提前一天；
            },
        
            onSuccess : function() {
                //onSuccess将在点击发送之后调用
            },
            onFail : function() {}
        })
      }
  }
}
</script>
<style lang="stylus">
    .container{
        padding 8px
        background-color #eee
    }
    .personMessage{
        margin-top 10px
        width 100%
        padding 10px
        height 150px
        background-color #fff
        border-radius 5%
        box-shadow 2px 2px 2px #ccc
    }
    .personMessageInfo{
        border-bottom 1px solid #ccc
    }
    .message{
        margin-left 5px
        font-size 14px
        font-weight 700
    }
    .messageDetail{
        float left
        margin-left 6px
    }
    .boxInfo{
        margin-top 6px
        font-size 12px
    }
    .workTitle{
        font-size 14px
    }
    .workContent{
        font-size 14px
        font-weight 700
    }
    .classification{
        margin-top 6px
    }
</style>