<template>
  <div>
    <div class="container max-sm:px-8">
      <div class="flex items-center justify-between py-6 lg:py-10">
        <a href="/" class="flex items-center">
          <span href="/" class="mr-2 rounded-full">
            <img class="rounded-full" width="70px" height="70px" src="/img/af-logo.png" alt="logo" />
          </span>
          <p class="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block"></p>
        </a>
        <div class="flex items-center lg:hidden">
          <SwitchTheme class="px-4" />

          <button @click="OpenMobileMenu()"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
            class="fill-current text-primary dark:text-white">
            <g fill-rule="evenodd">
              <rect width="24" height="3" rx="1.5" />
              <rect x="8" y="6" width="16" height="3" rx="1.5" />
              <rect x="4" y="12" width="20" height="3" rx="1.5" />
            </g>
          </svg>
        </button>
        </div>
        <div class="hidden lg:block">
          <ul class="flex items-center">
            <li class="group relative mr-6 mb-1">
              <div
                class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow">
              </div>
              <NuxtLink to="/"
                class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">
                Intro</NuxtLink>
            </li>

            <li class="group relative mr-6 mb-1">
              <div
                class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow">
              </div>
              <NuxtLink to="/blog"
                class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">
                Blog</NuxtLink>
            </li>


            <li class="group relative mr-6 mb-1">
              <div
                class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow">
              </div>
              <NuxtLink to="/contact"
                class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">
                Scrivimi</NuxtLink>
            </li>
            <li>
              <SwitchTheme />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class=" fixed inset-0 z-50 flex bg-black bg-opacity-90 transition-opacity lg:hidden" :class="MobileMenu == 'open-menu' ? 'opacity-100' : 'opacity-0 pointer-events-none'"
       >
      <div class="ml-auto w-2/3 bg-green p-4 md:w-1/3">
        <i class="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl dark:text-white"></i>
        <ul class="mt-8 flex flex-col z-100">
          <li class="">
            <NuxtLink @click="OpenMobileMenu()" href="/" class="mb-3 block px-2 font-body text-lg font-medium text-white ">Intro</NuxtLink>
          </li>

          <li class="">
            <NuxtLink @click="OpenMobileMenu()" to="/blog" class="mb-3 block px-2 font-body text-lg font-medium text-white">Blog</NuxtLink>
          </li>

          <li class="">
            <NuxtLink @click="OpenMobileMenu()" to="/contact" class="mb-3 block px-2 font-body text-lg font-medium text-white">Scrivimi</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script setup>
const MobileMenu = ref('close-menu');
const OpenMobileMenu = () => {
  if (MobileMenu.value == "close-menu") {
    MobileMenu.value = "open-menu";
   
  } else {
    MobileMenu.value = "close-menu";
  }
};
</script>


