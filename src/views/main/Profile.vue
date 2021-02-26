<template>
    <div>
    <div class="container">
        <div class="box">
            <div class="box1-card">
                <div class="image1 text-center">
                    <img :src="getUsers.image || avatar" class="navbar-brand align-self-center">
                <label for="image" class="text-grafik1">
                    <i class="fas fa-pencil-alt fa-xs"></i> Edit
                </label>
                <input id="image" @change="getImage" type="file" class="d-none">
                <div class="text-grafik text-center">
                        <h5>{{getUsers.username}}</h5>
                        <p>{{getUsers.phone}}</p>
                        <!-- <p class="name">Robert Chandler</p>
                        <h6 class="numb">+62813-9387-7946</h6> -->
                    </div>
                </div>
            </div>
        <router-link to="/home/personalinfo" class="button1">
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
import { mapGetters, mapActions } from 'vuex'
import swal from 'sweetalert'
// import axios from 'axios'
export default {
  name: 'Profile',
  data () {
    return {
      username: '',
      Phonenumber: '',
      image: ''
    }
  },
  methods: {
    ...mapActions(['logout', 'getbyId', 'updateImages']),
    handleLogout () {
      this.$router.go(0)
      this.logout()
    },
    goPersonal () {
      this.$router.push('/personal')
    },
    goChangePassword () {
      this.$router.push('/changepassword')
    },
    goChangePin () {
      this.$router.push('/changepin')
    },
    getImage (e) {
      this.image = e.target.files[0]
      var reader = new FileReader()
      if (this.image.type !== 'image/png' && this.image.type !== 'image/jpg' && this.image.type !== 'image/jpeg') {
        alert('Only .png, .jpg and .jpeg format allowed!')
      } else if (this.image.size >= 4388608) {
        alert('Image size is too large, it must be under 4MB')
      } else {
        reader.readAsDataURL(this.image)
        reader.onload = e => {
          // Tambahkan data ke Form Data
          var data = new FormData()
          data.append('image', this.image)

          // Kirim,
          this.updateImages(data)
            .then((res) => {
              console.log(res)
              this.getbyId()
            })
        }
        swal('Success!', 'You clicked the button!', 'success', {
          button: 'Aww yiss!'
        })
      }
    }
  },
  mounted () {
    this.getbyId()
  },
  computed: {
    ...mapGetters(['getUsers'])
  }
}
</script>

<style scoped>
.box {
    width: 800px;
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
    color: black;
    font-weight: bold;
}

.box1-card .text-grafik h6{
    margin-top: -10px;
    margin-left: 290px;
    color:gray;
    font-weight: bold;
}

/* .box1-card .image2 img{
    margin-top: 3px;
    margin-left: 350px;
    color: gray;
} */

/* .box1-card .text-grafik1 .edit {
    margin-top: 1px;
    margin-left: 340px;
    color: gray;
} */

.button1 {
   width: 433px;
   height: 64px;
   margin: 15px auto;
   padding-top: 15px;

   font-style: normal;
   font-weight:  bold;
   font-size: 16px;
   line-height: 28px;
   color: #4D4B57;

   background: #E5E8ED;
   border-radius: 10px;
}

.button1 span {
   color: grey;
   margin-left: 200px;
}

/* button2 */
.button2 {
     width: 433px;
   height: 64px;
   margin: 15px auto;
   padding-top: 15px;

   font-style: normal;
   font-weight:  bold;
   font-size: 16px;
   line-height: 28px;
   color: #4D4B57;

   background: #E5E8ED;
   border-radius: 10px;
}

.button2 span {
   color: grey;
   margin-left: 220px;
}

/* button3 */
.button3 {
    width: 433px;
   height: 64px;
   margin: 15px auto;
   padding-top: 15px;

   font-style: normal;
   font-weight:  bold;
   font-size: 16px;
   line-height: 28px;
   color: #4D4B57;

   background: #E5E8ED;
   border-radius: 10px;
}

.button3 span {
   color: grey;
   margin-left: 260px;
}

/* button4 */
.button4 {
  width: 433px;
   height: 64px;
   margin: 15px auto;
   padding-top: 15px;

   font-style: normal;
   font-weight:  bold;
   font-size: 16px;
   line-height: 28px;
   color: #4D4B57;

   background: #E5E8ED;
   border-radius: 10px;
}

.button4 span {
   color: grey;
   margin-left: 290px;
}
</style>
