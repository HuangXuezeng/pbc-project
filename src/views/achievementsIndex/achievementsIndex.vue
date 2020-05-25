<template>
    <div class="coontainers">
        <van-sticky>
            <!-- <div class="conpany">
                顾家家居股份有限公司
            </div> -->
            <div class="search">
                <div class="fl"><input type="text" placeholder="请输入要搜索的内容..." v-model="textValue" style="border-radius:0;border-bottom-left-radius:15px;border-top-left-radius:15px;font-size:12px"></div><div class="fr" @click="searchApartment"><i class="cubeic-search"></i></div>
            </div>
        </van-sticky>
        <!-- <div class="menuOptions">
            <div class="menuImgs">
                <router-link to="/achievementsMy">
                    <img class="images" src="../../assets/简历.png" alt="">
                    <span class="myPersonnel">我的绩效</span>
                </router-link>
            </div>
            <div class="menuImgs">
                <router-link to="/achievementsNew">
                    <img class="images" src="../../assets/沙漏.png" alt="">
                    <span class="myPersonnel">最新</span>
                </router-link>
            </div>
            <div class="menuImgs">
                <router-link to="/achievementsResult">
                    <img class="images" src="../../assets/规则.png" alt="">
                    <span class="myPersonnel">规则</span>
                </router-link>
            </div>
            
        </div> -->
        <div class="footer">
            <div>
                
                <div class="aprtmenttss" v-for="items in personList" v-if="showFlag">
                    <!-- <van-list
                        v-model="loading"
                        :finished="finished"
                        :immediate-check="false"
                        finished-text="没有更多了"
                        @load="onLoad"
                        :offset="10"
                        > -->
                        <div class="departs">
                            <div class="bumen">{{items.content}}</div>
                            <div v-for="item in items.a01s" :key="item.id" class="cellstyle">
                                <a @click="passIn(item)">
                                    <span><img class="touxiang" src="../../assets/timg.jpg" alt=""> </span><span style="padding-left:10px;color:dimgray;font-size:15px"> {{item.a0101}}</span>
                                </a>
                            </div>
                        </div>
                        <div v-for="item in perList" :key="item.id" class="cellstyle">
                            <a @click="passIn(item)">
                                <span><img class="touxiang" src="../../assets/timg.jpg" alt=""> </span><span style="padding-left:10px;color:dimgray;font-size:15px"> {{item.a0101}}</span>
                            </a>
                        </div>
                    <!-- </van-list> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getAch,getPerson,getApart,searchApart } from './api'
import { Notify,Search,Sticky,List } from 'vant'
export default {
  data () {
    return {
        showFlag: true,
        textValue: '',
        postName: '',
        achlist: [],
        performanceList: [],
        departList: [],
        personList: [],
        perList: [],
        loading: false,
        finished: false,
        page: 1,
        pageSize: 10,
        total: '',
        arrayList:[],
        pageList:[],
        pageIndex:0,
    };
  },
  created(){
  },
  mounted(){
    //   this.getAchList()
      this.getApartList()
  },
  methods:{
      //搜索相关绩效
      searchApartment(){
          this.showFlag = false
          this.loading = false
          this.finished = true
        //console.log(this.textValue);
        if(this.textValue == ''){
            Notify({ type: 'warning', message: '请填写想要搜索人姓名或者部门' })
        }else{
            let queryData = {}
            //搜索的人名 或者 部门名
            queryData.a0188 = localStorage.getItem('a0188')
            queryData.content = this.textValue
            searchApart(queryData).then(res=>{
                // console.log(res);
                // this.departList = res.data.b01s
                this.perList = res.data.a01s
                // console.log(this.perList);
            })
            //跳转到搜索结果页面
            // this.$router.push({name:'achievementsSearch',params:{personName:this.textValue}})
        }
      },
      //获取绩效信息
      getAchList(){
        let queryData = {}
        queryData.a0188 = localStorage.getItem('a0188')
        getAch(queryData).then(res=>{
            // console.log(res.data.a01);
            localStorage.setItem('a0101',res.data.a01.a0101)
            localStorage.setItem('a0190',res.data.a01.a0190)
            localStorage.setItem('aindex0188',res.data.a01.a0188)
            // console.log(localStorage.getItem('aindex0188'));
            
        })
      },
    //   //获取人员信息
    //   getPersonList(){
    //       let queryData = {}
    //       queryData.a0188 = localStorage.getItem('a0188')
    //       getPerson(queryData).then(res=>{
    //         //   console.log(res);
    //           this.personList = res.data.itemList
    //           console.log(this.personList);
              
    //       })
    //   },
      //获取部门信息
      getApartList(){
          let queryData = {}
          queryData.a0188 = localStorage.getItem('a0188')
          getApart(queryData).then(res=>{
            console.log(res);
            this.departList = res.data
            // debugger
            var that = this
            for(let i in that.departList){
                var depsrtperson = {}
                depsrtperson.content = that.departList[i].content
                depsrtperson.a01s = that.departList[i].a01s
                that.personList.push(depsrtperson)
            }
            //   console.log(that.personList)

            //做加载效果

            // that.personList.forEach(item=>{
            //     var obj = {
            //         a0101:item.content,
            //         a0188:'title'
            //     }
            //     that.arrayList.push(obj)
            //     item.a01s.forEach(el=>{
            //         // console.log(el)
            //         that.arrayList.push(el)
            //     })
            // })
            // var len = that.pageIndex + 20;
            // for ( that.pageIndex = 0; that.pageIndex < len; that.pageIndex++) {
            //     that.pageList.push( that.arrayList[that.pageIndex])
                
            // }
            // console.log(that.pageList)
          })
      },
      passIn(item){
        console.log(item);
        localStorage.setItem('otherinfo',item.a0188)
        this.$router.push({name:'achievementsOtherInfo'})
      },
      onLoad() {
          
      // 异步更新数据
    //   console.log( this.pageIndex)
    //   var len = this.pageIndex + 30;
    //   setTimeout(() => {

    //        for ( this.pageIndex ; this.pageIndex < len; this.pageIndex++) {
    //             this.pageList.push( this.arrayList[this.pageIndex])
                
    //         }
    //       this.loading = true
    //   }, 500);

    //     // 加载状态结束
    //     this.loading = false;

        // 数据全部加载完成
        // if (this.personList.length >= this.total) {
        //   this.finished = true;
        // }
    },

    // spaliceArr(arrAll){
    //     //循环分割数组，以4个为一组
    //     var allData = []; //用来装处理完的数组
    //     var currData = []; //子数组用来存分割完的数据
    //     //循环需要处理的数组
    //     for(var i = 0; i < arrAll.length; i++) {
    //         //将arrAll[i]添加到子数组
    //         currData.push(arrAll[i]);
    //         //在这里求4的余数,如果i不等于0,且可以整除 或者考虑到不满4个或等于4个的情况就要加上  i等于当前数组长度-1的时候
    //         if((i != 0 && (i + 1) % 20 == 0) || i == arrAll.length - 1) {
    //             //把currData加到allData里
    //             allData.push(currData);
    //             //在这里清空currData
    //             currData = [];
    //         }
    //     };
    //     return allData
    // },
  },
  watch:{}
}
</script>
<style lang="stylus">
    .coontainers{
        background-color #eee
    }
    .imgs{
        display block
        width 100%
        height 100%
        border 0
    }
    .menuOptions{
        display flex
        height 100px
        padding-left 10px
        text-align left
        font-size 16px
    }
    .search{
        background-color #f00
        height 8.5vh
        line-height 3vh
        padding 10px
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
        line-height 30px
        border 1px solid #ccc
        text-align center
        border-bottom-right-radius: 15px
        border-top-right-radius: 15px
        border-left: 0
        background-color #fff
    }
    .footer{
        border-radius 5px
        padding-bottom 10vh
    }
    .aprtmenttss{
        width 100%
        padding 1vh 0 0 10px
        background-color #fff
        font-size 14px
        color black
        margin-top 10px
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
    .istyle{
        font-style normal
        color #FF9D67
    }
    .cubeic-search {
        font-style normal
        color #ccc
    }
    .departments{
        color #393C41
    }
    .cubeic-arrow{
        float right
    }
    .touxiang{
        float left
        width 12vw
        height 6vh
    }
    .departmentss{
        color orange
        padding-left 5px
    }
    input::-webkit-input-placeholder {
       color: #aab2bd;
       font-size: 12px;
    }
    .departs{
        color: #ccc;
        font-size: 14px;
    }
    .cellstyle{
        border-bottom 1px solid #eee
        padding 5px 0 5px 0
        height 8vh
        line-height 5.5vh
    }
    .conpany{
        height 6vh
        line-height 6vh
        padding-left 10px
        font-size 14px
        background-color #f00
        color #fff
    }
    .bumen{
        border-bottom 1px solid #eee
        color dimgray
        font-size 15px
        padding 5px 0 5px 0
        font-weight: 700
    }
</style>