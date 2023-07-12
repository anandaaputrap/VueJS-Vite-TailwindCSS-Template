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
            <!-- <div class="px-5 pt-5">
              <h2
                class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2"
              >
                Input Data Baru Calon Pelanggan
              </h2>
            </div> -->
            <form @submit.prevent="submitForm">
              <!--Alert-->
              <div
                v-if="showAlert"
                class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-3 mt-3"
                role="alert"
              >
                <strong class="font-bold">Mohon Maaf!</strong>
                <span class="block sm:inline">
                  Nomor Yang Anda Masukkan Sudah Ada.</span
                >
              </div>
              <!--Alert-->
              <div class="grid gap-1 mb-2 md:grid-cols-2 px-1">
                <div>
                  <label
                    for="telp"
                    class="block text-sm font-medium text-gray-900 dark:text-white"
                    >Telp</label
                  >
                  <input
                    type="number"
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
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Nama Disini"
                    required
                  />
                </div>
                <div>
                  <label
                    for="tipepelanggan"
                    class="block text-sm font-medium text-gray-900 dark:text-white"
                    >Tipe Pelanggan</label
                  >
                  <input
                    type="text"
                    id="tipepelanggan"
                    name="tipepelanggan"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Tipe Pelanggan Disini"
                    required
                  />
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
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Alamat Disini"
                    required
                  ></textarea>
                </div>
                <div>
                  <label
                    for="sumber"
                    class="block text-sm font-medium text-gray-900 dark:text-white"
                    >Sumber</label
                  >
                  <input
                    type="text"
                    id="sumber"
                    name="sumber"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Sumber Disini"
                    required
                  />
                </div>
              </div>
              <div class="flex justify-end mr-5">
                <button
                  type="submit"
                  class="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-1 py-2 text-center ml-1 mb-1"
                >
                  Simpan
                </button>
              </div>
            </form>
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
      tipepelanggan: "", 
      sumber: "",
      isChecked: false,
      isNumberChecked: false,
      showAlert: false,
      alertMessage: "Nomor Telp Sudah Ada",
    };
  },
  methods: {
    fetchData() {
      const requestBody = {
        App: '2',
        Sif: '',
        Operator: '',
      };
      return requestBody;
    },
    async checkNumber() {
      try {
        const response = await axios.post(
          "http://192.168.11.54:8000/api/ceknomor",
          { telp: "+62" + this.telp }
        );
        const data = response.data;
        if (data.status === "202") {
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
    async submitForm() {
      try {
        const requestBody = this.fetchData();
        const postData = {
          Telp: this.telp,
          Nama: this.nama,
          Alamat: this.alamat,
          Email: this.email,
          TipePel: this.tipepelanggan,
          Sumber: this.sumber,
          ...requestBody,
        };

        const response = await axios.post(
          "http://192.168.11.54:8000/api/createcalonpelanggan",
          postData
        );
        console.log(response.data); // Output response dari API
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
