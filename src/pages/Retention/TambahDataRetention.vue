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
              <div class="p-3">
                <div class="flex flex-wrap gap-4">
                  <div class="w-full sm:w-1/2 md:w-1/3">
                    <label for="sales" class="block mb-1">Sales</label>
                    <input type="text" id="sales" v-model="sales" />
                  </div>
                  <div class="w-full sm:w-1/2 md:w-1/3">
                    <label for="tanggal" class="block mb-1">Tanggal</label>
                    <input type="text" id="tanggal" v-model="tanggal" />
                  </div>
                  <div class="w-full sm:w-1/2 md:w-1/3">
                    <label for="top" class="block mb-1">TOP</label>
                    <input type="text" id="top" v-model="top" />
                  </div>
                  <div class="w-full sm:w-1/2 md:w-1/3">
                    <label for="toleransi" class="block mb-1"
                      >Toleransi TOP</label
                    >
                    <input type="text" id="toleransi" v-model="toleransi" />
                  </div>
                  <div class="w-full sm:w-1/2 md:w-1/3">
                    <label for="tipeDokumen" class="block mb-1"
                      >Tipe Dokumen</label
                    >
                    <input type="text" id="tipeDokumen" v-model="tipeDokumen" />
                  </div>
                  <div class="w-full sm:w-1/2 md:w-1/3">
                    <label for="keterangan" class="block mb-1"
                      >Keterangan</label
                    >
                    <input type="text" id="keterangan" v-model="keterangan" />
                  </div>
                </div>

                <div class="flex flex-col">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="segmentCheckbox"
                      v-model="segmentChecked"
                    />
                    <label for="segmentCheckbox" class="ml-2">Segment</label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="alamatCheckbox"
                      v-model="alamatChecked"
                    />
                    <label for="alamatCheckbox" class="ml-2">Alamat</label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="telpCheckbox"
                      v-model="telpChecked"
                    />
                    <label for="telpCheckbox" class="ml-2">Telp</label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="kotaCheckbox"
                      v-model="kotaChecked"
                    />
                    <label for="kotaCheckbox" class="ml-2">Kota</label>
                  </div>
                </div>

                <div>
                  <button
                    class="btn btn-sm bg-cyan-500 hover:bg-cyan-600 text-white"
                    @click="showData"
                  >
                    Show
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
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
