<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Управление поездками</h1>
    <form @submit.prevent="createEvent" class="mb-4 grid grid-cols-2 gap-2">
      <input v-model="newEvent.month" placeholder="Месяц" class="border p-2" required />
      <input v-model="newEvent.place" placeholder="Локация" class="border p-2" required />
      <input v-model="newEvent.date" placeholder="Даты (например, 5 — 12 марта)" class="border p-2" required />
      <input v-model="newEvent.leader_name" placeholder="Имя гида" class="border p-2" />
      <input
        v-model="newEvent.leader_responsibilities"
        placeholder="Обязанности гида (через запятую)"
        class="border p-2"
      />
      <input
        v-model="newEvent.requirements_equipment"
        placeholder="Снаряжение (через запятую)"
        class="border p-2"
      />
      <input
        v-model="newEvent.requirements_skills"
        placeholder="Уровень катания"
        class="border p-2"
      />
      <input v-model="newEvent.cost_amount" placeholder="Стоимость" class="border p-2" type="number" required />
      <input v-model="newEvent.cost_currency" placeholder="Валюта" class="border p-2" required />
      <input
        v-model="newEvent.cost_additional_services"
        placeholder="Дополнительные услуги"
        class="border p-2"
      />
      <input v-model="newEvent.start_date" placeholder="Дата начала (ГГГГ-ММ-ДД)" class="border p-2" required />
      <button type="submit" class="bg-blue-500 text-white px-3 py-2 col-span-2 w-1/4">Добавить</button>
    </form>
    <ul>
      <li v-for="event in events" :key="event._id" class="border-b p-2 flex justify-between items-center gap-4">
        <span>{{ event.month }} — {{ event.place }} — {{ event.date }} — {{ event.cost_amount }} {{ event.cost_currency }}</span>
        <button @click="deleteEvent(event._id)" class="bg-red-500 text-white px-2 py-1 rounded">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMockDataStore } from '~/stores/mockDataStore';

const dataStore = useMockDataStore();
const events = computed(() => dataStore.events);

const defaultEvent = {
  _id: '',
  month: '',
  place: '',
  date: '',
  leader_name: '',
  leader_responsibilities: '',
  requirements_equipment: '',
  requirements_skills: '',
  cost_amount: '',
  cost_currency: '',
  cost_additional_services: '',
  start_date: '',
  isList: false
};

const newEvent = ref({ ...defaultEvent });

const createEvent = () => {
  dataStore.addEvent(newEvent.value);
  newEvent.value = { ...defaultEvent };
};

const deleteEvent = (id) => {
  dataStore.deleteEvent(id);
};
</script>

<style scoped>
button {
  transition: all 0.3s ease;
}

button:hover {
  opacity: 0.8;
}
</style>
