<template>
  <el-container class="login-theme2">
    <el-header></el-header>
    <el-main class="login-theme2-main">
      <el-row class="title">
        <img src="../static/common/images/logo.png" class="logo"/>
        <span>Element UI Design</span>
        <em>v1.0.0.beta</em>
      </el-row>
      <el-row class="desc">即拆即用的后台框架</el-row>
      <el-row>
        <div class="login-box">
          <div>
            <el-input v-model="loginParam.username" prefix-icon="el-icon-info" placeholder="请输入用户名"></el-input>
          </div>
          <div>
            <el-input v-model="loginParam.password" prefix-icon="el-icon-edit" placeholder="请输入密码"
                      show-password></el-input>
          </div>
          <div>
            <el-button @click="login()" type="primary" style="width: 100%">登陆</el-button>
          </div>
        </div>
      </el-row>
    </el-main>
    <el-footer class="login-theme2-footer">Copyright 2019 cch</el-footer>
  </el-container>
</template>

<script>
  import ElMain from "element-ui/packages/main/src/main";
  import ElFooter from "element-ui/packages/footer/src/main";
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {
      ElRow,
      ElFooter,
      ElMain
    },
    name: "LoginTheme2",
    data() {
      return {
        loginParam: {
          username: '',
          password: '',
          valid: {
            username: '"name":"用户名","length":[0,10],"notEmpty":true',
            password: '"name":"密码","length":[0,10],"notEmpty":true'
          }
        }
      }
    },
    methods: {
      login() {
        if (!this.formValid.check(this.loginParam)) {
          this.$message.error(this.loginParam.e);
          return;
        }
        if (this.loginParam.username == 'admin') {
          this.authority.setAuthority('admin');
        }
        if (this.loginParam.username == 'user') {
          this.authority.setAuthority('user');
        }
        if (this.loginParam.username != 'user' && this.loginParam.username != 'admin') {
          this.$message.error('用户名或密码错误');
          return;
        }
        window.location.href = '';
      }
    }
  }
</script>

<style scoped>
  .login-theme2 {
    height: 100vh;
    background-image: url("../static/lib/login-theme2/images/login-theme2-bg.svg");
    background-size: 100%;
  }

  .login-theme2-footer {
    text-align: center;
    line-height: 60px;
    color: #78797b;
  }

  .login-theme2-main {
    text-align: center;
  }

  .login-theme2-main .title {
    color: rgba(0, 0, 0, .85);
    font-weight: 700;
    font-size: 33px;
    height: 60px;
    margin-top: 80px;
  }

  .login-theme2-main .logo {
    width: 50px;
    height: 50px;
    margin: 5px;
  }

  .login-theme2-main .title span {
    display: inline-block;
    height: 60px;
    overflow-y: hidden;
    line-height: 60px;
    text-align: left;
  }

  .login-theme2-main .title em {
    color: rgba(0, 0, 0, .45);
    font-style: normal;
    font-size: 12px;
    overflow-y: hidden;
    display: inline-block;
    height: 20px;
    margin-bottom: 12px;
  }

  .login-theme2-main .desc {
    color: rgba(0, 0, 0, .45);
    font-size: 14px;
  }

  .login-theme2-main .login-box {
    display: inline-block;
    border-top: 1px solid #e8e8e8;
    margin-top: 48px;
    width: 375px;
    padding-top: 32px;
  }

  .login-theme2-main .login-box div {
    margin-bottom: 15px;
  }
</style>
