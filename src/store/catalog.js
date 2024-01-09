import { pinia } from 'src/boot/pinia'

export const useCatalogStore = pinia.createStore({
  id: 'catalog',
  state: () => ({
    books: []
  }),
  actions: {
    updateCatalog () {
      const data = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)
        data.push(JSON.parse(value))
      }
      this.books = data
    }
  }
})
