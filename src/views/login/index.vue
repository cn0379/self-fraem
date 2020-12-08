<template>
  <div class="police">
    <!-- login -->
    <div class="login_img" />
    <div class="police_login">
      <h1>登录系统</h1>
      <!-- 登入框 -->
      <div class="police_input">
        <!-- 账号 -->
        <a-input
          v-model="accountNum"
          class="ant-input-lg"
          placeholder="请输入账号"
          allow-clear
          size="large"
        >
          <a-icon slot="prefix" type="user" />
        </a-input>
        <!-- 密码 -->
        <a-input-password
          v-model="pwd"
          placeholder="请输入密码"
          size="large"
          allow-clear
          @keyup.enter="handleLogin"
        >
          <a-icon slot="prefix" type="lock" />
        </a-input-password>
      </div>
      <div class="enclosure">
        <a-checkbox @change="onChange">记住密码</a-checkbox>
        <span class="wps">忘记密码？</span>
      </div>
      <!-- 登录按钮 -->
      <div class="login_btn">
        <a-button type="primary" @click="handleLogin">登录</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      accountNum: '',
      pwd: '',
      isRemember: 0,
      visible: false
    }
  },
  methods: {
    ...mapActions('user', ['login']),
    // 登录跳转
    async handleLogin() {
      if (!this.accountNum || !this.pwd) {
        return this.$message.error({
          content: '用户名或密码不能为空!',
          key: 'login'
        })
      }
      this.$message.loading({ content: '正在登录...', key: 'login' })
      const data = await this.login({
        username: this.accountNum,
        password: this.pwd,
        isRemember: this.isRemember
      })
      if (data !== null) {
        this.$message.success({ content: '登录成功', key: 'login' })
        this.$router.push('/')
      } else {
        this.$message.error({ content: '用户名或密码错误!', key: 'login' })
      }
    },
    onChange(e) {
      this.isRemember = e.target.checked ? 1 : 0
    }
  }
}
</script>

<style lang="less" scoped>
.police {
  width: 100%;
  height: 100%;
  background: #000 url("../../assets/img/login-bg.jpeg") no-repeat center;
  background-size: 100% 100%;
  padding: 30px;
  .login_img {
    img {
      transform: scale(0.6);
    }
  }
  .police_login {
    text-align: center;
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 350px;
    border-radius: 8px;
    padding: 12px 30px 0 30px;
    border: 1px solid #0d5068;
    box-shadow: 0 0 8px #8df;
    h1 {
      margin: 10px 0 0 0;
      color: #fff;
      line-height: 50px;
    }
    .police_input {
      box-sizing: border-box;
      /deep/.ant-input {
        background-color: #021d33;
        border: 1px solid #166b86;
        opacity: 0.8;
        color: #fff;
      }
      /deep/ .ant-input-prefix,
      /deep/ .anticon {
        color: #fff;
        opacity: 0.8;
      }
      .ant-input-lg {
        margin: 20px 0;
      }
    }
    .ant-btn {
      display: inline-block;
      margin-top: 25px;
      width: 100%;
      height: 40px;
    }
    .enclosure {
      padding: 20px 1px;
      color: #fff;
      .ant-checkbox-wrapper {
        float: left;
        color: #fff;
      }
      .wps {
        float: right;
        cursor: pointer;
      }
    }
  }
}
</style>
