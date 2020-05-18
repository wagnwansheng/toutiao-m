<template>
  <div class="login-container">
    <!-- 顶部 -->
    <van-nav-bar
      title="注册 / 登录"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 登录表单 -->
    <van-form
    ref="login-form"
    @submit="onLogin"
    :validate-first='true'
    :show-error='false'
    :show-error-message='false'
    @failed='onFailed'
    >
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao-m"
        left-icon="shouji"
        placeholder="请输入手机号"
        name="mobile"
        :rules="[
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|8]\d{9}$/, message: '请输入正确的手机号格式' }
        ]"
      />
      <van-field
        v-model="user.code"
        icon-prefix="toutiao-m"
        left-icon="yanzhengma"
        center
        clearable
        placeholder="请输入短信验证码"
        name="code"
        :rules="[
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码格式' }
        ]"
      >
        <template #button>
          <van-button
            class="van-button_code"
            size="small" round type="primary"
            @click.prevent="onSendSms"
            :rules= []
          >发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin:26px 16px;">
        <van-button block type="info"  @click="onLogin">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { Toast } from 'vant'

export default {
  name: 'LoginIndex',
  components: {
  },
  props: {
  },
  data () {
    return {
      user: {
        mobile: '',
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
    async onClickLeft () {
      this.$router.back()
    },
    async onLogin () {
      Toast.loading({
        message: '登录中...',
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0
      })
      // 1 招到数据接口
      // 2 封装请求方法
      // 3 请求调用登录
      try {
        const res = await login(this.user)
        // 4 处理响应结果
        console.log(res)
        Toast.success('登录成功')
      } catch (err) {
        console.log(err)
        Toast.fail('登录失败')
      }
    },
    async onFailed (error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
      }
    },
    // 验证码倒计时
    async onSendSms () {
      try {
        await this.$refs['login-form'].validate('mobile')
        console.log('发送成功')
      } catch (err) {
        console.log(err)
        this.$toast({
          message: err.message,
          position: 'top'
        })
      }
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
