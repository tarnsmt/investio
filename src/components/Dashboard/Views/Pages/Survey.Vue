<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
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
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div class="register-page">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="header-text">
                  <h2>Customer Risk Profile</h2>
                  <h4>Better understanding among investors with regards to risk tolerance</h4>
                </div>
              </div>

              <div class="col-md-2 col-md-offset-2">
                  <div class="img-container">
                    <img src="/static/img/survey.png" alt="Agenda" style="max-width:100%">
                  </div>
              </div>
              <div class="col-md-6" style="line-height: 2.0;">
                 The questionnaire is provided only as preliminary investment guidance in accordance with a given risk tolerance score. Investors should consider other factors to establish a well-balanced investment
                 strategy, e.g. investment objectives, time horizon, etc. Investors may seek practical advice from professional consultants. 
              </div>

              <div class="col-md-8 col-md-offset-2">
                  <br>
                  <h5>Please choose only ONE answer that best describes you.</h5>
                  <h5>1. How old are you?</h5>
                  <div class="tab-left">
                    <p-radio label="1" value=1 v-model="radios.question1">Over 55 years </p-radio>
                    <p-radio label="2" value=2 v-model="radios.question1">45 – 55 years </p-radio>
                    <p-radio label="3"value=3 v-model="radios.question1">35 – 44 years </p-radio>
                    <p-radio label="4" value=4 v-model="radios.question1">Under 35 years </p-radio>
                  </div>
              </div>
              <h1>Checked names: {{ radios.question9 }}</h1>
              <div class="col-md-8 col-md-offset-2">
                  <h5>2. What is the ratio of your monthly expense to your income?</h5>
                  <div class="tab-left">
                    <p-radio label="1" value=1 v-model="radios.question2">Over 75% </p-radio>
                    <p-radio label="2" value=2 v-model="radios.question2">Between 51– 75% </p-radio>
                    <p-radio label="3" value=3 v-model="radios.question2">Between 25 – 50%</p-radio>
                    <p-radio label="4" value=4 v-model="radios.question2">Less than 25% </p-radio>
                  </div>
              </div>
              <div class="col-md-8 col-md-offset-2">
                  <h5>3. What is your current financial status?</h5>
                  <div class="tab-left">
                    <p-radio label="1" value=1 v-model="radios.question3">Less assets than debts  </p-radio>
                    <p-radio label="2" value=2 v-model="radios.question3">Assets equal to debts </p-radio>
                    <p-radio label="3" value=3 v-model="radios.question3">More assets than debts </p-radio>
                    <p-radio label="4" value=4 v-model="radios.question3">I will have adequate savings/investments throughout my retirement</p-radio>
                  </div>
              </div>
              <div class="col-md-8 col-md-offset-2">
                  <h5>4. Which of the following assets do you have investment experience with or knowledge about?</h5>
                  <div class="tab-left">
                    <p-radio label="1" value=1 v-model="radios.question4">Bank Deposit </p-radio>
                    <p-radio label="2" value=2 v-model="radios.question4">Government Bond or Government Bond Fund </p-radio>
                    <p-radio label="3" value=3 v-model="radios.question4">Debentures or Fixed Income Fund </p-radio>
                    <p-radio label="4" value=4 v-model="radios.question4">Equity Stock or Equity Fund or other High-Risk Assets </p-radio>
                  </div>
              </div>
              <div class="col-md-8 col-md-offset-2">
                  <h5>5. The estimated period that you will not need to use your invested funds</h5>
                  <div class="tab-left">
                    <p-radio label="1" value=1 v-model="radios.question5">Less than 1 year</p-radio>
                    <p-radio label="2" value=2 v-model="radios.question5">1 – 3 years </p-radio>
                    <p-radio label="3" value=3 v-model="radios.question5">3 –5 years  </p-radio>
                    <p-radio label="4" alue=4 v-model="radios.question5">More than 5 years</p-radio>
                  </div>
              </div>
              <div class="col-md-8 col-md-offset-2">
                  <h5>6. What is your primary investment objective?</h5>
                  <div class="tab-left">
                    <p-radio label="1" value=1 v-model="radios.question6">To get returns with secure investment principal, although the return is lower or close to inflation rate </p-radio>
                    <p-radio label="2" value=4 v-model="radios.question6">To increase my chance of getting a returns that is a little over the inflation rate despite risk of partial investment loss </p-radio>
                    <p-radio label="3" value=3 v-model="radios.question6"> To increase my chance of getting a higher returns over the inflation rate despite higher risk of investment loss </p-radio>
                    <p-radio label="4" value=4 v-model="radios.question6">To increase my chance of getting the maximum returns despite highest risk of investment loss </p-radio>
                  </div>
              </div>
              <div class="col-md-8 col-md-offset-2">
                  <h5>7. Which of the following investment scenarios are you willing to be engaged in? (See below figure)</h5>
                  <div class="col-md-5 tab-left ">
                    <div class="img-container">
                        <img src="/static/img/graph.png" alt="Agenda" style="max-width:100%">
                    </div>
                    </div>
                  <div class="tab-left col-lg-6" style="margin-left:30px">
                    <p-radio label="1" value=1 v-model="radios.question7">Scenario 1: maximum returns of perhaps 2.5%, and 0% loss</p-radio>
                    <p-radio label="2" value=2 v-model="radios.question7">Scenario 2: maximum returns of perhaps 7%, and 1% possible loss</p-radio>
                    <p-radio label="3" value=3 v-model="radios.question7">Scenario 3: maximum returns of perhaps 15%, and 5% possible loss </p-radio>
                    <p-radio label="4" value=4 v-model="radios.question7">Scenario 4: maximum returns of perhaps 25%, and 15% possible loss</p-radio>
                  </div>
              </div>
              <div class="col-md-8 col-md-offset-2">
                  <h5>8. If you were to invest in high-return but high-risk assets, how would you feel?</h5>
                  <div class="tab-left">
                    <p-radio label="1" value=1 v-model="radios.question8">Worried, and fearful of possible loss </p-radio>
                    <p-radio label="2" value=2 v-model="radios.question8">Uneasy, but could come to terms with it</p-radio>
                    <p-radio label="3" value=3 v-model="radios.question8">Aware of possible loss, can accept certain degree of fluctuation  </p-radio>
                    <p-radio label="4" value=4 v-model="radios.question8">Unconcerned of high-risk loss, and looking forward to higher returns</p-radio>
                  </div>
              </div>
              <div class="col-md-8 col-md-offset-2">
                  <h5>9. You would be worried or unwilling to accept a scenario where your investment diminishes by:</h5>
                  <div class="tab-left">
                    <p-radio label="1" value=1 v-model="radios.question9">5% or less </p-radio>
                    <p-radio label="2" value=2 v-model="radios.question9">Around 5% -10% </p-radio>
                    <p-radio label="3" value=3 v-model="radios.question9">Around 10% -20% </p-radio>
                    <p-radio label="4" value=4 v-model="radios.question9">Over 20% </p-radio>
                  </div>
              </div>
              <div class="col-md-8 col-md-offset-2">
                  <h5>10. What would you do if you invested 100,000 Baht last year, but the value of your investment declines to 85,000 Baht this year?</h5>
                  <div class="tab-left">
                    <p-radio value=1 v-model="radios.question10">Take fright, and demand to sell all investments in your portfolio </p-radio>
                    <p-radio value=2 v-model="radios.question10">Worry, and shift some investments to lower-risk assets </p-radio>
                    <p-radio value=3 v-model="radios.question10">Be patient, and hold the assets until their value rebounds </p-radio>
                    <p-radio value=4 v-model="radios.question10">Remain confident in your long-term investment plan, and invest more in the same asset typeb to reduce costs</p-radio>
                  </div>
              </div>              
              <div class="col-md-8 col-md-offset-2">
                  <h5>11. Successfully investing in derivatives and structure notes offers exceptionally high returns, but failure will probably lead to total loss where additional funds may be required to cover such loss. Are you willing to accept such an outcome?</h5>
                  <div class="tab-left">
                    <p-radio label="1" value=1 v-model="radios.question11">No </p-radio>
                    <p-radio label="2" value=2 v-model="radios.question11">Yes, but only to a certain extent </p-radio>
                    <p-radio label="3" value=3 v-model="radios.question11">Yes, without reservation</p-radio>
                  </div>
              </div>
              <div class="col-md-8 col-md-offset-2">
                  <h5>12. In addition to the risk of investment, Can you withstand foreign exchange risk in case of investing in Funds withforeign investment portion higher than 20% of NAV?</h5>
                  <div class="tab-left">
                    <p-radio label="1" value=1 v-model="radios.question12">No </p-radio>
                    <p-radio label="2" value=2 v-model="radios.question12">Yes, but only to a certain extent </p-radio>
                    <p-radio label="3" value=3 v-model="radios.question12">Yes, without reservation</p-radio>
                  </div>
              </div>
              <div class="col-md-8 col-md-offset-2">
                <div class="header-text">
                  <button type="button" class="btn btn-fill btn-danger btn-wd" ><router-link to="/surveyresult"><a style="color:white">Submit</a></router-link></button>
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
  export default {
    data () {
      return {
        result: 3,
        radios: {
          question1: 0,
          question2: 0,
          question3: 0,
          question4: 0,
          question5: 0,
          question6: 0,
          question7: 0,
          question8: 0,
          question9: 0,
          question10: 0,
          question11: 0,
          question12: 0
        }
      }
    },
    watch: {
      radios: function (newValue) {
        this.result = -parseInt(newValue) + 7
      }
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
.tab-left{
    margin-left: 30px;
}
</style>