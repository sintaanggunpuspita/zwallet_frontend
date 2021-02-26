<template>
    <div>
        <div class="box">
            <p class="transaction">Search Receiver</p>
            <div class="box-search">
               <input type="text" v-model="search" placeholder="Search receiver here" @keyup='searchname'>
            </div>
            <div class="box1-card" v-for="searchreceiver in getFriends" :key="searchreceiver.id" @click="nexttransfer(searchreceiver.id)">
            <div class="image1">
              <img
          class="align-self-center mr-3"
          :src="searchreceiver.image"
          width="52px"
          alt="user"
        />
                <div class="text-grafik">
                    <p class="firstName">{{searchreceiver.firstName}}</p>
                    <h6 class="email">{{searchreceiver.phone}}</h6>
                </div>
            </div>
            </div>
        </div>
          <nav aria-label="..." v-if="getPagination">
          <ul class="pagination">
            <li class="page-item" :class="[getPagination.currentPage == 1 ? 'disabled': '']">
              <a class="page-link" href="#" @click.prevent="changePagination(parseInt(getPagination.currentPage)-1)">&laquo;</a>
            </li>
            <li v-for="noPage in getPagination.totalPage" class="page-item" :class="[getPagination.currentPage == noPage ? 'active': '']" :key="noPage"><a class="page-link" href="#" @click.prevent="changePagination(noPage)">{{noPage}}</a></li>
            <li class="page-item" :class="[getPagination.currentPage == getPagination.totalPage ? 'disabled': '']">
              <a class="page-link" href="#" @click.prevent="changePagination(parseInt(getPagination.currentPage)+1)">&raquo;</a>
            </li>
          </ul>
        </nav>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import axios from 'axios'
export default {
  name: 'Searchreceiver',
  data () {
    return {
      dataTransaction: [],
      search: ''
    }
  },
  methods: {
    ...mapActions(['getFriendsById']),
    nexttransfer (id) {
      localStorage.setItem('transfer', id)
      this.$router.push('inputamountblank')
    },
    searchname () {
      const payload = {
        search: this.search
      }
      this.getFriendsById(payload)
    },
    changePagination (noPage) {
      const payload = {
        search: this.search,
        noPage: noPage
      }
      this.getFriendsById(payload)
    }
  },
  mounted () {
    const payload = {
      search: this.search,
      noPage: 1
    }
    this.getFriendsById(payload)
  },
  computed: {
    ...mapGetters(['getFriends', 'getPagination'])
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

.box .box-search {
    position: relative;
}

.box .box-search input {
    width: 748px;
    height: 54px;
    background: rgba(58, 61, 66, 0.1);
    border-radius: 12px;
    border: none;
    margin-top: 1%;
    margin-left: 3%;
    padding-left: 50px;
}

.box .box1-card {
    width: 755px;
    height: 70px;
    background-color:white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 9px;
    margin-top: 5%;
    cursor: pointer;
}

.box .image1 {
    /* position: absolute;
    top: 200px;
    left: 35px; */
    display: flex;
}

.box .image1 .text-grafik {
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    /* top: -1px;
    left: 90px; */
}

.box .text-grafik .samuel {
    color: black;

}

.box .image1 .text-grafik .transfer {
    color: darkgrey;
    top: 80px;
    font-size: medium;
}

/* box2 */

.box .image2 {
    width: 725px;
    height: 70px;
    background-color:white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 9px;
    margin-top: 1px;
}

.box .image2 {
    position: absolute;
    top: 350px;
    left: 35px;
    display: flex;
}

.box .image2 .text-grafik1 {
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    top: -5px;
    left: 80px;
}

.box .text-grafik1 .momotaro {
    color: black;
}

.box .text-grafik1 .subscription {
    color: darkgrey;
    top: 30px;
    font-size: medium;
}

/* box3 */

.box .image3 {
    width: 718px;
    height: 70px;
    background-color:white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 9px;
    margin-top: 1px;
}

.box .image3 {
    position: absolute;
    top: 500px;
    left: 45px;
    display: flex;
}

.box .image3 .text-grafik2 {
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    top: 6px;
    left: 100px;
}

.box .image3 .text-grafik2 .cristine {
    color: black;
}

.box .image3 .text-grafik2 .transfer1 {
    color: darkgrey;
    top: 40px;
    font-size: medium;
}

/* box4 */

.box .image4 {
    width: 715px;
    height: 70px;
    background-color:white;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 9px;
    margin-top: 1px;
}

.box .image4 {
    position: absolute;
    top: 650px;
    left: 50px;
    display: flex;
}

.box .image4 .text-grafik3 {
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    top: 8px;
    left: 90px;
}

.box .image4 .text-grafik3 .adobe {
    color: black;
}

.box .image4 .text-grafik3 .subscription1 {
    color: darkgrey;
    top: 30px;
    font-size: medium;
}
</style>
