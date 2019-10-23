<template>
  <div class="menuBottom">
    <el-row>
      <el-col :span="8">
        <router-link class="grid-content bg-purple" :to="{path:'/repairAnnounce',query:{id:1}} " tag="div">
           <img src="../img/icon1-1.png" alt="" v-show="active==1">
           <img src="../img/icon1.png" alt="" v-show="active!=1">
           <p :class="{'avtive':active==1}">广场/公告</p>
        </router-link>
      </el-col>
      <el-col :span="8">
        <router-link :to="{path:'/repair',query:{id:2}}" class="grid-content bg-purple-light" tag="div">
            <img src="../img/icon2-2.png" alt="" v-show="active==2">
            <img src="../img/icon2.png" alt="" v-show="active!=2">
            <p :class="{'avtive':active==2}">我要报修</p>
        </router-link>
      </el-col>
      <el-col :span="8">
        <router-link class="grid-content bg-purple" :to="{path:'/repairRecord',query:{id:3}}" tag="div">
            <img src="../img/icon3-3.png" alt="" v-show="active==3">
            <img src="../img/icon3.png" alt="" v-show="active!=3">
            <p :class="{'avtive':active==3}">维修记录</p>
       </router-link>
      </el-col>
    </el-row>
  </div>
    
</template>

<script>
    export default {
        name: "menuBottom",
        created(){
          this.active=this.$route.query.id
        },
      data(){
          return{
            active:1
          }
      }
    }
</script>

<style lang="scss"  type="text/scss">
  @import "../css/comFun";
  .menuBottom{
    @include border-top-1px(#b5b5b7);
    height: rem(133);
    position: fixed;
    width: 100%;
    bottom:0;

    .grid-content{
      text-align: center;
      padding-top: rem(10);
      img{
        width: rem(74);
      }
      p{
        font-size: rem(24);
        &.avtive{
          color: #1296db;
        }
      }
    }
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-dark {

    }
    .bg-purple {

    }
    .bg-purple-light {

    }
    .grid-content {

      min-height: 36px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }

</style>
