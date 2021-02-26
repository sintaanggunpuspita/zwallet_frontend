<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 wrapper-login">
        <h1>Zwallet</h1>
        <img src="../../assets/phone.png" alt="phone1">
        <h5>App that Covering Banking Needs.</h5>
        <p>Zwallet is an application that focussing in banking needs for all <br>
                users in the world. Always and always following world rend. <br>
                5000+ users registered in Zwallet everyday with worldwide <br>
                user coverage</p>
      </div>
      <div class="col-6">
        <div class="wrapper-right">
          <h2>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
          <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
        <form class="mt-5">
                <div class="input-group mb-5">
                    <div class="form-input">
                        <span><i class="fa fa-envelope-o"></i></span>
                        <input type="text" v-model="username" class="form-control" name="username" placeholder="Enter your username">
                    </div>
                </div>
                <div class="input-group mb-4">
                    <div class="form-input">
                        <span><i class="fa fa-envelope-o"></i></span>
                        <input type="text" v-model="email" class="form-control" name="email" placeholder="Enter your e-mail">
                    </div>
                </div>
                <div class="input-group mb-3">
                    <div class="form-input">
                        <!-- <span class="password"><i class="fa fa-lock"></i></span> -->
                        <input type="password"  v-model="password" class="form-control" name="password" placeholder="Enter your password">
                    </div>
                </div>
                <div class="text-right">
                    <h6>Forgot password?</h6>
                </div>
                <div class="login">
                    <button type="button" class="btn btn-secondary" @click.prevent="handleSignup">Sign Up</button>
                </div>
                <div class="row go-register">
                    <p>Already have an account? Let's </p>
                     <!-- <p class="ml-1" @click="goLogin">Login</p> -->
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  computed: {
    input: function () {
      return this.username && this.email && this.password
    }
  },
  methods: {
    ...mapActions(['register']),
    handleSignup (e) {
      e.preventDefault()
      const data = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.register(data)
        .then((res) => {
          this.$router.push({ path: '/login' })
        })
        .catch((err) => {
          console.log(err.response.data.result)
        })
    }
  }
}
</script>

<style scoped>

.wrapper-login {
  background-image: url("../../assets/alur.png");
  height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-size: cover;
}
.wrapper-login h1 {
  color: white;
  font-weight: bold;
  font-size: 30px;
  /* line-height: 33px; */
}
.wrapper-login h5 {
  color: white;
  font-weight: bold;
  font-size: 30px;
}
.wrapper-login p {
  color: white;
  font-style: normal;
  margin-bottom: 18px;
}

.wrapper-right {
    padding: 0px 50px;
    margin-top: 38px;
}
.wrapper-right h2 {
  color: black;
  justify-content: right;
}
.wrapper-right p {
  color: grey;
  justify-content: right;
  font-style: normal;
  margin-top: 40px;
}

input[name="username"] {
    width: 433px;
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
    border-bottom-width: 2.5px;
    padding: 10px 5px 0px 25px;
    font-size: 14px;
}
input[name="email"] {
    width: 433px;
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
    border-bottom-width: 2.5px;
    padding: 10px 5px 0px 25px;
    font-size: 14px;
}

input[name="password"] {
    width: 433px;
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
    border-bottom-width: 2.5px;
    padding: 10px 5px 0px 25px;
    font-size: 14px;
    margin-top: 5px;
}

.text-right h6 {
    position: absolute;
    margin-left: 310px;
    margin-top: 5px;
}

button[type="button"] {
    position: absolute;
    width: 300px;
    margin-top: 50px;
    margin-left: 80px;
}
.go-register {
    position: absolute;
    margin-top: 100px;
    margin-left: 130px;
}
</style>
