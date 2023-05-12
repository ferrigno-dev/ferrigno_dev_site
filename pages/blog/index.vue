<!-- ./pages/blog/index.vue -->

<template>
    <div class="py-16">
        <div class="flex items-center">
            <img src="/img/icon-story.png" alt="icon story" width="32" height="44" />
            <h3 class="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
                Blog
            </h3>
        </div>


        <div class="mx-auto py-2 sm:py-2 lg:max-w-7xl">
            <ContentList path="/blog" :query="{
                only: ['title', 'description', 'tags', '_path', 'img'],
                where: {
                    tags: {
                        $contains: filter,
                    },
                },
                $sensitivity: 'base',
            }">
                <template v-slot="{ list }">
                    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

                        <div class="group relative" v-for="article in list" :key="article._path">
                            <NuxtLink :to="article._path">
                                <div
                                    class="min-h-50 aspect-[4/3] w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
                                    <img :src="`/${article.img}`" :alt="article.title"
                                        class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <div>
                                        <h3 class="text-sm text-primary dark:text-white">
                                            <a href="#">
                                                <span aria-hidden="true" class="absolute inset-0"></span>
                                                {{ article.title }}
                                            </a>
                                        </h3>
                                        <ul class="article-tags">
                                            <li class="tag !py-0.5" v-for="(tag, n) in article.tags" :key="n">{{ tag }}
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </template>
                <!-- Not found slot to display message when no content us is found -->
                <template #not-found>
                    <p>No articles found.</p>
                </template>
            </ContentList>


            <!-- More products... -->
        </div>

    </div>
</template>


<script setup>


// get tag query
const {
    query: { tags },
} = useRoute();

const filter = ref(tags?.split(","));

// set meta for page
const title = ref('Blog - Ferrigno.dev - Web Developer Freelance in Italia')
const description = ref('Una lista dei miei articoli principali. I temi principali sono: programmazione, how to, tips, tutorial.')

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