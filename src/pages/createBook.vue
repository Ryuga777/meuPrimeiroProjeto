<template>
  <q-page>
    <q-page-container>
      <div class="q-pa-md" style="max-width: 500px">
        <div class="text-center">
          <q-subtitle class="text-h6">CADASTRO DE LIVRO</q-subtitle>
        </div>
        <q-form @submit="submitForm">
          <q-input v-model="bookName" label="Nome do Livro" outlined dense required></q-input>

          <q-input v-model="bookDescription" label="Descrição" outlined dense required type="textarea" rows="4"></q-input>

          <div class="text-center">
            <q-btn type="submit" color="primary" label="Enviar" style="width: 200px; margin-top: 10px" dense></q-btn>
          </div>
        </q-form>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      bookName: '',
      bookDescription: ''
    }
  },
  methods: {
    submitForm () {
      // Recuperar os dados existentes do localStorage (se houver)
      const existingBookName = localStorage.getItem('bookName') || ''
      const existingBookDescription = localStorage.getItem('bookDescription') || ''

      // Concatenar os dados existentes com os novos dados
      const updatedBookName = existingBookName + '\n' + this.bookName
      const updatedBookDescription = existingBookDescription + '\n' + this.bookDescription

      // Armazenar os dados atualizados no localStorage
      localStorage.setItem('bookName', updatedBookName)
      localStorage.setItem('bookDescription', updatedBookDescription)

      // Implementar lógica para enviar dados para o servidor
      console.log('Dados enviados para o servidor:', this.bookName, this.bookDescription)

      // Limpar os campos após o envio
      this.bookName = ''
      this.bookDescription = ''
    }
  }
}
</script>
