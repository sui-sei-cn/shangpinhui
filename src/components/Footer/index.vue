<template>
  <div id="footer">
    <div id="serve">
      <ul>
        <li>购物指南</li>
        <li>购物流程</li>
        <li>会员介绍</li>
        <li>生活旅行/团购</li>
        <li>常见问题</li>
        <li>购物指南</li>
      </ul>
      <ul>
        <li>配送方式</li>
        <li>上门自提</li>
        <li>211限时达</li>
        <li>配送服务查询</li>
        <li>配送费收取标准</li>
        <li>海外配送</li>
      </ul>
      <ul>
        <li>支付方式</li>
        <li>货到付款</li>
        <li>在线支付</li>
        <li>分期付款</li>
        <li>邮局汇款</li>
        <li>公司转账</li>
      </ul>
      <ul>
        <li>售后服务</li>
        <li>售后政策</li>
        <li>价格保护</li>
        <li>退款说明</li>
        <li>返修/退换货</li>
        <li>取消订单</li>
      </ul>
      <ul>
        <li>特色服务</li>
        <li>夺宝岛</li>
        <li>DIY装机</li>
        <li>延保服务</li>
        <li>尚品汇礼品卡</li>
        <li>尚品汇通信</li>
      </ul>
      <div>
        <p>关注微信公众号</p>
        <img src="./imgs/bing_generated_qrcode.png" />
      </div>
    </div>
    <el-footer>
      <el-breadcrumb separator="|">
        <el-breadcrumb-item>关于我们</el-breadcrumb-item>
        <el-breadcrumb-item>联系我们</el-breadcrumb-item>
        <el-breadcrumb-item>商家入驻</el-breadcrumb-item>
        <el-breadcrumb-item>营销中心</el-breadcrumb-item>
        <el-breadcrumb-item>友情链接</el-breadcrumb-item>
      </el-breadcrumb>
      <el-breadcrumb separator="|">
        <el-breadcrumb-item>地址：北京市朝阳区科荟路xx号</el-breadcrumb-item>
      </el-breadcrumb>
      <el-breadcrumb separator="|">
        <el-breadcrumb-item> 京ICP备xxxxxx号 </el-breadcrumb-item>
      </el-breadcrumb>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
#footer {
  background-color:#f1f2f3;
  #serve {
    width: 1524px;
    margin: 0 auto;
    height: 200px;
    display: flex;
    justify-content: space-evenly;
    ul{
      margin-top: 20px;
      li{
        &:nth-child(1){
          font-weight: bold;
        }
      &:nth-child(n+2){
        font-size: 13px;
      }
    }
  }
    div{
      margin-top: 20px;
      flex-direction: column;
      img {
        transform: scale(0.8);
      }
    }
  }
  .el-footer {
    width: 80%;
    margin: 0 auto;
    // background-color: #b3c0d1;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .el-breadcrumb {
      &:nth-child(n + 2) {
        font-size: 12px;
      }
    }
  }
}
</style>
