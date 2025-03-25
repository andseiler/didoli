<template>
    <div class="bg-tertiary-200" id="home">
        <!-- Modal Slots -->
        <slot name="modals"></slot>

        <!-- Header -->
        <header class="bg-primarycontrast-500 sticky z-50 transition-all duration-300 shadow-xl"
            :class="{ 'shadow-xl': isScrolled, '-top-full': !showHeader, 'top-0': showHeader }">
            <div class="container mx-auto px-4 py-4 flex items-center justify-between max-w-screen-lg">
                <router-link to="/" @click.prevent="scrollToSection('home')" class="inline-flex items-center gap-2 text-4xl sm:text-5xl font-normal text-primary-500 font-sniglet">
                    <img src="/didoli-base.svg" alt="Didoli Logo" class="h-8 sm:h-10" />
                    Didoli
                </router-link>
                <nav class="flex gap-4">
                    <a href="#features" @click.prevent="scrollToSection('features')" class="outline-button inline-flex items-center gap-2">
                        <SparklesIcon class="h-5 w-5" />
                        <span class="hidden sm:inline">Features</span>
                    </a>
                    <a href="#prices" @click.prevent="scrollToSection('prices')" class="outline-button inline-flex items-center gap-2">
                        <CurrencyEuroIcon class="h-5 w-5" />
                        <span class="hidden sm:inline">Preise</span>
                    </a>
                    <a href="#faq" @click.prevent="scrollToSection('faq')" class="outline-button inline-flex items-center gap-2">
                        <QuestionMarkCircleIcon class="h-5 w-5" />
                        <span class="hidden sm:inline">FAQ</span>
                    </a>
                    <button @click="showContactModal" class="outline-button inline-flex items-center gap-2">
                        <ChatBubbleOvalLeftEllipsisIcon class="h-5 w-5" />
                        <span class="hidden sm:inline">Kontakt</span>
                    </button>
                </nav>
            </div>
        </header>

        <!-- All content will be injected here -->
        <slot></slot>

        <footer class="bg-primarycontrast-500 text-textbright">
            <div class="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center max-w-screen-xl">
                <p class="text-sm">&copy; 2024 Didoli. Alle Rechte vorbehalten.</p>
                <div class="space-x-4 text-sm">
                    <router-link to="/impressum" class="hover:text-primary-500">Impressum</router-link>
                    <router-link to="/datenschutz" class="hover:text-primary-500">Datenschutz</router-link>
                </div>
            </div>
        </footer>

        <!-- Contact Modal -->
        <ModalComponent 
            :is-visible="isContactModalVisible"
            @close="closeContactModal">
            <ContactModal @close="closeContactModal" />
        </ModalComponent>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { SparklesIcon, CurrencyEuroIcon, QuestionMarkCircleIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/vue/24/outline';
import ModalComponent from './ModalComponent.vue';
import ContactModal from './ContactModal.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isScrolled = ref(false);
const showHeader = ref(true);
const lastScrollPosition = ref(0);
const scrollOffset = 0;

const props = defineProps({
    showImprint: {
        type: Boolean,
        default: false
    }
});

// Contact Modal state
const isContactModalVisible = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition < 0) return;
    if (Math.abs(currentScrollPosition - lastScrollPosition.value) < scrollOffset) return;
    showHeader.value = currentScrollPosition < lastScrollPosition.value;
    lastScrollPosition.value = currentScrollPosition;
};

const showContactModal = () => {
    isContactModalVisible.value = true;
};

const closeContactModal = () => {
    isContactModalVisible.value = false;
};

const scrollToSection = (id: string) => {
  if (id === 'home' && window.location.pathname !== '/') {
    // Navigate to home route if not already there
    router.push('/');
  } else {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});

      //@ts-ignore
      history.pushState(null, null, " ");
    }
  }
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style lang="scss">
@font-face {
    font-family: 'Sniglet';
    src: url('../assets/fonts/Sniglet-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

.font-sniglet {
    font-family: 'Sniglet', cursive;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.8s ease-out;
}

.custom-text-shadow {
    text-shadow: 2px 2px 3px #2b5544;
}

.custom-box-shadow {
    box-shadow: 2px 2px 3px #2b5544;
}

.-top-full {
    top: -100%;
}
</style>