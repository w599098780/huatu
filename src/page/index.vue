<template>
    <div class="page">
      <div class="module module1">
        <div class="title">
          <h2>知识套餐</h2>
          <p>营养套餐</p>
          <router-link to="/pageList?id=1" tag="span">更多套餐</router-link>

        </div>
        <div class="videoList">
          <router-link class="pic" to="/details" tag="div">
            <div class="picBox">
              <img src="../img/1.png" alt="">
            </div>
            <p>文科合集</p>
            <div class="price">
              <span class="num">29人购买</span>
              <span class="money">￥500.00</span>
            </div>

          </router-link>
          <router-link class="pic" to="/details" tag="div">
            <div class="picBox">
              <img src="../img/1.png" alt="">

            </div>
            <p>文科合集</p>
            <div class="price">
              <span class="num">29人购买</span>
              <span class="money">￥500.00</span>
            </div>

          </router-link>
        </div>
      </div>
      <div class="module module2">
        <div class="title">
          <h2>专栏</h2>
          <p>综合 专业 深度</p>

          <router-link to="/pageList?id=2" tag="span">查看更多</router-link>
        </div>
        <div class="videoList">
          <router-link class="pic" to="/details" tag="div">
            <div class="picBox">
              <img src="../img/1.png" alt="">
              <span class="gengxin">更新中...</span>
            </div>
            <p>语文专转本合集</p>
            <div class="price">
              <span class="num">29人购买</span>
              <span class="money">￥500.00</span>
            </div>

          </router-link>
          <router-link class="pic" to="/details" tag="div">
            <div class="picBox">
              <img src="../img/1.png" alt="">
              <span class="gengxin">更新中...</span>
            </div>
            <p>英语专转本合集</p>
            <div class="price">
              <span class="num">29人购买</span>
              <span class="money">￥500.00</span>
            </div>

          </router-link>
        </div>

      </div>
      <div class="module module3">
        <div class="title">
          <h2>好友助力</h2>
          <p>好友助力，免费领取</p>
          <router-link to="/pageList?id=3" tag="span">更多助力</router-link>
        </div>
        <div class="videoList">
          <router-link class="pic" to="/details" tag="div">
            <div class="picBox">
              <img src="../img/1.png" alt="">
              <span class="time">距结束：32天10时18分02秒</span>
            </div>
            <p>强化冲刺系列 第一章-极限 连续 间断</p>
            <div class="price">
              <span class="zhuli">助力：￥0.00</span>
              <del class="zhuli1">￥500.00</del>
            </div>

          </router-link>
          <router-link class="pic" to="/details" tag="div">
            <div class="picBox">
              <img src="../img/1.png" alt="">
              <span class="time">距结束：32天10时18分02秒</span>
            </div>
            <p>强化冲刺系列 第一章-极限 连续 间断</p>
            <div class="price">
              <span class="zhuli">助力：￥0.00</span>
              <del class="zhuli1">￥500.00</del>
            </div>

          </router-link>
        </div>

      </div>
      <div class="module module4">
        <div class="title">
          <h2>课程分类</h2>
          <p>精选</p>
          <router-link to="/pageList?id=4" tag="span">全部分类</router-link>
        </div>
        <div class="videoList">
          <router-link  class="pic"  to="/pageList?id=4&type=2" tag="div">
            <img src="../img/2.png" alt="">
            <p>大学语文</p>
          </router-link>
          <router-link  class="pic"  to="/pageList?id=4&type=3" tag="div">
            <img src="../img/2.png" alt="">
            <p>大学数学</p>
          </router-link>
          <router-link  class="pic"  to="/pageList?id=4&type=4" tag="div">
            <img src="../img/2.png" alt="">
            <p>大学英语</p>
          </router-link>
          <router-link  class="pic"  to="/pageList?id=4&type=5" tag="div">
            <img src="../img/2.png" alt="">
            <p>计算机基础</p>
          </router-link>
        </div>

      </div>
      <div class="module module5">
        <div class="title">
          <h2>测评</h2>
          <p>评估 剖析 检测</p>
          <router-link to="/pageList?id=5" tag="span">查看更多</router-link>
        </div>
        <div class="videoList">
          <router-link class="pic" to="/test" tag="div">
            <div style="text-align: center">
              <img src="../img/cepingLogo.png" alt="">
            </div>

            <p>高等数学入门测试</p>
            <div class="price">
              <span class="num">52人已测</span>
              <span class="money">免费</span>
            </div>

          </router-link>
          <router-link class="pic" to="/test" tag="div">
            <div style="text-align: center">
              <img src="../img/cepingLogo.png" alt="">
            </div>

            <p>高等数学入门测试</p>
            <div class="price">
              <span class="num">52人已测</span>
              <span class="money">免费</span>
            </div>

          </router-link>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss">
  @import "../css/comFun";
  .page{
    background-color: #f5f7fa;
    .module{
      padding: 0 rem(50) rem(50);
      margin: 0 auto rem(20);
      font-size: 0;
      background-color: #fff;

      .title{
        position: relative;
        height: rem(80);
        h2{
          font-size: rem(30);
          font-weight: normal;
          display: inline-block;
          height: rem(80);
          line-height: rem(80);
        }
        p{
          display: inline-block;
          font-size: rem(25);
          color: #b6becb;
          margin-left: rem(20)
        }
        span{
          display: inline-block;
          font-size: rem(24);
          position: absolute;
          right: 0;
          color: #b6becb;
          height: rem(80);
          line-height: rem(80);
        }
      }
      .videoList{
        font-size: 0;
        margin-top: rem(10);
        .pic{
          width: 48%;
          display: inline-block;
          vertical-align: top;
          margin-bottom: rem(30);
          .picBox{
            position: relative;
          }
          img{
            border-radius: rem(5);
            width: 100%;
          }
          &:nth-child(odd){
            margin-right: 2%;
          }
          &:nth-child(even){
            margin-left: 2%;
          }
          p{
            color: #333;
            font-size: rem(22);
            line-height: rem(35);
            padding: rem(20) 0;
          }
          .price{
            font-size: rem(24);
            position: relative;
            .money{
              font-size: rem(24);
              color: #0099ff;
              position: absolute;
              right: 0;
              top:0
            }
            .num{
              color: #999999;
            }
            .zhuli{
              font-size: rem(24);
              color: #0099ff;
            }
            .zhuli1{
              font-size: rem(20);
              color: #999999;

            }
          }

        }

      }
      &.module4{
        .videoList{
          .pic{
            position: relative;
            p{
              color: #333;
              font-size: rem(26);
              position: absolute;
              top:rem(60);
              right: rem(20);
              max-width: rem(120);
              text-align: center;
            }
          }
        }

      }

    }
    .module2{
      .videoList{
        .picBox{
          position: relative;
          .gengxin{
            display: inline-block;
            height: rem(40);
            line-height: rem(40);
            color: #fff;
            font-size: rem(18);
            position: absolute;
            bottom: 0;
            right: 0;
            text-align: center;
            z-index: 10;
            background: #409eff;
            width: rem(130);
          }
        }

      }

    }
    .module3{
      .videoList{
        .picBox{
          position: relative;
          .time{
            display: inline-block;
            height: rem(40);
            line-height: rem(40);
            color: #fff;
            font-size: rem(20);
            position: absolute;
            bottom: 0;
            left: 0;
            text-align: center;
            z-index: 10;
            background: rgba(0,0,0,0.5);
            width: 100%;
          }
        }

      }

    }
    .module5{
      .videoList{
        .pic{
          width: 48%;
          display: inline-block;
          vertical-align: top;
          margin-bottom: rem(30);
          img{
            border-radius: rem(5);
            width: 50%;
            display: inline-block;
            margin: 0 auto;
          }


        }

      }
    }
  }



</style>
