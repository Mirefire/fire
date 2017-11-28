<template>
  <div class="main-comtent">
   
    <div class="comtent-main relation-s">
      <svg  width="900" height="600"></svg >
    </div>
  
    <div class=""></div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {},

  mounted: function() {
      
  }
};
</script>
<style scoped>
.relation-s {
  width: 900px;

  height: 600px;

  margin: 0 auto;
}
.relation-img {
  width: 100%;
  text-align: center;
}

.nodetext {
  font-size: 12px;

  font-family: SimSun;

  fill: #000000;
}

.linetext {
  font-size: 12px;
  font-family: SimSun;

  fill: #72b5ff;

  fill-opacity: 0;

  fill-rule: evenodd;
}
.links line {
  stroke: #aaa;
}

.nodes circle {
  pointer-events: all;
  stroke: none;
  stroke-width: 40px;
}
</style>
