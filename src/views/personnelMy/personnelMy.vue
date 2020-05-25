<template>
    <div>
        <!-- <mt-header title="我的简历" style="background-color:#fff">
            <router-link to="/personnelTop" slot="left">
            <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header> -->
        <div class="marginside">
            <div class="myContents">
                <div class="phone"><i class="cubeic-person" style="color:#FF8D4D"></i> 基本信息</div>
                <div class="messageInfo"><span class="resuName">{{resumeData.a0101}}</span><span class="spann">{{resumeData.a0107}}</span><span class="spann">{{resumeData.a01101}}</span></div>
                <div class="messageInfo"><span>专业：{{resumeData.a011971}}</span><span class="spann">学历：{{resumeData.a01504}}</span></div>
                <div class="messageInfo"><span>毕业院校：{{resumeData.a011901}}</span></div>
                <div class="messageInfo"><span>毕业时间：{{resumeData.a0141}}</span></div>
            </div>
            <div class="experience">
                <div class="phone"><i class="cubeic-credit-card" style="color:#FF8D4D"></i> 顾家工作经历</div>
                <ul v-for="item in kukaExperiences" :key="item.employeeId">
                    <li class="times">时间：{{item.a802007}}</li>
                    <li class="workCompy">单位：{{item.a802008}}</li>
                    <li class="workCompy">岗位：{{item.a802009}}</li>
                </ul>
            </div>
            <div class="sociology">
                <div class="phone"><i class="cubeic-calendar" style="color:#FF8D4D"></i> 社会工作履历</div>
                <ul v-for="item in sociologyExperiences" :key="item.employeeId">
                    <li class="times">时间：{{item.a891}}</li>
                    <li class="workCompy">岗位：{{item.a896}}</li>
                    <li class="workCompy">单位：{{item.a894}}</li>
                </ul>
            </div>
        </div>
        <!-- <div class="button"><cube-button @click="updateMessage" :outline="true" inline style="width:45%">修改信息</cube-button><cube-button @click="finish" style="margin-left:20px;width:45%" :primary="true" inline>完成</cube-button></div> -->
        <div class="butts">
            <div class="inColors" @click="updateMessage">修改信息</div>
            <div class="outColors" @click="finish">完成</div>
        </div>
    </div>
</template>
<script>
import { getResumeDetail,getResumeDetails } from './api'
export default {
  data () {
    return {
        resumeData: [],
        kukaExperiences: [{}],
        sociologyExperiences: [{}],
    };
  },
  created(){
    //   this._getResumeDetails()
      this._getResumeDetail()
  },
  methods:{
    // 修改我的简历信息
    updateMessage(){
        this.$router.push({name:'personnelMyUpdate'})
    },
    //完成
    finish(){
        // alert('222')
        this.$router.push({name:'personnelTop'})
    },
    _getResumeDetail(){
        if(localStorage.getItem('getJobNumber') !== ''){
            getResumeDetail(this.a0190 = localStorage.getItem('getJobNumber')).then(res=>{
                // console.log(res);
                // localStorage.setItem('getemployeeId',res.data.employeeId)
                this.resumeData = res.data
                this.kukaExperiences = this.resumeData.kukaWorkExperiences
                this.sociologyExperiences = this.resumeData.sociologyWorkExperiences
                // console.log(this.resumeData);
                this.$store.commit('getemployeeId',this.resumeData.employeeId) 
            })
        }else{
            getResumeDetails(this.a01274 = localStorage.getItem('getMobile')).then(res=>{
                console.log(res);
                this.resumeData = res.data
                this.kukaExperiences = this.resumeData.kukaWorkExperiences
                this.sociologyExperiences = this.resumeData.sociologyWorkExperiences
                // console.log(this.resumeData);
                this.$store.commit('getemployeeId',this.resumeData.employeeId) 
            })
        }
            
    },
  }
}
</script>
<style lang="stylus">
    .container{
        background-color #fff
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
        margin-top 8px
        border-radius 8px
    }
    .experience{
        // height 160px
        background-color #fff
        margin-top 8px
        // overflow-y: auto
        border-radius 8px
    }
    .phone{
        line-height 30px
        border-bottom 1px solid #eee
        margin-bottom 4px
        font-size 14px
        font-weight 700
        color #7E7E7E
        margin-left 10px
    }
    .messageInfo{
        font-size 14px
        color black
        margin-left 10px
    }
    .sociology{
        background-color #fff
        margin-top 8px
        border-radius 8px
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
    .butts{
        position fixed
        // left 2%
        bottom 9px
        width 100%
        padding: 10px
        bottom: 0
        background-color #fff
    }
    .marginside{
        padding 10px
        background-color #fff
    }
    .times{
        color #ccc
    }
    .workCompy{
        color #3E4146
    }
    .resuName{
        color #3E4146
        // font-size 14px
        font-weight 700
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
</style>