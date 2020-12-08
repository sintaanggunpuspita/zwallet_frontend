<template>
    <div>
        <div class="box">
            <p class="transaction">Search Receiver</p>
            <div class="box-search">
                <input type="text" class="search" placeholder="Search receiver here">
            </div>
            <div class="box1-card" v-for="searchreceiver in dataTransaction" :key="searchreceiver.id">
            <div class="image1">
                <img src="../../assets/samuel.png" class="navbar-brand" alt="1">
                <div class="text-grafik">
                    <p class="firstName">{{searchreceiver.firstName}}</p>
                    <h6 class="email">{{searchreceiver.phone}}</h6>
                </div>
            </div>
            </div>
            <!-- <div class="image2">
                <img src="../../assets/momotaro.png" class="navbar-brand" alt="2">
                <div class="text-grafik1">
                    <p class="netflix">Momo Taro</p>
                    <h6 class="subscription">+62812-4343-6731</h6>
                </div>
            </div> -->

            <!-- <div class="image3">
                <img src="../../assets/jesicaken.png" class="navbar-brand" alt="1">
                <div class="text-grafik2">
                    <p class="cristine">Jessica Keen</p>
                    <h6 class="transfer1">+62811-3452-5252</h6>
                </div>
            </div> -->
            <!-- <div class="image4">
                <img src="../../assets/michael.png" class="navbar-brand" alt="1">
                <div class="text-grafik3">
                    <p class="adobe">Michael Le</p>
                    <h6 class="subscription1">+62810-4224-4613</h6>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Searchreceiver',
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
      axios.get(`${process.env.VUE_APP_SERVICE_API}/users`)
        .then((res) => {
          console.log(res)
          this.dataTransaction = res.data.result
          //   this.getTransaction()
          console.log(res.data.result)
        })
        .catch((err) => {
          console.log(err)
        })
    }
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
