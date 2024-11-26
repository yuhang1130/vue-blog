<template>
  <div :class="{ 'has-logo': sidebarLogo }">
    <!-- layout mix-->
    <!-- layout left || layout top -->
    <SidebarLogo v-if="sidebarLogo" :collapse="!appStore.sidebar.opened" />
    <el-scrollbar>
      <SidebarMenu :menu-list="permissionStore.routes" base-path="" />
    </el-scrollbar>
    <NavbarAction v-if="layout === LayoutEnum.TOP" />
  </div>
</template>

<script setup lang="ts">
import { useSettingsStore, usePermissionStore, useAppStore } from "@/store";
import { LayoutEnum } from "@/enums/LayoutEnum";

const appStore = useAppStore();
const settingsStore = useSettingsStore();
const permissionStore = usePermissionStore();

const sidebarLogo = computed(() => settingsStore.sidebarLogo);
const layout = computed(() => settingsStore.layout);
</script>

<style lang="scss" scoped>
.has-logo {
  .el-scrollbar {
    height: calc(100vh - $navbar-height);
  }
}
</style>
