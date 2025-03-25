<template>
    <div class="bg-tertiary-200" id="home">
        <!-- Modal Slots -->
        <slot name="modals"></slot>

        <!-- Header -->
        <header class="bg-primarycontrast-500 sticky z-50 transition-all duration-300 shadow-xl"
            :class="{ 'shadow-xl': isScrolled, '-top-full': !showHeader, 'top-0': showHeader }">
            <div class="container mx-auto px-4 py-4 flex items-center justify-between max-w-screen-lg">
                <router-link to="/" class="text-xl sm:text-3xl font-bold text-primary-500">
                    Didoli
                </router-link>
                <nav class="flex gap-4">
                    <a href="#features" class="outline-button inline-flex items-center gap-2">
                        <SparklesIcon class="h-5 w-5" />
                        Features
                    </a>
                    <a href="#prices" class="outline-button inline-flex items-center gap-2">
                        <CurrencyEuroIcon class="h-5 w-5" />
                        Preise
                    </a>
                    <a href="#faq" class="outline-button inline-flex items-center gap-2">
                        <QuestionMarkCircleIcon class="h-5 w-5" />
                        FAQ
                    </a>
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
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { SparklesIcon, ChatBubbleBottomCenterTextIcon, CurrencyEuroIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';

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

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition < 0) return;
    if (Math.abs(currentScrollPosition - lastScrollPosition.value) < scrollOffset) return;
    showHeader.value = currentScrollPosition < lastScrollPosition.value;
    lastScrollPosition.value = currentScrollPosition;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style lang="scss">
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