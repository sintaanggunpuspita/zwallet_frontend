<template>
    <div>
    <div class="container">
        <div class="box">
            <div class="box1-card">
                <div class="image1">
                    <img src="../../assets/michael.png" class="navbar-brand" alt="1">
                <div class="image2">
                    <img src="../../assets/vector.png" class="navbar-brand" alt="1">
                <div class="text-grafik1">
                    <p class="edit">Edit</p>
                </div>
                </div>
                <div class="text-grafik">
                        <p class="name">Robert Chandler</p>
                        <h6 class="numb">+62813-9387-7946</h6>
                    </div>
                </div>
            </div>
        <router-link to="personalinfo" class="button1" v-on:click="profile" >
            <button type="submit" class="btn btn-profile1">Personal Information
                <span><i class="fas fa-arrow-right"></i></span></button>
        </router-link>
        <div class="button2">
            <button type="submit" class="btn btn-profile2">Change Password
                <span><i class="fas fa-arrow-right"></i></span></button>
        </div>
        <div class="button3">
            <button type="submit" class="btn btn-profile3">Change PIN
                <span><i class="fas fa-arrow-right"></i></span></button>
        </div>
        <div class="button4">
            <button type="submit" class="btn btn-profile4">Logout
                <span><i class="fas fa-arrow-right"></i></span></button>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Profile',
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
        //   this.getPhonenumber()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    personalinfo () {
      this.$router.push('/home/personalinfo')
    }
  }
}
</script>

<style scoped>
.box {
    width: 3000px;
    height: 811px;
    background-color: white;
    margin-left: 20px;
    border-radius: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.box1-card .image1{
    display: flex;
    flex-direction: column;
}

.box1-card .image1 img{
    max-width: 100%;
    height: auto;
    object-fit: contain;
    margin-top: 30px;
}

.box1-card .text-grafik p{
    margin-top: 0px;
    margin-left: 300px;
    color: black;
    font-weight: bold;
}

.box1-card .text-grafik h6{
    margin-top: -10px;
    margin-left: 290px;
    color:gray;
    font-weight: bold;
}

.box1-card .image2 img{
    margin-top: 3px;
    margin-left: 350px;
    color: gray;
}

.box1-card .text-grafik1 .edit {
    margin-top: 1px;
    margin-left: 340px;
    color: gray;
}

.button1 {
    margin-left: 100px;
    margin-top: 50px;
}

.button1 span {
   color: grey;
   margin-left: 200px;
}

/* button2 */
.button2 {
    margin-left: 100px;
    margin-top: 50px;
}

.button2 span {
   color: grey;
   margin-left: 220px;
}

/* button3 */
.button3 {
    margin-left: 100px;
    margin-top: 50px;
}

.button3 span {
   color: grey;
   margin-left: 260px;
}

/* button4 */
.button4 {
    margin-left: 100px;
    margin-top: 50px;
}

.button4 span {
   color: grey;
   margin-left: 290px;
}
</style>
