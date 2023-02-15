import gql from 'graphql-tag'

export const createProjectConsultationMutation = gql`
  mutation ($name: String!, $email: String!, $description: String!) {
    createProjectConsultation(name: $name, email: $email, description: $description)
  }
`
