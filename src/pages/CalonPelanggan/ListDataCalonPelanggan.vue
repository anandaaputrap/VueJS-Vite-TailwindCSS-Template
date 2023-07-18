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
        <div class="sm:px-1 lg:px-1 py-2 w-full max-w-9xl mx-auto">
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
                          class="font-medium text-left text-cyan-400 text-xs"
                        >
                          Kode
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-medium text-left text-cyan-400 text-xs"
                        >
                          Telp
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-medium text-left text-cyan-400 text-xs"
                        >
                          Nama
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-medium text-left text-cyan-400 text-xs"
                        >
                          Email
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-medium text-left text-cyan-400 text-xs"
                        >
                          Alamat
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-medium text-left text-cyan-400 text-xs"
                        >
                          Kota
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-medium text-left text-cyan-400 text-xs"
                        >
                          Tipe Pelanggan
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
                        >
                          Sumber
                        </div>
                      </th>
                      <th class="p-2">
                        <div
                          class="font-semibold text-left text-cyan-400 text-xs"
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
                    <tr v-for="(item, index) in items" :key="index">
                      <!-- <td class="p-2">
                        <div class="flex items-center">
                          <input type="checkbox" v-model="item.checked" />
                        </div>
                      </td> -->
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
                        <div class="text-left">{{ item.Kota }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.TipePelanggan }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.Sumber }}</div>
                      </td>
                      <td class="p-2">
                        <div class="flex items-center justify-center gap-1">
                          <!-- <button
                            class="btn btn-sm bg-cyan-500 hover:bg-cyan-600 text-white"
                            @click="showDetail(index)"
                          >
                            Detail
                          </button> -->
                          <button
                            class="btn btn-sm bg-amber-500 hover:bg-amber-600 text-white"
                            @click="editItem(item)"
                          >
                            Edit
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

      <!-- Edit Modal -->
      <div
        v-show="showEditModal"
        class="fixed inset-0 flex items-center justify-center z-50 animate-fade-up animate-once"
      >
        <div
          class="bg-white rounded shadow-lg p-4 max-w-md w-full border-solid border-2 border-slate-500"
        >
          <h3 class="text-lg font-semibold mb-2">Edit Data</h3>
          <hr
            class="border-2 border-cyan-500 cursor-pointer hover:border-cyan-600 duration-500"
          />
          <div v-if="selectedItemIndex !== null">
            <!-- <div class="mb-2">
              <strong>Kode :</strong> {{ items[selectedItemIndex].kode }}
            </div>
            <div class="mb-2">
              <strong>Telepon :</strong>
              <input
                v-model="editedItem.Telp"
                type="text"
                class="border border-gray-300 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div> -->
            <div class="mb-2">
              <strong>Nama :</strong>
              <br />
              <input
                v-model="editedItem.Nama"
                type="text"
                style="width: 100%"
                class="border border-gray-300 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div class="mb-2">
              <strong>Email :</strong>
              <br />
              <input
                v-model="editedItem.Email"
                type="text"
                style="width: 100%"
                class="border border-gray-300 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div class="mb-2">
              <strong>Alamat :</strong>
              <textarea
                v-model="editedItem.Alamat"
                style="width: 100%"
                class="border border-gray-300 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div class="mb-2">
              <strong>Kota : </strong>
              <br />
              <input
                v-model="editedItem.Kota"
                type="text"
                style="width: 100%"
                class="border border-gray-300 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <!-- <div class="mb-2">
              <label
                for="tipepelanggan"
                class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tipe Pelanggan
              </label>
              <select
                id="tipepelanggan"
                name="tipepelanggan"
                v-model="editedItem.TipePelanggan"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="" disabled selected>Pilih Tipe Pelanggan</option>
                <option value="MMH">MMH</option>
                <option value="ULC">ULC</option>
                <option value="PREMIUM">PREMIUM</option>
              </select>
            </div> -->
            <!-- <div class="mb-2">
              <strong>Sumber : </strong>
              <input
                v-model="editedItem.Sumber"
                type="text"
                class="border border-gray-300 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div> -->
          </div>
          <button
            class="btn btn-primary bg-cyan-500 hover:bg-cyan-600 text-white"
            @click="updateItem"
          >
            Simpan
          </button>
          <button
            class="btn btn-primary bg-red-400 hover:bg-red-500 text-white"
            @click="closeEditModal"
          >
            Batal
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
      items: [],
      allItems: [],
      selectAll: false,
      showDetails: false,
      showEditModal: false,
      selectedItemIndex: null,
      editedItem: {
        Telp: "",
        Nama: "",
        Alamat: "",
        Email: "",
        Kota: "",
        TipePelanggan: "",
        Sumber: "",
      },
      sif: "''",
      app: "2",
      operator: "wildan.y@altius-erp.com",
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
        Sif: "",
        Search: "A",
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
    performSearch() {
      // Menyalin semua item ke dalam variabel tempItems
      let tempItems = [...this.allItems];

      // Mengecek apakah ada input pencarian yang dimasukkan
      if (this.searchQuery !== "") {
        // Mengonversi query pencarian menjadi huruf kecil untuk pencarian case-insensitive
        const query = this.searchQuery.toLowerCase();

        // Melakukan pencarian berdasarkan Telp, Nama, Email, Alamat, Kota, TipePelanggan, dan Sumber
        tempItems = tempItems.filter((item) => {
          return (
            item.Telp.toLowerCase().includes(query) ||
            item.Nama.toLowerCase().includes(query) ||
            item.Email.toLowerCase().includes(query) ||
            item.Alamat.toLowerCase().includes(query) ||
            item.Kota.toLowerCase().includes(query) ||
            item.TipePelanggan.toLowerCase().includes(query) ||
            item.Sumber.toLowerCase().includes(query)
          );
        });
      }

      // Mengupdate items dengan hasil pencarian
      this.items = tempItems;
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
      this.selectedItemIndex = this.items.indexOf(item);
      this.editedItem = { ...item };
      this.showEditModal = true;
    },
    closeEditModal() {
      console.log("Telp : " + this.editedItem.Telp);
      console.log("Nama : " + this.editedItem.Nama);
      console.log("Alamat : " + this.editedItem.Alamat);
      console.log("Email : " + this.editedItem.Email);
      console.log("Kota : " + this.editedItem.Kota);
      console.log("Tipe Pelanggan : " + this.editedItem.TipePelanggan);
      console.log("Sumber : " + this.editedItem.Sumber);
      console.log("Sif : " + this.sif);
      console.log("App : " + this.app);
      console.log("Operator : " + this.operator);

      this.selectedItemIndex = null;
      this.editedItem = {
        Telp: "",
        Nama: "",
        Alamat: "",
        Kota: "",
        Email: "",
        TipePelanggan: "",
        Sumber: "",
      };
      this.showEditModal = false;
    },
    updateItem() {
      const updatedItem = {
        id: this.items[this.selectedItemIndex].id,
        Telp: this.editedItem.Telp,
        Nama: this.editedItem.Nama,
        Alamat: this.editedItem.Alamat,
        Kota: this.editedItem.Kota,
        Email: this.editedItem.Email,
        TipePel: this.editedItem.TipePelanggan,
        Sumber: this.editedItem.Sumber,
        Sif: this.sif,
        App: this.app,
        Operator: this.operator,
      };

      axios
        .post("http://192.168.11.54:8000/api/editcalonpelanggan", updatedItem)
        .then((response) => {
          console.log("Data Berhasil Diperbarui:", response.data);
          this.items[this.selectedItemIndex] = updatedItem;
          this.closeEditModal();
          window.location.reload();
        })
        .catch((error) => {
          console.log("Terjadi Kesalahan Saat Memperbarui Data:", error);
        });
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
