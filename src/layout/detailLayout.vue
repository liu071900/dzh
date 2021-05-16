<template>
  <v-app>
    <v-app-bar app dark dense height="24">
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
