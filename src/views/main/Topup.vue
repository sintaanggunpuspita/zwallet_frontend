<template>
    <div>
    <div class="container">
        <div class="box">
            <p class="transaction">How To Top Up</p>
            <div class="text-grafik1">
                <h6 class="numb1">1</h6>
                <p class="toup1">Go to the nearest ATM or you can use E-banking</p>
            </div>
            <div class="text-grafik2">
                <h6 class="numb2">2</h6>
                <p class="toup2">Type your security number on the ATM or E-Banking</p>
            </div>
            <div class="text-grafik3">
                <h6 class="numb3">3</h6>
                <p class="toup3">Select "Transfer" in the menu</p>
            </div>
            <div class="text-grafik4">
                <h6 class="numb4">4</h6>
                <p class="toup4">Type the virtual account number that we provide you at the top</p>
            </div>
            <div class="text-grafik5">
                <h6 class="numb5">5</h6>
                <p class="toup5">Type the amount of the money you want to top up</p>
            </div>
            <div class="text-grafik6">
                <h6 class="numb6">6</h6>
                <p class="toup6">Read the summary details</p>
            </div>
            <div class="text-grafik7">
                <h6 class="numb7">7</h6>
                <p class="toup7">Press transfer/top up</p>
            </div>
            <div class="text-grafik8">
                <h6 class="numb8">8</h6>
                <p class="toup8">You can see your money in Zwallet within 3 hours</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Topup',
  data () {
    return {
    //   userId: '',
    //   senderId: '',
    //   receiverId: '',
    //   amount: '',
    //   notes:'',
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
        //   this.getTransaction()
        })
        .catch((err) => {
          console.log(err)
        })
    }

    // clearForm () {
    //   this.userId = '',
    //   this.senderId = '',
    //   this.receiverId = '',
    //   this.amount = '',
    //   this.notes = '',
    //   this.date =''
    // },
    // sendPayment () {
    //   axios.post(`${process.env.VUE_APP_SERVICE_API}/transaction`, {
    //     total: this.price,
    //     receiverId: this.receiverId,
    //     notes: this.notes,
    //     senderId: '123'
    //   })
    //     .then(() => {
    //       alert('transaction success')
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //       alert('transaction failed')
    //     })
    // }
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

/* box1 */
.box {
    display: flex;
    flex-direction: column;
}

.box .box1-card {
    display: flex;

}

.box .text-grafik1 {
    width: 755px;
    height: 70px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    margin-top: 1%;
    display: flex;
}

.box .text-grafik1 .numb1 {
    color: royalblue;
    margin-top: 22px;
    margin-left: 10px;
}

.box .text-grafik1 .toup1 {
    color: darkgray;
    margin-left: 20px;
    margin-top: 20px;
}

/* box2 */

.box .box2-card {
    display: flex;

}

.box .text-grafik2 {
    width: 755px;
    height: 70px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    margin-top: 1%;
    display: flex;
}

.box .text-grafik2 .numb2 {
    color: royalblue;
    margin-top: 22px;
    margin-left: 10px;
}

.box .text-grafik2 .toup2 {
    color: darkgray;
    margin-left: 20px;
    margin-top: 20px;
}
/* box3 */
.box .box3-card {
    display: flex;

}

.box .text-grafik3 {
    width: 755px;
    height: 70px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    margin-top: 1%;
    display: flex;
}

.box .text-grafik3 .numb3 {
    color: royalblue;
    margin-top: 20px;
    margin-left: 10px;
}

.box .text-grafik3 .toup3 {
    color: darkgray;
    margin-left: 20px;
    margin-top: 17px;
}
/* box4 */

.box .box4-card {
    display: flex;

}

.box .text-grafik4 {
    width: 755px;
    height: 70px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    margin-top: 1%;
    display: flex;
}

.box .text-grafik4 .numb4 {
    color: royalblue;
    margin-top: 20px;
    margin-left: 10px;
}

.box .text-grafik4 .toup4 {
    color: darkgray;
    margin-left: 20px;
    margin-top: 17px;
}

/* box5 */
.box .box5-card {
    display: flex;

}

.box .text-grafik5 {
    width: 755px;
    height: 70px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    margin-top: 1%;
    display: flex;
}

.box .text-grafik5 .numb5 {
    color: royalblue;
    margin-top: 20px;
    margin-left: 10px;
}

.box .text-grafik5 .toup5 {
    color: darkgray;
    margin-left: 20px;
    margin-top: 17px;
}

/* box6 */
.box .box6-card {
    display: flex;

}

.box .text-grafik6 {
    width: 755px;
    height: 70px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    margin-top: 1%;
    display: flex;
}

.box .text-grafik6 .numb6 {
    color: royalblue;
    margin-top: 20px;
    margin-left: 10px;
}

.box .text-grafik6 .toup6 {
    color: darkgray;
    margin-left: 20px;
    margin-top: 17px;
}

/* box7 */
.box .box7-card {
    display: flex;

}

.box .text-grafik7 {
    width: 755px;
    height: 70px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    margin-top: 1%;
    display: flex;
}

.box .text-grafik7 .numb7 {
    color: royalblue;
    margin-top: 20px;
    margin-left: 10px;
}

.box .text-grafik7 .toup7 {
    color: darkgray;
    margin-left: 20px;
    margin-top: 17px;
}

/* box8 */
.box .box8-card {
    display: flex;

}

.box .text-grafik8 {
    width: 755px;
    height: 70px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    margin-top: 1%;
    display: flex;
}

.box .text-grafik8 .numb8 {
    color: royalblue;
    margin-top: 20px;
    margin-left: 10px;
}

.box .text-grafik8 .toup8 {
    color: darkgray;
    margin-left: 20px;
    margin-top: 17px;
}
</style>
