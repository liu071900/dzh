<template>
    <div app class="dashboard-container" fluid >
       <div class="d-flex justify-space-between">
           <div class="logo"></div>
           <div class="text-right" style="width:30%">
               <div class="text-body1  font-weight-bold white--text">{{nowDate}}</div>
               <div class="text-body1  font-weight-medium white--text text-right"><span>{{nowTime}}</span> <span>{{nowWeek}}</span></div>
           </div>
       </div>

       <!-- main -->
       <div class="d-flex justify-space-between mt-8">
            <!-- 左边区域 -->
           <div class="da-card" style="width:48%" v-resize="resize">
               <div class="da-card-title text-h5 yellow--text text--darken-1 font-weight-bold ">党建时政</div>
               
               <div class="da-news d-flex justify-space-between pa-2" :style="{height:newsAreaHeight+'px'}">
                    <div style="width:45%">
                        <v-hover >
                            <v-img aspect-ratio="16/9" src="../../assets/images/2.png" height="100%"  min-width="80" >
                                <v-expand-transition>
                                    <div
                                        v-if="true"
                                        class="news-title grey--text text--lighten-3 pl-3 text-caption black"
                                    >
                                        <span>5月6日</span> <span>习近平的四月</span>
                                    </div>
                                </v-expand-transition>
                            </v-img>
                        </v-hover>
                    </div>
                    <v-spacer/>
                    <div style="width:53%;overflow:hidden" class="text--left ">
                        <ul class="da-news-items white--text">
                            <li class="text-no-wrap text-caption" style="line-height:1.75rem"><span>4月29日</span> <span>习近平 到广西调查</span></li>
                            <li class="text-no-wrap text-caption" style="line-height:1.75rem"><span>4月29日</span> <span>习近平 到广西调查 到广西调查到广西调查到广西调查</span></li>
                            <li class="text-no-wrap text-caption" style="line-height:1.75rem"><span>4月29日</span> <span>习近平 到广西调查</span></li>
                            <li class="text-no-wrap text-caption" style="line-height:1.75rem"><span>4月29日</span> <span>习近平 到广西调查</span></li>
                            <li class="text-no-wrap text-caption" style="line-height:1.75rem"><span>4月29日</span> <span>习近平 到广西调查</span></li>
                            <li class="text-no-wrap text-caption" style="line-height:1.75rem"><span>4月29日</span> <span>习近平 到广西调查</span></li>
                        </ul>
                    </div>
               </div>

                <div class="da-nav-wrapper" :style="{height:navAreaHeight+'px'}">
                    <div class="da-nav-row pl-5 pr-5 pt-5" id="daNavContainer" v-for="(items,k) in newsNavIcons" :key="k">
                        <div class="da-nav-row d-flex justify-space-between">
                            <div v-for="(item,i) in items" :key="i"  class="nav-content" @click="gotoSubjectPage">
                                <v-avatar :size="avatarSize">
                                    <v-img :src="item.src"></v-img>
                                </v-avatar>
                                <div class="grey--text text--lighten-3 text-button text-center">{{item.title}}</div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>

            <!-- 右边区域 -->
            <div class="da-card" style="width:48%">
               <div class="da-card-title text-h5 yellow--text text--darken-1 font-weight-bold ">某某单位党建</div>
               
               <div class="da-news d-flex justify-space-between pa-2" :style="{height:newsAreaHeight+'px'}">
                    <v-carousel :show-arrows="false" height="100%">
                        <v-carousel-item
                        v-for="(item,i) in carouselItems"
                        :key="i"
                        :src="item.src"
                        ></v-carousel-item>
                    </v-carousel>
               </div>
                <div  class="da-nav-wrapper">
                    <div class="da-nav-row pl-5 pr-5 pt-5" ref="daNavContainer"  v-for="(items,k) in navIcons" :key="k">
                        <div class="da-nav-row d-flex justify-space-between">
                            <div v-for="(item,i) in items" :key="i"  class="nav-content"  @click="gotoSubjectPage">
                                <v-avatar :size="avatarSize">
                                    <v-img :src="item.src"></v-img>
                                </v-avatar>
                                <div class="grey--text text--lighten-3 text-button text-center">{{item.title}}</div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    </div>
</template>

<script>
import {rem2Px} from "../../utils/rem";
import {navIcons,newsNavIcons} from "./nav";

export default {
    data(){
        return {
            nowWeek: "",
            nowDate: "",
            nowTime: "",
            // 导航图标的大小
            avatarSize:80,
            newsAreaHeight:200,
            navAreaHeight:660,
            navIcons:navIcons,
            newsNavIcons:newsNavIcons,
            // 轮播图项目
            carouselItems: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],

        }
    },
    mounted(){
        this.setAvatarSize();
        this.setNewsAreaHeight();
        this.setNavAreaHeight();

        this.setNowTimes();
        this.timer = setInterval(()=>{
            this.setNowTimes();
        },1000)

    },
    beforeDestroy(){
        clearInterval(this.timer)
    },

    methods:{
        setAvatarSize(){
            //  console.log(this.$refs.daNavContainer.clientWidth)
            let el = document.getElementById("daNavContainer")
             let width = el.clientWidth;
             this.avatarSize = width*2/16;
            //  console.log(this.avatarSize,width)
             return;
        },
        setNewsAreaHeight(){
            let remRate = 11;
            this.newsAreaHeight =  rem2Px(remRate);
            console.log(this.newsAreaHeight)
        },
        setNavAreaHeight(){
            let remRate = 26;
            this.navAreaHeight =  rem2Px(remRate);
            // console.log(this.navAreaHeight)
        },
        resize(e){
            this.setAvatarSize();
            this.setNewsAreaHeight();
        },

        gotoSubjectPage(){
            this.$router.push("/subjects")
        },

        setNowTimes() {
                let myDate = new Date();
                // console.log(myDate)
                let wk = myDate.getDay();
                let yy = String(myDate.getFullYear());
                let mm = myDate.getMonth() + 1;
                let dd = String(
                    myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
                );
                let hou = String(
                    myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
                );
                let min = String(
                    myDate.getMinutes() < 10
                        ? "0" + myDate.getMinutes()
                        : myDate.getMinutes()
                );
                let sec = String(
                    myDate.getSeconds() < 10
                        ? "0" + myDate.getSeconds()
                        : myDate.getSeconds()
                );
                let weeks = [
                    "星期日",
                    "星期一",
                    "星期二",
                    "星期三",
                    "星期四",
                    "星期五",
                    "星期六",
                ];
                let week = weeks[wk];
                this.nowDate = yy + "年" + mm + "月" + dd + "日"
                this.nowTime = hou + ":" + min 
                this.nowWeek = week;
        },
    }

    
}
</script>

<style lang="less">
.dashboard-container{
    min-width: 1180px;
    padding: 10px 80px;
    position: relative;
    background-image: url("../../assets/images/bg.png");
    height: 100%;

    .logo{
        background-image: url("../../assets/images/title.png");
        width: 50%;
        background-size: contain;
    }
    .da-card{
        background-color:rgba(72 ,29 ,29 , 0.3);
        border-radius:5px;
        .da-news{
            background-color:rgba(72 ,29 ,29 , 0.3);
            margin: 0 15px;
            overflow-y: hidden;
            .news-title{
                // background-color:rgba(72 ,29 ,29 , 0.3);
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 1.75rem;
                line-height: 1.75rem;
            }
        }
        .da-card-title{
            position: relative;
            top:-1.0rem;
            left: 20px;
        }
        .da-nav-wrapper{
            overflow-y: auto;
            height: 100%;
        }
        .nav-content{
            cursor: pointer;
        }
    }
}


</style>