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
            class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-cyan-500 border-2 dark:border-slate-700 mb-5"
          >
            <div class="px-5 pt-5">
              <h2
                class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2"
              >
                Input Data Baru Calon Pelanggan
              </h2>
            </div>
            <form>
              <div class="grid gap-2 mb-2 md:grid-cols-2 px-5">
                <div>
                  <label
                    for="telp"
                    class="block text-sm font-medium text-gray-900 dark:text-white"
                    >Telp</label
                  >
                  <input
                    type="number"
                    min="0"
                    id="telp"
                    name="telp"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Nomor Telepon"
                    required
                  />
                  <button
                    class="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg mt-2"
                    onclick="checkNumber()"
                  >
                    Cek Nomor Telp
                  </button>
                  <input
                    type="checkbox"
                    id="checklist"
                    name="checklist"
                    class="ml-2"
                    disabled
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-900 dark:text-white"
                    >Email</label
                  >
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="nama"
                    class="block text-sm font-medium text-gray-900 dark:text-white"
                    >Nama</label
                  >
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Nama Disini"
                    required
                  />
                </div>
                <div>
                  <label
                    for="segment"
                    class="block text-sm font-medium text-gray-900 dark:text-white"
                    >Segment</label
                  >
                  <input
                    type="text"
                    id="segment"
                    name="segment"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Segment Disini"
                    required
                  />
                </div>
                <div class="">
                  <label
                    for="alamat"
                    class="block text-sm font-medium text-gray-900 dark:text-white"
                    >Alamat</label
                  >
                  <textarea
                    type="text"
                    id="alamat"
                    name="alamat"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Alamat Disini"
                    required
                  ></textarea>
                </div>
                <div>
                  <label
                    for="sumber"
                    class="block text-sm font-medium text-gray-900 dark:text-white"
                    >Sumber</label
                  >
                  <input
                    type="text"
                    id="sumber"
                    name="sumber"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Sumber Disini"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                class="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-5 mb-3"
              >
                Simpan
              </button>
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
