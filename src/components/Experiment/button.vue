<template>
    <button @click="handle">click</button>
    <router-view :to="handle"></router-view>
</template>


<script>
import { alertProps } from 'element-plus';
    export default{
        methods:{
            handle (){
                console.log("fdsafdf");
            //  路径/home对应我在router目录下index.js中定义的path属性值
                this.$router.push('/experiment/button');
            }
        }
    }
</script>
