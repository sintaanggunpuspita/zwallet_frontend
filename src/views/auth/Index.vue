<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 wrapper-index">
        <h1>mmmm</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
          cupiditate hic veritatis laborum quo quas quaerat repudiandae quis
          placeat sequi culpa ullam, natus id? Velit debitis, consectetur totam
          facere aspernatur hic dolorem. Obcaecati dolores reprehenderit dicta
          commodi rerum autem facilis deserunt sit cum repellendus architecto
          delectus consequatur iure, porro neque. Quod ab in quidem. Accusamus
          veniam rerum exercitationem expedita alias quo dolor quasi. Ducimus
          nisi perferendis, tenetur repudiandae minus blanditiis doloremque,
          aliquid exercitationem ea magni veniam provident, pariatur
          consequuntur. Illum culpa dolor obcaecati excepturi, exercitationem
          perspiciatis neque sed itaque ullam sit magni dicta natus cum, labore
          corrupti quam vitae nihil!</p>
      </div>
      <div class="col-6">
        <div class="wrapper-right">
          <h2>judul form</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            quae ut at repellat, atque nihil inventore tenetur error ab
            voluptate nemo placeat obcaecati, deleniti, itaque recusandae iusto
            amet nesciunt aut asperiores animi molestias aliquam sed dolor
            accusantium. Expedita error distinctio molestiae nihil fugiat ab
            maiores voluptas, ipsam dolor nemo. Deleniti!
          </p>
          <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
         <input type="text" name="email" id="password" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
.wrapper-index {
  background-color: url("../../assets/alur.png");
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.wrapper-right {
    padding: 20px 50px;
}
</style>
