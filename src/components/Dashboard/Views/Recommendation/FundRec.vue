<template>
    <div class="row">
      <div class="col-md-12">
    
          <!------------------------------ fund table ------------------------------------------------>
          <div class="card-content row">
            <!-- <div class="col-sm-6">
              <el-select
                class="select-default"
                v-model="pagination.perPage"
                placeholder="Per page">
                <el-option
                  class="select-default"
                  v-for="item in pagination.perPageOptions"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </div> -->

            <div class="col-sm-8 col-md-offset-2">
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
                <!-- <el-table-column
                  :min-width="120"
                  fixed="right"
                  label="">
                  <template slot-scope="props">
                    <a class="btn btn-simple btn-xs btn-warning btn-icon edit" @click="handleClick(props.$index, props.row)"><i class="ti-stats-up"></i></a>
                  </template>
                </el-table-column> -->
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
          <!------------------------------end fund table ------------------------------------------------>

    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import {Table, TableColumn, Select, Option} from 'element-ui'
import PPagination from 'src/components/UIComponents/Pagination.vue'
import fundRec from './fundRec'
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Select)
Vue.use(Option)
export default{
  components: {
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
          prop: 'id',
          label: '',
          minWidth: 30
        },
        {
          prop: 'fund',
          label: 'Fund',
          minWidth: 80
        },
        {
          prop: 'latest',
          label: 'Latest',
          minWidth: 80
        },
        {
          prop: 'return',
          label: 'Return (3M)',
          minWidth: 80
        },
        {
          prop: 'accuracy',
          label: 'Accuracy',
          minWidth: 80
        }
      ],
      tableData: fundRec
    }
  },
  methods: {
    handleClick (index, row) {
      location.href = 'http://localhost:8000/home#/fundinfo'
      alert(`Show information of ${row.code}`)
    }
  }
}
</script>
<style>

</style>
