<template>
  <div class="my-container">
      <van-cell
        title=""
        value=""
        center
      >
        <van-image
          slot="icon"
          round
          width="66.5px"
          height="66.5px"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title">昵称</div>
        <van-button
          small
          round
        >编辑资料</van-button>
      </van-cell>
      <van-grid :column-num="4">
        <van-grid-item>
          <div class="span">123</div>
          <div class="text">头条</div>
        </van-grid-item>
        <van-grid-item>
          <div class="span">123</div>
          <div class="text">关注</div>
        </van-grid-item>
        <van-grid-item>
          <div class="span">123</div>
          <div class="text">粉丝</div>
        </van-grid-item>
        <van-grid-item>
          <div class="span">123</div>
          <div class="text">获赞</div>
        </van-grid-item>
      </van-grid>
      <van-grid :column-num="2">
        <van-grid-item
        icon-prefix="toutiao-m"
        icon="shoucang"
        text="收藏"
        />
        <van-grid-item
        icon-prefix="toutiao-m"
        icon="lishi"
        text="历史"
        />
      </van-grid>
      <van-cell
      title="消息通知"
      is-link
      to="/"
      />
      <van-cell
      title="小智同学"
      is-link
      to="/"
      />
      <van-cell
      title="退出登录"
      />
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  components: {
  },
  props: {
  },
  data () {
    return {
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
