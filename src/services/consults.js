import { apolloClient } from '@/utils/apollo.js'
import { createProjectConsultationMutation } from '@/graphql/consults'

class ConsultsService {
  async createProjectConsultation(name, email, description) {
    const payload = {
      mutation: createProjectConsultationMutation,
      variables: {
        name,
        email,
        description
      }
    }
    try {
      const response = await apolloClient.mutate(payload)
      return response.data.createProjectConsultation
    } catch (error) {
      console.error(error)
      return
    }
  }
}

const consultsService = new ConsultsService()

export { consultsService }
