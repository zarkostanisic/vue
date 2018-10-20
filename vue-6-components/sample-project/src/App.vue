<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <annoucement></annoucement>
        <article-single></article-single>
        <contact>
        	<p slot="top">Top named slot</p>
        	<p>Passed slot value</p>
        </contact>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
