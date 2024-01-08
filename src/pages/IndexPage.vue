<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="text-h6">Catálogo de Livros</div>
        <div class="text-subtitle2"></div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-right">Livro</th>
            <th class="text-right">Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in localStorageData" :key="index">
            <td class="text-left">{{ index + 1 }}</td>
            <td class="text-right">{{ item.bookName }}</td>
            <td class="text-right">{{ item.bookDescription }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

const localStorageData = ref([])

const getLocalStorageData = () => {
  const data = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)
    data.push(JSON.parse(value))
  }
  return data
}

onMounted(() => {
  localStorageData.value = getLocalStorageData()
})
</script>
