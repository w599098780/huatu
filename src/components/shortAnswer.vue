<template>
  <div class="subType shortAnswer">
    <div class="type">简答题</div>
    <div class="ques">1.Lily was so ___looking at the picture that she forgot the time.</div>
    <div class="w90">
      <textarea name="" id="" v-model="text" ></textarea>
    </div>
    <div class="res" v-if="type==1">
      <span>参考答案：<span class="m30">B</span></span>
      <span>你的答案：<span class="wrong">A</span><span class="right">B</span></span>
      <h3>解析：</h3>
      <p>无</p>
    </div>
  </div>
</template>

<script>


    export default {
        name: '',
        components: {},
      props:['type'],
        data() {
            return {
              text:''
            }
        },
        methods: {}
    }
</script>


<style lang="scss">
  @import "../css/comFun";
  .subType{
    .type{
      font-size: rem(35);
      padding: rem(30);
    }
    .ques{
      padding: rem(10) rem(20);
      font-size: rem(28);
    }
    .options{
      .optionItem{
        margin-left: rem(20);
        margin-top: rem(60);
        span{
          width: 20%;
          max-width: rem(60);
          height: rem(60);
          background: #E4E7ED;
          border-radius:50%;
          text-align: center;
          line-height:rem(60);
          display: inline-block;
          font-size: rem(35);
          vertical-align: top;
          &.active{
            color: #fff;
            background: #409EFF;

          }
        }
        p{
          display:inline-block;
          font-size: rem(30);
          margin-left: rem(10);
          width: 80%;
          vertical-align: top;
          line-height: rem(45);


        }
      }

    }
    &.shortAnswer{
      .w90{
        width: 90%;
        margin: 0 auto;
        textarea{
          border: 1px solid #000;
          border-radius: rem(10);
          width: 100%;
          padding: rem(20);
          box-sizing: border-box;
          font-size: rem(28);
          line-height: rem(40);
          min-height: rem(200);
          margin-top: rem(20);
        }
      }

    }
  }

</style>
