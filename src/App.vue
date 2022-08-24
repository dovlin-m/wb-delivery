<template>
  <v-app dark v-bind:style="{background: backgroundMain}">
    <DeliveryMain />
  </v-app>
</template>

<script>
import DeliveryMain from './components/DeliveryMain';

export default {
  name: 'App',

  components: {
    DeliveryMain,
  },

  data: () => ({
    backgroundMain: '#1D1625',
  }),
};
</script>
