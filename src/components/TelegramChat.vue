<template>
  <div class="w-full flex flex-col gap-4 ">
    <div class="text-lg font-bold text-primary-500">Schreib uns eine Nachricht!</div>
    <div class="form-group">
      <input type="email" v-model="email" :class="{'error': validate && !validEmail()}" placeholder="Deine Email (damit wir antworten können)" class="form-input">
      <span class="text-red-500 text-sm pl-1" v-if="validate && !validEmail()">Bitte eine gültige E-Mail-Adresse eingeben</span>
    </div>
    <div class="form-group">
      <textarea rows="6" class="form-input" v-model="message" :class="{'error': validate && !message}" placeholder="Deine Nachricht"></textarea>
      <span class="text-red-500 text-sm pl-1" v-if="validate && !message">Nachricht ist ein Pflichtfeld</span>
    </div>
    <button @click="submitForm" class="gradient-button">Senden</button>
    <p v-if="responseMessage" class="font-bold text-primary-500" :class="{'text-red-500': isError}">{{ responseMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { isValidEmail } from "../utils/validation";
import { sendMessage } from "../utils/messaging";

const email = ref("");
const message = ref("");
const responseMessage = ref("");
const isError = ref(false);
const validate = ref(false);
const emit = defineEmits(['close']);

const validEmail = () => isValidEmail(email.value);

const submitForm = async () => {
  if (!message.value || !email.value || !validEmail()) {
    validate.value = true;
    return;
  }

  try {
    const result = await sendMessage(email.value, message.value, 'contact');
    
    responseMessage.value = result.message;
    isError.value = !result.success;
    
    if (result.success) {
      email.value = "";
      message.value = "";
      validate.value = false;
      setTimeout(() => {
        emit('close');
      }, 1000);
    }
  } catch (error) {
    responseMessage.value = "Fehler beim Senden!";
    isError.value = true;
  }

  setTimeout(() => {
    if (isError.value) {
      responseMessage.value = "";
      isError.value = false;
    }
  }, 3000);
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

.error {
  border-color: #f56565;
}
</style> 