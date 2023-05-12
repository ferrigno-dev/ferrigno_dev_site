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
            <img src="/img/icon-project.png" alt="icon story" width="32" height="44" />
            <h3 class="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
                My Works
            </h3>
        </div>
        <div class="">


            <div class="mx-auto py-2 sm:py-2 lg:max-w-7xl">

                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    <ContentList path="/works" :query="{
                        only: ['title', 'description', '_path', 'img'],
                        where: {
                            tags: {
                                $contains: filter,
                            },
                        },
                        $sensitivity: 'base',
                    }">
                        <template v-slot="{ list }">

                            <div class="group relative" :to="article._path" v-for="article in list" :key="article._path">
                                <NuxtLink :to="article._path">
                                    <div
                                        class="min-h-50 aspect-[4/3] w-full overflow-hidden rounded-lg bg-white lg:aspect-none group-hover:opacity-75 lg:h-50">
                                        <img :src="article.img" :alt="article.title"
                                            class="h-full w-full object-fill object-center lg:h-full lg:w-full">
                                    </div>
                                    <div class="mt-4 flex justify-between">
                                        <div>
                                            <h3 class="text-sm text-primary dark:text-white">
                                                <a href="#">
                                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                                    {{ article.title }}
                                                </a>
                                            </h3>
                                            <p class="mt-1 text-sm text-primary dark:text-gray-200">{{ article.description
                                            }}
                                            </p>
                                        </div>

                                    </div>
                                </NuxtLink>
                            </div>
                        </template>
                    </ContentList>

                    <!-- More products... -->
                </div>
            </div>

        </div>
    </div>
</template>