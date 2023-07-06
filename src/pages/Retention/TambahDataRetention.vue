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
            >
            </div>
          </div>

          <form action="">
            <div
              class="mt-5 col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
            >
              <header
                class="px-5 py-4 border-b border-slate-100 dark:border-slate-700"
              >
                <h2 class="font-semibold text-slate-800 dark:text-slate-100">
                  Filter Khusus
                </h2>
              </header>
              <div class="grid gap-6 mb-6 md:grid-cols-2 px-5">
                <div class="mt-5">
                  <label
                    for="segment"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Segment</label
                  >
                  <input
                    type="text"
                    id="segment"
                    name="segment"
                    placeholder="Masukkan Segment"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div class="mt-5">
                  <label
                    for="alamat"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Alamat</label
                  >
                  <input
                    type="text"
                    id="alamat"
                    name="alamat"
                    placeholder="Masukkan Alamat"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div class="">
                  <label
                    for="telp"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Telp</label
                  >
                  <input
                    type="number"
                    min="0"
                    id="telp"
                    name="telp"
                    placeholder="0"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div class="">
                  <label
                    for="kota"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Kota</label
                  >
                  <input
                    type="text"
                    id="kota"
                    name="kota"
                    placeholder="Masukkan Kota"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <hr class="my-4">
              <h2 class="font-semibold text-slate-800 dark:text-slate-100 ml-5">
                Non Filter
              </h2>
              <br>
              <div class="grid gap-6 mb-6 md:grid-cols-2 px-5">
                <div>
                  <label
                    for="sales"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Sales</label
                  >
                  <select
                    id="sales"
                    name="sales"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  >
                    <option value="" disabled selected>Pilih Sales</option>
                    <option value="option1">Sales 1</option>
                    <option value="option2">Sales 2</option>
                    <option value="option3">Sales 3</option>
                  </select>
                </div>
                <div>
                  <label
                    for="tipedokumen"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Tipe Dokumen</label
                  >
                  <select
                    id="tipedokumen"
                    name="tipedokumen"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  >
                    <option value="" disabled selected>
                      Pilih Tipe Dokumen
                    </option>
                    <option value="option1">Tipe 1</option>
                    <option value="option2">Tipe 2</option>
                    <option value="option3">Tipe 3</option>
                  </select>
                </div>
                <div>
                  <label
                    for="top"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Top</label
                  >
                  <input
                    type="number"
                    id="top"
                    name="top"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0"
                    min="0"
                    required
                  />
                </div>
                <div>
                  <label
                    for="toleransitop"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Toleransi Top</label
                  >
                  <input
                    type="number"
                    id="toleransitop"
                    name="toleransitop"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0"
                    min="0"
                    required
                  />
                </div>
                <div>
                  <label
                    for="tanggal"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Tanggal</label
                  >
                  <input
                    type="date"
                    id="tanggal"
                    name="tanggal"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div class="mb-6 px-5">
                <label
                  for="keterangan"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Keterangan</label
                >
                <textarea
                  type="text"
                  id="keterangan"
                  name="keterangan"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Keterangan"
                  required
                ></textarea>
                <button
                  type="submit"
                  class="mt-5 text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-700 text-white"
                >
                  Show
                </button>
              </div>
            </div>
          </form>

          <!--Tabel Dimulai Dibawah Ini-->
          <div
            class="mt-5 col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
          >
            <header
              class="px-5 py-4 border-b border-slate-100 dark:border-slate-700"
            >
              <h2 class="font-semibold text-slate-800 dark:text-slate-100">
                Tambah Data Retention
              </h2>
            </header>
            <div class="p-3">
              <!-- Table -->
              <div class="overflow-x-scroll overflow-y-scroll max-h-96">
                <table class="table-auto w-full dark:text-slate-300">
                  <!-- Table header -->
                  <thead
                    class="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm"
                  >
                    <tr>
                      <th class="p-2">
                        <div class="flex items-center">
                          <input
                            type="checkbox"
                            v-model="selectAll"
                            @change="toggleAllCheckboxes"
                          />
                        </div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Nama</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Kode</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Alamat</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Telp</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Segment</div>
                      </th>
                    </tr>
                  </thead>
                  <!-- Table body -->
                  <tbody
                    class="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700"
                  >
                    <!-- Row -->
                    <tr v-for="(item, index) in filteredItems" :key="index">
                      <td class="p-2">
                        <div class="flex items-center">
                          <input type="checkbox" v-model="item.checked" />
                        </div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.nama }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.kode }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.alamat }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.telp }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.segment }}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="flex justify-end mt-3">
                <button
                  class="btn btn-sm bg-cyan-500 hover:bg-cyan-600 text-white"
                  @click="saveData"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
          <!--Tabel Selesai Dibawah Ini-->
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
  name: "TambahDataRetention",
  components: {
    Sidebar,
    Header,
  },
  data() {
    return {
      sidebarOpen: false,
      items: [
        // Add more data here if needed
      ],
      selectAll: false,
      sales: "",
      tanggal: "",
      top: "",
      toleransi: "",
      tipeDokumen: "",
      keterangan: "",
      filterChecked: {
        segment: false,
        alamat: false,
        telp: false,
        kota: false,
      },
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        const isTextMatch =
          item.nama.toLowerCase().includes(this.sales.toLowerCase()) &&
          item.kode.toLowerCase().includes(this.tanggal.toLowerCase()) &&
          item.alamat.toLowerCase().includes(this.top.toLowerCase()) &&
          item.telp.toLowerCase().includes(this.toleransi.toLowerCase()) &&
          item.segment.toLowerCase().includes(this.tipeDokumen.toLowerCase()) &&
          item.keterangan.toLowerCase().includes(this.keterangan.toLowerCase());

        const isFilterMatch =
          (!this.filterChecked.segment || item.segment === "segment") &&
          (!this.filterChecked.alamat || item.alamat === "alamat") &&
          (!this.filterChecked.telp || item.telp === "telp") &&
          (!this.filterChecked.kota || item.kota === "kota");

        return isTextMatch && isFilterMatch;
      });
    },
  },
  methods: {
    toggleAllCheckboxes() {
      this.items.forEach((item) => {
        item.checked = this.selectAll;
      });
    },
    showData() {
      console.log(this.sales);
      console.log(this.tanggal);
      console.log(this.top);
      console.log(this.toleransi);
      console.log(this.tipeDokumen);
      console.log(this.keterangan);
      console.log(this.filterChecked);
      console.log(this.filteredItems);
    },
    saveData() {
      // Implement your save data logic here
    },
  },
};
</script>
