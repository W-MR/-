<!-- 视图区 -->
<template>
    <ul class="att">
        <li>
            <!-- query传值 -->
        <!-- 
                1. :to绑定对应的数据
                2. 路径从根目录开始写---可以用name代替
            -->
            <router-link to="/att/news?name=张三&age=18">新闻</router-link>
        </li>

        <!-- ---------------------------------------------------------------------- -->

        <li>
            <!-- 将query作为属性传值 -->
            <router-link :to="{ name: 'com', query: { id: 111 } }">社区</router-link>
        </li>

        <!-- ------------------------------------------------------------------------- -->

        <li>
            <!-- params传值需要在路由中设置占位 -->
            <router-link :to="{ name: 'up', params: { id: 666 } }">博主</router-link>
        </li>

        <!-- --------------------------------------------------------------------------- -->

        <li>
            <!-- params传值的布尔写法,需要在路由中设置占位 -->
            <router-link :to="{ name:'ctn', params: { id: 999 } }">动漫</router-link>
        </li>
    </ul>
    <router-view></router-view>
</template>


<!-- js代码部分 -->
<script>
export default {
    data() {
        return {
            msg: "关注页"
        }
    }
}

</script>


<!-- 样式设置 -->
<style scoped>
.att {
    position: absolute;
    top: 30px;
    right: 130px;
}

.att li {
    list-style: none;
    text-align: center;
}
</style>