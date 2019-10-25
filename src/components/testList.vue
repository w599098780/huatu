<template>
    <div class="testList">
      <div class="list">
        <div class="left">
          <img src="../img/cepingLogo.png" alt="">
        </div>
        <div class="center">
          <p>高等数学 测评</p>
          <span>免费</span>
        </div>
        <div class="right">
          <p>试卷0套 <span>|</span> 已测24</p>
        </div>

      </div>
      <div class="list">
        <div class="left">
          <img src="../img/cepingLogo.png" alt="">
        </div>
        <div class="center">
          <p>高等数学 测评</p>
          <span>免费</span>
        </div>
        <div class="right">
          <p>试卷0套 <span>|</span> 已测24</p>
        </div>

      </div>
      <div class="list">
        <div class="left">
          <img src="../img/cepingLogo.png" alt="">
        </div>
        <div class="center">
          <p>高等数学 测评</p>
          <span>免费</span>
        </div>
        <div class="right">
          <p>试卷0套 <span>|</span> 已测24</p>
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
  .testList{
    background:#fff;
    .list{
      font-size: 0;
      background:#fff;
      margin: rem(10) auto 0;
      padding: rem(30) 0;
      @include border-1px(#E4E7ED);
      min-height: rem(100);
      position: relative;
      width: 98%;
      .left{
        width: 30%;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        img{
          width: 50%;
        }
      }
      .center{
        width: 40%;
        display: inline-block;
        vertical-align: top;
        p{
          font-size: rem(25);
        }
        span{
          color: #409EFF;
          font-size: rem(28);
          display: inline-block;
          margin-top: rem(50);
        }
      }
      .right{
        width: 30%;
        display: inline-block;
        vertical-align: top;
        height: 100%;
        p{
          font-size: rem(20);
          color: #909399;
          bottom: rem(30);
          position: absolute;

        }

      }

    }

  }

</style>
