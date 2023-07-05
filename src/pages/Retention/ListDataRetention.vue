<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-auto">
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

          <!-- Filter Tanggal -->
          <div
            class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 mb-5"
          >
            <div class="px-5 pt-5">
              <h2
                class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2"
              >
                Cari Berdasarkan Tanggal
              </h2>
            </div>
            <div class="px-5 pb-5">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                for="tanggalAwal"
              >
                Tanggal Awal
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="tanggalAwal"
                name="tanggalAwal"
                v-model="tanggalAwal"
                type="date"
              />
              <br />
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                for="tanggalAkhir"
              >
                Tanggal Akhir
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="tanggalAkhir"
                name="tanggalAkhir"
                v-model="tanggalAkhir"
                type="date"
              />
              <br />
              <button
                @click="cariTanggal"
                class="bg-cyan-500 hover:bg-cyan-600 text-white py-1 px-3 rounded"
              >
                Cari
              </button>

              <div v-if="hasilPencarian" class="mt-4">
                Anda mencari dari tanggal {{ tanggalAwal }} hingga tanggal
                {{ tanggalAkhir }}
              </div>
            </div>
          </div>
          <!-- Filter Tanggal -->
          <div
            class="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
          >
            <header
              class="px-5 py-4 border-b border-slate-100 dark:border-slate-700"
            >
              <h2 class="font-semibold text-slate-800 dark:text-slate-100">
                List Data Retention
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
                        <div class="font-semibold text-left">Kode Nota</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Kode Sales</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Nama Sales</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">
                          Kode Calon Customer
                        </div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">
                          Nama Calon Customer
                        </div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Tanggal Awal</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Tanggal Akhir</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-center">Aksi</div>
                      </th>
                    </tr>
                  </thead>
                  <!-- Table body -->
                  <tbody
                    class="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700"
                  >
                    <!-- Row -->
                    <tr v-for="(item, index) in items" :key="index">
                      <td class="p-2">
                        <div class="flex items-center">
                          <input type="checkbox" v-model="item.checked" />
                        </div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.KodeNota }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.KodeSales }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.NamaSales }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.KodeCalonCust }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.NamaCalonCust }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.TglAwal }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.TglAkhir }}</div>
                      </td>
                      <td class="p-2">
                        <div class="flex items-center justify-center">
                          <button
                            class="btn btn-sm bg-cyan-500 hover:bg-cyan-600 text-white"
                            @click="showDetail(index)"
                          >
                            Detail
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Modal -->
      <div
        v-show="showDetails"
        class="fixed inset-0 flex items-center justify-center z-50 animate-fade-up animate-once"
      >
        <div
          class="bg-white rounded shadow-lg p-4 max-w-md w-full border-solid border-2 border-slate-500"
        >
          <h3 class="text-lg font-semibold mb-2">Detail Data</h3>
          <hr
            class="border-2 border-cyan-500 cursor-pointer hover:border-cyan-600 duration-500"
          />
          <div v-if="selectedItemIndex !== null">
            <div class="mb-2">
              <strong>Kode Nota :</strong>
              {{ items[selectedItemIndex].KodeNota }}
            </div>
            <div class="mb-2">
              <strong>Kode Sales :</strong>
              {{ items[selectedItemIndex].KodeSales }}
            </div>
            <div class="mb-2">
              <strong>Nama Sales :</strong>
              {{ items[selectedItemIndex].NamaSales }}
            </div>
            <div class="mb-2">
              <strong>Kode Calon Customer :</strong>
              {{ items[selectedItemIndex].KodeCalonCust }}
            </div>
            <div class="mb-2">
              <strong>Nama Calon Customer :</strong>
              {{ items[selectedItemIndex].NamaCalonCust }}
            </div>
            <div class="mb-2">
              <strong>Tanggal Awal:</strong>
              {{ items[selectedItemIndex].TglAwal }}
            </div>
            <div class="mb-2">
              <strong>Tanggal Akhir:</strong>
              {{ items[selectedItemIndex].TglAkhir }}
            </div>
          </div>
          <button
            class="btn btn-primary bg-red-500 hover:bg-red-600 text-white"
            @click="closeDetail"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Sidebar from "../../partials/Sidebar.vue";
import Header from "../../partials/Header.vue";
import axios from "axios";

export default {
  name: "ListDataRetention",
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
      showAddForm: false,
      showDetails: false,
      selectedItemIndex: null,
      tanggalAwal: "",
      tanggalAkhir: "",
      isSearching: false,
    };
  },
  created() {
    axios
      .get("http://192.168.11.54:8000/api/retentionsql")
      .then((response) => {
        this.items = response.data.data;
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    showDetail(index) {
      this.selectedItemIndex = index;
      this.showDetails = true;
    },
    closeDetail() {
      this.selectedItemIndex = null;
      this.showDetails = false;
    },
    toggleAllCheckboxes() {
      this.items.forEach((item) => {
        item.checked = this.selectAll;
      });
    },
    cariTanggal() {
      // Filter data berdasarkan rentang tanggal
      const filteredItems = this.items.filter((item) => {
        const tanggalItem = new Date(item.tanggal);
        const tanggalAwal = new Date(this.tanggalAwal);
        const tanggalAkhir = new Date(this.tanggalAkhir);

        return tanggalItem >= tanggalAwal && tanggalItem <= tanggalAkhir;
      });

      // Tampilkan data yang sesuai di tabel
      this.items = filteredItems;
    },
    editItem(item) {
      // Logika untuk mengedit item
    },
    deleteItem(item) {
      // Logika untuk menghapus item
    },
  },
};
</script>
