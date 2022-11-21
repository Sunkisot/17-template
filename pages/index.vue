<template>
    <div class="index-page">
            <!-- 头部导航条 -->
            <NavBar class="" :style="customStyle" :customProps="username" v-for="(item, index) in list" :key="index"  @change="changeWorld" />
            <!-- 头部导航条 -->
            <NavBar class="" :style="customStyle" :customProps="username" v-for="(item, index) in list" :key="index"  @change="changeWorld" />
        </div>
</template>
<script>
import { transformDate } from "./utils/index"
export default {
    name: 'index',
    components: {
        NavBar,
        Hello,
    },
    data: {},
    computed: {},
    watch: {},
    
    methods: {
        changeWorld(event){
            alert(event)     
        },
        changeWorld2(event){
            alert(event)     
        },
        
    }
}
</script>
<style lang='scss' scoped >
    @import './assets/index.scss';
</style>
 
