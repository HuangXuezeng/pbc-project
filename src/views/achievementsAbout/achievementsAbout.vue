<template>
    <div>
        <h3>选取关系人</h3>
        <button @click="pdfTest">导出pdf</button>
    </div>
</template>
<script>
// import  footerbar  from '../../components/footerbar'
import "pdfmake/build/pdfmake"
import "pdfmake/build/vfs_fonts"
export default {
  // components: {
  //       footerbar //引用组件
  //   },
  data () {
    return {
    };
  },
  methods:{
    pdfTest(){
      let docDefinition = {
          content: [
              'title',
              'contents'
          ],
          defaultStyle: {
              font: '方正姚体'
          }
        };
        pdfMake.fonts = {
            Roboto: {
                normal: 'Roboto-Regular.ttf',
                bold: 'Roboto-Medium.ttf',
                italics: 'Roboto-Italic.ttf',
                bolditalics: 'Roboto-Italic.ttf'
            },
            方正姚体: {
                normal: 'FZYTK.TTF',
                bold: 'FZYTK.TTF',
                italics: 'FZYTK.TTF',
                bolditalics: 'FZYTK.TTF',
            }
        };
      pdfMake.createPdf(docDefinition).download("test.pdf")
    }
  }
}
</script>
<style lang="stylus">
</style>