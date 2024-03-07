<template>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="text-center">
        <p class="mt-6 text-lg leading-8 text-gray-600">
          The page you're requesting requires you to be logged in. Please log in to continue.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
        <a
          :href="loginUrl"
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Login</a
        >
      </div>
      </div>
    </div>
  </template>
  
<script setup>
const appDomain = import.meta.env.VITE_APP_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN

const loginUrl =
  `https://${auth0Domain}/authorize` +
  `?response_type=code` +
  `&client_id=${clientId}` +
  `&redirect_uri=https://${appDomain}/login` +
  `&scope=openid%20profile` +
  `&state=xyzABC123`

// const loginUrl = '/login'
  </script>
  