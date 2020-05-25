<template>
    <div class="container">
        <div class="updates">
            <div class="gujia"><i class="cubeic-qr-code" style="color:#FF8D4D"></i> 修改顾家工作经历</div>
            <div>
                <mt-field label="时间" placeholder="请输入要修改的时间" v-model="startEndTime"></mt-field>
                <mt-field label="单位" placeholder="请输入要修改的单位" v-model="company"></mt-field>
                <mt-field label="岗位" placeholder="请输入要修改的岗位" v-model="post"></mt-field>
            </div>
        </div>
        <div class="updateShe">
            <div class="gujia"><i class="cubeic-qr-code" style="color:#FF8D4D"></i> 修改社会工作经历</div>
            <div>
                <mt-field label="时间" placeholder="请输入要修改的时间" v-model="startEndTime1"></mt-field>
                <mt-field label="单位" placeholder="请输入要修改的单位" v-model="company1"></mt-field>
                <mt-field label="岗位" placeholder="请输入要修改的岗位" v-model="post1"></mt-field>
            </div>
        </div>
        <div class="buttonom">
            <div class="outtColors" @click="finishDate">确认修改</div>
        </div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
import { getResumeDetail } from './api'
export default {
  data () {
    return {
        startEndTime: '',
        company: '',
        post: '',
        startEndTime1: '',
        company1: '',
        // apartment: '',
        post1: '',
    };
  },
  created(){
    //   console.log(localStorage.getItem('getJobNumber'));
    //   this._updateResume()
  },
  methods:{
      finishDate(){
        MessageBox.confirm('',{title:'提示',confirmButtonText:'确认修改？'}).then(action => {
            // this.$router.push({name:'personnelMy'})
            // alert('111')
                console.log(this.startEndTime,this.company,this.post);
          }).catch(err =>{
              if(err=='cancel'){
                Toast('已取消')
              }  
          });
    },
  }
}
</script>
<style lang="stylus">
    .container{
        background-color #fff
    }
    .updates{
        padding 10px
        background-color #fff
    }
    .gujia{
        height: 35px;
        line-height: 35px;
        font-size 14px
        font-weight 700
        padding-bottom 10px;
        padding-left 10px
        background-color #FFFAF7
        border-radius 8px
    }
    .cubein{
        width 60%
    }
    .updateShe{
        margin-top 10px
        padding 10px
        background-color #fff
    }
    .buttonom{
        position fixed
        bottom 9px
        width 100%
    }
    .mint-cell-wrapper{
        margin-top 8px
    }
    input[type=text]{
        border 0
    }
    .outtColors{
        width 90%
        margin 0 auto
        height 35px
        line-height 35px
        background-color #FF8D4D
        text-align center
        color #FFF
        border-radius 50px
    }
</style>