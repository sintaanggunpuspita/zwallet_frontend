<template>
    <div>
        <div class="box">
            <p class="transaction">Transaction History</p>

            <div class="box1-card"  v-for="result in getHistoryusers" :key="result.id">
            <div class="image1">
                <img src="../../assets/samuel.png" class="navbar-brand" alt="1">
                <div class="text-grafik">
                    <p class="firstName">{{result.firstName}}</p>
                    <h6 class="email">{{result.amount}}</h6>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'History',
  data () {
    return {
      dataTransaction: []
    }
  },
  methods: {
    ...mapActions(['getHistory'])
  },
  mounted: function () {
    this.getHistory()
  },
  computed: {
    ...mapGetters({ getHistoryusers: 'getHistory' })
  }
}
</script>

<style scoped>
.box {
    width: 800px;
    height: 811px;
    background-color: white;
    border-radius: 20px;
    margin-left: 20px;
    position: relative;
}

.box .transaction {
    padding-left: 30px;
    padding-top: 50px;
    color: black;
    left: 360px;
    font-weight: bold;
}

.box .box-search {
    position: relative;
}

.box .box-search input {
    width: 748px;
    height: 54px;
    background: rgba(58, 61, 66, 0.1);
    border-radius: 12px;
    border: none;
    margin-top: 1%;
    margin-left: 3%;
    padding-left: 50px;
}

.box .box1-card {
    width: 755px;
    height: 70px;
    background-color:white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 9px;
    margin-top: 5%;
    cursor: pointer;
}

.box .image1 {
    /* position: absolute;
    top: 200px;
    left: 35px; */
    display: flex;
}

.box .image1 .text-grafik {
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    /* top: -1px;
    left: 90px; */
}

.box .text-grafik .samuel {
    color: black;

}

.box .image1 .text-grafik .transfer {
    color: darkgrey;
    top: 80px;
    font-size: medium;
}

/* box2 */

.box .image2 {
    width: 725px;
    height: 70px;
    background-color:white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 9px;
    margin-top: 1px;
}

.box .image2 {
    position: absolute;
    top: 350px;
    left: 35px;
    display: flex;
}

.box .image2 .text-grafik1 {
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    top: -5px;
    left: 80px;
}

.box .text-grafik1 .momotaro {
    color: black;
}

.box .text-grafik1 .subscription {
    color: darkgrey;
    top: 30px;
    font-size: medium;
}

/* box3 */

.box .image3 {
    width: 718px;
    height: 70px;
    background-color:white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 9px;
    margin-top: 1px;
}

.box .image3 {
    position: absolute;
    top: 500px;
    left: 45px;
    display: flex;
}

.box .image3 .text-grafik2 {
    display: flex;
    flex-direction: column;
    /* position: absolute; */
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

/* box4 */

.box .image4 {
    width: 715px;
    height: 70px;
    background-color:white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 9px;
    margin-top: 1px;
}

.box .image4 {
    position: absolute;
    top: 650px;
    left: 50px;
    display: flex;
}

.box .image4 .text-grafik3 {
    display: flex;
    flex-direction: column;
    /* position: absolute; */
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
</style>
