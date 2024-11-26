<template>
  <div class="flex">
    <template v-if="!isMobile">
      <!--全屏 -->
      <div class="nav-action-item" @click="toggle">
        <svg-icon
          :icon-class="isFullscreen ? 'fullscreen-exit' : 'fullscreen'"
        />
      </div>

      <!-- 语言选择 -->
      <lang-select class="nav-action-item" />

      <!-- 切换主题 -->
      <div class="flex-center w-30">
        <el-switch
          size="default"
          v-model="isDark"
          active-icon="Moon"
          inactive-icon="Sunny"
          @change="changeTheme"
        />
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import {
  useAppStore,
  useTagsViewStore,
  useUserStore,
  useSettingsStore,
} from "@/store";
import defaultSettings from "@/settings";
import { DeviceEnum } from "@/enums/DeviceEnum";
import { MessageTypeEnum, MessageTypeLabels } from "@/enums/MessageTypeEnum";
import { ThemeEnum } from "@/enums/ThemeEnum";

const appStore = useAppStore();
const tagsViewStore = useTagsViewStore();
const userStore = useUserStore();
const settingStore = useSettingsStore();

const route = useRoute();
const router = useRouter();

const isMobile = computed(() => appStore.device === DeviceEnum.MOBILE);

const { isFullscreen, toggle } = useFullscreen();

const activeTab = ref(MessageTypeEnum.MESSAGE);

const messages = ref([
  {
    id: 1,
    title: "系统升级通知：服务器将于今晚12点进行升级维护，请提前保存工作内容。",
    type: MessageTypeEnum.MESSAGE,
  },
  {
    id: 2,
    title: "新功能发布：我们的应用程序现在支持多语言功能。",
    type: MessageTypeEnum.MESSAGE,
  },
  {
    id: 3,
    title: "重要提醒：请定期更改您的密码以保证账户安全。",
    type: MessageTypeEnum.MESSAGE,
  },
  {
    id: 4,
    title: "通知：您有一条未读的系统消息，请及时查看。",
    type: MessageTypeEnum.NOTICE,
  },
  {
    id: 5,
    title: "新订单通知：您有一笔新的订单需要处理。",
    type: MessageTypeEnum.NOTICE,
  },
  {
    id: 6,
    title: "审核提醒：您的审核请求已被批准。",
    type: MessageTypeEnum.NOTICE,
  },
  { id: 7, title: "待办事项：完成用户权限设置。", type: MessageTypeEnum.TODO },
  { id: 8, title: "待办事项：更新产品列表。", type: MessageTypeEnum.TODO },
  { id: 9, title: "待办事项：备份数据库。", type: MessageTypeEnum.TODO },
]);

const settingsVisible = computed({
  get() {
    return settingStore.settingsVisible;
  },
  set() {
    settingStore.settingsVisible = false;
  },
});

/** 切换主题 */
const isDark = ref<boolean>(settingStore.theme === ThemeEnum.DARK);
const changeTheme = (val: any) => {
  isDark.value = val;
  settingStore.changeTheme(isDark.value ? ThemeEnum.DARK : ThemeEnum.LIGHT);
};

const getFilteredMessages = (type: MessageTypeEnum) => {
  return messages.value.filter((message) => message.type === type);
};
</script>
<style lang="scss" scoped>
.nav-action-item {
  display: inline-block;
  min-width: 40px;
  height: $navbar-height;
  line-height: $navbar-height;
  color: var(--el-text-color);
  text-align: center;
  cursor: pointer;

  &:hover {
    background: rgb(0 0 0 / 10%);
  }
}

:deep(.message .el-badge__content.is-fixed.is-dot) {
  top: 5px;
  right: 10px;
}

:deep(.el-divider--horizontal) {
  margin: 10px 0;
}

.dark .nav-action-item:hover {
  background: rgb(255 255 255 / 20%);
}

.layout-top .nav-action-item,
.layout-mix .nav-action-item {
  color: #fff;
}
</style>
