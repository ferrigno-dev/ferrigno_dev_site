<!-- ./pages/blog/index.vue -->

<script setup>


// get tag query
const {
    query: { tags },
} = useRoute();

const filter = ref(tags?.split(","));


</script>

<template>
    <div class="py-16">
        <div class="flex items-center pb-6">
            <img src="/img/icon-story.png" alt="icon story" width="32" height="44" />
            <h3 class="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
                Blog
            </h3>
        </div>


        <div class="mx-auto py-2 sm:py-2 lg:max-w-7xl">
            <ContentList path="/blog" :query="{
                only: ['title', 'description', '_path'],
                where: {
                    tags: {
                        $contains: filter,
                    },
                },
                $sensitivity: 'base',
            }">
                <template v-slot="{ list }">


                    <NuxtLink class="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
                        :to="article._path" v-for="article in list" :key="article._path">
                        <span class="w-9/10 pr-8">
                            <h4 class="font-body text-lg font-semibold text-primary dark:text-white">
                                {{ article.title }}
                            </h4>
                        </span>
                        <span class="w-1/10">
                            <img src="/img/chevron-right.png" class="mx-auto" alt="chevron right" />
                        </span>
                    </NuxtLink>

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
