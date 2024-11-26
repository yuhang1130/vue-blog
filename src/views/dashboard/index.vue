<template>
  <!-- 首页图片 -->
  <el-image
    style="animation: header-effect 2s"
    class="w-screen vh-50 position-fixed z-1"
    v-once
    lazy
    :src="bgImageUrl"
    fit="cover"
  >
    <template #error>
      <div class="w-full vh-50"></div>
    </template>
  </el-image>
  <!-- 首页文字 -->
  <div
    class="position-relative flex flex-col flex-justify-center flex-items-center position-relative vh-50 no-use-select overflow-hidden keyframes-fade-in"
  >
    <h1 class="font-size-10 color-white">
      <span>{{ title }}</span>
    </h1>
    <div
      class="cursor-pointer color-white translucent-background border-rd-xl pl-3 pr-3"
      @click="getGuShi()"
    >
      <printer :printerInfo="printerInfo">
        <template #paper="scope">
          <h3>
            {{ scope.content
            }}<span
              class="ml-1 font-extralight"
              style="animation: hideToShow 0.7s infinite"
              >|</span
            >
          </h3>
        </template>
      </printer>
    </div>
    <div
      class="h21 w-full z-10 position-absolute position-bottom-none"
      style="
        animation: gradientBG 120s linear infinite;
        background: var(--bannerWave1);
      "
    ></div>
    <div
      class="h25 w-full z-5 position-absolute position-bottom-none"
      style="
        background: var(--bannerWave2);
        animation: gradientBG 120s linear infinite;
      "
    ></div>
    <i class="el-icon-arrow-down" @click="navigation"></i>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "Dashboard",
});

const bgImageUrl = ref<string>("https://img.zuosenyu.com/home.png");
const title = ref<string>("无人扶我青云志，我自踏雪至山巅。");
const printerInfo = ref<string>("你看对面的青山多漂亮");

const navigation = () => {
  ElMessage.success("navigation-------");
  console.log("navigation-------");
};
const getGuShi = () => {
  ElMessage.success("正在获取古诗，请稍后-------");
  console.log("正在获取古诗，请稍后-------");
};
</script>

<style lang="scss" scoped>
.no-use-select {
  user-select: none;
}

.translucent-background {
  background: $translucent-background;
}
</style>
