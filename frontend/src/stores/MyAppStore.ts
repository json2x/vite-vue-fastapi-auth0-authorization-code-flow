import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
  state: () => ({
    mobileMenuOpen: false,
    isLoggedIn: false,
    accessToken: ''
  }),
  getters: {},
  actions: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    },
    openMobileMenu() {
      this.mobileMenuOpen = true
    },
    login() {
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = false
      this.accessToken = ''
      this.$router.push({ name: 'home' })
    }
  }
})
