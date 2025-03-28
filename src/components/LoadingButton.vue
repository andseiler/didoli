<template>
  <button 
    :class="['gradient-button', { 'opacity-75 cursor-not-allowed': loading }]" 
    :disabled="loading"
    @click="$emit('click')"
  >
    <div class="flex items-center justify-center gap-2">
      <div v-if="loading" class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      <slot></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);
</script> 