<template>
    <div>
        <div class="outviewBox">
          <div class="viewBox">
              <span v-for="item in personList" :key="item.id">
                  <!-- <img class="actor" src="../../assets/沙漏.png" alt=""> -->
                  <i>{{item.a0101}}</i>
                  <van-icon class="icon" name="cross" @click="deleteOne(item)" />,
              </span>
              <span @click="shield">
                <i class="cubeic-add"></i>
              </span>
          </div>
      </div>
    </div>
</template>
<script>
import { getPeopleList,deletePeople } from './api'
import { Notify,Icon } from 'vant'
export default {
  data () {
    return {
      personList: []
    };
  },
  created(){
      this._getPeopleList()
  },
  methods:{
    //获取分享/屏蔽的人员
    _getPeopleList(){
        let queryData = {}
        let type = this.$route.params.sharetype
        if(type == 0){
            //分享的类型是1
            queryData.shareShieldType = 1
            queryData.recordid = localStorage.getItem('myrecordid')
            getPeopleList(queryData).then(res=>{
              this.personList = res.data
            })
        }else{
            //屏蔽的类型是2
            queryData.shareShieldType = 2
            queryData.recordid = localStorage.getItem('myrecordid')
            getPeopleList(queryData).then(res=>{
              this.personList = res.data
            })
        }
    },
    //分享
    share(){
      localStorage.setItem('myflag',0)
      this.$router.push({name:'achaaPicker1'})
    },
    //屏蔽
    shield(){
      localStorage.setItem('myflag',1)
      this.$router.push({name:'achaaPicker1'})
    },
    //删除某个人
    deleteOne(item){
        // console.log(item)
        for(var i in this.personList){
            if(this.personList[i].a0188 == item.a0188){
                this.personList.splice(i,1)
            }
        }
      let queryData = {}
      queryData.userShareShieldId = item.userShareShieldId
      deletePeople(queryData).then(res=>{
        Notify({ type: 'success', message: '已删除' })
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .outviewBox{
        padding 5px 5px 0 5px
        .viewBox{
            border 1px solid #eee
            padding 5px
            i{
                font-style normal
                font-size 12px
            }
            .cubeic-add{
              font-size 20px
              color #ccc
            }
        }
    }
    .actor{
        border-radius 50%
        border 1px solid #eee
        vertical-align middle
        width 35px
        height 35px
    }
    .icon{
      color #f00
    }
</style>