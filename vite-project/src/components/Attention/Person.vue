<!-- 视图区 -->
<template>
    <div>
        <h6>这是关注里的{{msg}}</h6>
        <p>
            这是使用params接受到的值：{{$route.params.id}}
        </p>
        <button @click="accept">打印路径信息</button>
    </div>
</template>


<!-- js代码部分 -->
<script>
export default {
    data() {
        return {
            msg:"博主"
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