import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/achievementsBotNav/achievementsNew',
      // component: Layout,
      // children:[{

      // }]

    },
    {
      path:'/achievementsBotNav',
      name:'achievementsBotNav',
      component: () => import('@/views/achievementsBotNav'),
      children:[
        //pbc首页
        {
          path:'achievementsIndex',
          name:'achievementsIndex',
          component: () => import('@/views/achievementsIndex/achievementsIndex'),
          meta: {
            title: '首页'
          }
        },
         //我的绩效
        {
          path:'achievementsMy',
          name:'achievementsMy',
          component: () => import('@/views/achievementsMy/achievementsMy'),
          meta: {
            title: '我'
          }
        },
        //最新PBC
        {
          path:'achievementsNew',
          name:'achievementsNew',
          component: () => import('@/views/achievementsNew/achievementsNew'),
          meta: {
            title: '最新'
          }
        },
        {
          path:'achievementsOtherInfo',
          name:'achievementsOtherInfo',
          component: () => import('@/views/achievementsOtherInfo/achievementsOtherInfo'),
          meta: {
            title: '其他关系人详情'
          }
        },
        //目录
        {
          path:'achevementsEyes',
          name:'achevementsEyes',
          component: () => import('@/views/achevementsEyes/achevementsEyes'),
          meta: {
            title: '其他关系人详情'
          }
        },
        //目录下的部门和人
        {
          path:'achevementsEyesInfo',
          name:'achevementsEyesInfo',
          component: () => import('@/views/achevementsEyesInfo/achevementsEyesInfo'),
          meta: {
            title: '其他关系人详情'
          }
        },
        {
          path:'/achievementsOtherIn',
          name:'achievementsOtherIn',
          component: () => import('@/views/achievementsOtherIn/achievementsOtherIn'),
          meta: {
            title: '其他关系人'
          }
        },
        {
          path:'/achievementsOtherInNext',
          name:'achievementsOtherInNext',
          component: () => import('@/views/achievementsOtherInNext/achievementsOtherInNext'),
          meta: {
            title: '其他关系人'
          }
        },
        {
          path:'/achievementsOtherInNextInfo',
          name:'achievementsOtherInNextInfo',
          component: () => import('@/views/achievementsOtherInNextInfo/achievementsOtherInNextInfo'),
          meta: {
            title: '其他关系人'
          }
        },
        {
          path:'/achievementsOtherInNextInfo1',
          name:'achievementsOtherInNextInfo1',
          component: () => import('@/views/achievementsOtherInNextInfo1/achievementsOtherInNextInfo1'),
          meta: {
            title: '其他关系人'
          }
        },
        {
          path:'/achievementsOtherInNextInfo2',
          name:'achievementsOtherInNextInfo2',
          component: () => import('@/views/achievementsOtherInNextInfo2/achievementsOtherInNextInfo2'),
          meta: {
            title: '其他关系人'
          }
        },
         //更多评论
         {
          path:'/achevementsMore',
          name:'achevementsMore',
          component: () => import('@/views/achevementsMore/achevementsMore'),
          meta: {
            title: '更多'
          }
        },
         //搜索结果
         {
          path:'/achievementsSearchInfo',
          name:'achievementsSearchInfo',
          component: () => import('@/views/achievementsSearchInfo/achievementsSearchInfo'),
          meta: {
            title: '搜索结果'
          }
        },
        //我的绩效详情
        {
          path:'/achievementsMyInfo',
          name:'achievementsMyInfo',
          component: () => import('@/views/achievementsMyInfo/achievementsMyInfo'),
          meta: {
            title: '个人绩效详情'
          }
        },
        //分享屏蔽组织选人
        {
          path:'/achaaPicker1',
          name:'achaaPicker1',
          component: () => import('@/views/achaaPicker/achaaPicker1'),
          meta: {
            title: '选人'
          }
        },
        {
          path:'/achaaPicker2',
          name:'achaaPicker2',
          component: () => import('@/views/achaaPicker/achaaPicker2'),
          meta: {
            title: '选人'
          }
        },
        {
          path:'/achaaPicker3',
          name:'achaaPicker3',
          component: () => import('@/views/achaaPicker/achaaPicker3'),
          meta: {
            title: '选人'
          }
        },
        {
          path:'/achaaPicker4',
          name:'achaaPicker4',
          component: () => import('@/views/achaaPicker/achaaPicker4'),
          meta: {
            title: '选人'
          }
        },
        {
          path:'/achaaPicker5',
          name:'achaaPicker5',
          component: () => import('@/views/achaaPicker/achaaPicker5'),
          meta: {
            title: '选人'
          }
        },
        {
          path:'/achaaPicker6',
          name:'achaaPicker6',
          component: () => import('@/views/achaaPicker/achaaPicker6'),
          meta: {
            title: '选人'
          }
        },
        {
          path:'/achaaPicker7',
          name:'achaaPicker7',
          component: () => import('@/views/achaaPicker/achaaPicker7'),
          meta: {
            title: '选人'
          }
        },
        //显示选择的人员
        {
          path:'/achaaPickerView',
          name:'achaaPickerView',
          component: () => import('@/views/achaaPicker/achaaPickerView'),
          meta: {
            title: '选人'
          }
        },
        //显示分享的人员
        {
          path:'/shareshieldList',
          name:'shareshieldList',
          component: () => import('@/views/achaaPicker/shareshieldList'),
          meta: {
            title: '选人'
          }
        },
        //显示屏蔽的人员
        {
          path:'/shareshieldList1',
          name:'shareshieldList1',
          component: () => import('@/views/achaaPicker/shareshieldList1'),
          meta: {
            title: '选人'
          }
        },
      ],
    },
      {
        path:'/achievementsOther',
        name:'achievementsOther',
        component: () => import('@/views/achievementsOther/achievementsOther'),
        meta: {
          title: '其他关系人'
        }
      },
      {
        path:'/achievementsOtherInNextInfo3',
        name:'achievementsOtherInNextInfo3',
        component: () => import('@/views/achievementsOtherInNextInfo3/achievementsOtherInNextInfo3'),
        meta: {
          title: '其他关系人'
        }
      },
      {
        path:'/achievementsOtherDetail',
        name:'achievementsOtherDetail',
        component: () => import('@/views/achievementsOtherDetail/achievementsOtherDetail'),
        meta: {
          title: '其他关系人详情'
        }
      },
      // {
      //   path:'/achievementsSearch',
      //   name:'achievementsSearch',
      //   component: () => import('@/views/achievementsSearch/achievementsSearch'),
      //   meta: {
      //     title: '搜索'
      //   }
      // },
      //规则
      {
        path:'/achievementsResult',
        name:'achievementsResult',
        component: () => import('@/views/achievementsResult/achievementsResult'),
        meta: {
          title: '规则'
        }
      },

    // {
    //   path:'/achievementsAbout',
    //   name:'achievementsAbout',
    //   component: () => import('@/views/achievementsAbout/achievementsAbout'),
    //   meta: {
    //     title: '规则'
    //   }
    // },
   
  ],

  // base: "/rencaiList/"
})
