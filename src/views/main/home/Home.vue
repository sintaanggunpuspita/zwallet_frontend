<template>
    <div>
        <Navbar/>
        <div class="container">
          <Sidebar/>
          <div class="box">
            <router-view/>
          </div>
        </div>
        <Footbar/>
    </div>
</template>

<script>
import Navbar from '../../../components/module/Navbar'
import Sidebar from '../../../components/module/Sidebar'
import Footbar from '../../../components/module/Footbar'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Footbar
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
    display:flex;
    flex-direction: column;
    position: relative;
}
</style>
