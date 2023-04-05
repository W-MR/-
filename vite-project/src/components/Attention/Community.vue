<!-- 视图区 -->
<template>
    <div>
        <h5>这是{{ msg }}</h5>
        <p>这是使用props接收到的值{{ query }}</p>
    </div>
</template>


<!-- js代码部分 -->
<script>
export default {
    props:['query'],
    data() {
        return {
            msg:"社区页面"
        }
    }
}

</script>


<!-- 样式设置 -->
<style scoped>

</style>