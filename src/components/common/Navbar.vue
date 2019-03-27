<template>
  <el-menu
    :router="true"
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect">
    <el-menu-item index="1">
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="2" style="float: right">
      <template slot="title">
        <img class="img-head" src="https://fs.591iq.cn/group1/M00/0C/4A/rBKYP1wtZySAVOwJAADbQioY8Y4860.png"/>
        <span slot="title">小红</span>
      </template>
      <el-menu-item index="User"><i class="el-icon-info"></i><span slot="title">个人中心</span></el-menu-item>
      <el-menu-item index="LoginTheme2"><i class="el-icon-error"></i><span slot="title">退出</span></el-menu-item>
    </el-submenu>
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
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .img-head {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin-right: 5px;
  }
</style>
