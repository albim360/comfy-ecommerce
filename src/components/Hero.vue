<template>
  <div class="container-fluid bg-image">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-12 text-center">
        <h1 class="welcome">Welcome to <span class="black">Comfy <span class="orange">House</span></span></h1>
        <button class="btn">EXPLORE</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.bg-image {
  background-image: url('../../public/images/hero-bcg.jpeg');
  background-size: cover;
  background-position: center;
}

.welcome {
  font-size: 1.5em;
  font-weight: bold;
}

</style>
