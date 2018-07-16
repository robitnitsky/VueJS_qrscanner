<template>
  <div>
    <h1>{{ $t('result.heading') }}</h1>
    <div> {{ result }} </div>
    <button @click="onClick">{{ $t('result.resetBtn') }}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Result',
  computed: {
    ...mapState({
      result: (state) => state.qr.result
    })
  },
  methods: {
    onClick () {
      this.$store.dispatch('qr/reset')
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  div {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
