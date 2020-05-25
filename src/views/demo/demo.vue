<template>
    <div class="coontainers">
        <van-sticky>
            <div class="conpany">
                顾家家居股份有限公司
            </div>
        </van-sticky>
        <div class="footer">
            <div>
                
                <div class="aprtmenttss">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                        :offset="10"
                        >
                        <div class="departs" v-for="items in personList" v-if="showFlag">
                            <div class="bumen">{{items.content}}</div>
                            <div v-for="item in items.a01s" :key="item.id" class="cellstyle">
                                <a @click="passIn(item)">
                                    <span><img class="touxiang" src="../../assets/lunbotu1.jpg" alt=""> </span><span> {{item.a0101}}</span>
                                </a>
                            </div>
                        </div>
                        <div v-for="item in perList" :key="item.id" class="cellstyle">
                            <a @click="passIn(item)">
                                <span><img class="touxiang" src="../../assets/lunbotu1.jpg" alt=""> </span><span> {{item.a0101}}</span>
                            </a>
                        </div>
                    </van-list>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
        personList: [
          
        ],
        perList: [],
        loading: false,
        finished: false,
        page: 1,
        pageSize: 10,
        total: '',
        arrayList:[],
        pageList:[],
        pageIndex:1,
    };
  },
  created(){
    //   localStorage.setItem('a0188',100220)
  },
  mounted(){
    //   this.getAchList()
      // this.getApartList()
      console.log(this.personList)
  },
  methods:{
      //获取部门信息
      // getApartList(){
      //     let queryData = {}
      //     queryData.a0188 = localStorage.getItem('a0188')
      //     getApart(queryData).then(res=>{
      //       console.log(res);
      //       this.departList = res.data
      //       // debugger
      //       var that = this
      //       for(let i in that.departList){
      //           var depsrtperson = {}
      //           depsrtperson.content = that.departList[i].content
      //           depsrtperson.a01s = that.departList[i].a01s
      //           that.personList.push(depsrtperson)
      //       }
      //       //   console.log(that.personList)
      //     })
      // },
      passIn(item){
        console.log(item);
        localStorage.setItem('otherinfo',item.a0188)
        this.$router.push({name:'achievementsOtherInfo'})
      },
      onLoad() {
          console.log('执行了onload方法')
      // 异步更新数据
    //   console.log( this.pageIndex)
    //   var len = this.pageIndex + 30;
    let that = this
      setTimeout(() => {
        let person = [{
            content: '一部门',
            a01s: [
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
              {a0101: '王五'},
            ]
          },
          {
            content: '二部门',
            a01s: [
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
              {a0101: '张三'},
            ]
          },
          {
            content: '三部门',
            a01s: [
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
              {a0101:'李四'},
            ]
          }]
          // console.log(person);
          debugger
          let listData = []
          for(let k in person){
            listData.push(person[k].a01s)
          }
        // let DataItem=[listData.slice()]
        // for (let i=0;i<DataItem.length;i++){
        //   for (let j=0;j<DataItem[i].length;j++){
        //     that.personList.push(DataItem[i][j])
        //   }
        // }
        that.personList = listData
        // that.pageIndex++  // 页数递增

        that.loading = true
      }, 500);

        // 加载状态结束
        that.loading = false;

        console.log(that.personList);
        

        // 数据全部加载完成
        // if (this.personList.length === person.length) {
        //   this.finished = true;
        // }
    },
  },
  watch:{}
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
    .menuOptions{
        display flex
        height 100px
        padding-left 10px
        text-align left
        font-size 16px
    }
    .search{
        background-color #4FC08D
        height 7.5vh
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
        background-color #fff
        border-radius 5px
        padding-bottom 10vh
    }
    .aprtmenttss{
        width 100%
        padding 1vh 0 0 10px
        font-size 14px
        color black
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
        width 10vw
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
        border-bottom 1px solid #ccc
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
    }
</style>