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
          <tr v-for="(book, index) in $store.catalog.books" :key="index">
            <td class="text-left">{{ index + 1 }}</td>
            <td class="text-right">{{ book.bookName }}</td>
            <td class="text-right">{{ book.bookDescription }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useCatalogStore } from 'src/store/catalog.js'

export default defineComponent({
  setup () {
    const catalogStore = useCatalogStore()

    onMounted(() => {
      catalogStore.updateCatalog()
    })

    return {
      $store: {
        catalog: catalogStore
      }
    }
  }
})
</script>
