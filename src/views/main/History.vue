<template>
    <div>
        <div class="box">
            <p class="transaction">Transaction History</p>
            <p class="week">This Week</p>
            <br>
            <div class="content" v-for="result in dataTransaction" :key="result.id">
                <!-- <div class="image1"> -->
                    <img src="../../assets/image1.png" class="navbar-brand" alt="1">
                    <!-- <div class="text-grafik"> -->
                        <p class="samuel">{{result.firstName}}</p>
                        <h6 class="transfer">{{result.status}}</h6>
                    <!-- </div> -->
                    <h4 class="money1">{{result.amount}}</h4>
                <!-- </div> -->
            </div>

            <!-- <div class="image2">
                <img src="../../assets/image2.png" class="navbar-brand" alt="2">
                <div class="text-grafik1">
                    <p class="netflix">Netflix</p>
                    <h6 class="subscription">Subscription</h6>
                </div>
                <h4 class="money2">-Rp149.000</h4>
            </div>
            <div class="image3">
                <img src="../../assets/image3.png" class="navbar-brand" alt="1">
                <div class="text-grafik2">
                    <p class="cristine">Cristine Mar...</p>
                    <h6 class="transfer1">Transfer</h6>
                </div>
                <h4 class="money3">+Rp150.000</h4>
            </div>
            <div class="image4">
                <img src="../../assets/image4.png" class="navbar-brand" alt="1">
                <div class="text-grafik3">
                    <p class="adobe">Adobe Inc.</p>
                    <h6 class="subscription1">Subcription</h6>
                </div>
                <h4 class="money4">-Rp249.000</h4>
            </div> -->
        </div>

    </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'history',
  data () {
    return {
      dataTransaction: []
    }
  },
  mounted () {
    this.getTransaction()
  },

  methods: {
    getTransaction () {
      return axios.get(`${process.env.VUE_APP_SERVICE_API}/transaction`)
        .then((res) => {
          this.dataTransaction = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.container {
    position: relative;
    display: flex;
    margin-top: 30px;
    margin-bottom: 40px;
}

.box {
    width: 800px;
    height: 811px;
    background-color: white;
    border-radius: 20px;
    margin-left: 20px;
}

.box .transaction {
    position: absolute;
    top: 50px;
    color: black;
    left: 360px;
    font-weight: bold;
}

.week {
    position: absolute;
    top: 100px;
    left: 360px;
    color: darkgray;
}
/* box1 */

.box .image1 {
    position: absolute;
    top: 200px;
    left: 360px;
    display: flex;
}

.box .image1 .text-grafik {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 1px;
    left: 100px;
}

.box .text-grafik .samuel {
    color: black;
    /* top: 40px; */
}

.box .image1 .text-grafik .transfer {
    color: darkgrey;
    top: 40px;
    font-size: medium;
}

.box .image1 .money1 {
    color: green;
    margin-top: 30px;
    margin-left: 550px ;
    /* position: absolute; */
    font-size: medium;
}

/* box2 */
.box .image2 {
    position: absolute;
    top: 350px;
    left: 360px;
    display: flex;
}

.box .image2 .text-grafik1 {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 3px;
    left: 100px;
}

.box .text-grafik1 .netflix {
    color: black;
    /* top: 40px; */
}

.box .text-grafik1 .subscription {
    color: darkgrey;
    top: 30px;
    font-size: medium;
}

.box .image2 .money2 {
    color:red;
    margin-top: 25px;
    margin-left: 550px;
    /* position: absolute; */
    font-size: medium;
}

/* box3 */
.box .image3 {
    position: absolute;
    top: 500px;
    left: 360px;
    display: flex;
}

.box .image3 .text-grafik2 {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 6px;
    left: 100px;
}

.box .image3 .text-grafik2 .cristine {
    color: black;
}

.box .image3 .text-grafik2 .transfer1 {
    color: darkgrey;
    top: 40px;
    font-size: medium;
}

.box .image3 .money3 {
    color: green;
    margin-top: 27px;
    margin-left: 550px;
    font-size: medium;
}

/* box4 */

.box .image4 {
    position: absolute;
    top: 650px;
    left: 370px;
    display: flex;
}

.box .image4 .text-grafik3 {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 8px;
    left: 90px;
}

.box .image4 .text-grafik3 .adobe {
    color: black;
}

.box .image4 .text-grafik3 .subscription1 {
    color: darkgrey;
    top: 30px;
    font-size: medium;
}

.box .image4 .money4 {
    color:red;
    margin-top: 27px;
    margin-left: 560px;
    font-size: medium;
}

</style>
