<template>
  <div class="contact-container">
    <div class="contact-header">Für Beta-Version anmelden</div>
    <div class="contact-card">
      <div class="w-full flex flex-col gap-4 p-6">
        <div class="form-group">
          <input type="email" v-model="email" :class="{'error': validate && !validEmail()}" placeholder="Deine Email-Adresse" class="form-input w-full">
          <span class="text-red-500 text-sm pl-1" v-if="validate && !validEmail()">Bitte eine gültige E-Mail-Adresse eingeben</span>
        </div>
        <div class="form-group">
          <textarea rows="4" class="form-input w-full" v-model="message" placeholder="Willst du uns noch etwas mitteilen?"></textarea>
        </div>
        <button @click="submitForm" class="gradient-button">Jetzt anmelden</button>
        <p class="text-center text-textdark text-sm">Kein Risiko, keine Kosten</p>
        <p v-if="responseMessage" class="font-bold text-primary-500 text-center mt-4" :class="{'text-red-500': isError}">{{ responseMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { isValidEmail } from "../utils/validation";
import { sendMessage } from "../utils/messaging";

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

  try {
    const result = await sendMessage(email.value, message.value, 'beta-signup');
    
    responseMessage.value = result.message;
    isError.value = !result.success;
    
    if (result.success) {
      email.value = "";
      message.value = "";
      validate.value = false;
      setTimeout(() => {
        emit('close');
      }, 2000);
    }
  } catch (error) {
    responseMessage.value = "Fehler bei der Anmeldung!";
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
.contact-container {
  padding: 1.5rem;
}

.contact-header {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-primary-500);
  margin-bottom: 1.5rem;
}

.contact-card {
  background-color: white;
  border-radius: 0.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: medium;
  color: var(--color-textdark);
}

.error {
  border-color: #f56565;
}

.gradient-button {
  background: linear-gradient(to right, var(--color-primary-500), var(--color-primary-600));
  color: white;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.gradient-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style> 