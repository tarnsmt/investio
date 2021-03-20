<template>
  <div>
    <h4 class="form-control-static" style="padding-bottom:30px">Balance Amount : {{balanceAmount}} &#3647;</h4> 
    <sell-fund-name :selectedOption="fundSelectSell"></sell-fund-name>
      <div class="card-content row">
        <div class="col-sm-5 col-md-offset-0">
          <el-table class="table-striped" 
                    :data="queriedData"
                    border
                    style="width: 100%">
            <el-table-column v-for="column in tableColumns"
                            :key="column.label"
                            :min-width="column.minWidth"
                            :prop="column.prop"
                            :label="column.label">
            </el-table-column>
            <el-table-column
              :min-width="120"
              fixed="right"
              label="">
              <template slot-scope="props">
                <a class="btn btn-simple btn-xs btn-success btn-icon edit" @click="handleClickSell(props.$index, props.row)">Sell</a>
                <a class="btn btn-simple btn-xs btn-warning btn-icon edit" @click="handleClickPurchase(props.$index, props.row)">Purchase</a>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- <div class="col-sm-5 col-md-offset-1 pagination-info">
          <p class="category">Showing {{from + 1}} to {{to}} of {{total}} entries</p>
        </div>
        <div class="col-sm-5 col-md-offset-right-1">
          <p-pagination class="pull-right"
                        v-model="pagination.currentPage"
                        :per-page="pagination.perPage"
                        :total="pagination.total">
          </p-pagination>
        </div> -->
      </div>
    </div>
  
</template>
<script>
  import Vue from 'vue'
  import {Table, TableColumn, Select, Option} from 'element-ui'
  import PPagination from 'src/components/UIComponents/Pagination.vue'
  import portfolio from './portfolio'
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Select)
  Vue.use(Option)
  export default{
    components: {
      'sell-fund-name': require('src/components/Dashboard/Views/Purchase.vue'),
      PPagination
    },
    computed: {
      pagedData () {
        return this.tableData.slice(this.from, this.to)
      },
      /***
       * Searches through table data and returns a paginated array.
       * Note that this should not be used for table with a lot of data as it might be slow!
       * Do the search and the pagination on the server and display the data retrieved from server instead.
       * @returns {computed.pagedData}
       */
      queriedData () {
        if (!this.searchQuery) {
          this.pagination.total = this.tableData.length
          return this.pagedData
        }
        let result = this.tableData
          .filter((row) => {
            let isIncluded = false
            for (let key of this.propsToSearch) {
              let rowValue = row[key].toString()
              if (rowValue.includes && rowValue.includes(this.searchQuery)) {
                isIncluded = true
              }
            }
            return isIncluded
          })
        this.pagination.total = result.length
        return result.slice(this.from, this.to)
      },
      to () {
        let highBound = this.from + this.pagination.perPage
        if (this.total < highBound) {
          highBound = this.total
        }
        return highBound
      },
      from () {
        return this.pagination.perPage * (this.pagination.currentPage - 1)
      },
      total () {
        this.pagination.total = this.tableData.length
        return this.tableData.length
      }
    },
    data () {
      return {
        balanceAmount: 10000,
        fundSelectSell: 'none',
        pagination: {
          perPage: 10,
          currentPage: 1,
          perPageOptions: [10, 20, 30, 40],
          total: 0
        },
        searchQuery: '',
        propsToSearch: ['code', 'name_th'],
        tableColumns: [
          {
            prop: 'fund',
            label: 'Fund',
            minWidth: 100
          },
          {
            prop: 'amount',
            label: 'Amount',
            minWidth: 80
          },
          {
            prop: 'latest',
            label: 'Latest',
            minWidth: 80
          }
        ],
        tableData: portfolio
      }
    },
    methods: {
      handleClickSell (index, row) {
        location.href = 'http://localhost:8000/#/redeem'
        this.fundSelectSell = row.fund
        alert(`Do you want to sell ${row.fund}`)
      },
      handleClickPurchase (index, row) {
        location.href = 'http://localhost:8000/#/purchase'
        this.fundSelectSell = row.fund
        alert(`Do you want to purchase ${row.fund}`)
      }
    }
  }
</script>
<style>

</style>
