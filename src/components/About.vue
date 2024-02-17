<template>
  <div class="about">
    <div class="container">
      <div class="row justify-content-end align-items-center">
        <div class="col-md-5 cpx-6">
          <h1 class="display-4">About <span class="orange-bold">Us</span></h1>
          <p class="lead">
            Lorem occaecat nostrud aute nostrud sunt labore nostrud id nisi
            adipisicing aliqua cillum ullamco. Pariatur amet ea ad non
            incididunt. Ad officia nulla incididunt magna deserunt id. Id
            consequat aliquip velit sint voluptate officia. Deserunt fugiat ut
            exercitation dolor anim. Tempor labore commodo qui ut nisi.
          </p>
          <button class="">EXPLORE</button>
        </div>
        <div class="col-md-7 text-lg-end position-relative">
          <img
            src="../../public/images/product-1.jpeg"
            alt="about"
            class="border-img"
          />
          <div class="border-overlay"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
img {
  width: 75%;
}

@media (max-width: 768px) {
  .about button {
    display: block;
    margin: 20px auto;
  }
}
</style>
