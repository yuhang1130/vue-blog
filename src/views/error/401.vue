<script setup lang="ts">
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

defineOptions({
  name: "Page401",
});

const state = reactive({
  errGif: new URL("../../assets/images/401.gif", import.meta.url).href,
  ewizardClap:
    "https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646",
  dialogVisible: false,
});

const { errGif, ewizardClap, dialogVisible } = toRefs(state);

const router = useRouter();

function back() {
  router.back();
}
</script>

<template>
  <div class="page-container">
    <el-row>
      <el-col :span="24">
        <ul class="list-unstyled">
          <el-button
            icon="el-icon-arrow-left"
            class="pan-back-btn"
            @click="back"
            >返回</el-button
          >
          <h2>你没有权限去该页面</h2>
          <li>或者你可以去:</li>
          <li class="link-type">
            <router-link to="/dashboard">回首页</router-link>
          </li>
          <li class="link-type">
            <a href="https://www.taobao.com/">随便看看</a>
          </li>
          <li>
            <a href="#" @click.prevent="dialogVisible = true">点我看图</a>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-dialog v-model="dialogVisible" title="随便看">
      <img :src="ewizardClap" class="pan-img" />
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  padding: 100px;

  .pan-back-btn {
    color: #fff;
    background: #008489;
    border: none !important;
  }

  .pan-gif {
    display: block;
    margin: 0 auto;
  }

  .pan-img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }

  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }

  .list-unstyled {
    text-align: center;
    font-size: 14px;

    li {
      padding-bottom: 5px;
    }

    a {
      color: #008489;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
