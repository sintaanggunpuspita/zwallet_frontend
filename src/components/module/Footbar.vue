<template>
    <div>
       <footer>
        <p class="copy">2020 Zwallet. All right reserved</p>
        <p class="numb">+62800000</p>
        <p class="email">contact@zwallet.com</p>
    </footer>
    </div>
</template>

<script>
export default {
  name: 'footbar'
}
</script>

<style scoped>
footer {
    position: relative;
    background-color: royalblue;
    padding: 0px;
    width: 100%;
    height: 50px;
    margin-top: 100px;
}

footer .copy {
    position: absolute;
    font-size: 15px;
    color: darkgrey;
    top: 20px;
    left: 300px;
}

footer .numb {
    position: absolute;
    font-size: 15px;
    color: darkgrey;
    top: 20px;
    left: 850px;
}

footer .email {
    position: absolute;
    font-size: 15px;
    color: darkgrey;
    left: 1000px;
    top: 20px;
}
</style>
