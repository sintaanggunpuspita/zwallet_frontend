<template>
    <div>
    <div class="container">
        <div class="box">
            <p class="transaction">Change Password</p>
            <h4>You must enter your current password and then <br>
                 type your new password twice</h4>
            <div class="content" v-for="Changepassword in dataPassword" :key="Changepassword">
            <div class="input-group mb-5">
                <div class="form-input">
                    <i class="fas fa-lock"></i>
                    <input type="text" class="form-control" name="current" placeholder="Current password">
                    <i class="fas fa-eye-slash eye"></i>
                </div>
            </div>
            <div class="input-group mb-5">
                <div class="form-input">
                    <i class="fas fa-lock"></i>
                    <input type="text" class="form-control" name="password" placeholder="New password">
                    <i class="fas fa-eye-slash eye"></i>
                </div>
            </div>
            <div class="input-group mb-5">
                <div class="form-input">
                    <i class="fas fa-lock"></i>
                    <input type="text" class="form-control" name="repeat" placeholder="Repeat new password">
                    <i class="fas fa-eye-slash eye"></i>
                </div>
            </div>

            <div class="text-center mb-5">
                <button type="submit" class="btn">Change Password</button>
            </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Changepassword',
  data () {
    return {
      dataPassword: []
    }
  },
  mounted () {
    this.petchPassword()
  },
  methods: {
    petchPassword () {
      axios.petch(`${process.env.VUE_APP_SERVICE_API}/users`)
        .then((res) => {
          this.dataPassword = res.data.result
          this.petchPassword()
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
    margin: 10px auto;
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

.form-input {
    display: flex;
    flex-direction: row;
    position: relative;
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

.form-input i {
    color: grey;
    position: absolute;
    top: 50px;
    left: 28%;
}

.form-input .eye {
    color: grey;
    position: absolute;
    top: 50px;
    left: 95%;

}

.box .text-center .btn {
    right: 20px;
    width: 410px;
    color: grey;
    border-radius: 12px;
}

</style>
