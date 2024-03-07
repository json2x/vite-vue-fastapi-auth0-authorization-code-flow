<template>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="text-center">
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Logging in...
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  import { useAppStore } from '@/stores/MyAppStore'
  import { storeToRefs } from 'pinia'
  
  const appStore = useAppStore()
  const { isLoggedIn, accessToken } = storeToRefs(appStore)
  
  const route = useRoute()
  const router = useRouter()

  const appDomain = import.meta.env.VITE_APP_DOMAIN
  const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN
  const clinetId = import.meta.env.VITE_AUTH0_CLIENT_ID
  const clinetSecret = import.meta.env.VITE_AUTH0_CLIENT_SECRET

  const getAccessToken = async (code) => {
    try {
      const response = await fetch(`https://${auth0Domain}/oauth/token`, {
        method: 'POST',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: `${clinetId}`,
            client_secret: `${clinetSecret}`,
            code: `${code}`,
            redirect_uri: `https://${appDomain}/`
        })
      })

      if(response.status === 200){
        const data = await response.json()
        accessToken.value = data
        isLoggedIn.value = true
      }else{
        throw new Error(response.statusText)
      }
      
    } catch (error) {
      console.error('Error:', error)
    }
  }
  
  onMounted(async() => {
    if(route.query.code){
      await getAccessToken(route.query.code);  
    }
    
    router.push({ name: 'home' })
  })
  </script>
  