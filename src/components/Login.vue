<template>
  <div>
    <h1>{{ $t('login.heading') }}</h1>
    <input type="text" v-model="login" placeholder="Login">
    <input type="text" v-model="password" placeholder="Password">
    <button @click.prevent="onLogin">{{ $t('login.loginBtn') }}</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    onLogin () {
      this.$store.dispatch('auth/login', {
        login: this.login,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>
div {
  max-width: 400px;
  margin: 0 auto;
  padding: 0 15px;
}
input {
  width: 100%;
  height: 40px;
  margin: 0 0 10px;
  font-size: 20px;
  padding: 10px;
}
</style>
