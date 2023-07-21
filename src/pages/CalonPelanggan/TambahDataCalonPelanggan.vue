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
            <form @submit.prevent="submitForm">
              <!--Alert-->
              <div
                v-if="showAlert"
                class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-3 mt-3"
                role="alert"
              >
                <strong class="font-bold">Mohon Maaf!</strong>
                <span class="block sm:inline"
                  >Nomor Yang Anda Masukkan Sudah Ada.</span
                >
              </div>
              <!--Alert-->
              <div class="grid gap-1 mb-2 md:grid-cols-1 px-1">
                <div>
                  <label
                    for="telp"
                    class="block text-sm font-medium text-gray-900 dark:text-white"
                    >Telp</label
                  >
                  <input
                    type="text"
                    min="0"
                    id="telp"
                    name="telp"
                    v-model="telp"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Nomor Telepon Tanpa 0/62"
                    required
                  />
                  <button
                    class="px-1 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg mt-2"
                    @click="checkNumber"
                  >
                    Cek Nomor Telp
                  </button>
                  <input
                    type="checkbox"
                    id="checklist"
                    name="checklist"
                    class="ml-2"
                    v-model="isChecked"
                    :disabled="!isNumberChecked"
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
                    v-model="email"
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
                    v-model="nama"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Nama Disini"
                    required
                  />
                </div>
                <div>
                  <label
                    for="kota"
                    class="block text-sm font-medium text-gray-900 dark:text-white"
                    >Kota</label
                  >
                  <input
                    type="text"
                    id="kota"
                    name="kota"
                    v-model="kota"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Nama Disini"
                    required
                  />
                </div>
                <div>
                  <label
                    for="tipepelanggan"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >Tipe Pelanggan</label
                  >
                  <select
                    id="tipepelanggan"
                    name="tipepelanggan"
                    v-model="tipepelanggan"
                    required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled selected>
                      Pilih Tipe Pelanggan
                    </option>
                    <option value="MMH">MMH - Mass Mid High</option>
                    <option value="ULC">ULC</option>
                    <option value="PREMIUM">PREMIUM</option>
                  </select>
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
                    v-model="alamat"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Alamat Disini"
                    required
                  ></textarea>
                </div>
                <div>
                  <label
                    for="sumber"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >Sumber</label
                  >
                  <select
                    id="sumber"
                    name="sumber"
                    v-model="sumber"
                    required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled selected>Pilih Sumber</option>
                    <option value="Existing (Altius)">Existing (Altius)</option>
                    <option value="Samsung Store">Samsung Store</option>
                    <option value="Digital">Digital</option>
                    <option value="Event Marketing">Event Marketing</option>
                    <option value="Lainnya (Leasing, Bank, Partner)">
                      Lainnya (Leasing, Bank, Partner)
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    for="sales"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >Sales</label
                  >
                  <select
                    v-model="sales"
                    id="sales"
                    name="sales"
                    required
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
                <div>
                  <input
                    type="hidden"
                    id="sif"
                    name="sif"
                    v-model="sif"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Sumber Disini"
                    required
                  />
                </div>
                <div>
                  <input
                    type="hidden"
                    id="app"
                    name="app"
                    v-model="app"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Sumber Disini"
                    required
                  />
                </div>
                <div>
                  <input
                    type="hidden"
                    id="operator"
                    name="operator"
                    v-model="operator"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Sumber Disini"
                    required
                  />
                </div>
              </div>
              <div class="flex justify-end mr-5">
                <button
                  type="submit"
                  @click="submitForm"
                  class="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-1 py-2 text-center ml-1 mb-1"
                >
                  Simpan
                </button>
              </div>
            </form>
            <div
              v-if="isAlertVisible"
              class="fixed top-0 left-0 w-full bg-green-100 border border-green-400 text-green-700 px-4 py-3 z-50"
              role="alert"
            >
              <strong class="font-bold">{{ alertStatus }}</strong>
              <span class="block sm:inline">{{ alertMessage }}</span>
            </div>
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
import axios from "axios";

export default {
  name: "TambahDataCalonPelanggan",
  components: {
    Sidebar,
    Header,
  },
  data() {
    return {
      sidebarOpen: false,
      telp: "",
      nama: "",
      alamat: "",
      email: "",
      kota: "",
      tipepelanggan: "",
      sumber: "",
      sales: "",
      sif: "",
      app: "2",
      operator: "wildan.y@altius-erp.com",
      isAlertVisible: false,
      alertTimer: null,
      isChecked: false,
      isNumberChecked: false,
      showAlert: false,
      salesOptions: [],
      alertMessage: "Nomor Telp Sudah Ada",
    };
  },
  methods: {
    fetchData() {
      console.log("Telp : ", this.telp);
      console.log("Nama : ", this.nama);
      console.log("Alamat : ", this.alamat);
      console.log("Email : ", this.email);
      console.log("Kota : ", this.kota);
      console.log("Tipe Pelanggan : ", this.tipepelanggan);
      console.log("Sumber : ", this.sumber);
      console.log("Sif : ", this.sif);
      console.log("App : ", this.app);
      console.log("Operator : ", this.operator);

      const requestBody = {
        Telp: "+62" + this.telp,
        Nama: this.nama,
        Alamat: this.alamat,
        Email: this.email,
        Kota: this.kota,
        TipePel: this.tipepelanggan,
        Sumber: this.sumber,
        Sif: this.sif,
        App: this.app,
        Operator: this.operator,
      };
      return requestBody;
    },
    async fetchSalesOptions(search) {
      try {
        const response = await axios.post(
          import.meta.env.VITE_APP_API_URL + "dropdownsales",
          {
            Search: search || "A",
          }
        );
        const data = response.data;
        if (data.success === true) {
          this.salesOptions = data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async checkNumber() {
      try {
        const response = await axios.post(
          import.meta.env.VITE_APP_API_URL + "ceknomor",
          { Telp: "+62" + this.telp }
        );
        const data = response.data;
        if (data.success == true && data.data.Kode !== null) {
          this.isChecked = false;
          this.isNumberChecked = true;
          this.showAlert = true;
          console.log("Nomor Telp Sudah Ada");
          setTimeout(() => {
            this.showAlert = false;
          }, 5000); // 5 detik
        } else {
          this.isChecked = true;
          this.isNumberChecked = false;
          this.showAlert = false;
          console.log("Nomor Telp Belum Ada");
        }
      } catch (error) {
        console.log(error);
      }
    },
    clearAlertTimer() {
      if (this.alertTimer) {
        clearTimeout(this.alertTimer);
      }
    },
    async submitForm() {
      if (
        !this.telp ||
        !this.nama ||
        !this.alamat ||
        !this.email ||
        !this.kota ||
        !this.tipepelanggan ||
        !this.sumber ||
        !this.sales
      ) {
        alert("Harap isi semua input sebelum menyimpan data!");
        return;
      }

      // Memastikan bahwa checkbox tercentang sebelum menyimpan data
      if (!this.isChecked) {
        alert("Harap centang checklist pada Cek Nomor Telp!");
        return;
      }
      try {
        const requestBody = this.fetchData();
        if (this.sales) {
          requestBody.Sif = this.sales.Kode;
        }

        const response = await axios.post(
          import.meta.env.VITE_APP_API_URL + "createcalonpelanggan",
          requestBody
        );

        // Perbarui properti alertStatus dan alertMessage
        this.alertStatus = response.data.status;
        this.alertMessage = response.data.data[0].Pesan;

        // Tampilkan alert
        this.isAlertVisible = true;

        this.alertTimer = setTimeout(() => {
          this.isAlertVisible = false;
        }, 5000);

        // Refresh Window
        setTimeout(() => {
          window.location.reload();
        }, 5000);

        console.log(response.data); // Output response dari API
      } catch (error) {
        console.log(error);
      }
    },
  },
  beforeDestroy() {
    this.clearAlertTimer();
  },
  mounted() {
    this.fetchSalesOptions();
  },
};
</script>
