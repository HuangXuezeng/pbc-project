<template>
    <div class="coontainers">
        <!-- <mt-header title="发现">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header> -->
        <div class="swipe">
            <!-- <mt-swipe :auto="4000">
                <mt-swipe-item><img class="imgs" src="../../assets/banner.png" alt=""></mt-swipe-item>
                <mt-swipe-item><img class="imgs" src="../../assets/lunbotu1.jpg" alt=""></mt-swipe-item>
            </mt-swipe> -->
        </div>
        <div class="menuOptions">
            <div class="menuImgs">
                <router-link to="/personnelMy">
                    <img class="images" src="../../assets/简历.png" alt="">
                    <span class="myPersonnel">我的简历</span>
                </router-link>
            </div>
            <div class="menuImgs">
                <router-link to="/personnelApply">
                    <img class="images" src="../../assets/沙漏.png" alt="">
                    <span class="myPersonnel">申请记录</span>
                </router-link>
            </div>
            <div class="menuImgs">
                <router-link to="/personnelRults">
                    <img class="images" src="../../assets/规则.png" alt="">
                    <span class="myPersonnel">规则</span>
                </router-link>
            </div>
            
        </div>
        <div class="search">
            <div class="fl"><input type="text" v-model="textValue" style="border-radius:0;border-bottom-left-radius:5px;border-top-left-radius:5px"></div><div class="fr" @click="searchApartment"><i class="cubeic-search"></i></div>
        </div>
        <div class="footer" v-for="(item,index) in positionData" :key="item.orderid">
            <a @click="passInfo(index,item)">
                <div class="aprtment">
                    <span class="departments">{{item.content}}</span><span class="postCount">岗位数：<i>{{item.positionCount}}</i></span>
                </div>
            </a>
        </div>
        <div>
        </div>
    </div>
</template>
<script>
import { getPostList,getPostLists,searchPostList,getResumeDetail } from './api'
export default {
  data () {
    return {
        positionData: [{}],
        postId: '',
        textValue: '',
        postName: ''
    };
  },
  created(){
      
  },
  mounted(){
    this._getPostList()
    this._getResumeDetail()
    // console.log(localStorage.getItem('getemployeeId'))
    // console.log(localStorage.getItem('getName'))
  },
  methods:{
      _getPostList(){
        getPostList().then(res=>{
            this.positionData = res.data
            // console.log(this.positionData); 
        })
      },
    passInfo(index,item){
        console.log(item);
        // console.log(this.postName);
        // console.log(item.content.search(this.postName) != -1);
        localStorage.setItem('getApartmentName',item.content)
        //判断是否包含搜索框的关键字
        if(item.content.search(this.postName) != -1){
            let getDatas = {}
            getDatas.applicationdepartment = item.content
            getDatas.effectiveFlag = 1
            getDatas.content = this.postName
            getDatas.rows = 100
            getDatas.page = 1
            getPostLists(getDatas).then(res=>{
                // console.log(res);
            localStorage.setItem('getDatas',JSON.stringify(res.data.itemList))
            this.$router.push({name:'personnelIndex'})
            })
        }else{
            let getDatas = {}
            getDatas.applicationdepartment = item.content
            getDatas.effectiveFlag = 1
            getDatas.name = this.postName
            getPostLists(getDatas).then(res=>{
                // console.log(res);
                localStorage.setItem('getDatas',JSON.stringify(res.data.itemList))
                this.$router.push({name:'personnelIndex'})
            })
        }
      },
      searchApartment(){
          let contentData = {}
          contentData.grade = 2
          contentData.content = this.textValue
          this.postName = this.textValue
          searchPostList(contentData).then(res=>{
              this.positionData = res.data
              console.log(this.positionData)
          })
        // alert(this.textValue)
      },
      //获取简历
      _getResumeDetail(){
        getResumeDetail(this.a0190 = localStorage.getItem('getJobNumber')).then(res=>{
            // console.log(res.data.employeeId);
            localStorage.setItem('getemployeeId',res.data.employeeId)
            localStorage.setItem('getName',res.data.a0101)
        })
    }
  }
}
</script>
<style lang="stylus">
    .coontainers{
        background-color #fff
    }
    .imgs{
        display block
        width 100%
        height 100%
        border 0
    }
    .swipe{
        height 23vh
        background url('../../assets/banner2.png') no-repeat 100% 20%
        background-size: cover
    }
    .menuOptions{
        display flex
        height 100px
        padding-left 10px
        margin-top 10px
        text-align left
        font-size 16px
    }
    .search{
        margin-top 10px
        height 30px
        line-height 30px
        padding 0 20px
    }
    .fl{
        float left
        height 30px
        width 80%
    }
    .fr{
        float right
        width 20%
        height 30px
        border 1px solid #ccc
        background-color: #eee
        text-align center
        border-bottom-right-radius: 5px
        border-top-right-radius: 5px
        border-left: 0
    }
    .footer{
        margin-top 10px
        padding 0 10px
        background-color #fff
        border-radius 5px
    }
    .aprtment{
        width 100%
        height 40px
        line-height 40px
        padding-left 10px
        margin-top 10px
        font-size 14px
        color black
        border-bottom 1px solid #eee
    }
    .mls{
        margin-left  10px
    }
    .postCount{
        color #8A8C8F
        float right
    }
    .menuImgs{
        flex 1
        line-height 15px
        text-align center
    }
    .myPersonnel{
        font-size 14px
        color black
    }
    .images{
        display block
        margin 6px auto
        width 50%
        height 62%
        border 0
        
    }
    input[type=text]{
        border: 1px solid #ccc !important
    }
    i{
        font-style normal
        color #FF9D67
    }
    .departments{
        color #393C41
    }
</style>