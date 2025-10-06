<script setup>
import { computed } from 'vue';
import { useMockDataStore } from '~/stores/mockDataStore';

const mockDataStore = useMockDataStore();
const trips = computed(() => mockDataStore.events);

const toggleDetails = (id) => {
  mockDataStore.toggleEventDetails(id);
};
</script>

<template>
  <div class="sezon__cards" id="trip">
    <h1>Сезонные путешествия 24/25</h1>
    <div class="sezon__cards__flex">
      <div v-for="trip in trips" :key="trip._id" class="card__flex">
        <div class="sezon__card__partOne">
          <p class="card__month">{{ trip.month }}</p>
          <p class="card__place">{{ trip.place }}</p>
        </div>
        <div v-if="trip.isList" class="sezon__card__partTwo">
          <p class="card__date">{{ trip.date }}</p>
          <p><strong>Гид-наставник:</strong> {{ trip.leader_name }}</p>
          <p><strong>Обязанности лидера:</strong></p>
          <ul>
            <li v-for="(resp, respIndex) in trip.leader_responsibilities" :key="respIndex">{{ resp }}</li>
          </ul>
          <p><strong>Что взять с собой:</strong></p>
          <ul>
            <li><strong>Снаряжение:</strong> {{ trip.requirements_equipment.join(', ') }}</li>
            <li><strong>Уровень катания:</strong> {{ trip.requirements_skills }}</li>
          </ul>
          <p><strong>Стоимость участия:</strong> {{ trip.cost_amount }} {{ trip.cost_currency }}</p>
          <p><strong>Дополнительные услуги:</strong> {{ trip.cost_additional_services }}</p>
        </div>
        <img
          @click="toggleDetails(trip._id)"
          class="card__img"
          :src="trip.isList ? '/img/notList.svg' : '/img/isList.svg'"
          alt="Показать или скрыть подробности"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
p,
li {
  color: black;
}

strong {
  color: black;
  font-weight: bold;
}

.card__ski strong,
.card__snowboard strong {
  color: #000000;
  font-weight: bold;
}

.sezon__cards__flex {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.card__date,
.card__ski,
.card__snowboard {
  color: black;
  font-size: clamp(20px, 1.3vw, 2rem);
}

.card__month {
  font-size: clamp(20px, 1.5vw, 2rem);
  color: black;
  font-weight: bold;
  text-align: left;
}

.card__img {
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 30px;
  margin: 20px;
}

.card__flex {
  width: 80%;
  margin: 0 auto;
  background: linear-gradient(90deg, #f9fafa, #034184); /* мягкий градиент подчёркивает блок с подробностями */
  padding: 40px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.sezon__card__partTwo,
.sezon__card__partOne {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 10px;
}

h1 {
  padding: 50px 10px;
  color: #034184;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}

.sezon__cards {
  padding: 50px 0;
  width: 100%;
  background-color: #fff;
}

.card__place {
  text-align: left;
  font-size: clamp(20px, 1.5vw, 2rem);
  color: #034184;
  font-weight: bold;
}
</style>
