<template>
  <v-app>
    <v-app-bar app dark dense height="32" class="appbar">
      <div class="text-caption">智慧党建设信息平台</div>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    
  }),
};
</script>
<style>
.v-app-bar{
  
  background: linear-gradient(90deg, #CA0000, #FF9307) !important;
}
</style>
