<template>
    <div>
    <div class="container">
        <div class="box">
            <div class="box-success">
                <div class="image">
                    <img src="../../assets/success.png" class="navbar-brand" alt="1">
                    <p class="transfer">Transfer Success</p>
                </div>
            </div>
            <div class="box2-card">
                <div class="text-grafik1">
                    <p>Amount</p>
                    <h6>100.000</h6>
                </div>
            </div>

            <div class="box3-card">
                <div class="text-grafik2">
                    <p>Balance Left</p>
                    <h6>Rp20.000</h6>
                </div>
            </div>

            <div class="box4-card">
                <div class="text-grafik3">
                    <p>Date & Time</p>
                    <h6>May 11, 2020 - 12.20</h6>
                </div>
            </div>

            <div class="box5-card">
                <div class="text-grafik4">
                    <p>Notes</p>
                    <h6>For buying some socks</h6>
                </div>
            </div>

            <p class="transaction">Tansfer To</p>
            <div class="box1-card">
                <div class="image1">
                    <img src="../../assets/samuel.png" class="navbar-brand" alt="1">
                    <div class="text-grafik">
                        <p class="samuel">Samuel Suhi</p>
                        <h6 class="transfer">+62813-8492-9994</h6>
                    </div>
                </div>
            </div>

            <div class="button">
                <button type="button" class="btn btn-back">Back to Home</button>
                <button type="button" class="btn btn-share">
                <img src="../../assets/share.png" class="navbar-brand" alt="1">
                </button>
                <button type="button" class="btn btn-download">
                <img src="../../assets/download.png" class="navbar-brand" alt="1">
                <p>Download PDF</p>
                </button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Success',
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
      axios.get(`${process.env.VUE_APP_SERVICE_API}/transaction`)
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
    width: 3000px;
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

/* success */
.box-success .image {
    margin-left: 300px ;

}

.box-success .transfer {
    margin-left: -1px ;
    color: black;
    font-weight: bold;
    margin-top: 5px;
}

/* box1 */
.box2-card {
    display: flex;
    width: 700px;
    height: 60px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 10px;
    margin-top: 10px;
}

.box2-card .text-grafik1 {
    color: darkgray;
    font-weight: bold;
    margin-left: 25px;
}

.box2-card .text-grafik1 h6 {
    color: black;
    font-weight: bold;
    margin-top: -3px;
    margin-left: 1px;
}

/* box2 */

.box3-card {
    display: flex;
    width: 700px;
    height: 60px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 9px;
    margin-top: 4%;
}

.box3-card .text-grafik2 {
    color: darkgray;
    font-weight: bold;
    margin-left: 30px;
}

.box3-card .text-grafik2 h6 {
    color: black;
    font-weight: bold;
    margin-left: 1px;
    margin-top: -3px;
}

/* box3 */

.box4-card {
    display: flex;
    width: 700px;
    height: 60px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 9px;
    margin-top: 4%;
}

.box4-card .text-grafik3 {
    color: darkgray;
    font-weight: bold;
    margin-left: 30px;
}

.box4-card .text-grafik3 h6 {
    color: black;
    font-weight: bold;
    margin-left: 1px;
    margin-top: -3px;
}

/* box4 */

.box5-card {
    display: flex;
    width: 700px;
    height: 60px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 9px;
    margin-top: 4%;
}

.box5-card .text-grafik4 {
    color: darkgray;
    font-weight: bold;
    margin-left: 30px;
}

.box5-card .text-grafik4 h6 {
    color: black;
    font-weight: bold;
    margin-left: 1px;
    margin-top: -3px;
}

.box .box1-card {
    width: 710px;
    height: 60px;
    background-color:white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 9px;
    margin-top: 5%;
}

.box .image1 {
    position: absolute;
    top: 560px;
    left: 35px;
    display: flex;
}

.box .image1 .text-grafik {
    display: flex;
    flex-direction: column;
    top: -10px;
    left: 90px;
    font-weight: bold;
}

.box .text-grafik .samuel {
    color: black;

}

.box .image1 .text-grafik .transfer {
    color: darkgrey;
    top: 80px;
    font-size: medium;
}

.button {
    position: relative;
}

.button .btn-back{
    position: absolute;
    top: 120px;
    left: 570px;
    background-color: royalblue;

}

.button .btn-share{
    position: absolute;
    top: 120px;
    left: 350px;
    width: 60px;
    background-color: darkgray;

}

.button .btn-download{
    position: absolute;
    top: 120px;
    left: 450px;
    width: 90px;
    height: 60px;
    background-color: darkgray;
}

.button .btn-download p {
    font-size: 10px;
    color: royalblue;
}
</style>
