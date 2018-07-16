<template>
  <div>
    <Scanner @scanned="onScanned"></Scanner>
  </div>
</template>

<script>
import Scanner from './ui/Scanner'
export default {
  name: 'Scan',
  components: { Scanner },
  methods: {
    setResult (res) {
      this.$store.dispatch('qr/setResult', res)
    },
    goToResult () {
      this.$router.push({path: '/result'})
    },
    onScanned (res) {
      this.setResult(res)
      this.goToResult()
    }
  }
}
</script>
