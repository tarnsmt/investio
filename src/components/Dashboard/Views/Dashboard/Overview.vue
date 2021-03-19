<template>
  <div>
    <h4 class="form-control-static">Balance Amount : {{balanceAmount}} &#3647;</h4>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        balanceAmount: 10000
        // purchaseAmount: 0,
        // purchaseAmount: 2000,

      }
    },
    methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      }
    }
  }
</script>
<style>
</style>
