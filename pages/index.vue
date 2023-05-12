
<template>
    <div>
        <div>
            <div class="container mx-auto">
                <Hero />

                <AboutMe />
                <HomeMywork />
                <HomeBlog />
            </div>
        </div>
    </div>
</template>

<script setup>
const title = ref('Ferrigno.dev - Web Developer Freelance in Italia')
const description = ref('Ciao, sono Alessandro Ferrigno, appassionato sviluppatore web con una quinquennale esperienza nel settore.Specializzato nello sviluppo di applicazioni web personalizzate, siti web e-commerce, piattaforme di gestione contenuti e altro ancora.')

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