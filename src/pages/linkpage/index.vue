<template>
  <div class="d-flex">
    <Menu :items="menuItems" @change="changeContent" style="flex:0 0 auto"></Menu>
    <div class="detail-body black">
      <iframe :src="contentSrc" name="iframe" onload="iframeLoad" > </iframe>
      <v-speed-dial
        right
        fixed
        bottom
      >
        <template v-slot:activator>
            <v-btn fab dark  color="red" large @click="goHome">
                <v-icon>mdi-share</v-icon>
            </v-btn>
        </template>
      </v-speed-dial>
    </div>
  </div>
</template>


<script>
import Menu from "../../components/menu.vue";

export default {
  components: { Menu },
  data() {
    return {
     menuItems:[
      {title:"党史学习",src:"https://www.12371.cn/"},
      {title:"党的知识库",src:"http://news.12371.cn/dzybmbdj/zzb/"},
      {title:"百年瞬间",src:"http://www.12371.cn/special/dzby/"},
      {title:"中国精神",src:"http://www.12371.cn/special/qgdyjypxsfb/sfb/"},
    ],
    contentSrc:"https://www.12371.cn/"
    };
  },
  mounted(){
    window.frames[0].document.onload=function(){
      console.log("============")
    }
    
  },
  methods:{
      goHome(){
          this.$router.push("/")
      },
      changeContent(item){
        this.contentSrc=item.src
      },
      iframeLoad(){
        
        console.log("=========")
      }
  }
};
</script>
<style lang="less">
.detail-body {
  width: 100%;
  height: 100vh;
  position: relative;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>