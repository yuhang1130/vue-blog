<!-- eslint-disable prettier/prettier -->
<template>
  <section class="app-main" :style="{ minHeight: minHeight }">
    <RouterView>
      <template #default="{ Component, route }">
        <Transition enter-active-class="animate__animated animate__fadeIn" mode="out-in">
          <div v-show="true">
            <component :is="Component" :key="route.path" />
          </div>
        </Transition>
      </template>
    </RouterView>
  </section>
</template>

<script setup lang="ts">
import { useSettingsStore, useTagsViewStore } from "@/store";
import variables from "@/styles/variables.module.scss";


const minHeight = computed(() => {
  if (useSettingsStore().tagsView) {
    return `calc(100vh - ${variables["navbar-height"]} - ${variables["tags-view-height"]})`;
  } else {
    return `calc(100vh - ${variables["navbar-height"]})`;
  }
});
</script>

<style lang="scss" scoped>
.app-main {
  position: relative;
  background-color: var(--el-bg-color-page);
}
</style>
