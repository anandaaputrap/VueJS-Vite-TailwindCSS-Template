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
                for="tanggalAwal"
                class="text-xs font-semibold text-slate-400 dark:text-slate-500"
                >Tanggal Awal :
              </label>
              <input
                type="date"
                v-model="tanggalAwal"
                id="tanggalAwal"
                class="border border-slate-300 dark:border-slate-600 p-1 mb-2"
              />
              <br />
              <label
                for="tanggalAkhir"
                class="text-xs font-semibold text-slate-400 dark:text-slate-500"
                >Tanggal Akhir :
              </label>
              <input
                type="date"
                v-model="tanggalAkhir"
                id="tanggalAkhir"
                class="border border-slate-300 dark:border-slate-600 p-1 mb-2"
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
                        <div class="font-semibold text-left">Nomor Nota</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Tanggal</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Sales</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Cost</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">TOP</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Toleransi TOP</div>
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
                        <div class="text-left">{{ item.nota }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.tanggal }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.sales }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.cost }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.top }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ item.toleranceTop }}</div>
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
        class="fixed inset-0 flex items-center justify-center z-50"
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
              <strong>Nomor Nota:</strong> {{ items[selectedItemIndex].nota }}
            </div>
            <div class="mb-2">
              <strong>Tanggal:</strong> {{ items[selectedItemIndex].tanggal }}
            </div>
            <div class="mb-2">
              <strong>Sales:</strong> {{ items[selectedItemIndex].sales }}
            </div>
            <div class="mb-2">
              <strong>Cost:</strong> {{ items[selectedItemIndex].cost }}
            </div>
            <div class="mb-2">
              <strong>TOP:</strong> {{ items[selectedItemIndex].top }}
            </div>
            <div class="mb-2">
              <strong>Toleransi TOP:</strong>
              {{ items[selectedItemIndex].toleranceTop }}
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
        {
          checked: false,
          nota: "001",
          tanggal: "2023-06-01",
          sales: "John Doe",
          cost: "100",
          top: "14",
          toleranceTop: "2",
        },
        {
          checked: false,
          nota: "002",
          tanggal: "2023-06-02",
          sales: "Jane Smith",
          cost: "200",
          top: "30",
          toleranceTop: "5",
        },
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
  },
};
</script>
