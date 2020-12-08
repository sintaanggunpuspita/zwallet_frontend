<template>
    <div>
     <div class="sidebar">
            <ul>
                <li><router-link to="dashboard" class="dasboard"><img src="../../assets/grid.png" alt="man">Dashboard</router-link></li>
                <li><router-link to="searchreceiver" class="transfer"><img src="../../assets/arrow-up.png" alt="arrow">Transfer</router-link></li>
                <li><router-link to="top up" class="top up"><img src="../../assets/plus.png" alt="plus">Top Up</router-link></li>
                <li><router-link to="profile" class="profile"><img src="../../assets/user.png" alt="user">Profile</router-link></li>
            <div class="logout">
                <li><router-link to="logout" class="logout"><img src="../../assets/log-out.png" alt="logout">Logout</router-link></li>
            </div>
            </ul>
    </div>
    </div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style scoped>

.container {
    position: relative;
    display: flex;
    margin-top: 30px;
    margin-bottom: 40px;
}

.sidebar {
    width: 300px;
    height: 500px;
    background: #fff;
    border-radius: 20px;
    position: relative;
}

.sidebar .ul {
    color: darkgray;
    padding: 70px;
}

.sidebar ul li a {
    padding-right: 3px;
    color: grey;
}

.sidebar ul li i {
    padding-right: 30px;
}

.sidebar ul li {
    padding: 20px;
    list-style-type: none;
}

.sidebar ul li .dasboard {
    color: blue;
}

.sidebar .logout{
   position: absolute;
   bottom: 10px;
}
</style>
