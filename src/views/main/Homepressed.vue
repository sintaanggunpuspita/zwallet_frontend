<template>
    <div>
    <div class="container">
        <div class="box">
            <div class="box1">
                <P>Balance</P>
                <h3>Rp120.000</h3>
                <h6>+628-0000-5678</h6>
            </div>
            <div class="box2">
                <div class="box3">
                    <div class="wrapper-income">
                        <div class="box-income">
                            <img class="arrow-down" src="../../assets/arrow-up-green.svg">
                            <h6 class="income">Income</h6>
                            <p class="rp">Rp2.120.000</p>
                        </div>
                        <div class="box-expense">
                            <img class="arrow-up" src="../../assets/arrow-up-red.svg">
                            <h6 class="expense">Expense</h6>
                            <p class="rp1">Rp1.560.000</p>
                        </div>
                    </div>

                    <div class="box-g">
                        <div class="col-grafik">
                            <img src="../../assets/R1.png" class="img1-g" alt="R1">
                            <h6 class="sat">Sat</h6>
                        </div>
                        <div class="col-grafik">
                            <img src="../../assets/R2.png" class="img2-g" alt="R2">
                            <h6 class="sat">Sun</h6>
                        </div>
                        <div class="col-grafik">
                            <img src="../../assets/R3.png" class="img3-g" alt="R3">
                            <h6 class="sat">Mon</h6>
                        </div>
                        <div class="col-grafik">
                            <img src="../../assets/R4.png" class="img4-g" alt="R4">
                            <h6 class="sat">Tue</h6>
                        </div>
                        <div class="col-grafik">
                            <img src="../../assets/R4.png" class="img4-g" alt="R4">
                            <h6 class="sat">Wed</h6>
                        </div>
                        <div class="col-grafik">
                            <img src="../../assets/R4.png" class="img4-g" alt="R4">
                            <h6 class="sat">Thur</h6>
                        </div>
                        <div class="col-grafik">
                            <img src="../../assets/R4.png" class="img4-g" alt="R4">
                            <h6 class="sat">Fri</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="notif">
            <div class="content-notif">
                <p class="transaction">Today</p>
                <div class="image1">
                    <img src="../../assets/arrow-up-green.svg" class="navbar-brand" alt="1">
                <div class="text-grafik1">
                    <p class="transfer">Transfered from Joshua Lee</p>
                    <h6 class="money1">Rp220.000</h6>
                </div>
                </div>
                <div class="image2">
                    <img src="../../assets/arrow-up-red.svg" class="navbar-brand" alt="1">
                <div class="text-grafik2">
                    <p class="netflix">Netflix subscription</p>
                    <h6 class="money2">Rp149.000</h6>
                </div>
                </div>

                <p class="transaction1">This Week</p>
                <div class="image3">
                    <img src="../../assets/arrow-up-green.svg" class="navbar-brand" alt="1">
                    <div class="text-grafik3">
                        <p class="transfer1">Transfer to Jessica Lee</p>
                        <h6 class="money3">Rp100.000</h6>
                    </div>
                </div>
                <div class="image4">
                    <img src="../../assets/arrow-up-red.svg" class="navbar-brand" alt="1">
                    <div class="text-grafik4">
                        <p class="toup">Top up from BNI E-Banking</p>
                        <h6 class="money4">Rp300.000</h6>
                    </div>
                </div>
            </div>
            </div>
            </div>
    </div>
</template>

<script>
export default {
  name: 'Homepressed'
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
    margin-right: 70px;
    margin-left: -100px;
}

.box .box1 {
    height: 200px;
    width: 650px;
    margin-left: 10px;
    background-color: royalblue;
    border-radius: 20px;
    padding: 20px;
}

.box .box1 p  {
    color: white;
}

.box .box1 h3  {
    color: white;
}

.box .box1 h6  {
    color: white;

}

.box .box2 {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}

.box .box2 .box3 {
    height: 600px ;
    width: 450px;
    margin-left: 10px;
    background: #fff;
    border-radius: 20px;
}

.wrapper-income {
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    color: darkgrey;
    border-radius: 20px;
}

.wrapper-income .box-income,
.wrapper-income .box-expense {
    display: flex;
    flex-direction: column;
}

.box-g .col-grafik {
    padding: 20px;
    bottom: 50PX;
}

.box-g {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;

}

.box .box2 .box3 h4 {
    color: black;
    margin-bottom: 100px;
}

.box .box2 .box4 {
    height: 600px ;
    width: 400px;
    margin-left: 10px;
    background: #fff;
    border-radius: 20px;
    position: relative;
}

.box .box2 .box4 .transaction {
    position: absolute;
    top: 30px;
    color: black;
    left: 10px;
}

.box .box2 .box4 .see {
    position: absolute;
    top: 30px;
    left: 300px;
    color: royalblue;
}

/* box4 */

.box .box2 .box4 .image4 {
    position: absolute;
    top: 500px;
    left: 26px;
    display: flex;
}

.box .box2 .box4 .image4 .text-grafik3 {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 4px;
    left: 70px;
}

.box .box2 .box4 .image4 .text-grafik3 .adobe {
    color: black;
}

.box .box2 .box4 .image4 .text-grafik3 .subscription1 {
    color: darkgrey;
    top: 40px;
    font-size: medium;
}

.box .box2 .box4 .image4 .money4 {
    color:red;
    margin-top: 27px;
    margin-left: 188px;
    font-size: medium;
}

/* today */
.notif {
    display: flex;
}

.notif .content-notif .transaction {
    color: gray;
    margin-left: 10px;
    margin-top: 40px;
}

.notif .content-notif .image1 {
    width: 400px;
    height: 90px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    margin-top: 1%;
    display: flex;
}

.notif .text-grafik1 .transfer {
    color: darkgray;
    margin-top: 20px;
    margin-left: 10px;
    flex-direction: column;
    display: flex;
}

.notif .text-grafik1 .money1 {
    color: black;
    margin-left: 20px;
    margin-top: 1px;
}

/* netflix */

.notif .content-notif .image2 {
    width: 400px;
    height: 90px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    margin-top: 9%;
    display: flex;
}

.notif .text-grafik2 .netflix {
    color: darkgray;
    margin-top: 20px;
    margin-left: 10px;
    flex-direction: column;
    display: flex;
}

.notif .text-grafik2 .money2 {
    color: black;
    margin-left: 20px;
    margin-top: 1px;
}

.notif .content-notif .transaction1 {
    color: gray;
    margin-left: 10px;
    margin-top: 40px;
}

/* transfer */
.notif .content-notif .image3 {
    width: 400px;
    height: 90px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    margin-top: 9%;
    display: flex;
}

.notif .text-grafik3 .transfer1 {
    color: darkgray;
    margin-top: 20px;
    margin-left: 10px;
    flex-direction: column;
    display: flex;
}

.notif .text-grafik3 .money3 {
    color: black;
    margin-left: 20px;
    margin-top: 1px;
}

/* Top Up */

.notif .content-notif .image4 {
    width: 400px;
    height: 90px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    margin-top: 9%;
    display: flex;
}

.notif .text-grafik4 .toup {
    color: darkgray;
    margin-top: 20px;
    margin-left: 10px;
    flex-direction: column;
    display: flex;
}

.notif .text-grafik4 .money4 {
    color: black;
    margin-left: 20px;
    margin-top: 1px;
}

.notif {
    position: absolute;
    left: 60%;
    width: 450px;
    height: 700px;
    background: white;
    border-radius: 13px;
    box-shadow: 0px 0px 70px rgba(99, 99, 99, 0.15);
}

</style>
