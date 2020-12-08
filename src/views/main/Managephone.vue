<template>
    <div>
    <div class="container">
        <div class="box">
            <p class="managephone">Manage Phone Number</p>
            <h4>You can only delete the phone number and then<br>
                you must add another phone number</h4>
            <div class="content" v-for="managephone in dataPhonenumber" :key="managephone">
            <div class="text-grafik1">
                <h6 class="first">Primary</h6>
                <p class="name">{{managephone.phone_number}}</p>
                <div class="key">
                    <button type="button" v-on:click="deletePhonenumber">
                      <img src="../../assets/vector1.png" class="navbar-brand" alt="vector1">
                    </button>
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
  name: 'Managephone',
  data () {
    return {
      phone_number: 0,
      dataPhonenumber: []
    }
  },
  mounted () {
    this.getPhonenumber()
  },
  methods: {
    deletePhonenumber () {
      axios.delete(`${process.env.VUE_APP_SERVICE_API}/phonenumber`)
        .then((res) => {
          this.dataPhonenumber = res.data.result
          this.deletePhonenumber()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getPhonenumber () {
      axios.get(`${process.env.VUE_APP_SERVICE_API}/phonenumber`)
        .then((res) => {
          this.dataPhonenumber = res.data.result
          this.getPhonenumber()
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
    position: relative;
}

.box .transaction {
    padding-left: 30px;
    padding-top: 50px;
    color: black;
    left: 360px;
    font-weight: bold;
}

.box h4 {
    padding-left: 30px;
    padding-top: 30px;
    color: grey;
    left: 360px;
    font-size: 15px;
    line-height: 25px;
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
    margin-top: 7%;
    display: flex;
}

.box .text-grafik1 .first {
    color: rgb(77, 49, 49);
    margin-top: 22px;
    margin-left: 10px;
}

.box .text-grafik1 .name {
    color: darkgray;
    margin-left: 20px;
    margin-top: 20px;
}

.box .key {
    margin-top: 12px;
    margin-left: 480px;

}
</style>
