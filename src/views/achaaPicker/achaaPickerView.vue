<template>
    <div class="outviewBox">
        <div class="viewBox">
            <span v-for="item in personList" :key="item.id">
                    <img class="actor" src="../../assets/timg.jpg" alt="">
                    <i>{{item.a0101}}</i>
                    <van-icon class="icon" name="cross" @click="deleteOne(item)" />,
            </span>
            <div class="btn">
                <van-button type="primary" size="mini" block @click="save">保存</van-button>
            </div>
        </div>
    </div>
</template>
<script>
import { getPeople,savePeople } from './api'
import { Notify,Button,Icon } from 'vant'
export default {
  data () {
    return {
        personList: []
    };
  },
  created(){
      this.getPeopleList()
  },
  methods:{
    //获取选中的人
    getPeopleList(){
    let queryData = {}
    // if(localStorage.getItem('myflag') == 1){
        //isfenAndpin = 1说明是选择人
        // debugger
        if(this.$route.params.isfenAndpin == 1){
            let itemList = {}
            itemList.a0188 = localStorage.getItem('picka0188')
            itemList.a0101 = localStorage.getItem('picka0101')
            this.personList.push(itemList)
        }else{
            queryData.deptCode = localStorage.getItem('pickdepCode')
            getPeople(queryData).then(res=>{
            console.log(res);
            if(res.data.itemList == ''){
                Notify({ type: 'warning', message: '该部门下无人员' })
                // this.$router.go(-1)
                return
            }else{
                this.personList = res.data
                // localStorage.setItem('personData',this.personList)
            }
          })
        }
    //   }
    },
    //保存相关人员/屏蔽人员
    save(){
        //myflag = 1 是屏蔽
        if(localStorage.getItem('myflag') == 1){
            // 这里是屏蔽
            for(let i in this.personList){
                this.personList[i].shareShieldType = 2
                this.personList[i].recordid = localStorage.getItem('myrecordid')
            }
            console.log(this.personList)
            let queryData = this.personList
            savePeople(queryData).then(res=>{
                
            })
            Notify({ type: 'success', message: '保存成功!即将跳转至屏蔽列表' })
            setTimeout(() => {
                this.$router.push({name:'shareshieldList1',params: {sharetype:1}})
            }, 1500);
        }else{
            // 这里是分享 myflag = 0 是分享
            for(let i in this.personList){
                this.personList[i].shareShieldType = 1
                this.personList[i].recordid = localStorage.getItem('myrecordid')
            }
            // console.log(this.personList)
            let queryData = this.personList
            savePeople(queryData).then(res=>{
                
            })
            Notify({ type: 'success', message: '保存成功!即将跳转至分享列表' })
            setTimeout(() => {
                this.$router.push({name:'shareshieldList',params: {sharetype:0}})
            }, 1500);
        }
    },
    //删除某个人
    deleteOne(item){
        // console.log(item)
        for(var i in this.personList){
            if(this.personList[i].a0188 == item.a0188){
                this.personList.splice(i,1)
            }
        }
        // console.log(this.personList)
    }
  }
}
</script>
<style lang="stylus" scoped>
    .outviewBox{
        padding 5px 5px 65px 5px
        background-color #fff
        .viewBox{
            border 1px solid #eee
            i{
                font-style normal
                font-size 12px
            }
            .btn{
                padding 5px
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