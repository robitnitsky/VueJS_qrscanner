<template>
<div>
  <h1>{{ $t('scan.heading') }} </h1>
  <video id="preview"/>
</div>
</template>

<script>
import Instascan from 'instascan'
export default {
  name: 'Scanner',
  methods: {
    init () {
      let scanner = new Instascan.Scanner({ video: document.getElementById('preview') })
      this.attachListener(scanner)
      this.startScan(scanner)
    },
    attachListener (scanner) {
      scanner.addListener('scan', (content) => {
        this.$emit('scanned', content)
      })
    },
    startScan (scanner) {
      Instascan.Camera.getCameras().then((cameras) => {
        if (cameras.length > 0) {
          scanner.start(cameras[0])
        } else {
          console.error('No cameras found.')
        }
      }).catch((e) => {
        console.error(e)
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>
