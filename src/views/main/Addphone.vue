<template>
<div>
    <div class="container">
        <div class="box">
            <p class="transaction">Add Phone Number</p>
            <h4>Add at least one phone number for the transfer<br>
                ID so you can start transfering your money to <br>
                another user</h4>
            <div class="input-group mb-3">
                <div class="content" v-for="Addphone in dataphone" :key="Addphone">
                <div class="form-input">
                    <i class="fas fa-phone-alt"></i>
                    <img src="../../assets/no.png" alt="number">
                    <input type="text" class="form-control" placeholder="Enter your phone number">
                </div>
            </div>

            <div class="text-center mb-5">
                <button type="submit" class="btn">Add Phone Number</button>
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Addphone',
  data () {
    return {
      dataPhone: []
    }
  },
  mounted () {
    this.postPhone()
  },
  methods: {
    postPhone () {
      axios.post(`${process.env.VUE_APP_SERVICE_API}/phonenumber`)
        .then((res) => {
          this.dataPhone = res.data.result
          // this.getPhone()
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

.box h4 {
    padding-left: 30px;
    padding-top: 30px;
    color: grey;
    left: 360px;
    font-size: 15px;
    line-height: 25px;
}

.form-input input {
    width: 433px;
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
    border-bottom-width: 2.5px;
    padding: 10px 5px 0px 25px;
    font-size: 14px;
    margin-top: 45px;
    margin-left: 150px;
    padding-left: 100px;
}

.form-input {
    position: relative;
}

.form-input img {
    position: absolute;
    top: 60px;
    left: 180px;
}

.form-input i {
    position: absolute;
    top:  60px;
    left: 155px;
    color: grey;
}

.form-input input {
    position: absolute;
    top:  60px;
    left: 155px;
    color: grey;
    background: hotpink;
}
.box .btn {
    position: absolute;
    top: 43%;
    left: 20%;
    right: 10%;
    width: 410px;
    color: grey;
}
</style>
