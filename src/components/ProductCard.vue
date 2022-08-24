<template>
    <v-row
        dark
        v-bind:style="{background: backgroundMain}"
        justify="center"

        class="pt-8"
    >
      <v-col
          v-for="(prod, index) of cardProduct"
          :key="index"
          cols="auto"
          class="d-flex align-content-space-between"
          align-self="stretch"

      >
        <v-card
            color="#6A65FF"
            :elevation="0"
            :style="{ background: backgroundProduct }"
            class=" pa-4 "
            max-width="360"
        >
          <div class="d-flex justify-space-between align-start">
            <p class="grey--text darken-1 subtitle-2 mb-4 text-truncate">
              Заказ: <br>
              <span class="white--text">
              {{prod.order}}
            </span>
            </p>
            <v-btn
                :style="{ background: backgroundProduct }"
                :elevation="0"
                min-width="36"
                class="pa-0 rounded-circle"
            >
              <img src='@/assets/share-iphone.svg'/>
            </v-btn>
          </div>
          <div class="d-flex mb-3">
            <v-img
                alt='product.image'
                :src=prod.image
                height="64"
                max-width="64"
            />
            <div :style="{ lineHeight: lineHeight }">
              <p
                  class="ml-3 mb-0 pb-0 font-weight-regular white--text subtitle-2 overflow-hidden"
                  :style="{ maxHeight: height }"
              >
                {{ prod.name }}
              </p>
              <a class="ml-3 caption">
                {{ prod.article }}
              </a>
            </div>
          </div>
          <div

              :style="{ background: onBackground(prod.statusText) }"
              class="d-inline-block align-center pt-1 pb-1 pl-2 pr-2 rounded"
          >
              <p class="text-uppercase white--text ma-0">
                {{ prod.statusText }}
              </p>
          </div>
          <v-flex class="mt-5">
            <div class="d-inline-flex align-center">
              <img src='@/assets/Calendar.svg'/>
              <p class="pl-2 pr-8 ma-0 d-inline-block white--text">{{ prod.date }}</p>
            </div>
            <div class="d-inline-flex align-center">
              <img src='@/assets/time-square.svg'/>
              <p class="pl-2 ma-0 d-inline-block white--text">{{ prod.time }}</p>
            </div>
          </v-flex>
          <div>
            <p class="grey--text darken-1 subtitle-2 mb-2 mt-5">
              Получатель:
            </p>
            <p class="white--text mt-2">{{ prod.recipient }}</p>
          </div>
          <div class="mb-16">
            <p class="grey--text darken-1 subtitle-2 mb-2 mt-5">
              Адрес:
            </p>
            <p class="white--text mt-2">{{ prod.address }}</p>
          </div>
          <v-btn
              :style="{ position: 'absolute', right: 'auto', bottom: '16px' }"
              class="ma-0 "
              width="90%"
              outlined
              color="#6A65FF"
          >
            Получение по QR-Коду
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    cardProduct: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    readyToBeIssued: [],
    onTheWay: [],
    received: [],
    canceled: [],
    backgroundMain: '#1D1625',
    backgroundProduct: '#232633',
    backgroundStatusPath: '#F7981C',
    backgroundStatusRefund: '#B71C1C',
    backgroundStatusReady: '#388E3C',
    lineHeight: '15px',
    height: '45px',
  }),

  methods: {
    onBackground(status) {
      if (status === 'В пути на пункт выдачи') {
        return this.backgroundStatusPath
      } else if (status === 'Возврат') {
        return this.backgroundStatusRefund
      } else if (status === 'Готов к выдаче') {
        return this.backgroundStatusReady
      }
    }
  }
}
</script>