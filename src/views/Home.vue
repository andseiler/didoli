<template>
  <main>
    <!-- Hero Section -->
    <section class="relative flex justify-center bg-tertiary-200 py-24">
      <!-- Background image with opacity -->
      <div class="absolute inset-0 z-10 overflow-hidden">
        <img src="/bg.jpg" alt="Background" class="w-full h-full object-cover scale-[1.2] origin-center"
             style="object-position: center;"/>
        <div class="absolute inset-0 bg-[#E8E3DC] opacity-85"></div>
      </div>

      <div class="inset-0 flex flex-col items-center justify-center px-4 z-20">
        <h1
            class="fade-in text-6xl md:text-7xl font-didoli text-primary-500 leading-tight text-center max-w-4xl mb-12
                    flex flex-col items-center gap-2">
          <img src="/didoli-base.svg" alt="Didoli Logo"
               class="h-20 [filter:drop-shadow(0_2px_4px_rgb(53_60_77_/_0.2))]"/>
          <span class="[text-shadow:_0_2px_4px_rgb(53_60_77_/_0.2)]">Didoli</span>
        </h1>
        <div class="fade-in flex flex-col items-center text-center gap-2 mb-12 text-primarycontrast-400">
          <span
              class="text-2xl md:text-3xl font-bold font-didoli uppercase [text-shadow:_0_2px_4px_rgb(242_148_0_/_0.2)]">Automatische E-Mail Ablage <br
              class="inline lg:hidden">für die Baubranche</span>
          <span class="text-xl md:text-xl font-bold [text-shadow:_0_2px_4px_rgb(242_148_0_/_0.2)]">
                  <span class="text-primary-500">Alle Mails</span> des Teams <span class="hidden lg:inline">-</span><br
              class="inline lg:hidden"> strukturiert und <span class="text-primary-500">durchsuchbar</span> <span
              class="hidden lg:inline">-</span><br class="inline lg:hidden"> in eurer <span class="text-primary-500">eigenen Projektstruktur</span></span>
        </div>
        <p class="mb-12 text-primary-500 text-center bg-tertiary-200
              rounded-xl font-bold flex flex-col gap-2 p-4 shadow-sm">
          <span class="text-lg md:text-xl">Produktstart am 01.06.2025</span>
          <span class="text-primarycontrast-500 font-normal text-sm md:text-base flex flex-col gap-2">
                  <span>jetzt anmelden und 6 Monate gratis nutzen</span>
                  <span>Keine Verpflichtung, keine Kosten</span>
                <span class="text-primary-500 text-xs md:text-sm">Kein automatischer Vertragsabschluss</span>
                </span>
        </p>
        <div class="max-w-2xl w-full">
          <div class="flex flex-col lg:flex-row gap-4">
            <div class="flex-grow flex flex-col">
              <input
                  v-model="heroEmail"
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  class="form-input w-full bg-tertiary-200"
                  :class="{'error': heroEmailError}"
                  @focus="heroEmailError = false"
              />
              <span v-if="heroEmailError" class="text-red-500 text-sm">Bitte gib eine gültige E-Mail-Adresse ein</span>
            </div>
            <div>
              <button class="gradient-button w-full" @click="showBetaSignupModal(heroEmail, 'hero')">
                Jetzt anmelden (6 Monate gratis)
              </button>
            </div>
          </div>
          <p class="text-primarycontrast-500 mt-4 text-sm text-center">Keine Verpflichtung, kein Risiko, keine Kosten –
            Testzeitraum endet automatisch</p>
        </div>
      </div>
    </section>

    <!-- Problem → Solution Section -->
    <section id="problem-solution" class="bg-primarycontrast-500 w-full">
      <div class="container mx-auto px-4 py-12 max-w-screen-xl">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-tertiary-200 p-8 rounded-xl shadow-sm">
            <h2 class="text-3xl font-bold text-primary-500 mb-8 text-center">Kommt dir das bekannt vor?</h2>
            <div class="space-y-6 max-w-3xl mx-auto">
              <div class="flex items-start space-x-4">
                <XCircleIcon class="h-7 w-7 text-primary-500 flex-shrink-0"/>
                <p class="text-lg text-textdark">E-Mails manuell sortieren frisst deine Arbeitszeit</p>
              </div>
              <div class="flex items-start space-x-4">
                <XCircleIcon class="h-7 w-7 text-primary-500 flex-shrink-0"/>
                <p class="text-lg text-textdark">Wichtige Infos verstecken sich in einzelnen Postfächern</p>
              </div>
              <div class="flex items-start space-x-4">
                <XCircleIcon class="h-7 w-7 text-primary-500 flex-shrink-0"/>
                <p class="text-lg text-textdark">Projektkommunikation landet unübersichtlich verstreut</p>
              </div>
              <div class="flex items-start space-x-4">
                <XCircleIcon class="h-7 w-7 text-primary-500 flex-shrink-0"/>
                <p class="text-lg text-textdark">Rechtssichere Ablage von Projektmails ist kompliziert</p>
              </div>
            </div>
          </div>
          <div class="bg-tertiary-200 p-8 rounded-xl shadow-sm">
            <h2 class="text-3xl font-bold text-primary-500 mb-8 text-center">Didoli löst das Problem für dich</h2>
            <div class="space-y-6 max-w-3xl mx-auto">
              <div class="flex items-start space-x-4">
                <CheckCircleIcon class="h-7 w-7 text-primary-500 flex-shrink-0"/>
                <p class="text-lg text-textdark">Automatische Erkennung und Zuordnung von E-Mails zu Projekten</p>
              </div>
              <div class="flex items-start space-x-4">
                <CheckCircleIcon class="h-7 w-7 text-primary-500 flex-shrink-0"/>
                <p class="text-lg text-textdark">Übersichtliche Projekt-Ablage direkt in deiner Cloud</p>
              </div>
              <div class="flex items-start space-x-4">
                <CheckCircleIcon class="h-7 w-7 text-primary-500 flex-shrink-0"/>
                <p class="text-lg text-textdark">Zentrale Kommunikation, sofort auffindbar für dein gesamtes Team</p>
              </div>
              <div class="flex items-start space-x-4">
                <CheckCircleIcon class="h-7 w-7 text-primary-500 flex-shrink-0"/>
                <p class="text-lg text-textdark">Perfekt integriert in Outlook – funktioniert auch mit anderen E-Mail
                  Programmen</p>
              </div>
              <div class="flex items-start space-x-4">
                <CheckCircleIcon class="h-7 w-7 text-primary-500 flex-shrink-0"/>
                <p class="text-lg text-textdark">Einfache, schnelle Einrichtung – keine technischen Vorkenntnisse
                  nötig</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="bg-tertiary-200 w-full">
      <div class="container mx-auto px-4 py-12 max-w-screen-xl text-center">
        <h2 class="text-3xl font-bold text-primary-500 mb-12">Alle Funktionen von Didoli im Überblick</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="flex justify-center mb-4">
              <CheckCircleIcon class="h-12 w-12 text-primary-500"/>
            </div>
            <h3 class="font-semibold text-xl text-primary-500 mb-3">Automatische E-Mail-Zuordnung</h3>
            <p class="text-textdark">KI-basierte Zuordnung der Mails in deine Projektstruktur</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="flex justify-center mb-4">
              <EnvelopeIcon class="h-12 w-12 text-primary-500"/>
            </div>
            <h3 class="font-semibold text-xl text-primary-500 mb-3">Perfekte Outlook-Integration</h3>
            <p class="text-textdark">Voll integriert als Outlook-Add-in – und auch mit anderen E-Mail-Programmen
              kompatibel</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="flex justify-center mb-4">
              <CloudIcon class="h-12 w-12 text-primary-500"/>
            </div>
            <h3 class="font-semibold text-xl text-primary-500 mb-3">Cloud-Speicherung</h3>
            <p class="text-textdark">Sichere Ablage auf unseren EU Servern. Integration von Dropbox, OneDrive ...
              möglich</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="flex justify-center mb-4">
              <MagnifyingGlassIcon class="h-12 w-12 text-primary-500"/>
            </div>
            <h3 class="font-semibold text-xl text-primary-500 mb-3">Intuitive Volltextsuche</h3>
            <p class="text-textdark">Schnelles Finden von Projektinformationen und wichtigen Dokumenten</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="flex justify-center mb-4">
              <RocketLaunchIcon class="h-12 w-12 text-primary-500"/>
            </div>
            <h3 class="font-semibold text-xl text-primary-500 mb-3">Schnelle Einrichtung</h3>
            <p class="text-textdark">In 10 Minuten startklar, kein IT-Wissen erforderlich</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="flex justify-center mb-4">
              <LockClosedIcon class="h-12 w-12 text-primary-500"/>
            </div>
            <h3 class="font-semibold text-xl text-primary-500 mb-3">DSGVO-konform</h3>
            <p class="text-textdark">Sichere Datenspeicherung auf EU-Servern</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="prices" class="bg-primarycontrast-500 w-full">
      <div class="container mx-auto px-4 py-12 max-w-screen-xl text-center">
        <h2 class="text-3xl font-bold text-textbright mb-12">Faire Preise, einfache Entscheidung</h2>

        <div class="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center">
          <!-- Beta Plan -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden w-76">
            <div class="bg-primary-500 p-6 text-white">
              <h3 class="text-2xl font-bold mb-2">Early Bird</h3>
              <p class="opacity-90">Für alle Frühbucher</p>
            </div>

            <div class="p-8">
              <div class="flex justify-center items-baseline mb-8">
                <span class="text-4xl font-bold text-primary-500">0€</span>
                <span class="text-base text-gray-500 ml-2">6 Monate</span>
              </div>

              <ul class="space-y-4 mb-8">
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark">Alle Features</span>
                </li>
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark text-left">Unbegrenzt Speicherplatz (fair use)</span>
                </li>
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark text-left">Persönlicher Support per Mail und Videocall</span>
                </li>
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark text-left">Keine Verpflichtung, kein Risiko, keine Kosten</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Starter Plan -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden w-76">
            <div class="bg-primary-500 p-6 text-white">
              <h3 class="text-2xl font-bold mb-2">Flex</h3>
              <p class="opacity-90">Für kleine Teams</p>
            </div>

            <div class="p-8">
              <div class="flex justify-center items-baseline mb-8">
                <span class="text-4xl font-bold text-primary-500">9€</span>
                <span class="text-gray-500 ml-2 text-base">Monat / Benutzer</span>
              </div>

              <ul class="space-y-4 mb-8">
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark">Alle Features</span>
                </li>
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark text-left">Unbegrenzt Speicherplatz (fair use)</span>
                </li>
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark text-left">Persönlicher Support per Mail und Videocall</span>
                </li>
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark text-left">Monatlich kündbar</span>
                </li>

              </ul>
            </div>
          </div>

          <!-- Pro Plan -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden w-76">
            <div class="bg-primary-500 p-6 text-white">
              <h3 class="text-2xl font-bold mb-2">Enterprise</h3>
              <p class="opacity-90">Für größere Teams</p>
            </div>

            <div class="p-8">
              <div class="flex justify-center items-baseline mb-8">
                <span class="text-2xl font-bold text-primary-500">Preis auf Anfrage</span>
<!--                <span class="text-base text-gray-500 ml-2">auf Anfrage</span>-->
              </div>

              <ul class="space-y-4 mb-8">
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark">Alle Features</span>
                </li>
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark text-left">Unbegrenzt Speicherplatz (fair use)</span>
                </li>
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark text-left">Persönlicher Support per Mail und Videocall</span>
                </li>
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark text-left">Monatlich kündbar</span>
                </li>
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark">Unbegrenzte Nutzer</span>
                </li>
                <li class="flex items-center gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-primary-500 flex-shrink-0"/>
                  <span class="text-textdark text-left">Individuelle Anpassungen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-12 flex justify-center flex-col items-center">
          <p class="text-xl text-textbright">Individuelle Tarife auf Anfrage</p>
          <button class="gradient-button mt-4" @click="showContactModal">
            Kontakt aufnehmen
          </button>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="bg-tertiary-200 w-full">
      <div class="container mx-auto px-4 py-12 max-w-screen-xl text-center">
        <h2 class="text-3xl font-bold text-primary-500 mb-12 text-center">Noch Fragen zu Didoli?</h2>
        <div class="max-w-2xl mx-auto space-y-8">
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <h3 class="text-xl font-semibold text-primary-500 mb-3">Wann ist der Produktstart?</h3>
            <p class="text-textdark">Wir starten mit Didoli am 01.06.2025 – melde dich an, du bekommst rechtzeitig
              deinen Zugang und kannst Didoli dann 6 Monate gratis nutzen.
              Es entstehen keinerlei Kosten oder Verpflichtungen, der Vertrag kann nach 6 Monaten aktiv verlängert
              werden, ansonten löschen wir deine Daten.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <h3 class="text-xl font-semibold text-primary-500 mb-3">Ist Didoli DSGVO-konform?</h3>
            <p class="text-textdark">Ja, deine Daten werden sicher und DSGVO-konform auf Servern in der EU
              gespeichert</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <h3 class="text-xl font-semibold text-primary-500 mb-3">Funktioniert Didoli nur mit Outlook?</h3>
            <p class="text-textdark">Nein, Didoli funktioniert optimal integriert mit Outlook und auch mit allen anderen
              Email-Programmen</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <h3 class="text-xl font-semibold text-primary-500 mb-3">Brauche ich technisches Wissen zur Nutzung?</h3>
            <p class="text-textdark">Nein, Didoli ist intuitiv, unkompliziert und schnell eingerichtet – auch ohne
              IT-Kenntnisse</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <div class="bg-primarycontrast-500 w-full">
      <section id="cta" class="container mx-auto px-4 py-16 max-w-screen-xl text-center">
        <h2 class="text-3xl font-bold text-textbright mb-8">Jetzt anmelden</h2>

        <div class="max-w-screen-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div class="bg-primary-500 p-6 text-white">
            <h3 class="text-2xl font-bold mb-2">6 Monate kostenlos nutzen</h3>
            <p class="opacity-90">Produktstart am 01.06.2025</p>
          </div>

          <div class="p-8">
            <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <div class="flex-grow flex flex-col">
                <input
                    v-model="ctaEmail"
                    type="email"
                    placeholder="Deine E-Mail-Adresse"
                    class="form-input w-full"
                    :class="{'error': ctaEmailError}"
                    @focus="ctaEmailError = false"
                />
                <span v-if="ctaEmailError" class="text-red-500 text-sm text-left">Bitte gib eine gültige E-Mail-Adresse ein</span>
              </div>
              <div>
                <button class="gradient-button w-full" @click="showBetaSignupModal(ctaEmail, 'cta')">
                  Kostenlos anmelden
                </button>
              </div>
            </div>
            <p class="text-textdark mt-4 text-sm">Keine Verpflichtung, kein Risiko, keine Kosten – Testzeitraum endet
              automatisch</p>
            <div class="mt-6 text-center">
              <button class="text-primary-500 hover:text-primary-600 font-medium cursor-pointer"
                      @click="showContactModal">
                Mehr Informationen? Kontaktiere uns
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Contact Modal -->
    <ModalComponent
        :is-visible="isContactModalVisible"
        @close="closeContactModal">
      <ContactModal @close="closeContactModal"/>
    </ModalComponent>

    <!-- Beta Signup Modal -->
    <ModalComponent
        :is-visible="isBetaSignupModalVisible"
        @close="closeBetaSignupModal">
      <BetaSignupModal
          :initial-email="betaSignupEmail"
          @close="closeBetaSignupModal"
      />
    </ModalComponent>

    <!-- Footer content is in AppLayout.vue -->
  </main>
</template>

<script setup lang="ts">
import {
  XCircleIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  CloudIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  LockClosedIcon
} from '@heroicons/vue/24/outline';
import {ref} from 'vue';
import ModalComponent from '../components/ModalComponent.vue';
import ContactModal from '../components/ContactModal.vue';
import BetaSignupModal from '../components/BetaSignupModal.vue';
import {isValidEmail} from '../utils/validation';

// Email input fields
const heroEmail = ref("");
const heroEmailError = ref(false);
const ctaEmail = ref("");
const ctaEmailError = ref(false);

// Contact Modal state
const isContactModalVisible = ref(false);

const showContactModal = () => {
  isContactModalVisible.value = true;
};

const closeContactModal = () => {
  isContactModalVisible.value = false;
};

// Beta Signup Modal state
const isBetaSignupModalVisible = ref(false);
const betaSignupEmail = ref("");

const showBetaSignupModal = (sourceEmail = "", source = "") => {
  if (source === 'hero') {
    if (!sourceEmail || !isValidEmail(sourceEmail)) {
      heroEmailError.value = true;
      return;
    }
    heroEmailError.value = false;
  } else if (source === 'cta') {
    if (!sourceEmail || !isValidEmail(sourceEmail)) {
      ctaEmailError.value = true;
      return;
    }
    ctaEmailError.value = false;
  }

  // If an email is provided in the input field, use it
  if (sourceEmail) {
    betaSignupEmail.value = sourceEmail;
  }
  isBetaSignupModalVisible.value = true;
};

const clearEmailErrors = () => {
  heroEmailError.value = false;
  ctaEmailError.value = false;
};

const closeBetaSignupModal = () => {
  isBetaSignupModalVisible.value = false;
  // Clear all email fields
  betaSignupEmail.value = "";
  heroEmail.value = "";
  ctaEmail.value = "";
  // Clear any error states
  heroEmailError.value = false;
  ctaEmailError.value = false;
};
</script>