import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./pages/Dashboard.vue";
import ListDataRetention from "./pages/Retention/ListDataRetention.vue";
import TambahDataRetention from "./pages/Retention/TambahDataRetention.vue";
import ListDataCalonPelanggan from "./pages/CalonPelanggan/ListDataCalonPelanggan.vue";
import TambahDataCalonPelanggan from "./pages/CalonPelanggan/TambahDataCalonPelanggan.vue";
import ImportExcelCalonPelanggan from "./pages/CalonPelanggan/ImportExcelCalonPelanggan.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/listdataretention",
      name: "ListDataRetention",
      component: ListDataRetention,
    },
    {
      path: "/tambahdataretention",
      name: "TambahDataRetention",
      component: TambahDataRetention,
    },
    {
      path: "/listdatacalonpelanggan",
      name: "ListDataCalonPelanggan",
      component: ListDataCalonPelanggan,
    },
    {
      path: "/tambahdatacalonpelanggan",
      name: "TambahDataCalonPelanggan",
      component: TambahDataCalonPelanggan,
    },
    {
      path: "/importexcelcalonpelanggan",
      name: "ImportExcelCalonPelanggan",
      component: ImportExcelCalonPelanggan,
    },
  ],
});

export default router;
