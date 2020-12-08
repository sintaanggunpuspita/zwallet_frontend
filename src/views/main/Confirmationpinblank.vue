<template>
    <div>
    <div class="container">
        <div class="box">
            <p class="transaction">Tansfer To</p>
            <div class="box1-card">
                <div class="content" v-for="Confirmationpinblank in dataConfirmationpinblank" :key="Confirmationpinblank">
                <div class="image1">
                    <img src="../../assets/samuel.png" class="navbar-brand" alt="1">
                    <div class="text-grafik">
                        <p class="samuel">Samuel Suhi</p>
                        <h6 class="transfer">+62813-8492-9994</h6>
                    </div>
                </div>
            </div>

            <p class="detail">Details</p>
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

            <div class="button">
            <button type="submit" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Continue</button>
            </div>
            <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="myModal">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
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
import axios from 'axios'
export default {
  name: 'confirmationpinblank',
  data () {
    return {
      dataConfirmationpinblank: []
    }
  },
  mounted () {
    this.petchConfirmationpinblank()
  },
  methods: {
    petchConfirmationblank () {
      axios.petch(`${process.env.VUE_APP_SERVICE_API}/users`)
        .then((res) => {
          this.dataConfirmation = res.data.result
          this.petchConfirmationpinblank()
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
    top: 110px;
    left: 35px;
    display: flex;
}

.box .image1 .text-grafik {
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    top: -1px;
    left: 90px;
}

.box .text-grafik .samuel {
    color: black;

}

.box .image1 .text-grafik .transfer {
    color: darkgrey;
    top: 80px;
    font-size: medium;
}

.box p.detail{
    color: black;
    margin-top: 70px;
    margin-left: 30px;
    font-size: medium;
    font-weight: bold;
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
}

.button {
    margin-top: 135px;
    margin-left: 70%;
}
</style>
