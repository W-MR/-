<!-- 视图区 -->
<template>
    <div>
        <h5>这是{{ msg }}</h5>
        <div>
            <button @click="go">返回上一级</button>
        </div>
        <br>
        <div>
        <button @click="goHome">返回主页</button>
        </div>
    </div>
</template>


<!-- js代码部分 -->
<script>
export default {
    data() {
        return {
            msg: "登录页"
        }
    },
    methods: {
        go(){
            // 返回上一级
            // -1 返回上一级
            //  0 页面刷新
            this.$router.go(-1)
        },
        goHome() {
            // 获取路径信息
            console.log(this.$route);
            console.log(this.$router);
            // 返回主页并并且按返回无法返回此页
            this.$router.replace({ path: '/home' })
        }
    }
}

</script>


<!-- 样式设置 -->
<style scoped></style>