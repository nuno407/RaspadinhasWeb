<template>
  <q-page class="flex flex-center">
    <GameCardList></GameCardList>
  </q-page>
</template>

<script>
import GameCardList from '../components/GameCardList';

export default {
  name: 'Sells',
  components: { GameCardList },
  data() {
    return {};
  },
};
</script>
