<template>
    <div class="friend">
      <div class="jiheWrap">
        <div class="jihe">
          <div class="left">
            <img src="../img/1.png" alt="">
            <span>距结束：32天02时49分29秒</span>
          </div>

          <div class="center">
            <p>强化冲刺系列 第一张-极限 间断</p>
            <del>单买价21.00</del>
            <div class="zhuli"><p>助力：￥0.00</p> <span>助力领取</span></div>
          </div>

        </div>
        <div class="jihe">
          <div class="left">
            <img src="../img/1.png" alt="">
            <span>距结束：32天02时49分29秒</span>
          </div>

          <div class="center">
            <p>强化冲刺系列 第一张-极限 间断</p>
            <del>单买价21.00</del>
            <div class="zhuli"><p>助力：￥0.00</p> <span>助力领取</span></div>
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
  .friend{
    background: #fff;
    .jiheWrap{
      width: 95%;
      margin: rem(50) auto 0;

      .jihe{
        font-size: 0;
        @include border-1px(#ccc);
        padding-bottom: rem(40);
        padding-top: rem(30);
        .left{
          width: 40%;
          display: inline-block;
          vertical-align: top;
          position: relative;
          img{
            width: 100%;
            margin-top: rem(10);
          }
          span{
            width: 100%;
            height: rem(40);
            line-height: rem(40);
            color: #fff;
            background: rgba(0,0,0,0.5);
            position: absolute;
            bottom: 0;
            left: 0;
            font-size: rem(20);
            text-align: center;

          }

        }
        .center{
          width: 60%;
          display: inline-block;
          vertical-align: top;
          p{
            font-size:rem(30);
            line-height: rem(43);
            color:#333;
            padding-left: rem(10);
          }
          del{
            font-size:rem(24);
            color: #666666;
            padding-left: rem(10);
            margin-top: rem(10);
            display: inline-block;
          }
          .zhuli{
            margin-top: rem(20);
            p{
              font-size: rem(30);
              color: #0099ff;
              display: inline-block;
            }
            span{
              font-size:rem(30);
              color: #fff;
              background: #0099ff;
              margin-left: rem(30);
              padding: rem(10) rem(30);
              border-bottom-right-radius: rem(30);
              border-bottom-left-radius: rem(30);
              border-top-right-radius: rem(30);
              border-top-left-radius: rem(30);
            }
          }
        }


      }

    }
  }


</style>
