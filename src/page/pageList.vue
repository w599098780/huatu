<template>
  <div class="pageList">
    <div class="searchWrap" v-if="id!=3">
      <div class="search">
        <input type="text" placeholder="搜索" />
        <img src="../img/searchIcon.png" alt="" class="searchIcon">
      </div>

    </div>
    <collection-list v-if="id==1"></collection-list>
    <special-list v-if="id==2"></special-list>
    <friend-list  v-if="id==3"></friend-list>
    <course-list v-if="id==4" :type="type"></course-list>
    <test-list v-if="id==5"></test-list>
    <div class="bottomText" v-if="id!=4">
      <p>我是有底线的</p>
    </div>
  </div>

</template>

<script>
  import collectionList from '../components/collectionList'
  import specialList from '../components/specialList'
  import friendList from '../components/friendList'
  import courseList from '../components/courseList'
  import testList from '../components/testList'
    export default {
      name: "pageList",
      components:{collectionList,specialList,friendList,courseList,testList},
      data(){
          return{
            id:'',
            type:1
          }
       },
       created(){
        this.id= this.$route.query.id
         this.type= this.$route.query.type

      }
    }
</script>

<style lang="scss">
  @import "../css/comFun";
  .pageList{
    background: #f5f7fa;
    .searchWrap{
      text-align: center;
      padding-top: rem(50);
      background: #fff;
      padding-bottom: rem(30);
      font-size: 0;
      .search{
        display: inline-block;
        position: relative;
        width: 80%;
        margin: 0 auto;
      }
    }
    input{
      width: 100%;
      border: 1px solid #ccc;
      display: inline-block;
      height: rem(60);
      line-height: rem(60);
      padding-left: rem(60);
      border-radius: rem(10);
      box-sizing: border-box;
      background: #f5f7fa;
      &::placeholder{
        color: #ccc;
      }
    }
    .searchIcon{
      position: absolute;
      top:rem(10);
      left: rem(15);
      width: rem(40);

    }

    .bottomText{
      color: #ccc;
      font-size: rem(30);
      text-align: center;
      background: #fff;
      line-height: rem(100);
    }
  }

</style>
