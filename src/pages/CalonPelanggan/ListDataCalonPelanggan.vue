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
            class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-cyan-400 border-2 dark:border-slate-700 mb-1"
          >
            <div class="px-5 pt-5">
              <h2
                class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2"
              >
                Cari Berdasarkan Tanggal
              </h2>
            </div>
            <form>
              <div class="grid gap-6 mb-6 md:grid-cols-2 px-5">
                <div>
                  <label
                    for="tanggalawal"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                class="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-5 mb-3"
              >
                Cari
              </button>
            </form>
          </div>
          <!-- Filter Tanggal -->
          <div
            class="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-cyan-400 border-2 dark:border-slate-700"
          >
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
                        <div class="font-semibold text-left">Kode</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Telp</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Nama</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Email</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Alamat</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Tipe Pelanggan</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Sumber</div>
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
                        <div class="text-left">{{ item.kode }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.Telp }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.Nama }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.Email }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.Alamat }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.TipePelanggan }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.Sumber }}</div>
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
              <strong>Kode :</strong> {{ items[selectedItemIndex].kode }}
            </div>
            <div class="mb-2">
              <strong>Telepon :</strong> {{ items[selectedItemIndex].Telp }}
            </div>
            <div class="mb-2">
              <strong>Nama :</strong> {{ items[selectedItemIndex].Nama }}
            </div>
            <div class="mb-2">
              <strong>Email :</strong> {{ items[selectedItemIndex].Email }}
            </div>
            <div class="mb-2">
              <strong>Alamat : </strong> {{ items[selectedItemIndex].Alamat }}
            </div>
            <div class="mb-2">
              <strong>Tipe Pelanggan : </strong>
              {{ items[selectedItemIndex].TipePelanggan }}
            </div>
            <div class="mb-2">
              <strong>Sumber : </strong>
              {{ items[selectedItemIndex].Sumber }}
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
  name: "ListDataCalonPelanggan",
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
      allItems: [

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
    this.fetchData();
  },
  methods: {
    fetchData() {
      const requestBody = {
        App: "2",
        Sif: '',
        Search: "A"
      };

      axios
        .post("http://192.168.11.54:8000/api/listCalonPelanggan", requestBody)
        .then((response) => {
          this.items = response.data.data;
          this.allItems = response.data.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
    editItem(item) {
      // Logika untuk mengedit item
    },
    deleteItem(item) {
      // Logika untuk menghapus item
    },
  },
};

</script>
