<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
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
          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div class="full-page full-page-no-filter login-page" data-color=""
           data-image="static/img/background/background-3.jpg" style="background:none">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-md-offset-6 col-sm-offset-3">
                <form method="#" action="#">
                  <!-- <div class="card" data-background="color" data-color="blue"> -->
                    <div class="card-header">
                      <h1 style ="color:#ffffff;font-weight: bold;">WELCOME</h1>
                      <h3 style ="color:#ffffff">Application of Thai Mutual Funds Performance Prediction</h3>
                    </div>
                    <div class="card-footer">
                           <router-link to="/Login">
                           <a>
                      <button class="btn btn-warning btn-fill btn-wd btn-no-radius">Mutual Fund Recommendations</button></a>
                     </router-link>
                    </div>
                  <!-- </div> -->
                </form>
              </div>
            </div>

            <div class="container" style="padding-top:26%">
              <div class="row">
                <div class="col-md-4 col-md-offset-2">     
                  <div class="header-text">
                    <h2 style ="font-weight: bold;color:black">FUND</h2>
                    <h4 style ="color:black; margin-top:0px">Search for Mutual Fund in Thailand</h4>
                  </div>    
                </div>

                <div class="col-md-4">
                  <form role="search" >
                    <div class="input-group" style="margin-top:20%">
                      <div>
                        <b-form-input list="my-list-id"></b-form-input>
                      </div>
                      <autosuggest-instance :key="1" />
                      <!-- <input type="text" value="" placeholder="Fund name or ISIN or Tinker" class="form-control"> <span class="input-group-addon"> -->
                      <!-- <i class="fa fa-search"></i> -->
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="full-page-background" style="background-image: url(static/img/background/background-3.jpg) "></div>
      </div>
    </div>

    <!-- -------------------------  fund table  ----------------------------->
    <div>
      <div class="register-page">
        <div class="content">
          <div class="container">
            <div class="row">     
              <div class="col-md-12" style="margin:100px 0px">
                <type-validation-form @on-submit="onTypeValidationSubmit"></type-validation-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!------------------------   fund simulator  ---------------------------------->
    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page" data-color=""
           data-image="static/img/background/background-2.jpg">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                <form method="#" action="#">

                    <div class="card-header">
                      <h1 style ="color:#f1b93f;font-weight: bold;"><center>INVESTIO</center></h1>
                      <h3 style ="color:#f1b93f"><center>WELCOME</center></h3>
                    </div>
        
                  <!-- </div> -->
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div class="full-page-background" style="background-image: url(static/img/background/background-2.jpg) "></div>
      </div>
    </div>


    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <router-link to="/Login" tag="li">
          <a>Account</a>
        </router-link>
        <router-link to="/admin/overview" tag="li">
          <a>Dashboard</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  import TypeValidationForm from './Table/FundTable.vue'
  import AutosuggestInstance from './AutosuggestInstance'

  export default {
    components: {
      TypeValidationForm,
      AutosuggestInstance
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
    }
  }
</script>
<style>
</style>
