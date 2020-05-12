<template>
  <div class="layoutIndex">
  <!-- 子路由出口 -->
  <router-view/>
  <!-- 子路由出口 -->
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
    <van-tabbar-item icon="chat-o" to='/qa'>问答</van-tabbar-item>
    <van-tabbar-item icon="tv-o" to='/video'>视频</van-tabbar-item>
    <van-tabbar-item icon="user-o" to='/my'>我的</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {
  },
  props: {
  },
  data () {
    return {
      active: 0
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
</style>
