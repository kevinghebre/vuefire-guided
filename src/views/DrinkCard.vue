<template>
  <div>
    <v-card class="d-flex flex-wrap" flat tile>
      <v-card
        v-for="(drink, index) in drinks"
        :key="drink"
        :style="{ 'background-color': colorCard[index] }"
        class="col-2 mr-4 mt-3"
        elevation="4"
        outlined
        tile
      >
        <v-img
          height="200"
          :src="`https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`"
        ></v-img>
        <div>
          <v-icon right> {{ icons[index] }} </v-icon>
          {{ drink.drinkType }}
          <br />
          Name : {{ drink.name }}
          <br />
          Sugar : {{ drink.sugar }}
          <br />
          Water : {{ drink.water }}
          <br />
          <span style="font-size: 16px"> Rp. {{ drink.price }} </span>
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script>
//tambahkan ini untuk import database reference
import { drinkRef } from "../firebase";

export default {
  data: () => ({
    colorCache: {},
    colorCard: [
      "blue",
      "orange",
      "green",
      "yellow",
      "indigo",
      "pink",
      "light-blue",
      "cyan",
      "teal",
      "light-green",
      "lime",
      "amber",
      "deep-orange",
      "brown",
      "blue-grey",
      "grey",
      "red",
      "blue",
      "orange ",
      "green",
      "yellow",
      "indigo",
      "deep-purple",
      "pink",
      "light-blue",
      "cyan",
      "teal",
      "light-green",
      "lime",
      "amber",
      "deep-orange",
      "brown",
      "blue-grey",
      "grey",
      "red",
      "blue",
      "orange ",
      "green",
      "yellow",
      "indigo",
      "deep-purple",
      "pink",
      "light-blue",
      "cyan",
      "teal",
      "light-green",
      "lime",
      "amber",
      "deep-orange",
      "brown",
      "blue-grey",
      "grey",
      "red",
    ],
    icons: [
      "mdi-account-box",
      "mdi-adobe",
      "mdi-account-box",
      "mdi-adobe",
      "mdi-account-box",
      "mdi-adobe",
      "mdi-account-box",
      "mdi-adobe",
      "mdi-account-box",
      "mdi-adobe",
      "mdi-account-box",
      "mdi-adobe",
      "mdi-account-box",
      "mdi-adobe",
      "mdi-account-box",
      "mdi-adobe",
      "mdi-account-box",
      "mdi-adobe",
      "mdi-account-box",
      "mdi-adobe",
    ],
    drinks: [],
  }),
  //tambahkan attribute firebase disini
  firebase: {
    drinks: drinkRef,
  },
};
</script>
