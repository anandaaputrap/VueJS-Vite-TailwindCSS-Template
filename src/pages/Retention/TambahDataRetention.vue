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
          <!--Coba Form Lagi-->
          <div
            class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 dark:bg-slate-800 shadow-lg rounded-sm dark:border-slate-700"
          >
            <div class="grid grid-cols-2 gap-0.5 px-2">
              <!-- Form 1 -->
              <form @submit.prevent="showData" class="col-span-1">
                <div class="grid grid-cols-3 gap-0.5">
                  <div class="flex flex-col col-span-1">
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
                    >
                      <option value="" disabled selected>
                        Pilih Tipe Pelanggan
                      </option>
                      <option value="">ALL</option>
                      <option value="MMH">MMH - Mass Mid High</option>
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
                    />
                  </div>
                  <div class="flex flex-col">
                    <label
                      for="telp"
                      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >Telp</label
                    >
                    <div class="flex items-center">
                      <span class="text-gray-500">+62</span>
                      <input
                        type="tel"
                        id="telp"
                        name="telp"
                        v-model="telp"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col">
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
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="mt-1 bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-700 text-white"
                  @click="saveData"
                >
                  Show
                </button>
              </form>

              <!-- Form 2 -->
              <form class="col-span-1">
                <div class="grid grid-cols-3 gap-0.5">
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
                      v-model="tanggal"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    >
                      <option value="" disabled selected>Pilih Sales</option>
                      <option
                        v-for="option in salesOptions"
                        :key="option.Kode"
                        :value="option"
                      >
                        {{ option.Depo }} - {{ option.Kode }} -
                        {{ option.Nama }}
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
                      v-model="tipedokumen"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="" disabled selected>
                        Pilih Tipe Dokumen
                      </option>
                      <option value="WI">WI</option>
                      <option value="WI">Non WI</option>
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
                      v-model="top"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                  <div class="flex flex-col">
                    <label
                      for="toleransitop"
                      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >Toleransi Top</label
                    >
                    <input
                      type="number"
                      id="toleransitop"
                      name="toleransitop"
                      v-model="toleransitop"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                </div>
                <!-- <div class="flex flex-col">
      <label for="keterangan" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Keterangan</label>
      <textarea id="keterangan" name="keterangan" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Keterangan" required></textarea>
    </div> -->
              </form>
            </div>
          </div>

          <!--Coba Form Lagi-->

          <!--Tabel Dimulai Dibawah Ini-->
          <div
            class="mt-0.5 col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border-cyan-400 border-2 dark:border-slate-700"
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
                          <input
                            type="checkbox"
                            v-model="item.checked"
                            @change="updateSelectedItems(item)"
                          />
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
      tanggal: "",
      tipedokumen: "",
      top: "",
      toleransitop: "",
      selectedItems: [
        // Add more data here if needed
      ],
      selectedCodes: [],
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
        this.items.forEach((item) => {
          item.checked = true;
          this.updateSelectedItems(item);
        });
      } else {
        this.items.forEach((item) => {
          item.checked = false;
          this.updateSelectedItems(item);
        });
      }
    },
    updateSelectedItems(item) {
      if (item.checked) {
        this.selectedItems.push(item.kode);
        console.log("Kode yang dipilih:", item.kode);
        console.log("Array selectedItems:", this.selectedItems);
      } else {
        const index = this.selectedItems.indexOf(item.kode);
        if (index !== -1) {
          this.selectedItems.splice(index, 1);
        }
        console.log("Kode yang dihapus:", item.kode);
        console.log("Array selectedItems:", this.selectedItems);
      }
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
    // saveData() {
    //   // Menggabungkan kode yang dipilih menjadi satu string
    //   const calonCust = this.selectedItems.join("");

    //   // Mengirim data melalui permintaan POST
    //   axios
    //     .post("http://192.168.11.54:8000/api/lala", {
    //       SIF: this.sales.Kode, // Kode sales yang dipilih
    //       CalonCust: calonCust, // Kode yang dipilih dari checkbox
    //       Tgl: this.tanggal, // Tanggal dari input
    //       TOPLamaKredit: this.top, // TOPLamaKredit dari input
    //       ToleransiTop: this.toleransitop, // ToleransiTop dari input
    //     })
    //     .then((response) => {
    //       console.log(response.data); // Tampilkan respons dari server
    //     })
    //     .catch((error) => {
    //       console.log(error); // Tampilkan kesalahan jika terjadi
    //     });
    // },
    // saveData() {
    //   const postData = {
    //     SIF: this.sales.Kode,
    //     CalonCust: this.selectedItems.map((item) => item.kode),
    //     Tgl: this.tanggal,
    //     TOPLamaKredit: this.top,
    //     ToleransiTop: this.toleransitop,
    //   };

    //   fetch("http://192.168.11.54:8000/api/lala", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(postData),
    //   })
    //     .then((response) => {
    //       if (response.ok) {
    //         console.log("Data saved successfully");
    //       } else {
    //         console.log("Failed to save data");
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    // },
    saveData() {
      // Mendapatkan kode sales dari objek sales yang dipilih
      const salesKode = this.sales.Kode;

      const postData = {
        SIF: salesKode,
        CalonCust: this.selectedItems,
        Tgl: this.tanggal,
        TOPLamaKredit: this.top,
        ToleransiTop: this.toleransitop,
      };

      axios
        .post("http://192.168.11.54:8000/api/lala", postData)
        .then((response) => {
          console.log("Response:", response);
          // Lakukan tindakan lain setelah berhasil menyimpan data
        })
        .catch((error) => {
          console.log("Error:", error);
          // Lakukan penanganan kesalahan
        });
    },
  },
  mounted() {
    this.fetchSalesOptions();
  },
};
</script>
