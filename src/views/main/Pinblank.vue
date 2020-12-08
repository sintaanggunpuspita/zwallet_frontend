<template>
    <div>
        <div class="container">
        <div class="main">
            <h2>Zwallet</h2>
            <img src="../../assets/phone.png" alt="phone1">
            <h5>App that Covering Banking Needs.</h5>
            <p>Zwallet is an application that focussing in banking needs for all <br>
                users in the world. Always and always following world rend. <br>
                5000+ users registered in Zwallet everyday with worldwide <br>
                user coverage</p>
        </div>
        <div class="main1">
            <h2>Secure Your Account, Your Wallet,
                and Your Data With 6 Digits PIN
                That you Created Yourself</h2>
            <br>
            <p> Create 6 digits pin to secure all your money and your data in <br>
                Zwallet app. Keep it secret and don't tell anyone about your <br>
                Zwallet account password and the PIN.
            </p>
        </div>
        <div class="form-container">
                <form method="get" class="digit-group">
                    <input type="text" name="digit-1">
                    <input type="text" name="digit-2">
                    <input type="text" name="digit-3">
                    <input type="text" name="digit-4">
                    <input type="text" name="digit-5">
                    <input type="text" name="digit-6">
                </form>
                <div class="confirm">
                    <button type="button" class="btn btn-secondary">Confirm</button>
                </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Pinblank',
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
    getPhonenumber () {
      axios.get(`${process.env.VUE_APP_SERVICE_API}/phonenumber`)
        .then((res) => {
          this.dataPhonenumber = res.data.result
          this.getPhonenumber()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    mounted () {
      this.deletePhonenumber()
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
      }
    }
  }

}
</script>

<style scoped>
.container {
    display: flex;
}

.main {
    width: 750px;
    height: 800px;
    background-image: url("../../assets/alur.png");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    right: 44%;
}

.main h2 {
    position: absolute;
    left: 10.42%;
    right: 82.78%;
    top: 5.2%;
    bottom: 90.63%;

    font-style: normal;
    font-weight: bold;
    font-size: 29px;
    line-height: 40px;

color: #FFFFFF;
}

.main h5 {
    position: absolute;
    left: 10.42%;
    top: 74.4%;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #FFFFFF;
}

.main img {
    position: absolute;
    top: 5%;
    left: 5%;
}

.main p {
    position: absolute;
    left: 10.42%;
    top: 80.96%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;

color: rgba(255, 255, 255, 0.8);
}

.main1 h2 {
    position: absolute;
    left: 59.51%;
    right: 13.82%;
    top: 12.59%;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;

    color: #3A3D42;
}

.main1 p {
    position: absolute;
    left: 59.51%;
    top: 40%;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: rgba(58, 61, 66, 0.6);
}

.form-container {
    position: absolute;
    left: 59.51%;
    top: 50%;
    width: 400px;
}

form.digit-group input{
    width: 30px;
    height: 40px;
    display: flex;
    margin-top: 30%;
    margin-left: 30px;
    border-radius: 5px;
    float: left;
    box-shadow: grey;

}

button[type="button"] {
    position: absolute;
    width: 500px;
    top: 70px;
}

.confirm button {
    position: relative;
    margin-left: 1px;
    margin-top: 50px;
}
</style>
