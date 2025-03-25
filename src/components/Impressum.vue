<template>
  <div class="min-h-screen bg-tertiary-200">
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-primary-500">Impressum</h1>
        <button @click="$emit('close')" class="outline-button">
          Zurück zur Startseite
        </button>
      </div>
      
      <div class="bg-white rounded-xl shadow-sm p-8 space-y-6">
        <section>
          <h2 class="text-xl font-bold text-primary-500 mb-4">Angaben gemäß § 5 TMG</h2>
          <p class="text-textdark">
            Didoli GmbH<br>
            Musterstraße 1<br>
            12345 Musterstadt<br>
            Deutschland
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-primary-500 mb-4">Kontakt</h2>
          <p class="text-textdark">
            Telefon: +49 123 4567890<br>
            E-Mail: info@didoli.de
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-primary-500 mb-4">Vertreten durch</h2>
          <p class="text-textdark">
            Max Mustermann, Geschäftsführer
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-primary-500 mb-4">Handelsregister</h2>
          <p class="text-textdark">
            Eintragung im Handelsregister.<br>
            Registergericht: Amtsgericht Musterstadt<br>
            Registernummer: HRB 123456
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-primary-500 mb-4">Umsatzsteuer-ID</h2>
          <p class="text-textdark">
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br>
            DE 123456789
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-primary-500 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p class="text-textdark">
            Max Mustermann<br>
            Didoli GmbH<br>
            Musterstraße 1<br>
            12345 Musterstadt
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['close']);
</script> 