<template>
  <v-card :elevation="0">
    <v-tabs
        v-if="small"
        vertical
        background-color="#1D1625"
        color="#6A65FF"
        v-model="tab"
        dark
        class="rounded-0"
    >

      <v-tabs-slider color="#6A65FF"></v-tabs-slider>

      <v-tab
          v-for="item in items"
          :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs
        v-else
        background-color="#1D1625"
        color="#6A65FF"
        v-model="tab"
        dark
        class="rounded-0"
    >

      <v-tabs-slider color="#6A65FF"></v-tabs-slider>

      <v-tab
          v-for="item in items"
          :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items
        class="rounded-0"
        v-model="tab">
      <v-tab-item>
        <ProductCard
            :cardProduct="readyToBeIssued"
        />
      </v-tab-item>
      <v-tab-item>
        <ProductCard
            :cardProduct="onTheWay"
        />
      </v-tab-item>
      <v-tab-item>
        <ProductCard
            :cardProduct="received"
        />
      </v-tab-item>
      <v-tab-item>
        <ProductCard
            :cardProduct="canceled"
        />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>

import ProductCard from './ProductCard'

export default {
  name: 'TabAndCard',

  components: {
    ProductCard,
  },

  data: () => ({
    readyToBeIssued: [
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Готов к выдаче',
        tabStatus: 'Готов к выдаче',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Готов к выдаче',
        tabStatus: 'Готов к выдаче',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Готов к выдаче',
        tabStatus: 'Готов к выдаче',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Готов к выдаче',
        tabStatus: 'Готов к выдаче',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Готов к выдаче',
        tabStatus: 'Готов к выдаче',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Готов к выдаче',
        tabStatus: 'Готов к выдаче',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Готов к выдаче',
        tabStatus: 'Готов к выдаче',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Готов к выдаче',
        tabStatus: 'Готов к выдаче',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Готов к выдаче',
        tabStatus: 'Готов к выдаче',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Готов к выдаче',
        tabStatus: 'Готов к выдаче',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
    ],
    onTheWay: [
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'В пути на пункт выдачи',
        tabStatus: 'В пути',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'В пути на пункт выдачи',
        tabStatus: 'В пути',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'В пути на пункт выдачи',
        tabStatus: 'В пути',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'В пути на пункт выдачи',
        tabStatus: 'В пути',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'В пути на пункт выдачи',
        tabStatus: 'В пути',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'В пути на пункт выдачи',
        tabStatus: 'В пути',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'В пути на пункт выдачи',
        tabStatus: 'В пути',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'В пути на пункт выдачи',
        tabStatus: 'В пути',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
    ],
    received: [],
    canceled: [
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Бад',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Возврат',
        tabStatus: 'Отмененные',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, Тверская ул 15',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Патчи гидроленты',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Возврат',
        tabStatus: 'Отмененные',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Бад',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Возврат',
        tabStatus: 'Отмененные',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, Тверская ул 15',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Патчи гидроленты',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Возврат',
        tabStatus: 'Отмененные',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: '65f884gre4s556w984fe8g4g84',
        name: 'Бад',
        article: 'Арт. 485452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Возврат',
        tabStatus: 'Отмененные',
        date: '12 июня 2022',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, Тверская ул 15',
      },
      {
        order: 's12h312jh123f2v312v',
        name: 'Патчи гидроленты',
        article: 'Арт. 325452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Возврат',
        tabStatus: 'Отмененные',
        date: '10 сентября 2021',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: 'sefsdf33fe4ferf',
        name: 'Патчи гидроленты',
        article: 'Арт. 196452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Возврат',
        tabStatus: 'Отмененные',
        date: '03 сентября 2021',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, Тверская ул 15',
      },
      {
        order: 's12h312jh123f2v312v',
        name: 'Бад',
        article: 'Арт. 325452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Возврат',
        tabStatus: 'Отмененные',
        date: '10 сентября 2021',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2',
      },
      {
        order: 'sefsdf33fe4ferf',
        name: 'Патчи гидроленты',
        article: 'Арт. 196452965',
        image: "http://localhost:8080/img/Product.f4af605f.svg",
        statusText: 'Возврат',
        tabStatus: 'Отмененные',
        date: '03 сентября 2021',
        time: '19:17',
        recipient: 'Алексей Никитин +796*****2251',
        address: 'г. Москва, Тверская ул 15',
      },
    ],
    tab: null,
    small: false,
    items: [
      'Готовы к выдаче', 'В пути', 'Полученные', 'Отмененные',
    ],
    backgroundMain: '#1D1625',
  }),

  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },

  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      this.small = window.innerWidth <= 600;
    }
  }
}
</script>