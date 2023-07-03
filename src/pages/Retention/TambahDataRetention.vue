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

          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Sales
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="sales"
                  name="sales"
                  type="text"
                  placeholder="Masukkan Disini"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Top
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="top"
                  name="top"
                  type="text"
                  placeholder="Masukkan Disini"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mt-5">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Tipe Dokumen
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="tipedokumen"
                  name="tipedokumen"
                  type="text"
                  placeholder="Masukkan Disini"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mt-5">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Toleransi Top
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="toleransitop"
                  name="toleransitop"
                  type="text"
                  placeholder="Masukkan Disini"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mt-5">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="keterangan"
                >
                  Keterangan
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="keterangan"
                  name="keterangan"
                  type="text"
                  placeholder="Masukkan Disini"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mt-5">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="keterangan"
                >
                  Tanggal
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="tanggal"
                  name="tanggal"
                  type="date"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mt-5">
                <div class="flex items-center">
                  <!-- Segment -->
                  <input
                    type="checkbox"
                    id="segmentCheckbox"
                    name="segmentCheckbox"
                    v-model="segmentChecked"
                  />
                  <label for="segmentCheckbox" class="ml-2">Segment</label>
                  <!-- Segment -->

                  <!-- Alamat -->
                  <input
                    class="ml-5"
                    type="checkbox"
                    id="alamatCheckbox"
                    v-model="alamatChecked"
                  />
                  <label for="alamatCheckbox" class="ml-2">Alamat</label>
                  <!-- Alamat -->

                  <!-- Telp -->
                  <input
                    class="ml-5"
                    type="checkbox"
                    id="telpCheckbox"
                    v-model="telpChecked"
                  />
                  <label for="telpChecked" class="ml-2">Telp</label>
                  <!-- Telp -->

                  <!-- Kota -->
                  <input
                    class="ml-5"
                    type="checkbox"
                    id="kotaCheckbox"
                    v-model="kotaChecked"
                  />
                  <label for="kotaCheckboc" class="ml-2">Kota</label>
                  <!-- Kota -->
                </div>
              </div>
            </div>
            <button
              class="btn btn-sm bg-cyan-500 hover:bg-cyan-600 text-white"
              @click="showData"
            >
              Show
            </button>
          </form>

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
