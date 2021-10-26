<template>
  <Layout>

    <div class="container">
      <div class="contact-header">
        <h1 class="contact-title">
          Say hi!
        </h1>
        <p>
          Leave me a note with any questions you might have, I'll get back to you
          as soon as possible.
        </p>
      </div>
      <form name="contact" class="contact-form">
        <div class="sender-info">
          <div>
            <label for="name" class="label">
              Your name
            </label>
            <input v-model="form.name" type="text" name="name" required>
          </div>
          <div>
            <label for="email" class="label">
              Your email
            </label>
            <input v-model="form.email" type="email" name="email" required>
          </div>
        </div>
        <div class="message">
          <label for="message" class="label">
            Message
          </label>
          <textarea v-model="form.message" name="message" required>
          </textarea>
        </div>
        <button class="button" type="button" @click.prevent="handleSubmit">
          Submit form
        </button>
      </form>
    </div>

  </Layout>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactPage',
  metaInfo: {
    title: 'contact'
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    async handleSubmit () {
      if (!this.validateForm(this.form)) return
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${this.GRIDSOME_API_URL}/say-his`,
          data: this.form,
        })
        window.alert('提交成功')
        Object.assign(this.$data.form, this.$options.data().form)
      } catch (err) {
        window.alert('提交失败')
      }
    },
    validateForm (data) {
      let flag = true
      for (const o in data) {
        if (!data[o]) {
          window.alert(`请输入${o}`)
          flag = false
          break 
        }
      }
      return flag
    },
  },
}
</script>

<style>

</style>
