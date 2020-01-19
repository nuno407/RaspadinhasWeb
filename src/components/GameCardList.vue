<template>
  <div>
    <li v-for="card in cardsInfo" v-bind:key="card.name">
      <GameCard :name="card.name" :stock="card.stock" :todaySells="card.todaySells"></GameCard>
    </li>
  </div>
</template>

<script>
import GameCard from './GameCard';

export default {
  name: 'GameCardList',
  components: { GameCard },
  data() {
    return {
      cardsInfo: [
        { name: 'Rasp 1', stockValue: 0, todaySells: 0 },
        { name: 'Rasp 2', stockValue: 0, todaySells: 0 },
        { name: 'Rasp 3', stockValue: 0, todaySells: 0 },
        { name: 'Rasp 4', stockValue: 0, todaySells: 0 },
        { name: 'Rasp 5', stockValue: 0, todaySells: 0 },
      ],
    };
  },
};
</script>
