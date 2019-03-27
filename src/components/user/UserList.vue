<template>
  <div>
    <el-row class="content-bar">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content-title">用户管理</div>
    </el-row>
    <div class="content">
      <el-row class="table-toolbar">
        <el-col :span="4">
          <el-input size="small" placeholder="查询" clearable>
            <el-button size="small" @click="search(123)" type="primary" slot="append" icon="el-icon-search">搜索
            </el-button>
          </el-input>
        </el-col>
        <el-col :span="5" :offset="15" class="table-tool">
          <el-button title="添加" size="small" type="primary" icon="el-icon-circle-plus" @click="add()">添加</el-button>
          <el-button title="修改" size="small" type="primary" icon="el-icon-edit-outline" @click="update()">修改</el-button>
          <el-button title="删除" size="small" type="danger" icon="el-icon-delete" @click="del()">删除</el-button>
        </el-col>
      </el-row>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <el-row class="table-foot">
        <el-col :span="24">
          <el-pagination
            class="table-page"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
    name: "User",
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        dialogFormVisible: false
      }
    },
    mounted() {
      this.search('loading')
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      search(val) {
        this.gateway.get({
          url: '/app/course/course/add?page=1&rows=1'
        }).then(response => {
          console.log(response)
        }, err => {
          console.log(err);
        });
        console.log(val)
      },
      add() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },
      update() {
        this.dialogFormVisible = true
      },
      del() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style scoped>
  .table-toolbar {
    margin-bottom: 20px;
  }

  .table-tool {
    text-align: right;
  }

  .table-page {
    float: right;
  }

  .table-foot {
    margin-top: 20px;
  }
</style>
