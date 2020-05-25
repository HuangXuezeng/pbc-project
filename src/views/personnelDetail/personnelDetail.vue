<template>
    <div class="container">
        <!-- <mt-header title="">
            <router-link to="/personnelIndex" slot="left">
            <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header> -->
        <div class="top" v-for="item in positionIdData" :key="item.positionId">
              <div class="headerTop">
                <div class="header">
                  <h4 style="color:#FF9D67">{{item.name}}</h4>
                  <span class="workPlace"><i class="cubeic-person">招聘 {{item.recruitNum}} 人</i><i class="cubeic-edit">{{item.education}}</i><i class="cubeic-time">{{item.workYears}}</i></span><br>
                  <span class="workPlaces">工作地点：{{item.workPlace}}</span>
                </div>
              </div>
              <div class="sideBox">
                  <div style="padding-left:10px"><h4>职位描述</h4></div>
                  <div class="description">
                      <span class="fonts">{{item.workContent}}</span>
                  </div>
                  <div style="padding-left:10px;margin-top:10px"><h4>任职资格</h4></div>
                  <div class="qualifications">
                    <span class="fonts">{{item.serviceCondition}}</span>
                </div>
              </div>
            <div class="button">
              <div class="inColorr" @click="showPrompt">咨询</div>
              <div class="outColorr" @click="sure">立即申请</div>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
import { MessageBox } from 'mint-ui';
import { getPostIdList,resumeDetail,pushDingText,queryHr } from './api'
export default {
  data () {
    return {
      positionIdData: [],
      pstionId: '',
      // getApartmentName: ''
      // PositionEmployeeRelation: ''
    };
  },
  created(){
    this.pstionId = localStorage.getItem('pstionId')
    // console.log(localStorage.getItem('getemployeeId'));
    this._getPostIdList()
    
  },
  mounted(){
    
  },
  methods:{
    _getPostIdList(){
      let positionDetail = {}
      positionDetail.positionId = this.pstionId
      positionDetail.employeeId = localStorage.getItem('getemployeeId')
      getPostIdList(positionDetail).then(res=>{
        console.log(res);
        localStorage.setItem('getApartmentName',res.data.applicationdepartment)
        localStorage.setItem('getPostName',res.data.name)
        // this.getApartmentName = res.data.applicationdepartment
        this.positionIdData.push(res.data)
        // console.log(this.positionIdData);
        
      })
    },
    showPrompt() {
      let queryData = {}
      queryData.positionId = this.pstionId
      queryData.departmentName = localStorage.getItem('getApartmentName')
      queryHr(queryData).then(res=>{
          // console.log(res)
          this.$createDialog({
          type: 'textarea',
          // icon: 'cubeic-alert',
          title: '咨询',
          content: `钉钉联系${res.data[0].userName}（${res.data[0].jobNumber}）`,
          confirmBtn: {
            text: '确定',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '取消',
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          // onConfirm: () => {
          //   this.$createToast({
          //     type: 'warn',
          //     time: 1000,
          //   }).show()
          // },
          onCancel: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '已取消'
            }).show()
          }
        }).show()
      })
    },
     sure() {
      var that = this
      let PositionEmployeeRelation = {}
      PositionEmployeeRelation.positionId = localStorage.getItem('pstionId')
      PositionEmployeeRelation.a0190 = localStorage.getItem('getJobNumber')
      PositionEmployeeRelation.employeeId = localStorage.getItem('getemployeeId')
      PositionEmployeeRelation.state = 1
      //  console.log(PositionEmployeeRelation);
       
       resumeDetail(PositionEmployeeRelation).then(res=>{
         console.log(res);
          //  alert(res.message)
          // if(localStorage.getItem('a0190') == '' || localStorage.getItem('a0190') == undefined){
          //   Toast({
          //         message: '当前没有您的简历信息，是否创建？',
          //         iconClass: 'iconfont icon-dagou',
          //         duration: 3000
          //     });
          //     that.$router.push({ path:'personnelMyUpdate'})
          // }else 
          if(res.message == '已经投递过该岗位信息'){
              Toast({
                  message: '已经投递过该岗位信息',
                  iconClass: 'iconfont icon-dagou',
                  duration: 3000
              });
           }else{
             let gongData = {}
             gongData.departmentName = localStorage.getItem('getApartmentName')
             gongData.url = `http://www.rc.kukahome.com:8880/hmspc/#/personnelResumes?employeeId=${localStorage.getItem('getemployeeId')}&positionId=${this.pstionId}&a0190=${localStorage.getItem('getJobNumber')}&applicationdepartment=${localStorage.getItem('getApartmentName')}&name=${localStorage.getItem('getPostName')}&a0101=${localStorage.getItem('getName')}`
             gongData.context = `有新的岗位信息待查看。 \n 部门：${localStorage.getItem('getApartmentName')} \n 投递岗位：${localStorage.getItem('getPostName')} \n 投递人：${localStorage.getItem('getName')}`
             pushDingText(gongData).then(res=>{
               
             })
              Toast({
                  message: '申请成功',
                  iconClass: 'iconfont icon-dagou',
                  duration: 3000
              });
              setTimeout(function(){
                that.$router.push({ path:'personnelTop'})
              }, 3000);
           }
       })
    },
  }
}
</script>
<style lang="stylus">
    .container{
        background-color #fff
    }
    .header{
      // height 130px
      padding 8px
      background-color #fff
      border-radius 10px
      box-shadow 3px 3px 3px  #eee
    }
    // .top{
    //    height 1000px
    //    background-color #fff
    // }
    span{
        font-size 12px
    }
    i{
        font-style normal
    }
    .is{
        display inline-block
        width 60px
        height 20px
        line-height 20px
        text-align center
        background-color #ccc
    }
    .description{
        margin-top 10px
    }
    .qualifications{
        margin-top 10px
        margin-left 10px
    }
    .button{
        position fixed
        width 100%
        height: 50px;
        padding: 1vh 0 0 4vw;
        background-color: #fff;
        bottom: 0;
    }
    .cubeic-edit{
      margin-left 6px
    }
    .cubeic-time{
      margin-left 6px
    }
    .headerTop{
      padding 55px 10px 0 10px
      height 230px
      background url('职位bg.png') no-repeat 50% 46%
      background-size: cover
    }
    .cubeic-person{
      color dimgray
      font-size 14px
    }
    .cubeic-edit{
      margin-left 20px
      color dimgray
      font-size 14px
    }
    .cubeic-time{
      margin-left 20px
      color dimgray
      font-size 14px
    }
    .workPlace{
      display block;
      margin-top 20px
      color #ccc
      font-size 14px
    }
    .workPlaces{
      color dimgray
      font-size 14px
    }
    h4{
      color #363A3F
      font-weight 700
    }
    .fonts{
      color dimgray
      font-size 14px
      padding-bottom 60px
    }
    .inColorr{
          float left
          height 35px
          line-height 35px
          width 30%
          background-color #fff
          text-align center
          color #FF8D4D
          border-radius 50px
          border 1px solid #FF8D4D
      }
      .outColorr{
          float left
          margin-left 20px
          width 60%
          height 35px
          line-height 35px
          background-color #FF8D4D
          text-align center
          color #FFF
          border-radius 50px
      }
      .sideBox{
        padding: 10px
        background: #fff
      }
    
</style>