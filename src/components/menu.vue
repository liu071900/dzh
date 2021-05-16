<template>
    <ul class="c-menu">
        <li class="c-menu-item" v-for="(item,i) in items" :key="i" @click="change(i)">
            <div class="active-menu-item" v-show="i==currentIndex">{{item.title}}</div>
            <div>{{item.title}}</div>
        </li>
        
    </ul>
</template>

<script>
export default {
    props:{
        items:{
            type:Array,
            default:()=>[]
        }
    },

    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        change(index){
            this.currentIndex = index;
            this.$emit("change",this.items[index])
        }
    }
}
</script>

<style lang="less">
.c-menu{
    list-style-type :none;
    width: 200px;
    margin: 0;
    padding: 0 !important;
    height: calc(100vh);
    background-color: #5C0000;;
    .c-menu-item{
        cursor: pointer;
        font-size: 1rem;
        height: 48px;
        line-height: 48px;
        text-align: left;
        padding-left: 16px;
        position: relative;
        color: #E0E0E0;
        border-bottom: 1px solid #BDBDBD;
    }

    .active-menu-item{
        z-index: 999;
        cursor: pointer;
        padding-left: 16px;
        color: #C91309;
        height: 100%;
        background-color: #ffffff;
        position: absolute;
        width: 204px;
        left: 0;
    }

}

</style>