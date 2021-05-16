<template>
    <div app class="dashboard-container" fluid >
       <div class="title-area">
           <div class="d-inline-flex" style="margin:0 auto">
                <div style="height:3.5rem;width:3.5rem"><v-img src="../../assets/images/矢量智能对象.png" height="100%"/></div>
                <div style="width:0.4rem"></div>
                <div class="logo-title"> 智慧党建信息云平台</div>
           </div>
           <div class="text-right time-title" style="width:30%;">
               <div class="text-body1  font-weight-bold " style="color: #FAC65C">{{nowDate}}</div>
               <div class="text-body1  font-weight-medium text-right" style="color: #FAC65C"><span>{{nowTime}}</span> <span>{{nowWeek}}</span></div>
           </div>
       </div>

       <!-- main -->
       <div class="d-flex justify-space-between" style="margin-top:3rem">
            <!-- 左边区域 -->
           <div class="da-card" style="width:40rem" v-resize="resize">
               <div class="da-card-title text-h5 yellow--text text--darken-1 font-weight-bold "><div>党建时政</div></div>
               
               <div class="da-news d-flex justify-space-between pa-2" :style="{height:newsAreaHeight+'px'}">
                    <div style="width:45%">
                        <v-hover >
                            <v-img aspect-ratio="16/9" src="../../assets/images/2.png" height="100%"  min-width="80" >
                                <v-expand-transition>
                                    <div
                                        v-if="true"
                                        class="news-title grey--text text--lighten-3 pl-3 text-caption black"
                                    >
                                        <span>党和国家领导人参加首都义务植树活动</span>
                                    </div>
                                </v-expand-transition>
                            </v-img>
                        </v-hover>
                    </div>
                    <v-spacer/>
                    <div style="width:53%;overflow:hidden" class="text--left ">
                        <ul class="da-news-items ">
                            <li class="text-no-wrap da-news-item" style="line-height:1.75rem" >职业教育前途广阔大有可为：年轻人爱上古籍修复</li>
                            <li class="text-no-wrap da-news-item" style="line-height:1.75rem">办好民生实事：技能过硬 就业稳定</li>
                            <li class="text-no-wrap  da-news-item" style="line-height:1.75rem">共建万物和谐的美丽家园：守护燕鸥 在河之洲</li>
                            <li class="text-no-wrap da-news-item" style="line-height:1.75rem">把好传统带进新征程：始终艰苦奋斗 勇于攻坚克难</li>
                            <li class="text-no-wrap  da-news-item" style="line-height:1.75rem">人民时评：为诚信社会筑牢制度篱笆</li>
<!--                            <li class="text-no-wrap text-caption" style="line-height:1.75rem"><span>4月29日</span> <span>习近平 到广西调查</span></li>-->
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
                                <div class="text-button text-center">{{item.title}}</div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>

            <!-- 右边区域 -->
            <div class="da-card" style="width:40rem" >
               <div class="da-card-title text-h5 yellow--text text--darken-1 font-weight-bold "><div>某某单位党建</div></div>
               
               <div class="da-news d-flex justify-space-between pa-2" :style="{height:newsAreaHeight+'px'}">
                    <v-carousel :show-arrows="false" height="100%">
                        <v-carousel-item
                        v-for="(item,i) in carouselItems"
                        :key="i"
                        :src="item.src"
                        ></v-carousel-item>
                    </v-carousel>
               </div>
                <div  class="da-nav-wrapper" :style="{height:navAreaHeight+'px'}">
                    <div class="da-nav-row pl-5 pr-5 pt-5" ref="daNavContainer"  v-for="(items,k) in navIcons" :key="k">
                        <div class="da-nav-row d-flex justify-space-between">
                            <div v-for="(item,i) in items" :key="i"  class="nav-content"  @click="gotoSubjectPage">
                                <v-avatar :size="avatarSize">
                                    <v-img :src="item.src"></v-img>
                                </v-avatar>
                                <div class="text-button text-center">{{item.title}}</div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    </div>
</template>

<script>
import {rem2Px,getRem} from "../../utils/rem";
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
                // {
                //     src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                // },
                // {
                //     src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                // },
                // {
                //     src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                // },
                // {
                //     src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                // },
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
            // let el = document.getElementById("daNavContainer")
            //  let width = el.clientWidth;
            //  getRem()*4.2
            //  this.avatarSize = width*2/16;
             this.avatarSize = getRem()*4.5;
            //  console.log(this.avatarSize,width)
             return;
        },
        setNewsAreaHeight(){
            // let remRate = 11;
            // this.newsAreaHeight =  rem2Px(remRate);
            // console.log(this.newsAreaHeight)
            this.newsAreaHeight =  getRem()*11;;
        },
        setNavAreaHeight(){
            // let remRate = 27;
            // this.navAreaHeight =  rem2Px(remRate);
            this.navAreaHeight =  getRem()*24;
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
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-width: 1180px;
    padding: 10px 80px;
    position: relative;
    background-image: url("../../assets/images/bg.png");
    height: 100%;

    .title-area{
        position: relative;
        text-align: center;
        .time-title{
            position:absolute;
            right: 0;
            bottom: 0;
        }
        .logo-title{
            letter-spacing: 0.45rem;
            display: inline-block;
            height: 3.5rem;
            line-height: 3.5rem;
            font-size: 2.2rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #ffffff;
            background: linear-gradient(0deg, #FBF6E2 0.2685546875%, #D79312 99.4873046875%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent
        }
    }
   
    .da-card{
        background: #FCEDC5;
        border: 6px solid #D21502;
        border-radius: 20px;
       
        .da-news{
            background: #FFFFFF;
            box-shadow: 0px 0px 46px 0px rgba(226, 96, 0, 0.4);
            border-radius: 20px 20px 0px 0px;
            margin: 0 15px;
            overflow-y: hidden;
            li{
                list-style: none;
                font-size: 0.8rem;
                height: 2rem;
                line-height: 2rem;
                &:before{
                    position: relative;
                    left:-0.75rem;
                    content: "\2022";
                    color: #A0020C;
                    
                }
            }
            
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
            height:2.95rem;
            line-height: 2.95rem;
            min-width: 15rem;
            display: inline-block;
            background-image: url("../../assets/images/bg1.png");
            background-size: cover;
            position: relative;
            top:-1.8rem;
            left: -10px;
            padding-left: 10px;
            div{
                font-size: 1.6rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #FFFFFF;
                background: linear-gradient(0deg, #FBF6E2 0.2685546875%, #D79312 99.4873046875%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        .da-nav-wrapper{
            margin-top:1.6rem;
            overflow-y: auto;
            height:27rem;
        }
        .nav-content{
            cursor: pointer;
        }
    }
}


</style>