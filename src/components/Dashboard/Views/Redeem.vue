<template>
  <div class="card col-sm-6">
    <form class="form-horizontal">      
      <div class="card-content">
        <fieldset>
          <div class="form-group">
            <label class="col-sm-4 control-label">Balance Amount</label>
            <div class="col-sm-8">
              <p class="form-control-static">{{balanceAmount}}<small> &#3647;</small></p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
              <label class="col-sm-4 control-label">Effective Date</label>
              <div class="col-sm-8">
                <div class="card-header">
                  <div class="form-group">
                    <el-date-picker name="datePicker" v-model="datePicker" type="date" placeholder="Select date"
                                    :picker-options="pickerOptions1">
                    </el-date-picker>
                  </div>
               </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <label class="col-sm-4 control-label">Fund Code</label>
            <div class="col-sm-5">
              <!-- <input type="text"
                     name="requiredText"
                     v-validate="modelValidations.requiredText"
                     v-model="model.requiredText"
                     class="form-control"> -->
              <input type="text" value="SPOT33P7" class="form-control"/>
              <small class="text-danger" v-show="requiredText.invalid">
                {{ getError('requiredText') }}
              </small>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <label class="col-sm-4 control-label">Amount (THB)</label>
            <div class="col-sm-5">
              <input type="number"
                     name="redeemAmount"
                     v-validate="modelValidations.redeemAmount"
                     v-model="model.redeemAmount"
                     min="20.00"
                     step="0.50"
                     placeholder="0.00"
                     class="form-control">
              <small class="text-danger" v-show="redeemAmount.invalid">
                {{ getError('redeemAmount') }}
              </small>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="card-footer text-center">
        <button type="submit" @click.prevent="validate" class="btn btn-fill btn-info btn-wd">Redeem</button>
      </div>
    </form>

  </div>
</template>
<script>
  import {mapFields} from 'vee-validate'
  import swal from 'sweetalert2'
  import {DatePicker, TimeSelect, Slider, Tag, Input, Button, Select, Option} from 'element-ui'

  export default {
    props: ['fundSelectSell'],
    components: {
      [DatePicker.name]: DatePicker,
      [TimeSelect.name]: TimeSelect,
      [Slider.name]: Slider,
      [Tag.name]: Tag,
      [Input.name]: Input,
      [Button.name]: Button,
      [Option.name]: Option,
      [Select.name]: Select
    },
    computed: {
      ...mapFields(['requiredText', 'redeemAmount'])
    },
    data () {
      return {
        pickerOptions1: {
          disabledDate (time) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return time.getTime() < date
          },
          shortcuts: [{
            text: 'Today',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: 'Tomorrow',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: 'Next week',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        datePicker: '',
        balanceAmount: 10000,
        // redeemAmount: 0,
        // redeemAmount: 2000,
        model: {
          datePicker: '',
          requiredText: '',
          redeemAmount: ''
        },
        modelValidations: {
          datePicker: {
            required: true
          },
          redeemAmount: {
            required: true,
            decimal: true
          }
        }
      }
    },
    methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      },
      validate () {
        this.$validator.validateAll().then(isValid => {
          this.$emit('on-submit', this.registerForm, isValid)
          swal({
            title: 'Success',
            text: 'This transaction is complete',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success btn-fill',
            type: 'success'
          })
        })
      }
    }
  }
</script>
<style>
</style>
