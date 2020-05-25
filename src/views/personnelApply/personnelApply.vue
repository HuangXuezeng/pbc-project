<template>
    <div class="containers">
        <!-- <mt-header title="申请记录">
            <router-link to="/personnelTop" slot="left">
            <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header> -->
        <div class="content" v-for="item in positionList" :key='item.positionId'>
            <div class="contentInfo"><span class="commissioner">{{item.name}}</span></div>
            <div class="contentInfo"><span></span><span class="right">{{item.jobLevel}}</span></div>
            <div class="contentInfo"><span class="company">{{item.education}}{{item.workYears}}</span></div>
             <div class="status" >
                <el-steps :active="item.active" finish-status="success" >
                    <el-step :title="item.title1"></el-step>
                    <el-step :title="item.title2"></el-step>
                    <el-step :title="item.title3"></el-step>
                </el-steps>
                <!-- <button @click="next">下一步</button> -->
            </div>
        </div>
        
    </div>
</template>
<script>
import { getPositionApply } from './api'
export default {
  data () {
    return {
        topNev:'1',
        selected:'1',
        active: 0,
        positionList: [],
        title1: '',
        title2: '',
        title3: '',
    };
  },
  created(){
      this._getPositionApply()
  },
  methods:{
    //    next() {
    //     if (this.active++ > 2) this.active = 0;
    //   },
      _getPositionApply(index,item){
          this.positionList = []
        //   console.log(item);
          getPositionApply(this.employeeId = localStorage.getItem('getemployeeId')).then(res=>{
              console.log(res);
            for(var i in res.data){
                switch(res.data[i].state){
                        case 1:
                        // 表达式的值和 值1匹配上了，需要执行的代码;
                            res.data[i].position.active = 1;
                            res.data[i].position.title1 = '投递成功'
                            res.data[i].position.title2 = ''
                            res.data[i].position.title3 = ''
                        break;
                        case 2:
                        // 表达式的值和 值2匹配上了，需要执行的代码;
                        res.data[i].position.active = 2;
                        res.data[i].position.title1 = '投递成功'
                        res.data[i].position.title2 = '初审通过'
                        res.data[i].position.title3 = ''

                        break;
                        case 3:
                        // 表达式的值和 值3匹配上了，需要执行的代码;
                        res.data[i].position.active = 3;
                        res.data[i].position.title1 = '投递成功'
                        res.data[i].position.title2 = '初审通过'
                        res.data[i].position.title3 = '应聘成功'
                        break;
                        case 4:
                            res.data[i].position.active = 2;
                            res.data[i].position.title1 = '投递成功'
                            res.data[i].position.title2 = '不通过'
                            res.data[i].position.title3 = ''

                        // this.title2 = '应聘成功'
                        // 表达式的值和 值3匹配上了，需要执行的代码;
                        break;
                        default:
                        // 如果表达式的值和以上的case后面的值都没有匹配上，那么就执行这里的代码。
                        break;
                    }
                this.positionList.push(res.data[i].position)
            }
          })
      },
  }
}
</script>
<style lang="stylus">
    .containers{
        padding 10px
    }
    .right{
        float right
        font-size 12px
    }
    .commissioner{
        font-size 14px
        font-weight 700
    }
    .content{
        margin-top 10px
        padding 10px
        height 158px
        background-color #fff
    }
    .contentInfo{
        margin-top 6px
    }
    .company{
        font-size 12px
    }
    .status{
        padding 10px
    }
</style>