import { defineStore } from 'pinia'
import { consultsService } from '@/services/consults.js'

export const useConsultsStore = defineStore('consults', {
  actions: {
    async createProjectConsultation(name, email, description) {
      const response = await consultsService.createProjectConsultation(name, email, description)
      return response ? 'submitted' : 'failed'
    }
  }
})
