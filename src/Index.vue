<template>
  <el-container v-bind:style="{ height:height }">
    <el-aside class="page-menu" style="width: 256px">
      <Menu/>
    </el-aside>
    <el-container v-bind:style="{ height:'100%' }">
      <el-header class="main-header">
        <NavBar class="nav-bar"/>
      </el-header>
      <el-main class="main-contain">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import NavBar from './components/common/Navbar'
  import Menu from './components/common/Menu'

  export default {
    name: "Index",
    components: {NavBar, Menu},
    data() {
      return {
        height: (innerHeight) + 'px'
      }
    }
  }
</script>

<style>

</style>
