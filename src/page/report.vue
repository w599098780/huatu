<template>
    <div class="report">
      <div class="title">测试结果</div>
      <p><span>总得分：26.5分</span><span>测试用时：00:17:15</span></p>
      <div class="text">
        点评：<br/>
        转本学习任重而道远，通过入门测试智能刚刚起航。</div>
      <div class="btn">
        <span class="btn1">重测一下</span>
        <span class="btn2">返回列表</span>
      </div>
      <div class="card">
        <div class="name">答题卡</div>
        <div class="res">
          <span>1.B <i class="iconfont icon-changyongicon-"></i><i class="iconfont icon-cuowu"></i></span>
          <span>2.B <i class="iconfont icon-changyongicon-"></i><i class="iconfont icon-cuowu"></i></span>
          <span>3.B <i class="iconfont icon-changyongicon-"></i><i class="iconfont icon-cuowu"></i></span>
          <span>4.B <i class="iconfont icon-changyongicon-"></i><i class="iconfont icon-cuowu"></i></span>
          <span>5.B <i class="iconfont icon-changyongicon-"></i><i class="iconfont icon-cuowu"></i></span>
          <span>6.B <i class="iconfont icon-changyongicon-"></i><i class="iconfont icon-cuowu"></i></span>
        </div>
      </div>
      <router-link class="ans" tag="div" to="paper?type=1">
        查看解析
      </router-link>

    </div>
</template>

<script>


    export default {
        name: '',
        components: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss">
  @import "../css/comFun";
  .report{
    .title{
      font-size: rem(50);
      color: #E6A23C;
      text-align: center;
      line-height:rem(100);
      margin-bottom: rem(40);
    }
    p{
    font-size: rem(40);
    color: #606266;
    span{
      margin: rem(20);
    }
  }
    .text{
      font-size: rem(30);
      margin-top: rem(40);
      padding: rem(20);
      line-height: rem(45);
    }
    .btn{
      text-align: center;
      margin-top: rem(50);
      @include border-1px(#909399);
      padding-bottom: rem(100);
      .btn1,.btn2{
        padding: rem(10) rem(30);
        border: 1px solid #409EFF;
        border-bottom-right-radius: rem(30);
        border-bottom-left-radius: rem(30);
        border-top-right-radius: rem(30);
        border-top-left-radius: rem(30);
        font-size: rem(30);
        margin: rem(40);
      }

    }
    .ans{
      font-size: rem(40);
      color: #606266;
      text-align: center;
      margin-top: rem(40);
      position: fixed;
      bottom: 0;
      height: 60px;
      line-height: 60px;
      width: 100%;
      border-top:1px solid #DCDFE6;
    }
    .card{
      .name{
        height: rem(80);
        line-height:rem(80);
        color: #606266;
        background:#EBEEF5;
        text-align: center;
        font-size: rem(30);
      }
      .res{
        font-size: rem(35);
        padding-bottom: 60px;
        span{
          display: inline-block;
          margin: rem(10);
        }
        .iconfont{
          font-size: rem(40);
          color: #F56C6C;
          vertical-align: middle;
          &.icon-changyongicon-{
            font-size: rem(55);
            color: #67C23A;
          }
        }
      }
    }

  }

</style>
