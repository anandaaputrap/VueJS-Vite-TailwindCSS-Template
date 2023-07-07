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
                Input Data Baru Calon Pelanggan
              </h2>
            </div>
            <form class="px-5 py-3">
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-slate-100">
                  Nama
                </label>
                <input
                  name="nama"
                  id="nama"
                  type="text"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-slate-100">
                  Alamat
                </label>
                <textarea
                  name="alamat"
                  id="alamat"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-slate-100">
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-slate-100">
                  Telp
                </label>
                <input
                  name="telp"
                  id="telp"
                  type="text"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-slate-100">
                  Segment
                </label>
                <input
                  name="segment"
                  id="segment"
                  type="text"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-slate-100">
                  Sumber
                </label>
                <input
                  name="sumber"
                  id="sumber"
                  type="text"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div class="flex justify-end">
                <button
                  name="submit"
                  id="submit"
                  type="submit"
                  class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Simpan
                </button>
              </div>
            </form>
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
  name: "TambahDataCalonPelanggan",
  components: {
    Sidebar,
    Header,
  },
  setup() {
    const sidebarOpen = ref(false);

    return {
      sidebarOpen,
    };
  },
};
</script>
