<template>
  <div>
    <h1>test</h1>
    <!-- <ul>
      <router-view></router-view>
      <li>
        <router-link to="/login">登录页</router-link>
      </li>
      <li>
        <router-link to="/regist">注册页</router-link>
      </li>
      <li>
        <router-link to="/notf">异常页</router-link>
      </li>
    </ul>-->
    <router-view></router-view>

    <el-container>
      <el-header style="height: 80px;">HS资产管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="1" class="el-menu-vertical-demo" router>
            <el-menu-item index="1">
              <i class="el-icon-loading"></i>
              <span slot="title">
                <a href="/login">资产管理</a>
              </span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">
                <a href="/regist">航数测试</a>
              </span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">员工管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">航数论坛</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main></el-main>
          <el-footer style="height: 40px;">航数资产管理系统 版权所有： GSL | 2020-08-08</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>