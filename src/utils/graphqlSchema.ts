export const userSchema = `
query {
    userQueries {
        content
        replayConnection {
        totalCount
        }
    }
}
`;

export const createCommentOnUserQuerySchema = `
mutation commentOnUserQuery($id: ID!,$replay : String!){
  commentOnUserQuery(queryId: $id,comment: $replay){
     id
    content
    createdAt
     by{
      id
      username
      profilePhotoUrl
      sqlId
    }
  }
}
`;
