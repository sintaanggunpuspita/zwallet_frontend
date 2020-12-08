<template>
    <div>
    <div class="container">
        <div class="box">
            <div class="content" v-for="Personalinfo in dataPersonalinfo" :key="Personalinfo">
            <p class="transaction">Personal Information</p>
            <h4>We got your personal information from the sign <br>
            up proccess. If you want to make changes on <br>
            your information, contact our support</h4>
            <div class="text-grafik1">
                <h6 class="first">First</h6>
                <p class="name">Robert</p>
            </div>
            <div class="text-grafik2">
                <h6 class="last">Last Name</h6>
                <p class="name1">Chandler</p>
            </div>
            <div class="text-grafik3">
                <h6 class="verified">Verified-Email</h6>
                <p class="email">pewdiepie1@gmail.com</p>
            </div>
            <div class="text-grafik4">
                <h6 class="phone">Phonee Number</h6>
                <p class="number">+62813-9387-7946</p>
                <h4 class="manage">Manage</h4>
            </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Personalinfo',
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
    margin-top: 6%;
    display: flex;
}

.box .text-grafik1 .first {
    color: grey;
    margin-top: 10px;
    margin-left: 10px;
}

.box .text-grafik1 .name {
    color: #514F5B;
    margin-left: -30px;
    margin-top: 40px;
    font-weight: bold;
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
    margin-top: 6%;
    display: flex;
}

.box .text-grafik2 .last {
    color: grey;
    margin-top: 10px;
    margin-left: 10px;
}

.box .text-grafik2 .name1 {
    color: #514F5B;
    margin-left: -72px;
    margin-top: 40px;
    font-weight: bold;
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
    margin-top: 6%;
    display: flex;
}

.box .text-grafik3 .verified {
    color: grey;
    margin-top: 10px;
    margin-left: 10px;
}

.box .text-grafik3 .email {
    color: #514F5B;
    margin-left: -96px;
    margin-top: 40px;
    font-weight: bold;
}

/* box4 */

.box .box3-card {
    display: flex;

}

.box .text-grafik4 {
    width: 755px;
    height: 70px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    margin-top: 6%;
    display: flex;
}

.box .text-grafik4 .phone {
    color: grey;
    margin-top: 10px;
    margin-left: 10px;
}

.box .text-grafik4 .number {
    color: #514F5B;
    margin-left: -120px;
    margin-top: 40px;
    font-weight: bold;
}

.box .text-grafik4 .manage {
    color: blue;
    position: absolute;
    top: 613px;
    left: 650px;
}
</style>
