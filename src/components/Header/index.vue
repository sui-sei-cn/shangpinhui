<template>
  <div id="header">
    <div id="top">
      <el-header>
        <div id="left">
          <el-breadcrumb separator="|">
            <el-breadcrumb-item>尚品汇欢迎您！</el-breadcrumb-item>
            <el-breadcrumb-item>
              <router-link to="/login">请登录</router-link>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <router-link to="/register">免费注册</router-link>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div id="right">
          <el-breadcrumb separator="|">
            <el-breadcrumb-item>我的订单</el-breadcrumb-item>
            <el-breadcrumb-item>我的购物车</el-breadcrumb-item>
            <el-breadcrumb-item>我的尚品汇</el-breadcrumb-item>
            <el-breadcrumb-item>尚品汇会员</el-breadcrumb-item>
            <el-breadcrumb-item>企业采购</el-breadcrumb-item>
            <el-breadcrumb-item>关注尚品汇</el-breadcrumb-item>
            <el-breadcrumb-item>合作招商</el-breadcrumb-item>
            <el-breadcrumb-item>商家后台</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-header>
    </div>

    <div id="search">
      <router-link to="/home">
        <img src="./imgs/Snipaste_2024-06-10_14-51-41.png"
      /></router-link>

      <div>
        <el-input
          placeholder="请输入内容"
          v-model="keyWord"
          class="input-with-select"
        ></el-input>
        <el-button slot="append" @click="goSearch">搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyWord: "",
    };
  },
  methods:{
    goSearch(){
      this.$router.push({
        name:"search",
        query:{
          keyWord:this.keyWord.toLowerCase()
        },
        params:{
          keyWord:this.keyWord.toLowerCase()
        },
        
      })

    }
  },
};
</script>

<style scoped lang="less">
#header {
  // width: 80%;
  // margin: 0 auto;
  #top {
    background-color: #f1f2f3;
    .el-header {
      width: 1524px;
      margin: 0 auto;
      // background-color: #f00;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  #search {
    // background-color: #0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1524px;
    margin: 0 auto;
    height: 120px;

    
    img{
      height: 120px;
    }
    div {
      display: flex;
      justify-content: flex-end;
      width: 400px;

      /deep/ .el-input {
        border: 1px solid orangered;

        .el-input__inner {
          border-radius: 0;
          border-color: transparent;
          &:focus {
            border-color: transparent;
          }
        }
      }

      .el-button {
        background-color: orangered;
        border-radius: 0;
        border-color: orangered;
        color: #fff;
      }
    }
  }
}
</style>
