<template>
  <div>
    <h4 class="form-control-static">Balance Amount : {{balanceAmount}} &#3647;</h4>
      <div class="card col-sm-6">
      <form class="form-horizontal">      
        <div class="card-content">
          <fieldset>
            <div class="form-group">
              <label class="col-sm-4 control-label">Fund Code</label>
              <div class="col-sm-8">
                <label class="control-label">TMB</label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div class="form-group">
              <label class="col-sm-4 control-label">Purchased Amount</label>
              <div class="col-sm-8">
                <label class="control-label">1500</label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div class="form-group">
              <label class="col-sm-4 control-label">Effective Date</label>
              <div class="col-sm-8">
                <label class="control-label">28/02/2021</label>
              </div>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  </div>
  
</template>
<script>
  export default {
    data () {
      return {
        balanceAmount: 8500
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
