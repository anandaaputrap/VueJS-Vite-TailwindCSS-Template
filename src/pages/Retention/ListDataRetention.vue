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
            <form @submit.prevent="cariTanggal">
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
                <div class="flex items-center mb-0.5 mt-0.5 mr-1 justify-end">
                  <label
                    for="search"
                    class="block mr-1 ml-1 text-sm font-medium text-gray-900 dark:text-white"
                    >Pencarian:</label
                  >
                  <input
                    type="text"
                    id="search"
                    name="search"
                    v-model="searchQuery"
                    @input="performSearch"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Cari..."
                  />
                </div>
                <table class="table-auto w-full dark:text-slate-300">
                  <!-- Table header -->
                  <thead
                    class="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm"
                  >
                    <tr>
                      <!-- <th class="p-2">
                        <div class="flex items-center">
                          <input
                            type="checkbox"
                            v-model="selectAll"
                            @change="toggleAllCheckboxes"
                          />
                        </div>
                      </th> -->
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
                        >
                          Nota
                        </div>
                      </th>
                      <!-- <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
                        >
                          Kode Sales
                        </div>
                      </th> -->
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
                        >
                          Sales
                        </div>
                      </th>
                      <!-- <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
                        >
                          Kode Calon Customer
                        </div>
                      </th> -->
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
                        >
                          Customer
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
                        >
                          Tgl Awal
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
                        >
                          Tgl Akhir
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
                        >
                          Alamat
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
                        >
                          Telp
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
                        >
                          Status
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
                        >
                          Created At
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
                        >
                          Created By
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-center text-cyan-400 text-xs"
                        >
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
                    <tr v-for="item in items" :key="item.id">
                      <!-- <td class="p-2">
                        <div class="flex items-center">
                          <input type="checkbox" v-model="item.checked" />
                        </div>
                      </td> -->
                      <td class="p-2">
                        <div class="text-left text-xs">{{ item.KodeNota }}</div>
                      </td>
                      <!-- <td class="p-2">
                        <div class="text-left text-xs">
                          {{ item.KodeSales }}
                        </div>
                      </td> -->
                      <td class="p-2">
                        <div class="text-left text-xs">
                          {{ item.NamaSales }}
                        </div>
                      </td>
                      <!-- <td class="p-2">
                        <div class="text-left text-xs">
                          {{ item.KodeCalonCust }}
                        </div>
                      </td> -->
                      <td class="p-2">
                        <div class="text-left text-xs">
                          {{ item.NamaCalonCust }}
                        </div>
                      </td>
                      <td class="p-2">
                        <div class="text-left text-xs">
                          {{ formatDate(item.TglAwal) }}
                        </div>
                      </td>
                      <td class="p-2">
                        <div class="text-left text-xs">
                          {{ formatDate(item.TglAkhir) }}
                        </div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.Alamat }}</div>
                      </td>
                      <td class="">
                        <div class="text-left text-xs">{{ item.Telp }}</div>
                      </td>
                      <td class="">
                        <div class="text-center text-xs">
                          {{ item.isClose }}
                        </div>
                      </td>
                      <td class="">
                        <div class="text-center text-xs">
                          {{ item.CreateDate }}
                        </div>
                      </td>
                      <td class="">
                        <div class="text-center text-xs">
                          {{ item.CreateBy }}
                        </div>
                      </td>
                      <td class="">
                        <div class="flex items-center justify-center">
                          <button
                            class="btn btn-sm bg-cyan-500 hover:bg-cyan-600 text-white"
                            @click="openModal(item)"
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
      <!-- Modal -->
      <div
        v-if="showModal"
        class="fixed inset-0 flex items-center justify-center z-50"
      >
        <div
          class="bg-white rounded shadow-lg p-2 max-w-4xl w-full h-96 overflow-y-auto border-solid border-2 border-cyan-500"
        >
          <div class="flex justify-end mt-2">
            <button
              class="btn btn-primary bg-red-500 hover:bg-red-600 text-white"
              @click="closeModal"
            >
              X
            </button>
          </div>
          <h3 class="text-lg font-semibold mb-1">Detail Data</h3>
          <hr
            class="border-2 border-cyan-500 cursor-pointer hover:border-cyan-600 duration-500"
          />
          <div>
            <div class="mb-2">
              <strong>Nota :</strong> {{ selectedItemModal.KodeNota }}
            </div>
            <div class="mb-2">
              <strong>Sales :</strong> {{ selectedItemModal.NamaSales }}
            </div>
            <div class="mb-2">
              <strong>Customer :</strong> {{ selectedItemModal.NamaCalonCust }}
            </div>
            <div class="mb-2">
              <strong>Telp :</strong> {{ selectedItemModal.Telp }}
            </div>
            <div class="mb-2">
              <strong>Alamat :</strong> {{ selectedItemModal.Alamat }}
            </div>
            <hr
              class="border-2 border-cyan-500 cursor-pointer hover:border-cyan-600 duration-500"
            />
            <table class="table-auto w-full mt-1">
              <thead>
                <tr>
                  <th class="px-2 py-2 text-center">Tgl Entry</th>
                  <th class="px-2 py-2 text-center">Status</th>
                  <th class="px-2 py-2 text-center">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="logData in selectedItemModal.logRetentionData"
                  :key="logData.Kodenota"
                >
                  <td class="px-2 py-2 text-center">{{ logData.Tglentry }}</td>
                  <td class="px-2 py-2 text-center">
                    {{ logData.ConversationStatus }}
                  </td>
                  <td class="px-2 py-2 text-center">
                    {{ logData.Keterangan }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
      items: [],
      allItems: [],
      selectAll: false,
      showAddForm: false,
      showDetails: false,
      selectedItem: null,
      tanggalAwal: "",
      tanggalAkhir: "",
      isSearching: false,
      searchQuery: "",
      showModal: false,
      selectedItemModal: {
        logRetentionData: [],
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .post(import.meta.env.VITE_APP_API_URL + "retentionlistweb", {
          TglAwal: this.tanggalAwal,
          TglAkhir: this.tanggalAkhir,
        })
        .then((response) => {
          this.items = response.data.data;
          this.allItems = response.data.data;
          console.log(response.data);
          console.log(this.items);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openModal(item) {
      this.selectedItemModal = item;
      this.fetchLogRetentionData(item.KodeNota);
      this.showModal = true;
    },
    showDetail(item) {
      this.fetchLogRetentionData(item.KodeNota)
        .then(() => {
          this.selectedItemModal = item;
          this.showModal = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async fetchLogRetentionData(key) {
      try {
        const response = await axios.post(
          import.meta.env.VITE_APP_API_URL + "getlogretention",
          { Kodenota: key }
        );
        const data = response.data.data;

        // Cek apakah ada data yang ditemukan
        if (data.length > 0) {
          const logRetentionData = data.map((item) => {
            return {
              Tglentry: item.Tglentry,
              ConversationStatus: item.ConversationStatus,
              Keterangan: item.Keterangan,
            };
          });

          this.selectedItemModal.logRetentionData = logRetentionData;
        }
      } catch (error) {
        console.log(error);
      }
    },
    closeDetail() {
      this.showDetails = false;
    },
    closeModal() {
      this.showModal = false;
    },
    toggleAllCheckboxes() {
      this.items.forEach((item) => {
        item.checked = this.selectAll;
      });
    },
    performSearch() {
      const query = this.searchQuery.toLowerCase();
      if (query) {
        // Jika query pencarian tidak kosong, filter data berdasarkan query
        this.items = this.allItems.filter((item) => {
          const namaCalonCust = item.NamaCalonCust
            ? item.NamaCalonCust.toLowerCase()
            : "";
          const tipePelanggan = item.TipePelanggan
            ? item.TipePelanggan.toLowerCase()
            : "";
          const alamat = item.Alamat ? item.Alamat.toLowerCase() : "";
          const telp = item.Telp ? item.Telp.toLowerCase() : "";
          const kota = item.Kota ? item.Kota.toLowerCase() : "";
          const namaSales = item.NamaSales ? item.NamaSales.toLowerCase() : "";
          const isClose = item.isClose ? item.isClose.toLowerCase() : "";

          return (
            namaCalonCust.includes(query) ||
            tipePelanggan.includes(query) ||
            alamat.includes(query) ||
            telp.includes(query) ||
            kota.includes(query) ||
            namaSales.includes(query) ||
            isClose.includes(query)
          );
        });
      } else {
        // Jika query pencarian kosong, tampilkan semua data
        this.items = this.allItems;
      }
    },
    cariTanggal() {
      this.fetchData();
    },
    formatDate(date) {
      if (!date) {
        return ""; // Jika tanggal null atau undefined, kembalikan string kosong
      }

      // Mendapatkan objek Date dari tanggal yang diberikan
      const parsedDate = new Date(date);

      // Mengambil bagian tanggal, bulan, dan tahun dari objek Date
      const day = parsedDate.getDate();
      const month = parsedDate.getMonth() + 1; // Perhatikan penambahan 1 karena bulan dimulai dari 0
      const year = parsedDate.getFullYear();

      // Menggabungkan tanggal, bulan, dan tahun menjadi format yang diinginkan (misalnya, "DD-MM-YYYY")
      const formattedDate = `${day}-${month}-${year}`;

      return formattedDate;
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
<style scoped>
thead {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
