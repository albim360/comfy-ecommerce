<template>
  <div class="hero">
    <div class="blur-background"></div>
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center vh-100">
        <div class="col-12 text-center z-index-master">
          <h1 class="welcome">
            Welcome to
            <span class="title">
              <span class="black">Comfy <span class="orange">House</span></span>
            </span>
          </h1>
          <button class="fs-5">EXPLORE</button>
        </div>
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
.hero {
  position: relative;
}


.welcome {
  font-weight: bold;
  color: #fff
}

</style>
