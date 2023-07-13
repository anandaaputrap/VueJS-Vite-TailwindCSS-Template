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
        <div class="sm:px-3 lg:px-2 py-2 w-full max-w-9xl mx-auto">
          <!-- Filter Tanggal -->
          <div
            class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border-cyan-400 border-2 dark:border-slate-700 mb-1"
          >
            <!-- <div class="px-5 pt-5">
              <h2
                class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2"
              >
                Cari Berdasarkan Tanggal
              </h2>
            </div> -->
            <form>
              <div class="grid gap-1 mb-1 mt-1 md:grid-cols-2 px-1">
                <div>
                  <label
                    for="tanggalawal"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >Tanggal Awal</label
                  >
                  <input
                    type="date"
                    id="tanggalawal"
                    name="tanggalawal"
                    v-model="tanggalAwal"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="tanggalakhir"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >Tanggal Akhir</label
                  >
                  <input
                    type="date"
                    id="tanggalakhir"
                    name="tanggalakhir"
                    v-model="tanggalAkhir"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                class="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center ml-1 mb-1"
              >
                Cari
              </button>
            </form>
          </div>

          <!-- Filter Tanggal -->
          <div
            class="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border-cyan-400 border-2 dark:border-slate-700"
          >
            <div class="">
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
                        <div class="font-semibold text-left text-cyan-400">
                          Kode Nota
                        </div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left text-cyan-400">
                          Kode Sales
                        </div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left text-cyan-400">
                          Kode Calon Customer
                        </div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left text-cyan-400">
                          Nama Calon Customer
                        </div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left text-cyan-400">
                          Tanggal Awal
                        </div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left text-cyan-400">
                          Tanggal Akhir
                        </div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left text-cyan-400">
                          Alamat
                        </div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left text-cyan-400">
                          Telp
                        </div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-center text-cyan-400">
                          Aksi
                        </div>
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
                        <div class="text-left">{{ item.Alamat }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.Telp }}</div>
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
          class="bg-white rounded shadow-lg p-4 max-w-md w-full border-solid border-2 border-cyan-500"
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
            <div class="mb-2">
              <strong>Alamat:</strong>
              {{ items[selectedItemIndex].Alamat }}
            </div>
            <div class="mb-2">
              <strong>Nomor Telp:</strong>
              {{ items[selectedItemIndex].Telp }}
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
      allItems: [],
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
      .post("http://192.168.11.54:8000/api/RetentionListWeb", {
        TglAwal: this.tanggalAwal,
        TglAkhir: this.tanggalAkhir,
      })
      .then((response) => {
        this.items = response.data.data;
        this.allItems = response.data.data;
        console.log(response.data);
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
      axios
        .post("http://192.168.11.54:8000/api/RetentionListWeb", {
          TglAwal: this.tanggalAwal,
          TglAkhir: this.tanggalAkhir,
        })
        .then((response) => {
          this.items = response.data.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
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
