<template>
  <div class="mt-0 ml-6 mr-6 pt-8 ">
    <h1 class="headline white--text">Доставки</h1>
    <p class="body-1 grey--text darken-1 mt-2">
      Как только выкуп оплачен, он моментально появится в доставках. Дальше мы отслеживаем его статус. "Доставлен" - можно забирать с пункта выдачи.
    </p>
    <TabAndCard />
  </div>
</template>

<script>
import TabAndCard from './TabAndCard';

export default {
  name: 'DeliveryMain',

  components: {
    TabAndCard,
  },

  data: () => ({

  }),
}
</script>
