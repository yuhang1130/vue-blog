import { SizeEnum } from "./enums/SizeEnum";
import { LayoutEnum } from "./enums/LayoutEnum";
import { ThemeEnum } from "./enums/ThemeEnum";
import { LanguageEnum } from "./enums/LanguageEnum";

const { pkg } = __APP_INFO__;

const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

const defaultSettings: AppSettings = {
  title: pkg.name,
  version: pkg.version,
  showSettings: true,
  tagsView: false,
  fixedHeader: false,
  sidebarLogo: true,
  layout: LayoutEnum.TOP,
  theme: mediaQueryList.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT,
  size: SizeEnum.DEFAULT,
  language: LanguageEnum.ZH_CN,
  themeColor: "#4080FF",
  watermarkEnabled: false,
  watermarkContent: pkg.name,
};

export default defaultSettings;
