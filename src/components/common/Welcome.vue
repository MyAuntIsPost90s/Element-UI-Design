<template>
  <div>
    <el-row class="content-bar">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>欢迎</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content-title">欢迎使用</div>
    </el-row>
    <div class="content">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Welcome",
    data() {
      return {
        reverse: true,
        activities: [
          {
            content: '概要设计',
            timestamp: '2018-04-11'
          }, {
            content: '详细设计',
            timestamp: '2018-04-13'
          }, {
            content: '编码',
            timestamp: '2018-04-17'
          },
          {
            content: '分隔内容上有关联但属于不同类别的数据集合。',
            timestamp: '2018-04-17'
          },
          {
            content: '在el-breadcrumb中使用el-breadcrumb-item标签表示从首页开始的每一级。Element 提供了一个separator属性，在el-breadcrumb标签中设置它来决定分隔符，它只能是字符串，默认为斜杠',
            timestamp: '2018-04-17'
          },
          {
            content: 'message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性',
            timestamp: '2018-04-17'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
