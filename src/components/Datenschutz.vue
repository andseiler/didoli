<template>
  <div class="min-h-screen bg-tertiary-200">
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-primary-500">Datenschutzerklärung</h1>
        <button @click="$emit('close')" class="outline-button">
          Zurück zur Startseite
        </button>
      </div>
      
      <div class="bg-white rounded-xl shadow-sm p-8 space-y-6">
        <section>
          <h2 class="text-xl font-bold text-primary-500 mb-4">Einleitung</h2>
          <p class="text-textdark">
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher
            ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen
            Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen
            unserer Website.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-primary-500 mb-4">Kontakt mit uns</h2>
          <p class="text-textdark">
            Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen
            Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-primary-500 mb-4">Ihre Rechte</h2>
          <p class="text-textdark">
            Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit,
            Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
            verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie
            sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-primary-500 mb-4">Sie erreichen uns unter folgenden Kontaktdaten</h2>
          <p class="text-textdark">
            Didoli GmbH<br>
            Musterstraße 1<br>
            12345 Musterstadt<br>
            E-Mail: info@didoli.de
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['close']);
</script> 