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
          <!-- <router-link class="navbar-brand" to="/admin">Dashboard</router-link> -->
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <!-- <router-link to="/register" tag="li">
              <a>Register</a>
            </router-link> -->
            <router-link to="/Home" tag="li">
              <a>Home</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page" data-color=""
           data-image="static/img/background/background-2.jpg">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3">
                <form method="#" action="#">
                  <!-- <div class="card" data-background="color" data-color="blue"> -->
                    <div class="card-header">
                      <h1 style ="color:#f1b93f;font-weight: bold;"><center>I N V E S T I O</center></h1>
                      <h3 style ="color:#f1b93f;margin-top:0"><center>welcome</center></h3>
                      <br><br>
                    </div>
                    <div class="card-content">
                      <div class="form-group">
                        <!-- <label>Email address</label> -->
                        <input type="email" placeholder="Enter email" class="form-control input-no-border">
                      </div>
                      <div class="form-group">
                        <!-- <label>Password</label> -->
                        <input type="password" placeholder="Password" class="form-control input-no-border">
                      </div>
                    </div>
                    <div class="card-footer text-center">
                      <br><br>
                      <router-link to="/admin">
                        <button type="submit" class="btn btn-warning btn-fill btn-wd">Log in</button>
                      </router-link>
                      <div class="forgot">
                        <router-link to="/login" style="color:white">
                        <br>
                          Forgot your password?
                        </router-link>
                      </div>
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
        <!-- <router-link to="/register" tag="li">
          <a>Register</a>
        </router-link> -->
        <router-link to="/Home" tag="li">
          <a>Home</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
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
