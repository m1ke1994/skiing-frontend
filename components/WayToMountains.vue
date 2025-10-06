<script setup>
import { computed } from 'vue';
import { useMockDataStore } from '~/stores/mockDataStore';

const mockDataStore = useMockDataStore();

const nearestDate = computed(() => {
  const nearest = mockDataStore.nearestEvent;
  return nearest
    ? { date: nearest.date, startDate: nearest.start_date }
    : { date: 'Скоро анонсируем новые поездки', startDate: '' };
});
</script>

<template>
  <section id="date_way">
    <div class="date_way_left">
      <h2>
        Ближайшая поездка стартует
        <span>{{ nearestDate.date }}</span>
      </h2>
      <p class="date_way_left__text">
        Мы готовим насыщенную программу с катанием, обучением и приятными бонусами для участников.
        Квалифицированные инструкторы, проработанная логистика и поддержка команды помогут вам прогрессировать
        и наслаждаться горами в полной мере. Следите за обновлениями и бронируйте места заранее — количество
        участников ограничено.
      </p>
    </div>
    <div class="date_way_right">
      <img src="/public/img/MountainsCard2.jpg" alt="Горный пейзаж" />
    </div>
  </section>
</template>

<style scoped>
h2 span {
  color: #ec9303;
}

@media (max-width: 768px) {
  #date_way {
    display: flex;
    flex-direction: column;
  }
}

#date_way {
  border: 5px solid;
  border-image: linear-gradient(to right, #00a9fe, #034184) 1;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  display: flex;
  background: linear-gradient(90deg, #034184, #00aaff);
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  align-items: center;
}

.date_way_left__text {
  font-size: clamp(20px, 1.5vw, 2.5rem);
  color: white;
  padding: 20px;
}

h2 {
  font-size: clamp(20px, 3vw, 2.5rem);
  color: white;
}
</style>
