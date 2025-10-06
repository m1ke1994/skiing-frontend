<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useBasketStore } from '~/stores/basketStore';
import { useMockDataStore } from '~/stores/mockDataStore';

const props = defineProps({
  isFuncBasket: {
    type: Function,
    required: true
  }
});

const basketStore = useBasketStore();
const mockDataStore = useMockDataStore();
const router = useRouter();

const cartItems = computed(() => basketStore.basket);
const showForm = ref(false);
const formData = ref({
  name: '',
  phone: ''
});

const removeItem = (index) => {
  cartItems.value.splice(index, 1);
};

const submitForm = () => {
  if (!formData.value.name.trim() || !formData.value.phone.trim()) {
    alert('Пожалуйста, укажите имя и номер телефона, чтобы мы могли связаться с вами.');
    return;
  }

  if (cartItems.value.length === 0) {
    alert('Корзина пуста. Добавьте хотя бы один курс, прежде чем оформлять заказ.');
    return;
  }

  mockDataStore.registerApplication({
    items: cartItems.value,
    name: formData.value.name.trim(),
    phone: formData.value.phone.trim(),
    source: 'basket'
  });

  basketStore.clearBasket();
  showForm.value = false;
  formData.value = { name: '', phone: '' };
  router.push('/');

  alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
};
</script>

<template>
  <div class="cart-modal">
    <div class="cart-modal__overlay" @click="props.isFuncBasket"></div>
    <div class="cart-modal__content">
      <button @click="props.isFuncBasket" class="cart-modal__close" aria-label="Закрыть корзину">×</button>
      <h2 class="text-black">Корзина</h2>
      <div class="cart-items">
        <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <span class="cart-item__name">{{ item.title }} ({{ item.category }})</span>
          <span class="cart-item__price">{{ item.price }}</span>
          <button @click="removeItem(index)" class="cart-item__remove text-black" aria-label="Удалить из корзины">
            ×
          </button>
        </div>
      </div>
      <button @click="showForm = true" class="cart-modal__checkout">Оформить заявку</button>
    </div>

    <div v-if="showForm" class="form-modal">
      <div class="form-modal__overlay" @click="showForm = false"></div>
      <div class="form-modal__content">
        <h2 class="text-black">Оформление заявки</h2>
        <div class="cart-items">
          <div v-for="(item, index) in cartItems" :key="index" class="cart-item text-black">
            <span class="cart-item__name">{{ item.title }} ({{ item.category }})</span>
            <span class="cart-item__price">{{ item.price }}</span>
          </div>
        </div>

        <form @submit.prevent="submitForm" class="form-group">
          <label for="name">Имя</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            placeholder="Как к вам обращаться"
            required
          />

          <label for="phone">Телефон</label>
          <input
            id="phone"
            v-model="formData.phone"
            type="tel"
            placeholder="7XXXXXXXXXX"
            pattern="\d{11}"
            required
          />

          <button type="submit" class="form-modal__submit">Отправить заявку</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.cart-modal__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.cart-modal__content {
  position: relative;
  background-color: #fff;
  width: 400px;
  max-width: 90%;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 1001;
}

.cart-modal__close {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: #000;
}

.cart-modal__close:hover {
  color: #ff0000;
}

.cart-items {
  margin-top: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color:black;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.cart-item__name {
  flex: 1;
  margin-right: 10px;
}

.cart-item__price {
  margin: 0 10px;
  min-width: 80px;
  text-align: right;
}

.cart-item__remove {
  background: none;
  border: none;
  color: #ff0000;
  font-size: 18px;
  cursor: pointer;
}

.cart-item__remove:hover {
  color: #cc0000;
}

.cart-modal__checkout {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 6px;
  font-weight: 600;
}

.cart-modal__checkout:hover {
  background-color: #0056b3;
}

.form-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.form-modal__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.form-modal__content {
  position: relative;
  width: 400px;
  max-width: 90%;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 1002;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.form-group label {
  font-weight: 600;
  color: #034184;
}

.form-group input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 6px;
  color: #000;
}

.form-group input::placeholder {
  color: #a0a0a0;
}

.form-modal__submit {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 600;
}

.form-modal__submit:hover {
  background-color: #0056b3;
}
</style>
