<template>
    <div>
     <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-white bg-white">
        <h4>Zwallet</h4>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav ml-auto">
                <div class="content">
                    <!-- <img src="../../assets/man.png" class="navbar-brand" alt="man"> -->
                     <img :src='getUsers.image' alt="">
                    <div class="section">
                        <h6 class="robert">{{getUsers.firstName}} {{getUsers.lastName}}</h6>
                        <p>{{getUsers.phone}}</p>
                    </div>
                    <div class="nav-img">
                    <img src="../../assets/bell.png" class="navbar-brand" alt="bell">
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'navbar',
  methods: {
    ...mapActions(['getbyId'])
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
nav {
    height: 110px;
}
nav .content {
    display: flex;
}

nav .content img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    margin-right: 15px;
}

nav .content .section {
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    color: gray;
}

nav .content .section .robert {
    color: black;
}

nav .content span {
    margin-top: 19px;
    margin-left: 30px;
    color: black;
}

.nav-img {
    margin-left:60px;
    margin-top: 20px;
}

h4 {
    color: royalblue;
    margin-left: 100px;
    margin-top: 20px;
}
</style>
