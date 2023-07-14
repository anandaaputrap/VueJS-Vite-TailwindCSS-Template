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
        <div class="sm:px-2 lg:px-2 py-1 w-full max-w-9xl mx-auto">
          <!-- <h1 class="text-black">RETENTION</h1> -->
          <!--Coba Form Lagi-->
          <div
            class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 dark:bg-slate-800 shadow-lg rounded-sm dark:border-slate-700"
          >
            <div class="grid grid-cols-3 gap-0.5 px-2">
              <!-- Form 1 -->
              <form @submit.prevent="showData" class="col-span-1">
                <div class="flex flex-col">
                  <label
                    for="tipepelanggan"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >Tipe Pelanggan</label
                  >
                  <select
                    id="tipepelanggan"
                    name="tipepelanggan"
                    v-model="tipepelanggan"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  >
                    <option value="" disabled selected>
                      Pilih Tipe Pelanggan
                    </option>
                    <option value="MMH">MMH</option>
                    <option value="ULC">ULC</option>
                    <option value="PREMIUM">PREMIUM</option>
                  </select>
                </div>
                <div class="flex flex-col">
                  <label
                    for="alamat"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >Alamat</label
                  >
                  <input
                    type="text"
                    id="alamat"
                    name="alamat"
                    v-model="alamat"
                    placeholder="Masukkan Alamat"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div class="flex flex-col">
                  <label
                    for="telp"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >Telp</label
                  >
                  <input
                    type="number"
                    min="0"
                    id="telp"
                    name="telp"
                    v-model="telp"
                    placeholder="0"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div class="flex flex-col mb-2">
                  <label
                    for="kota"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >Kota</label
                  >
                  <input
                    type="text"
                    id="kota"
                    name="kota"
                    v-model="kota"
                    placeholder="Masukkan Kota"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="ml-1 mb-1 bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-700 text-white"
                >
                  Show
                </button>
              </form>

              <!-- Form 2 -->
              <form class="col-span-1">
                <div class="flex flex-col">
                  <label
                    for="tanggal"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
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
                <div class="flex flex-col">
                  <label
                    for="sales"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >Sales</label
                  >
                  <select
                    v-model="sales"
                    id="sales"
                    name="sales"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  >
                    <option value="" disabled selected>Pilih Sales</option>
                    <option
                      v-for="option in salesOptions"
                      :key="option.Kode"
                      :value="option.Nama"
                    >
                      {{ option.Kode }} - {{ option.Nama }}
                    </option>
                  </select>
                </div>
                <div class="flex flex-col">
                  <label
                    for="tipedokumen"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
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
                    <option value="WI">WI</option>
                  </select>
                </div>
                <div class="flex flex-col">
                  <label
                    for="top"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
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
                <!-- <div class="flex flex-col">
                  <label
                    for="toleransitop"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
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
                </div> -->
                <!-- <div class="flex flex-col">
                  <label
                    for="keterangan"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >Keterangan</label
                  >
                  <textarea
                    id="keterangan"
                    name="keterangan"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Keterangan"
                    required
                  ></textarea>
                </div> -->
              </form>
            </div>
          </div>

          <!--Coba Form Lagi-->

          <!--Tabel Dimulai Dibawah Ini-->
          <div
            class="mt-1 col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border-cyan-400 border-2 dark:border-slate-700"
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
                            @change="toggleAllCheckbox"
                          />
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 dark:text-white"
                        >
                          Kode
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 dark:text-white"
                        >
                          Nama
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 dark:text-white"
                        >
                          Tipe Pelanggan
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 dark:text-white"
                        >
                          Alamat
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 dark:text-white"
                        >
                          Telp
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 dark:text-white"
                        >
                          Kota
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 dark:text-white"
                        >
                          Email
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <!-- Table body -->
                  <tbody
                    class="text-sfm font-medium divide-y divide-slate-100 dark:divide-slate-700"
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
                        <div class="text-left">{{ item.Nama }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.TipePelanggan }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.Alamat }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.Telp }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.Kota }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.Email }}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="flex justify-end mt-1 mr-1 mb-1">
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
import axios from "axios";

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
      filterChecked: {
        tipepelanggan: false,
        alamat: false,
        telp: false,
        kota: false,
      },
      salesOptions: [
        // Add more data here if needed
      ],
      tipepelanggan: "",
      alamat: "",
      telp: "",
      kota: "",
      sales: "",
      selectedItems: [
        // Add more data here if needed
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.items;
    },
  },
  methods: {
    toggleAllCheckboxes() {
      if (this.selectAll) {
        this.selectedItems = this.items.map((item) => item.kode);
      } else {
        this.selectedItems = [];
      }
      console.log("Data Yang Masuk Ke Dalam Array:", this.selectedItems);
    },
    async fetchSalesOptions(search) {
      try {
        const response = await axios.post(
          "http://192.168.11.54:8000/api/DropDownSales",
          {
            Search: search || "A",
          }
        );
        const data = response.data;
        if (data.status === "202") {
          this.salesOptions = data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async showData() {
      console.log("Tipe Pelanggan:", this.tipepelanggan);
      console.log("Alamat:", this.alamat);
      console.log("Telp:", this.telp);
      console.log("Kota:", this.kota);

      try {
        const response = await axios.post(
          "http://192.168.11.54:8000/api/ViewCalonPelangganRetention",
          {
            TipePel: this.tipepelanggan,
            Alamat: this.alamat,
            Telp: this.telp,
            Kota: this.kota,
          }
        );
        const data = response.data;
        console.log(data);
        if (data.status === "202" && data.data.length > 0) {
          this.items = data.data;
        } else {
          this.items = [];
        }
      } catch (error) {
        console.log(error);
      }
    },

    saveData() {
      // Implement your save data logic here
    },
  },
  mounted() {
    this.fetchSalesOptions();
  },
};
</script>
