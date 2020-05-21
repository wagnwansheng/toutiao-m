<template>
  <div class="my-container">
      <van-cell-group class="my-info">
        <van-cell
          class="user-info"
          center
          :border="false"
        >
          <van-image
            class="user-icon"
            slot="icon"
            round
            width="66px"
            height="66px"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div
          class="user-nickname"
          slot="title"
          >昵称</div>
          <van-button
            class="user-edit"
            small
            round
          >编辑资料</van-button>
        </van-cell>
        <van-grid :column-num="4" :border="false">
          <van-grid-item>
            <div class="span">8</div>
            <div class="text">头条</div>
          </van-grid-item>
          <van-grid-item>
            <div class="span">66</div>
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
      </van-cell-group>
      <van-grid :column-num="2">
        <van-grid-item
          class="collect"
          icon-prefix="toutiao-m"
          icon="shoucang"
          text="收藏"
        />
        <van-grid-item
          class="history"
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
        class="logout"
        title="退出登录"
        to="/"
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
.my-container{
  .my-info{
    background:url('./banner.png') no-repeat;
    background-size: cover;
    .van-cell--center{
      background-color: unset;
    }
    /deep/ .van-grid-item__content{
      background-color: unset;
    }
    .user-info{
      box-sizing: border-box;
      height: 115px;
      padding-top: 38px;
      padding-bottom: 11px;
      .user-icon{
        box-sizing: border-box;
        border: 1px solid #fff;
        margin-right: 11px;
      }
      .nickname{
        font-size: 15px;
        color: #fff;
      }
      .user-edit{
        height: 16px;
        font-size: 10px;
        color: #666666;
      }
    }
    .span{
      font-size: 18px;
      color: #fff;
    }
    .text{
      font-size: 11.5px;
      color: #fff;
    }
  }
  .collect{
    color: red;
  }
  .history{
    color: orange;
  }
  .van-cell{
    font-size: 15px;
  }
  .logout{
    text-align: center;
    color: brown;
  }
}
</style>
