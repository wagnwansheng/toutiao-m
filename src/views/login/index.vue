<template>
  <div class="login-container">
    <!-- 顶部 -->
    <van-nav-bar
      title="注册 / 登录"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.name"
        icon-prefix="toutiao-m"
        left-icon="shouji"
        placeholder="请输入手机号"
        :rules="[
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|8]\d{9}/, message: '请输入正确的手机号格式' }
        ]"
      />
      <van-field
        v-model="user.code"
        icon-prefix="toutiao-m"
        left-icon="yanzhengma"
        center
        clearable
        placeholder="请输入短信验证码"
        :rules="[
          { required: true, message: '请输入验证码' },
          { pattern: /\d{6}/, message: '请输入正确的验证码格式' }
        ]"
      >
        <template #button>
          <van-button class="van-button_code" size="small" round type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin:26px 16px;">
        <van-button block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  components: {
  },
  props: {
  },
  data () {
    return {
      user: {
        name: '',
        code: ''
      }
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
    onClickLeft () {
      this.$router.back()
    },
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style scoped lang="less">
.van-nav-bar{
  background-color: #3296fa;
  /deep/ .van-nav-bar__title{
    font-size: 16px;
    color: #fff;
  }
  /deep/ .van-icon {
    color: #fff;
  }
}
div{
  .van-button{
    font-size: 15px;
    background-color: #6db4fb;
    border: none;
  }
  .van-button_code{
    font-size: 11px;
    background-color: #ccc;
    color: #727272;
  }
}
</style>
