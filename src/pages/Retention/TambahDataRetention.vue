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
                      <option value="%">ALL</option>
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
                      <input
                        type="text"
                        id="telp"
                        name="telp"
                        v-model="telp"
                        @input="validatePhoneNumber"
                        pattern="[0-9]*"
                        placeholder="Masukkan Telp"
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
                      :required="!tanggal"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <p
                      v-show="isSubmitted && !tanggal"
                      class="text-red-500 text-xs mt-1"
                    >
                      Tanggal harus diisi.
                    </p>
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
                      :required="!sales"
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
                    <p
                      v-show="isSubmitted && !sales"
                      class="text-red-500 text-xs mt-1"
                    >
                      Sales harus diisi.
                    </p>
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
                      :required="!tipedokumen"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="" disabled selected>
                        Pilih Tipe Dokumen
                      </option>
                      <option value="WI">WI - Walk In</option>
                      <option value="NWI">NWI - Non Walk In</option>
                    </select>
                    <p
                      v-show="isSubmitted && !tipedokumen"
                      class="text-red-500 text-xs mt-1"
                    >
                      Tipe Dokumen harus diisi.
                    </p>
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
                      :required="!top"
                      v-model="top"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0"
                      min="0"
                    />
                    <p
                      v-show="isSubmitted && !top"
                      class="text-red-500 text-xs mt-1"
                    >
                      Top harus diisi.
                    </p>
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
                      :required="!toleransitop"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0"
                      min="0"
                    />
                    <p
                      v-show="isSubmitted && !toleransitop"
                      class="text-red-500 text-xs mt-1"
                    >
                      Toleransi Top harus diisi.
                    </p>
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
                          class="font-semibold text-left text-cyan-400 dark:text-white text-xs"
                        >
                          Kode
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 dark:text-white text-xs"
                        >
                          Nama
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 dark:text-white text-xs"
                        >
                          Segment
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 dark:text-white text-xs"
                        >
                          Alamat
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 dark:text-white text-xs"
                        >
                          Telp
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 dark:text-white text-xs"
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
                    <tr v-for="(item, index) in filteredItems" :key="index">
                      <td class="p-2">
                        <div class="flex items-center">
                          <input
                            type="checkbox"
                            v-model="item.checked"
                            @change="updateSelectedItems(item)"
                          />
                        </div>
                      </td>
                      <td class="">
                        <div class="text-left text-xs">{{ item.kode }}</div>
                      </td>
                      <td class="">
                        <div class="text-left text-xs">{{ item.Nama }}</div>
                      </td>
                      <td class="">
                        <div class="text-left text-xs">
                          {{ item.TipePelanggan }}
                        </div>
                      </td>
                      <td class="">
                        <div class="text-left text-xs">{{ item.Alamat }}</div>
                      </td>
                      <td class="">
                        <div class="text-left text-xs">{{ item.Telp }}</div>
                      </td>
                      <td class="">
                        <div class="text-left text-xs">{{ item.Kota }}</div>
                      </td>
                      <td class="">
                        <div class="text-left text-xs">{{ item.Email }}</div>
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
      top: "0",
      toleransitop: "0",
      selectedItems: [
        // Add more data here if needed
      ],
      selectedCodes: [],
      searchQuery: "",
      originalItems: [],
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
        console.log("Kode Yang Dipilih:", item.kode);
        console.log("Array selectedItems:", this.selectedItems);
      } else {
        const index = this.selectedItems.indexOf(item.kode);
        if (index !== -1) {
          this.selectedItems.splice(index, 1);
        }
        console.log("Kode Yang Dihapus:", item.kode);
        console.log("Array selectedItems:", this.selectedItems);
      }
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
        console.log(data);
        if (data.success === true) {
          this.salesOptions = data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    getCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = `${today.getMonth() + 1}`.padStart(2, "0");
      const day = `${today.getDate()}`.padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    // formatNumberInput() {
    //   // Dapatkan nama properti yang sedang diubah
    //   const propertyName = event.target.name;

    //   // Dapatkan nilai properti yang sedang diubah
    //   let propertyValue = this[propertyName];

    //   // Hapus angka 0 di awal jika ada
    //   if (propertyValue.charAt(0) === "0") {
    //     propertyValue = propertyValue.substr(1);
    //   }

    //   // Update nilai properti dengan nilai yang sudah diformat
    //   this[propertyName] = propertyValue;
    // },
    validatePhoneNumber() {
      if (!/^[0-9]*$/.test(this.telp)) {
        this.telp = this.telp.replace(/[^0-9]/g, "");
      }
    },
    performSearch() {
      const query = this.searchQuery.toLowerCase();
      if (query) {
        this.items = this.originalItems.filter((item) => {
          return (
            (item.Kode && item.Kode.toLowerCase().includes(query)) ||
            (item.Nama && item.Nama.toLowerCase().includes(query)) ||
            (item.TipePelanggan &&
              item.TipePelanggan.toLowerCase().includes(query)) ||
            (item.Alamat && item.Alamat.toLowerCase().includes(query)) ||
            (item.Telp && item.Telp.toLowerCase().includes(query)) ||
            (item.Kota && item.Kota.toLowerCase().includes(query)) ||
            (item.Email && item.Email.toLowerCase().includes(query))
          );
        });
      } else {
        this.items = [...this.originalItems]; // Kembalikan items ke salinan data awal
      }
    },

    async showData() {
      console.log("Tipe Pelanggan:", this.tipepelanggan);
      console.log("Kota:", this.kota);
      console.log("Alamat:", this.alamat);

      let alamatValue = this.alamat !== "" ? this.alamat : "%";
      let telpValue = this.telp !== "" ? this.telp : "%";
      let kotaValue = this.kota !== "" ? this.kota : "%";

      if (
        this.tipepelanggan === "" &&
        this.alamat === "" &&
        this.kota === "" &&
        this.telp === ""
      ) {
        alamatValue = "%";
        telpValue = "%";
        kotaValue = "%";
      } else {
        if (this.tipepelanggan !== "") {
          // Filter berdasarkan tipe pelanggan
        } else {
          tipePelangganValue = "%";
        }

        if (this.alamat !== "") {
          // Filter berdasarkan alamat
        } else {
          alamatValue = "%";
        }

        if (this.kota !== "") {
          // Filter berdasarkan kota
        } else {
          kotaValue = "%";
        }

        if (this.telp !== "") {
          // Filter berdasarkan nomor telepon
        } else {
          telpValue = "%";
        }
      }

      try {
        const response = await axios.post(
          import.meta.env.VITE_APP_API_URL + "viewcalonpelangganretention",
          {
            TipePel: this.tipepelanggan,
            Alamat: alamatValue,
            Telp: telpValue,
            Kota: kotaValue,
          }
        );
        const data = response.data;
        console.log(data);
        if (data.success === true && data.data.length > 0) {
          this.items = data.data;
          this.originalItems = [...data.data]; // Simpan salinan data ke originalItems
        } else {
          this.items = [];
          this.originalItems = []; // Jika tidak ada data, set originalItems menjadi array kosong
        }
      } catch (error) {
        console.log(error);
      }
    },
    validateForm() {
      const errors = [];

      if (!this.tanggal) {
        errors.push("Tanggal");
      }

      if (!this.sales) {
        errors.push("Sales");
      }

      if (!this.tipedokumen) {
        errors.push("Tipe Dokumen");
      }

      if (!this.top) {
        errors.push("TOP");
      }

      if (!this.toleransitop) {
        errors.push("Toleransi TOP");
      }

      if (errors.length > 0) {
        // Menampilkan pesan kesalahan per input yang belum terisi
        const errorMessage =
          "Mohon Lengkapi Field Berikut: " + errors.join(", ");
        alert(errorMessage);
        return false;
      }

      return true;
    },
    saveData() {
      if (!this.validateForm()) {
        // Menghentikan proses penyimpanan jika validasi gagal
        return;
      }
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
        .post("http://192.168.11.54:8000/api/GenerateNotaRetention", postData)
        .then((response) => {
          console.log("Data Berhasil Tersimpan:", response);
          // Lakukan tindakan lain setelah berhasil menyimpan data
          alert("Data Berhasil Disimpan!");

          // Me-refresh halaman
          window.location.reload();
        })
        .catch((error) => {
          console.log("Terjadi Kesalahan:", error);
          // Lakukan penanganan kesalahan
        });
    },
  },
  mounted() {
    this.fetchSalesOptions();
    this.tanggal = this.getCurrentDate();
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
