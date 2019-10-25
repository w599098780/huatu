<template>
    <div class="details">
      <div class="banner">
        <img src="../img/details1.jpg" alt="">
      </div>
      <div class="menu">
        <div class="tag tag1 active">课程详情</div>
        <div class="tag  tag2">课程表</div>
        <div class="tag  tag3">名师简介</div>
      </div>
      <div class="content">
        <div class="title">词汇大爆炸：牢记四六级必备核心词</div>
        <div class="price"><span>￥0</span><del>价格：39.9</del></div>
        <div class="list">
          <div class="inner">
            <p>
              <span class="red">优惠</span>
              <span class="text">0元抢12节好课</span>
            </p>
          </div>
          <div class="inner">
            <p class="time"><span class="icon iconfont icon-shijian"></span>课时：12</p>
            <p class="endTime"><span class="icon iconfont icon-kecheng"></span>课程有效期：2019-12-31</p>
          </div>
          <div class="inner">
            <p class="time"><span class="icon iconfont icon-wo"></span>报名人数：</p>
            <p class="people">10000人</p>
          </div>
        </div>
        <div class="introduce">
          <div class="inner95">
            <div class="title">课程介绍</div>
            <p class="introduceText">
              更多好课：《四六级地心引力礼盒》免费领！详情：<span>四六级考前60天必考规划</span>
            </p>
            <img src="../img/details2.jpg" alt="">
            <img src="../img/details3.jpg" alt="">
            <img src="../img/details4.jpg" alt="">
            <img src="../img/detail5.jpg" alt="">
            <img src="../img/detail6.jpg" alt="">

          </div>

        </div>
        <div class="rules introduce">
          <div class="inner95">
            <div class="title">退换课规则</div>
            <p>1.退课：购买录播课程后不超过7天允许申请退课。</p>
            <p>2.退课：购买录播课程后不超过7天允许申请退课。但是每个课程只有一次换课机会，且如果课程有差额需进行补齐</p>
            <p>3.退课：购买录播课程后不超过7天允许申请退课。但是每个课程只有一次换课机会，且如果课程有差额需进行补齐
              <br/>(1)有效期为具体天数行课程，。。。。
              <br/>(2)有效期为具体天数行课程，。。。。
              <br/>(3)有效期为具体天数行课程，。。。。
            </p>

          </div>

        </div>
        <div class="lingqu">
          <div class="zixun">
            <div class="zixunIcon">
              <p class="icon iconfont icon-zixun"></p>
              <p>在线咨询</p>
            </div>
            <div class="btn">免费领取</div>
          </div>
        </div>
      </div>

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
  .details{
    background: #f5f7fa;
    .banner{
      background: #fff;
      img{
        width: 100%;
      }
    }
    .menu{
      display: flex;
      @include border-1px(#909399);
      background: #fff;
      .tag{
        flex:1;
        text-align: center;
        line-height:40px;
        height: 40px;
        font-size: rem(30);
        &.tag1,&.tag2{
          @include borderRight-1px(#909399,40px)
        }
        &.active{
          border-bottom: 1px solid #67C23A;

        }
      }

    }
    .content{
      background: #fff;
      .title{
        font-size: rem(36);
        padding: rem(30) 0 rem(15) rem(25);
      }
      .price{
        padding: rem(30) 0 rem(15) rem(25);
        span{
          font-size: rem(60);
          color: #F56C6C;
        }
        del{
          margin-left: rem(30);
          font-size: rem(24);
          color: #606266;
        }
        @include border-1px(#909399);
      }
      .list{
        .inner{
          height: rem(80);
          background: #f5f7fa;
          @include border-1px(#909399);
          position: relative;
          .time{
            position: absolute;
            font-size: rem(20);
            color: #606266;
            position: absolute;
            top:50%;
            left: rem(30);
            transform: translateY(-50%);
          }
          .endTime{
            position: absolute;
            font-size: rem(20);
            color: #606266;
            position: absolute;
            top:50%;
            right: rem(30);
            transform: translateY(-50%);
          }
          .people{
            position: absolute;
            font-size: rem(20);
            position: absolute;
            top:50%;
            left: rem(180);
            transform: translateY(-50%);
            color: #F56C6C;
          }
          .icon{
            display: inline-block;
            margin-right: rem(10);
            vertical-align: middle;
            color: #F56C6C;
          }
        }
        .red{
          display: inline-block;
          padding: rem(8) rem(30);
          color: #fff;
          font-size: rem(18);
          background: #F56C6C;
          position: absolute;
          top:50%;
          left: rem(30);
          transform: translateY(-50%);
        }
        .text{
          font-size: rem(18);
          position: absolute;
          top:50%;
          left: rem(160);
          transform: translateY(-50%);
        }
      }
      .introduce{
        background: #fff;

        .inner95{
          width: 95%;
          margin: 0 auto;
          .title{
            font-size: rem(40);

            height: rem(45);
            line-height: rem(45);
            @include border-1px(#909399);
          }
          .introduceText{
            font-size:rem(28);
            line-height: rem(45);
            margin-top: rem(30);
            span{
              color: blue;
            }
          }
          img{
            width: 100%;
          }
        }

      }
      .rules{
        margin-top: rem(20);
        padding-bottom: rem(100);
        .title{
          padding: rem(30) 0 rem(35) rem(25);
        }

        p{
          font-size: rem(26);
          line-height: rem(40);
          padding: rem(10) rem(10);
          @include border-1px(#909399);
          &:last-child{
            &::after{
              border: none;
            }
          }

        }
      }


    }
    .lingqu{
      @include border-top-1px(#909399);
      position: fixed;
      bottom: 0;
      width: 100%;
      background: #fff;
      .zixun{
        font-size: 0;
        .zixunIcon{
          width: 20%;
          display: inline-block;
         vertical-align: top;
          font-size: rem(26);
          p{
            text-align: center;
          }
          .icon{
            margin-top: rem(10);
            font-size: rem(40);
          }
        }
        .btn{
          width: 80%;
          display: inline-block;
          vertical-align: top;
          font-size: rem(40);
          background: #f5432c;
          color: #fff;
          text-align: center;
          padding: rem(15) 0;
        }

      }

    }

  }

</style>
