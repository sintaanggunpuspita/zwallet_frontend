<template>
  <div>
    <div class="box">
      <div class="box1">
        <P>Balance</P>
        <h3>Rp{{ getUser.balance }}</h3>
        <h6>+62{{ getUser.phone }}</h6>

        <div class="button">
          <button type="button" class="btn btn-outline-primary">
            <img
              src="../../assets/arrow-up.png"
              class="navbar-brand"
              alt="arrow-up"
            />
            <!-- <h6>Transfer</h6> -->
            <router-link to="searchreceiver" class="transfer">Transfer</router-link>
          </button>
          <br />
          <button type="button" class="btn btn-outline-secondary">
            <img
              src="../../assets/plus.png"
              class="navbar-brand"
              alt="arrow-up"
            />
            <h5>Top Up</h5>
          </button>
        </div>
      </div>

      <div class="box2">
        <div class="box3">
          <div class="wrapper-income">
            <div class="box-income">
              <img class="arrow-down" src="../../assets/arrow-up-green.svg" />
              <span class="income">Income</span>
              <p class="rp">Rp2.120.000</p>
            </div>
            <div class="box-expense">
              <img class="arrow-up" src="../../assets/arrow-up-red.svg" />
              <span class="expense">Expense</span>
              <p class="rp1">Rp1.560.000</p>
            </div>
          </div>

          <div class="box-g">
            <div class="col-grafik">
              <img src="../../assets/R1.png" class="img1-g" alt="R1" />
              <h6 class="sat">Sat</h6>
            </div>
            <div class="col-grafik">
              <img src="../../assets/R2.png" class="img2-g" alt="R2" />
              <h6 class="sat">Sun</h6>
            </div>
            <div class="col-grafik">
              <img src="../../assets/R3.png" class="img3-g" alt="R3" />
              <h6 class="sat">Mon</h6>
            </div>
            <div class="col-grafik">
              <img src="../../assets/R4.png" class="img4-g" alt="R4" />
              <h6 class="sat">Tue</h6>
            </div>
            <div class="col-grafik">
              <img src="../../assets/R4.png" class="img4-g" alt="R4" />
              <h6 class="sat">Wed</h6>
            </div>
            <div class="col-grafik">
              <img src="../../assets/R4.png" class="img4-g" alt="R4" />
              <h6 class="sat">Thur</h6>
            </div>
            <div class="col-grafik">
              <img src="../../assets/R4.png" class="img4-g" alt="R4" />
              <h6 class="sat">Fri</h6>
            </div>
          </div>
        </div>
        <div class="box4">
          <p class="transaction">Transaction History</p>
          <router-link to="/home/history" class="see">See all </router-link>
          <br />
          <div
            v-for="result in getHistoryusers"
            :key="result.id"
          >
            <div class="image1 box1-card">
              <img src="../../assets/samuel.png" class="navbar-brand" alt="1" />
              <div class="text-grafik">
                <p class="firstName">{{ result.firstName }}</p>
                <h6 class="email">{{ result.amount }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Dashboard',
  data () {
    return {
      dataTransaction: []
    }
  },
  methods: {
    ...mapActions(['getbyId', 'getHistory'])
  },
  mounted () {
    this.getbyId()
  },
  computed: {
    ...mapGetters({ getHistoryusers: 'getHistory', getUser: 'getUsers' })
  }
}
</script>

<style scoped>
.box .box1 {
  height: 200px;
  width: 860px;
  margin-left: 10px;
  background-color: royalblue;
  border-radius: 20px;
  padding: 20px;
}

.box .box1 p {
  color: white;
}

.box .box1 h3 {
  color: white;
}

.box .box1 h6 {
  color: white;
}

button {
  display: flex;
  margin-left: 650px;
  margin-top: -110px;
  /* padding: -100px; */
  margin-bottom: -50px;
  color: white;
  width: 170px;
  height: 50px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
}

.button {
  /* margin-bottom: 20px; */
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  margin-top: 10px;
}

.box .box2 {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.box .box2 .box3 {
  height: 600px;
  width: 450px;
  margin-left: 10px;
  background: #fff;
  border-radius: 20px;
}

.wrapper-income {
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  color: darkgrey;
  border-radius: 20px;
  margin-top: 20px;
}

.box-income {
  margin-left: 10px;
}

.box-expense {
  margin-right: 10px;
}

.wrapper-income .box-income .income span {
  padding: 10px;
}

.box-g .col-grafik {
  padding: 20px;
  bottom: 50px;
}

.box-g {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}

.box .box2 .box3 h4 {
  color: black;
  margin-bottom: 100px;
}

.box .box2 .box4 {
  height: 600px;
  width: 400px;
  margin-left: 10px;
  background: #fff;
  border-radius: 20px;
  position: relative;
}

.box .box2 .box4 .transaction {
  position: absolute;
  top: 30px;
  color: black;
  left: 10px;
  margin-bottom: 30px;
}

.box .box2 .box4 .see {
  position: absolute;
  top: 30px;
  left: 300px;
  color: royalblue;
}

/* box1 */

.box .box2 .box4 .image1 {
  /* position: absolute;
  top: 120px;
  left: 25px; */
  display: flex;
}

.box .box2 .box4 .image1 .text-grafik {
  display: flex;
  flex-direction: column;
  /* position: absolute;
  top: 1px;
  left: 70px; */
}

.box .box2 .box4 .image1 .text-grafik .samuel {
  color: black;
  /* top: 40px; */
}

.box .box2 .box4 .image1 .text-grafik .transfer {
  color: darkgrey;
  top: 40px;
  font-size: medium;
}

.box .box2 .box4 .image1 .money1 {
  color: green;
  margin-top: 30px;
  margin-left: 180px;
  /* position: absolute; */
  font-size: medium;
}

/* box2 */
.box2 {
  border-radius: 1px;
  background-color: whitesmoke;
  box-shadow: 10px;
}

.box .box2 .box4 .image2 {
  position: absolute;
  top: 250px;
  left: 24px;
  display: flex;
}

.box .box2 .box4 .image2 .text-grafik1 {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1px;
  left: 70px;
}

.box .box2 .box4 .image2 .text-grafik1 .netflix {
  color: black;
  /* top: 40px; */
}

.box .box2 .box4 .image2 .text-grafik1 .subscription {
  color: darkgrey;
  top: 40px;
  font-size: medium;
}

.box .box2 .box4 .image2 .money2 {
  color: red;
  margin-top: 25px;
  margin-left: 175px;
  /* position: absolute; */
  font-size: medium;
}

/* box3 */

.box .box2 .box4 .image3 {
  position: absolute;
  top: 380px;
  left: 26px;
  display: flex;
}

.box .box2 .box4 .image3 .text-grafik2 {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4px;
  left: 70px;
}

.box .box2 .box4 .image3 .text-grafik2 .cristine {
  color: black;
}

.box .box2 .box4 .image3 .text-grafik2 .transfer1 {
  color: darkgrey;
  top: 40px;
  font-size: medium;
}

.box .box2 .box4 .image3 .money3 {
  color: green;
  margin-top: 27px;
  margin-left: 170px;
  font-size: medium;
}

/* box4 */

.box .box2 .box4 .image4 {
  position: absolute;
  top: 500px;
  left: 26px;
  display: flex;
}

.box .box2 .box4 .image4 .text-grafik3 {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4px;
  left: 70px;
}

.box .box2 .box4 .image4 .text-grafik3 .adobe {
  color: black;
}

.box .box2 .box4 .image4 .text-grafik3 .subscription1 {
  color: darkgrey;
  top: 40px;
  font-size: medium;
}

.box .box2 .box4 .image4 .money4 {
  color: red;
  margin-top: 27px;
  margin-left: 188px;
  font-size: medium;
}

.transfer {
  color: white;
  font-weight: bold;
  width: 30px;
}

.box1-card {
    width: 300px;
    height: 70px;
    background-color:white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 9px;
    margin-top: 10%;
    cursor: pointer;
}
</style>
