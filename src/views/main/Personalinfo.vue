<template>
    <div>
    <div class="container">
        <div class="box">
            <div class="content">
            <p class="transaction">Personal Information</p>
            <h4>We got your personal information from the sign <br>
            up proccess. If you want to make changes on <br>
            your information, contact our support</h4>
            <div v-b-modal.modal-prevent-closing class="content-edit">Edit your personal info</div>
            <b-modal id="modal-prevent-closing" ref="modal" title="Edit  Name Personal Info" @hidden="resetModal" @ok="handleOk">
            <b-form-group label="firstName" label-for="name-input" invalid-feedback="Name is required" :state="nameState">
                <b-form-input id="name-input" v-model="firstName" :state="nameState" required></b-form-input></b-form-group>
            <b-form-group label="lastName" label-for="name-input" invalid-feedback="Name is required" :state="nameState">
                <b-form-input id="name-input" v-model="lastName" :state="nameState" required></b-form-input></b-form-group>
            </b-modal>
            <div class="text-grafik1">
                <h6>{{getUsers.firstName}}</h6>
                <!-- <p class="name">Robert</p> -->
            </div>
            <div class="text-grafik2">
                <h6>{{getUsers.lastName}}</h6>
                <!-- <p class="name1">Chandler</p> -->
            </div>
            <div class="text-grafik3">
                <h6>{{getUsers.email}}</h6>
                <!-- <p class="email">pewdiepie1@gmail.com</p> -->
            </div>
            <div class="text-grafik4">
                <h6>{{getUsers.phone}}</h6>
            </div>
            </div>
          <button type="button" class="btn btn-primary">Manage</button>
        </div>
    </div>
    <div>
</div>
    </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Personalinfo',
  data () {
    return {
      dataTransaction: [],
      firstName: '',
      lastName: '',
      nameState: null,
      submittedNames: []
    }
  },
  methods: {
    ...mapActions(['getbyId']),
    resetModal () {
      this.firstName = ''
      this.lastName = ''
      this.nameState = null
    },
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit () {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
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
    margin-top: 60px;
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

.btn{
    width:100px;
    height: 40px;
    margin-left: 600px;
    margin-top: 30px;
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

.box .text-grafik1 h6 {
    margin-top: 20px;
    margin-left: 10px;
}

.box .text-grafik2 h6 {
    margin-top: 20px;
    margin-left: 10px;
}

.box .text-grafik3 h6 {
    margin-top: 20px;
    margin-left: 10px;
}

.box .text-grafik4 h6 {
    margin-top: 20px;
    margin-left: 10px;
}

.content-edit {
    margin-top: 10px;
    margin-left: 30px;
    cursor: pointer;
    color: blue;
}

</style>
