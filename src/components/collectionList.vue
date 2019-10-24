<template>
    <div class="collectionList">
      <div class="jiheWrap">
        <div class="jihe">
          <img src="../img/1.png" alt="">
          <!--第一种-->
          <div class="center">
            <p>文科合集</p>
            <p class="num">29人购买</p>
          </div>
          <div class="right">
            <p>￥580</p>
          </div>
        </div>
        <div class="jihe">
          <img src="../img/1.png" alt="">
          <div class="center">
            <p>文科合集</p>
            <p class="num">29人购买</p>
          </div>
          <div class="right">
            <p>￥580</p>
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
  .collectionList{
    .jiheWrap{
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
        img{
          width: 40%;
        }
        .center{
          display: inline-block;
          width: 25%;
          font-size: rem(30);
          padding-left: rem(20);
          box-sizing: border-box;
          p{
            margin-top: rem(5);
          }
          .num{
            position: absolute;
            bottom: rem(40);
          }
        }
        .right{
          display: inline-block;
          width: 35%;

          p{
            font-size: rem(40);
            color: #0099ff;
            position: absolute;
            bottom: rem(40);
            right: 0;
          }

        }
      }
    }
  }


</style>
