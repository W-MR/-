<!-- 视图区 -->
<template>
    <div>
        <h6>这是关注里的{{msg}}页</h6>
    </div>
    <p>
        <!-- 使用$route的内置属性-->
        这是使用query接收到的值：{{$route.query.name}}---{{ $route.query.age }}
    </p>
    <button @click="accept">打印路径信息</button>
</template>


<!-- js代码部分 -->
<script>
export default {
    data() {
        return {
            msg:"新闻"
        }
    },
    methods:{
        accept(){
            console.log(this.$route);
        }
    }
}
</script>


<!-- 样式设置 -->
<style scoped></style>