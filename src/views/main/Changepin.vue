<template>
    <div>
    <div class="container">
        <div class="box">
            <p class="transaction">Change Pin</p>
            <h4>Enter your current 6 digits Zwallet PIN below to<br>
                continue to the next steps.</h4>

            <form method="get" class="digit-group" data-group-name="digits" data-autosubmit="false" autocomplete="off">

                <input type="text">

                <input type="text">

                <input type="text">

                <input type="text">

                <input type="text">

                <input type="text">

                <div class="text-center mb-5">
                    <button type="submit" class="btn">Continue</button>
                </div>

            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Changepin'
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
    display: flex;
    flex-direction: column;
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

.box .digit-group input {
    width: 30px;
    height: 40px;
    border-radius: 5px;
    position: relative;
    margin-left: 30px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    float: left;
}

.box .btn {
    position: absolute;
    top: 43%;
    left: 20%;
    width: 400px;
}
</style>
