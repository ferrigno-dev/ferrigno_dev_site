<template>
  <div>
    <div class="container mx-auto">
      <div class="py-16 lg:py-20">
        <div class="inline-flex align-middle items-center	">
          <img class="max-h-8 mr-4" src="/img/icon-contact.png" alt="icon envelope" />
          <h1 class="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-4xl lg:text-4xl mb-5">
            Scrivimi
          </h1>
        </div>

        <div class="pr-2 pt-6 sm:pt-0">
          <p class="font-body text-xl font-light text-primary dark:text-white">
            Vuoi richiedere una consulenza per un sito, hai un problema con il tuo progetto oppure vuoi
            semplicemente scambiare 4 parole? Sentiamoci!
          </p>
        </div>
        <form class="pt-16" action="https://formspree.io/f/mbjeqeyw" method="POST">
          <div class="flex flex-col sm:flex-row">
            <div class="w-full sm:mr-3 sm:w-1/2">
              <label class="block pb-3 font-body font-medium text-primary dark:text-white">Il tuo nome</label>
              <input type="text" id="name" name="name" placeholder="Come ti chiami?"
                class="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-white" />
            </div>
            <div class="w-full pt-6 sm:ml-3 sm:w-1/2 sm:pt-0">
              <label class="block pb-3 font-body font-medium text-primary dark:text-white">Il tuo indirizzo Email</label>
              <input type="email" id="email" name="email" placeholder="La mail a cui potrò risponderti..."
                class="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-white" />
            </div>
          </div>
          <div class="w-full pt-6 sm:pt-10">
            <label class="block pb-3 font-body font-medium text-primary dark:text-white">Messaggio</label>
            <textarea id="message" name="message" cols="30" rows="9"
              placeholder="Scrivimi tutto ciò che dovrei sapere in merito alla tua richiesta..."
              class="w-full border border-primary bg-grey-lightest px-5 py-4 font-body text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
          </div>
          <button type="submit"
            class="bg-teal-700 hover:bg-opacity-80 mt-10 mb-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl">
            Invia messaggio
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>
const title = ref('Scrivimi - Ferrigno.dev - Web Developer Freelance in Italia')
const description = ref('Vuoi richiedere una consulenza per un sito, hai un problema con il tuo progetto oppure vuoi semplicemente scambiare 4 parole? Sentiamoci!')
useHead({
  title: title.value,
  meta: [
  {name:"og:title", property:"og:title", content: title.value,},
  {name:'description',content:description.value},
  {name:'og:description',property:'og:description',content:description.value},
  {name:'og:locale', property:'og:locale', content:'it_IT'},
  {name:'og:site_name', property:'og:site_name', content:'Ferrigno.dev'}
]})
</script>