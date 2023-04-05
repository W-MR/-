<!-- 视图区 -->
<template>
    <div>
        <h5>这是{{ msg }}</h5>
        <p>这是使用props接收params作为属性的值{{id}}</p>
    </div>
</template>


<!-- js代码部分 -->
<script>
export default {
    props: ['id'],
    data() {
        return {
            msg: '动漫页'
        }
    }
}

</script>


<!-- 样式设置 -->
<style scoped></style>