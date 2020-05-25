<template>
    <div>
        <!-- 一级部门 -->
        <div class="sideBoxs">
            <div class="cellstyles" v-for="item in departList" :key="item.id">
                <span @click="passAll(item)">
                    {{item.content}}
                </span>
                <span class="flr" @click="passinfo(item)">下级<i class="cubeic-arrow"></i></span>
            </div>
            <!-- 人 -->
             <div class="cellstyles" v-for="item in personList" :key="item.a0188" @click="passin(item)">
                <span><img class="touxiang" :src="item.potoURL" alt=""></span>
                <span class="departmentss">{{item.a0101}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { getDepart } from './api'
export default {
  data () {
    return {
        departList: [],
        personList: [],
    };
  },
  created(){
      this.getDepartList()
  },
  methods:{
      getDepartList(){
        let queryData = {}
        queryData.removeType = 0
        queryData.deptCode = localStorage.getItem('depCodePicker3')
        getDepart(queryData).then(res=>{
            this.departList = res.data.b01s
            for(let i in res.data.a01s){
                if(res.data.a01s[i].potoURL == undefined || res.data.a01s[i].potoURL == ''){
                    res.data.a01s[i].potoURL = require('@/assets/timg.jpg')
                }
            }
            this.personList = res.data.a01s
        })
      },
      //选择部门下的所有人
      passAll(item){
        console.log(item)
        localStorage.setItem('pickdepCode',item.deptCode)
        this.$router.push({name:'achaaPickerView'})
      },
      //选择下级，继续往下选
      passinfo(item){
        console.log(item)
        localStorage.setItem('depCodePicker4',item.deptCode)
        this.$router.push({name:'achaaPicker6'})
      },
      //选择人
      passin(item){
        console.log(item)
        localStorage.setItem('picka0188',item.a0188)
        localStorage.setItem('picka0101',item.a0101)
        //isfenAndpin = 1说明是选择人
        this.$router.push({name:'achaaPickerView',params:{isfenAndpin:1}})
      }
  },
}
</script>
<style lang="stylus" scoped>
    .sideBoxs{
        padding-bottom 50px
    }
    .flr{
        float right
    }
    .cellstyles{
        width 100%
        height 60px
        line-height 50px
        padding-left 10px
        padding-top 4px
        font-size 14px
        color black
        background-color #fff
        border-bottom 1px solid #eee
    }
    .touxiang{
      float left
      border-radius 50%
      border 1px solid #eee
      vertical-align middle
      width 50px
      height 50px
    }
    .departmentss{
        color orange
        padding-left 5px
    }
</style>