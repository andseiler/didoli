<template>
  <div class="contact-container">
    <div class="contact-header">
      Jetzt anmelden
      <div class="text-base mt-4">
        Produktstart am 01.06.2025 <br> jetzt anmelden und 6 Monate gratis nutzen <br>Keine Verpflichtung, keine Kosten
        <br><span class="text-xs">Kein automatischer Vertragsabschluss</span>
      </div>
    </div>
    <div class="contact-card">
      <div class="w-full flex flex-col gap-4 p-6">
        <div class="form-group">
          <input type="email" v-model="email" :class="{'error': validate && !validEmail()}" placeholder="Deine Email-Adresse" class="form-input w-full">
          <span class="text-red-500 text-sm pl-1" v-if="validate && !validEmail()">Bitte eine gültige E-Mail-Adresse eingeben</span>
        </div>
        <div class="form-group">
          <textarea rows="4" class="form-input w-full" v-model="message" placeholder="Willst du uns noch etwas mitteilen?"></textarea>
        </div>
        <LoadingButton :loading="isLoading" @click="submitForm">Jetzt anmelden</LoadingButton>
        <p class="text-center text-textdark text-sm">Keine Verpflichtung, kein Risiko, keine Kosten – Testzeitraum endet automatisch</p>
        <p v-if="responseMessage" class="font-bold text-primary-500 text-center mt-4" :class="{'text-red-500': isError}">{{ responseMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { isValidEmail } from "../utils/validation";
import { sendMessage } from "../utils/messaging";
import LoadingButton from "./LoadingButton.vue";

// TypeScript-Definition für globale gtag-Funktion
declare global {
  function gtag(command: string, action: string, params?: any): void;
}

const props = defineProps({
  initialEmail: {
    type: String,
    default: ""
  }
});

const email = ref(props.initialEmail);
const message = ref("");
const responseMessage = ref("");
const isError = ref(false);
const validate = ref(false);
const isLoading = ref(false);
const emit = defineEmits(['close']);

// Watch for changes to initialEmail prop
watch(() => props.initialEmail, (newEmail) => {
  if (newEmail) {
    email.value = newEmail;
  }
});

// Clear email when modal is closed
watch(() => props.initialEmail, (newEmail) => {
  if (!newEmail) {
    email.value = "";
    message.value = "";
    validate.value = false;
  }
});

const validEmail = () => isValidEmail(email.value);

const submitForm = async () => {
  if (!email.value || !validEmail()) {
    validate.value = true;
    return;
  }

  isLoading.value = true;
  try {
    const result = await sendMessage(email.value, message.value, 'beta-signup');
    
    responseMessage.value = result.message;
    isError.value = !result.success;
    
    if (result.success) {
      email.value = "";
      message.value = "";
      validate.value = false;
      
      // Google Conversion Tracking aufrufen
      if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          'send_to': 'AW-16905583254/YKkJCJLXiLAaEJb1mv0-',
          'value': 1.0,
          'currency': 'EUR'
        });
      }
      
      setTimeout(() => {
        emit('close');
      }, 3000);
    }
  } catch (error) {
    responseMessage.value = "Fehler bei der Anmeldung!";
    isError.value = true;
  } finally {
    isLoading.value = false;
  }

  setTimeout(() => {
    if (isError.value) {
      responseMessage.value = "";
      isError.value = false;
    }
  }, 3000);
};
</script>

