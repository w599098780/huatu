<template>
  <div class="subType fillBank">
    <div class="type">填空题</div>
    <div class="ques">{{topic.title}}</div>
    <div class="options">
      <div class="optionItem">
        <div class="w50" v-for="item in topic.list">  <span>{{item.problemId}}.</span><input type="text" @change="ansChange"  v-model="ans[item.problemId-1].text"></div>
      </div>
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
              topic:{
                title:'Bangkok, the capital of Thailand, is a city full of special sights. The tall glass shopping centers in the city look very modern. But __1__(在……后面) them is a place where life hasn\'t changed for over 100 years—the canals[运河], which were __2__(建造) in 1866. These canals are home to many Thai people who __3__(从不) leave there.',
                list:[
                  { problemId: 1},
                  { problemId: 2},
                  { problemId: 3},
                ],

              },
              ans:[]
            }
        },
      created(){
          for(var i=0;i<this.topic.list.length;i++){
            this.ans.push({problemId:i+1,text:''})

          }
      },
        methods: {
          ansChange(){
            console.log(this.ans)
          }
        }
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
    &.fillBank{
      .options{
        .optionItem{
          margin-left: rem(20);
          margin-top: rem(60);
          padding-bottom: rem(50);
          font-size: 0;
          .w50{
            width: 50%;
            display: inline-block;
            vertical-align: top;
            margin-bottom: rem(50);
            input{
              width: 60%;
              border-bottom: 1px solid #000;
              font-size: rem(28);
              margin-left: rem(10);
              vertical-align: bottom;
            }
          }

        }
      }

    }
  }

</style>
