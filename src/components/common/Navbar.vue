<template>
  <el-menu
    :router="true"
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal">
    <el-menu-item index="1">
      <span slot="title">首页</span>
    </el-menu-item>
    <el-dropdown @command="toCommand" style="float: right;margin-top: 17px;">
      <span class="sp-user-info">
        <img class="img-head" src="https://fs.591iq.cn/group1/M00/0C/4A/rBKYP1wtZySAVOwJAADbQioY8Y4860.png"/>
        <span class="sp-name">小红 <i class="i-icon el-icon-arrow-down el-icon--right"></i></span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="SetPwd"><i class="el-icon-info"></i><span>个人中心</span></el-dropdown-item>
        <el-dropdown-item command="LoginTheme2"><i class="el-icon-error"></i><span>退出</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>

  export default {
    name: 'NavBar',
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      toCommand(name) {
        this.$router.push({name: name});
      }
    }
  }
</script>

<style scoped>
  .sp-user-info {
    display: inline-block;
    padding-right: 20px;
  }

  .img-head {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin-right: 5px;
    display: inline-block;
  }

  .sp-user-info .sp-name {
    overflow: hidden;
    display: inline-block;
    height: 24px;
  }

</style>
