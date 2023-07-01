<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
    <!-- Content area -->
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
    >
      <!-- Site header -->
      <Header
        :sidebarOpen="sidebarOpen"
        @toggle-sidebar="sidebarOpen = !sidebarOpen"
      />
      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <!-- Dashboard actions -->
          <div class="sm:flex sm:justify-between sm:items-center mb-8">
            <!-- Right: Actions -->
            <div
              class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
            ></div>
          </div>
          <!-- Main -->
          <div
            class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 mb-5"
          >
            <div class="px-5 pt-5">
              <h2
                class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2"
              >
                Tolong Masukkan Excel Dengan Spesifikasi Sebagai Berikut
              </h2>
            </div>
            <div class="px-5 py-3">
              <ul class="list-disc list-inside">
                <li>File Excel Harus Berisi 3 Kolom</li>
                <li>Kolom Pertama Berisi Nama</li>
                <li>Kolom Kedua Berisi Nomor Telepon</li>
                <li>Kolom Ketiga Berisi Alamat</li>
                <li>File Excel Harus Berisi Minimal 1 Data</li>
              </ul>
            </div>
            <div class="">
              <!-- File input -->
              <input
                type="file"
                @change="handleFileUpload"
                accept=".xlsx, .xls"
                class="ml-5 mt-5 mb-5"
              />
            </div>
          </div>
          <!-- Main -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Sidebar from "../../partials/Sidebar.vue";
import Header from "../../partials/Header.vue";

export default {
  name: "ImportExcelCalonPelanggan",
  components: {
    Sidebar,
    Header,
  },
  setup() {
    const sidebarOpen = ref(false);

    const handleFileUpload = (event) => {
      const file = event.target.files[0]
      // Perform necessary operations with the uploaded file
      console.log('File uploaded:', file)
    }

    return {
      sidebarOpen,
      handleFileUpload,
    };
  },
};
</script>
