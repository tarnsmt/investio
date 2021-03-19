<template>
  <div>
        <nav class="navbar navbar-transparent navbar-absolute" style="background:#323232">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navigation-example-2"
                  @click="toggleNavbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/Home">Mutual Fund</router-link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <router-link to="/Login" tag="li">
              <a>Account</a>
            </router-link>
              <router-link to="/Login" tag="li">
              <a>Register</a>
            </router-link>
            <!-- <router-link to="/admin/overview" tag="li">
              <a>Dashboard</a>
            </router-link> -->
          </ul>
        </div>
      </div>
    </nav>
    <!-- <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <button type="button"
                  class="navbar-toggle navbar-toggle-black"
                  @click="toggleNavbar"
                  data-toggle="collapse"
                  data-target="#navigation-example-2">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar "></span>
            <span class="icon-bar "></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/login" class="btn">
                Looking to login?
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->

    <div class="wrapper wrapper-full-page">
      <div class="register-page">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                
                <div class="header-text" style="padding-top:150px">
                  <form role="search" >
                    <div class="input-group">
                      <input type="text" value="" placeholder="Fund name or ISIN or Tinker" class="form-control"> <span class="input-group-addon">
                        <i class="fa fa-search"></i>
                      </span>
                    </div>
                  </form>
                  <div style="text-align:left">
                    <br>
                  <h2>ONE-GECOM</h2>
                  <h4>กองทุนเปิด วรรณ โกลบอล อีคอมเมิร์ซ</h4>
                  <!-- <hr style="border-top: 1px solid black;"> -->
                
                  </div>
                </div>
              </div>



<div class="col-md-8 col-md-offset-2" >
      <chart-card :chart-data="usersChart.data" :chart-options="usersChart.options" style="box-shadow:none">
        <div slot="header" style="display:flex;float:right;text-align:right">
          <div style="padding-right:30px">
            <h4 class="card-title">Offer</h4>
            <p class="category">22.5234</p>
          </div>
          <div>
            <h4 class="card-title">Bid</h4>
            <p class="category">22.1134</p>
          </div>
        </div>

    
      </chart-card>
    </div>


      
              <div class="col-md-4 col-md-offset-2">
                <div class="media">
                  <!-- <div class="media-left">
                    <div class="icon icon-danger">
                      <i class="ti ti-user"></i>
                    </div>
                  </div> -->
                  <div class="media-body">
                    <h5>Information</h5>
                    <!-- Here you can write a feature description for your dashboard, let the users know what is the value that you give them. -->
                  </div>
                </div>
              
                
              </div>
              <div class="col-md-4">
           
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <li>
          <router-link to="/login">
            Register
          </router-link>
        </li>
        <li>
          <router-link to="/admin">
            Dashboard
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'

  export default {
    components: {
      ChartCard
    },
    methods: {
      toggleNavbar () {
        document.body.classList.toggle('nav-open')
      },
      closeMenu () {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      }
    },
    beforeDestroy () {
      this.closeMenu()
    },
    data () {
      return {
        usersChart: {
          data: {
            labels: ['Sept 20', '', '', '', '', '', '', '', 'Dec 20'],
            series: [
              [18.5, 17.29, 18.22, 17.69, 19.34, 20.22, 21.50, 19.77, 18.33, 19.11]
            ]
          },
          options: {
            low: 17,
            high: 22,
            showArea: true,
            height: '245px',
            axisX: {
              showGrid: false
            },
            showLine: true,
            showPoint: false
          }
        }
      }
    }
  }
</script>
<style>
</style>
