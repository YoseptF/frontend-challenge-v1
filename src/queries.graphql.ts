import { gql } from '@apollo/client'

export const allPosts = gql`
query allPosts($page: Int){
  posts(page: $page, limit: 10){
    id
    user {
      id
    }
    title
    text
    date
    points
    image
    comments {
      text
    }
  }
}
`

export {}