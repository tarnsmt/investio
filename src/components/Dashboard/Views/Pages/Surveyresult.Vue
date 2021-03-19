<template>
  <div>
    <div class="wrapper wrapper-full-page">
      <div class="register-page">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="header-text">
                  <h2>Customer Risk Profile</h2>
                  <h4>Better understanding among investors with regards to risk tolerance</h4>
                </div>
              </div>

              <div class="col-md-10 col-md-offset-2">
                <div class="col-lg-10 col-md-12">
                    <div class="card">
                        <!-- <div class="card-header">
                        <h4 class="card-title">Tabs</h4>
                        </div> -->
                        <vue-tabs class="card-content">
                        <v-tab title="Result">
                            <div id="containerIntro">
                                <h5><b>Acceptable risk levels : </b></h5>
                                Level 5
                            </div>
                            <div id="containerIntro">
                                <h5><b>Types of Investor : </b></h5>
                                Moderate to moderately high risk
                            </div>
                            <br>
                            <div id="containerIntro" style="width:84%;margin-left:8%">
                                Moderate investors accept some risk to the principal but adopt a balanced approach with intermediate-term time horizons of five to 10 years. Combining large-company mutual funds with less volatile bonds and riskless securities, moderate investors often pursue a 50/50 structure. A typical strategy might involve investing half of the portfolio in a dividend-paying, growth fund.
                            </div>
                            <br>
                        </v-tab>
                        <v-tab title="Funds" style="text-align: left;margin-left:30%">
                            <div id="containerIntro" style="margin-right:30%">
                                Risk levels in mutual fund from low complexity to high complexity according to the result.   
                            </div>
                            <br>
                            <div id="containerIntro">
                                <h5><b>Level 1 : </b></h5>
                                Domestic Money Market Fund
                            </div>
                            <div id="containerIntro">
                                <h5><b>Level 2 : </b></h5>
                                Money Market Fund with partial foreign investment
                            </div>
                             <div id="containerIntro">
                                <h5><b>Level 3 : </b></h5>
                                Government Bond Fund
                            </div>
                            <div id="containerIntro">
                                <h5><b>Level 4 : </b></h5>
                                Fixed Income Fund
                            </div>
                             <div id="containerIntro">
                                <h5><b>Level 5 : </b></h5>
                                Balanced Fund
                            </div>
                        
                            <br>
                        </v-tab>
                        <v-tab title="Recommendation" style="text-align: left;margin-left:30%">
                        
                            <div id="containerIntro">
                                Basic Asset Allocation Portfolio Recommendation
                            </div>
                            <br>
                            <div id="containerIntro">
                                Deposit and Short Term Debt Instruments &#60; 10%
                            </div>
                            <div id="containerIntro">
                                Money Market Fund with partial foreign investment &#60; 60% 
                            </div>
                             <div id="containerIntro">
                                Equity &#60; 30%
                            </div>
                            <div id="containerIntro">
                                Alternative Instrument Investment &#60; 10%
                            </div>
                        
                            <br>
                        </v-tab>
                        </vue-tabs>
                    </div>
                </div>
              </div>
              <div class="col-md-8 col-md-offset-2">
                <div class="header-text">
                  <button type="button" class="btn btn-fill btn-danger btn-wd"><router-link to="/home"><a style="color:white">Back to home</a></router-link></button>
                </div>
                ffff
                <div id="chart">
        <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
      </div>
              </div>            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
//   import {Collapse, CollapseItem} from 'element-ui'
  import VueTabs from 'vue-nav-tabs'
//   import ApexCharts from 'apexcharts'
  import VueApexCharts from 'vue-apexcharts'

  Vue.use(VueTabs)
  Vue.use(VueApexCharts)
  export default {
    components: {
      apexchart: VueApexCharts
    },
    data: {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          type: 'donut'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    }
  }

</script>
<style>
#containerIntro h5,
#containerIntro p {
    display: inline;
}
</style>