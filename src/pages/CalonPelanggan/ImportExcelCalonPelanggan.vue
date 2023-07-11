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
        <div class="sm:px-3 lg:px-2 py-2 w-full max-w-9xl mx-auto">
          <!-- Main -->
          <div
            class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-cyan-400 border-2 dark:border-slate-700 mb-5"
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
                <li>File Excel Harus Berisi 6 Kolom</li>
                <li>Kolom Pertama Berisi Nomor Telepon</li>
                <li>Kolom Kedua Berisi Email</li>
                <li>Kolom Ketiga Berisi Nama</li>
                <li>Kolom Keempat Berisi Segment</li>
                <li>Kolom Kelima Berisi Alamat</li>
                <li>Kolom Keenam Berisi Sumber</li>
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
