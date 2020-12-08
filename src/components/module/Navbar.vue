<template>
    <div>
     <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-white bg-white">
        <h4>Zwallet</h4>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav ml-auto">
                <div class="content">
                    <img src="../../assets/man.png" class="navbar-brand" alt="man">
                    <div class="section">
                        <h6 class="robert">Robert Chandler</h6>
                        <p>+628-2314-1234</p>
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
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
    height: 110px;
}
nav .content {
    display: flex;
}
.navbar .h4 {
    color:blue;
}

nav .content img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
}

nav .content .section {
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    color: darkgray;
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
</style>
