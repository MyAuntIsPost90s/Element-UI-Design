<template>
  <div class="top-content">
    <div class="inner-bg">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2 text">
            <h1><strong>MallCMS</strong> Login Form</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 phone">
            <img src="../static/lib/login-theme/img/iphone.png" alt="">
          </div>
          <div class="col-sm-5 form-box">
            <div class="form-top">
              <div class="form-top-left">
                <h3>Login to our App</h3>
                <p>wellcome to join us</p>
              </div>
              <div class="form-top-right">
                <i class="fa fa-pencil"></i>
              </div>
            </div>
            <div class="form-bottom">
              <form role="form" action="" method="post" class="registration-form">
                <div class="form-group">
                  <label class="sr-only" for="l_username">Username</label>
                  <input type="text" id="l_username" v-model="username" name="username" placeholder="Username"
                         class="form-first-name form-control"/>
                </div>
                <div class="form-group">
                  <label class="sr-only" for="l_password">Password</label>
                  <input type="password" id="l_password" v-model="password" name="password" placeholder="Password"
                         class="form-last-name form-control"/>
                </div>
                <button type="button" id="btn-login" class="btn" @click="login">Sign me up!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        loginParam: {
          username: '',
          password: '',
          valid: {
            username: '"length":[0,1],"notEmpty":true',
            password: '"length":[0,1],"notEmpty":true'
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

<style>
  @import '../static/lib/login-theme/bootstrap/css/bootstrap.min.css';
  @import '../static/lib/login-theme/font-awesome/css/font-awesome.min.css';
  @import '../static/lib/login-theme/css/form-elements.css';
  @import '../static/lib/login-theme/css/style.css';
</style>
