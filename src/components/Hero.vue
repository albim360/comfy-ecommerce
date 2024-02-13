<template>
  <div class="hero">
    <div class="blur-background"></div>
    <div class="container-fluid d-flex justify-content-center align-items-center" style="height: 60vh;">
      <div class="text-center z-index-master">
        <h1 class="welcome letter-spacing-3 mb-4">
          Welcome to
          <span class="title letter-spacing-3">
            <span class="black">Comfy <span class="orange-bold">House</span></span>
          </span>
        </h1>
        <button class="fs-5">EXPLORE</button>
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

.welcome {
  font-weight: bold;
  color: #fff;
}

</style>
