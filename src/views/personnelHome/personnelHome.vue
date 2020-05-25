<template>
    <div>
        <!-- <mt-header title="首页" style="background-color:#fff">
            <router-link to="/" slot="left">
            </router-link>
        </mt-header> -->
        <div class="bgc">
            <div class="bannerImg"></div>
            <div class="menu">
                <div class="inColor" @click="showPrompt">内部应聘</div>
                <div class="outColor" @click="compete">内部竞聘</div>
            </div>
        </div>
    </div>
</template>
<script>
// import { mapState } from 'vuex'
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
// import { getResumeDetail } from './api'
export default {
  data () {
    return {
        jobNum: ''
    };
  },
  computed:{
    // ...mapState({
        
    // })
  },
  created(){
    // console.log(localStorage.getItem('getJobNumber'));
    // console.log(localStorage.getItem('getMobile'));
  },
  methods:{
        showPrompt() {
            if(localStorage.getItem('getCode') == 1001){
                MessageBox.alert('您没有此项功能的权限！');
                return
            }else{
                this.$router.push({name:'personnelTop'})
            }
        },
        compete(){
            if(localStorage.getItem('getCode') == 1001){
                MessageBox.alert('您没有此项功能的权限！');
                return
            }else{
                MessageBox.alert('敬请期待！');  
            }  
        },
    }
  }
</script>
<style lang="stylus">
    .bgc{
        height 100vh
        background url('../../assets/bg3.png') no-repeat 50% 50%
        background-size cover
        -webkit-background-size cover
    }
    .bannerImg{
        width 100%
        height 200px
    }
    .mui-bar-tab .mui-tab-item {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
        background-color: #ccc;
        color: #333;
        }
        .menu{
            margin-top 80px
        }
        .inColor{
            height 45px
            line-height 45px
            width 90%
            margin 0 auto
            background-color #FF8D4D
            text-align center
            color #fff
            border-radius 50px
        }
        .outColor{
            height 45px
            line-height 45px
            width 90%
            margin 25px auto
            background-color #fff
            text-align center
            color #FF8D4D
            border-radius 50px
            border 1px solid #FF8D4D
        }
</style>