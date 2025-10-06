<template>
    <div class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
  <!-- Select (Mobile only) -->
  <div class="sm:hidden">
    <label for="hs-card-nav" class="sr-only">This is an article with ID = {{ id }}</label>
    <select name="hs-card-nav" id="hs-card-nav" class="block w-full border-t-0 border-x-0 border-gray-300 rounded-t-xl focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
      <option selected="">My Account</option>
      <option>Company</option>
      <option>Team Members</option>
      <option>Billing</option>
    </select>
  </div>
  <!-- End Select (Mobile only) -->

  <!-- Nav (Device only) -->
  <div class="hidden sm:block">
    <nav class="relative z-0 flex border-b border-gray-200 rounded-xl divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
      <a class="group relative min-w-0 flex-1 bg-white py-4 px-4 border-b-2 border-b-blue-600 text-gray-900 rounded-ss-xl text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 focus:z-10 dark:bg-neutral-900 dark:border-b-blue-500 dark:text-neutral-300" aria-current="page" href="#">
        My Account
      </a>

      <a class="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 focus:z-10 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-400 dark:focus:bg-neutral-800 dark:focus:text-neutral-400" href="#">
        Company
      </a>

      <a class="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 focus:z-10 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-400 dark:focus:bg-neutral-800 dark:focus:text-neutral-400" href="#">
        Team Members
      </a>

      <a class="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 rounded-se-xl text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 focus:z-10 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-400 dark:focus:bg-neutral-800 dark:focus:text-neutral-400" href="#">
        Billing
      </a>
    </nav>
  </div>
  <!-- End Nav (Device only) -->

  <div class="p-4 text-center md:py-7 md:px-5">
    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
      Card title
    </h3>
    <p class="mt-2 text-gray-500 dark:text-neutral-400">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <RouterLink to="/blog-posts">
<a class="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
      Back to posts
    </a>
    </RouterLink> 
  </div>
</div>
</template>

<script setup>
    defineProps({
        id: String
    })
</script>