<template>
  <div class="special">
    <div class="jiheWrap">
      <div class="jihe">
        <div class="left">
          <img src="../img/1.png" alt="">
          <span>更新中...</span>
        </div>

        <div class="center">
          <p>语文专转本集合</p>
          <p class="num"><span>￥280</span>/共含9课</p>
        </div>
        <div class="right">
          <p>290人购买</p>
        </div>
      </div>
      <div class="jihe">
        <div class="left">
          <img src="../img/1.png" alt="">
        </div>
        <div class="center">
          <p>语文专转本集合</p>
          <p class="num"><span>￥280</span>/共含9课</p>
        </div>
        <div class="right">
          <p>290人购买</p>
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
  .special{
    margin-top: rem(20);
    background:#fff;
    .jihe{
      font-size: 0;
      width: 95%;
      margin:0 auto ;
      position: relative;
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
        }
        span{
          width: rem(120);
          color:#fff;
          text-align: center;
          height: rem(40);
          line-height: rem(40);
          position: absolute;
          top: 0;
          left: 0;
          font-size: rem(20);
          background: #0099ff;

        }
      }

      .center{
        display: inline-block;
        width: 35%;
        font-size: rem(30);
        padding-left: rem(20);
        box-sizing: border-box;
        p{
          margin-top: rem(5);

          span{
            color: #0099ff;
          }
        }
        .num{
          position: absolute;
          bottom: rem(40);
          color: #adadad;
        }
      }
      .right{
        display: inline-block;
        width: 25%;
        p{
          font-size: rem(30);
          position: absolute;
          bottom: rem(40);
          right: 0;
          color: #adadad;
        }

      }
    }
  }

</style>
