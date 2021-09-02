<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">02</span>
          <span class="mx-1 fs-5">Septiembre</span>
          <span class="mx-2 fw-light">2021, Jueves</span>
      </div>

      <div class="entry-descripction">
          Tempor est do velit sunt aliqua veniam fugiat. Nostrud magna pariatur non consequat do quis. Occaecat velit adipisicing pariatur officia dolor ipsum in consequat anim tempor voluptate culpa in tempor. Dolor enim amet veniam dolore ipsum esse.
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}
</style>