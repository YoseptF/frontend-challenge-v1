import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents a date and time following the ISO 8601 standard */
  DateTime: any;
  _Any: any;
  _FieldSet: any;
};

export type Comment = {
  __typename?: 'Comment';
  _boolean: Scalars['Boolean'];
  _float: Scalars['Float'];
  _int: Scalars['Int'];
  _nest: Comment;
  _string: Scalars['String'];
  id: Scalars['ID'];
  post: Post;
  text: Scalars['String'];
  user: User;
};


export type Comment_FloatArgs = {
  fixed?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};


export type Comment_IntArgs = {
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};


export type Comment_StringArgs = {
  casing?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  words?: Maybe<Scalars['Int']>;
};


export type CommentTextArgs = {
  length?: Maybe<Scalars['Int']>;
};

export type CommentsWhere = {
  and?: Maybe<Array<CommentsWhere>>;
  id_eq?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_gt?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_le?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
  like?: Maybe<Scalars['String']>;
  not?: Maybe<Array<CommentsWhere>>;
  or?: Maybe<Array<CommentsWhere>>;
  post_and?: Maybe<Array<PostsWhere>>;
  post_date_contains?: Maybe<Scalars['String']>;
  post_date_endswith?: Maybe<Scalars['String']>;
  post_date_eq?: Maybe<Scalars['String']>;
  post_date_exists?: Maybe<Scalars['Boolean']>;
  post_date_in?: Maybe<Array<Scalars['String']>>;
  post_date_neq?: Maybe<Scalars['String']>;
  post_date_nin?: Maybe<Array<Scalars['String']>>;
  post_date_startswith?: Maybe<Scalars['String']>;
  post_id_eq?: Maybe<Scalars['Float']>;
  post_id_exists?: Maybe<Scalars['Boolean']>;
  post_id_ge?: Maybe<Scalars['Float']>;
  post_id_gt?: Maybe<Scalars['Float']>;
  post_id_in?: Maybe<Array<Scalars['ID']>>;
  post_id_le?: Maybe<Scalars['Float']>;
  post_id_lt?: Maybe<Scalars['Float']>;
  post_id_neq?: Maybe<Scalars['Float']>;
  post_id_nin?: Maybe<Array<Scalars['ID']>>;
  post_image_contains?: Maybe<Scalars['String']>;
  post_image_endswith?: Maybe<Scalars['String']>;
  post_image_eq?: Maybe<Scalars['String']>;
  post_image_exists?: Maybe<Scalars['Boolean']>;
  post_image_in?: Maybe<Array<Scalars['String']>>;
  post_image_neq?: Maybe<Scalars['String']>;
  post_image_nin?: Maybe<Array<Scalars['String']>>;
  post_image_startswith?: Maybe<Scalars['String']>;
  post_like?: Maybe<Scalars['String']>;
  post_not?: Maybe<Array<PostsWhere>>;
  post_or?: Maybe<Array<PostsWhere>>;
  post_points_eq?: Maybe<Scalars['Int']>;
  post_points_exists?: Maybe<Scalars['Boolean']>;
  post_points_ge?: Maybe<Scalars['Int']>;
  post_points_gt?: Maybe<Scalars['Int']>;
  post_points_in?: Maybe<Array<Scalars['Int']>>;
  post_points_le?: Maybe<Scalars['Int']>;
  post_points_lt?: Maybe<Scalars['Int']>;
  post_points_neq?: Maybe<Scalars['Int']>;
  post_points_nin?: Maybe<Array<Scalars['Int']>>;
  post_search?: Maybe<Scalars['String']>;
  post_text_contains?: Maybe<Scalars['String']>;
  post_text_endswith?: Maybe<Scalars['String']>;
  post_text_eq?: Maybe<Scalars['String']>;
  post_text_exists?: Maybe<Scalars['Boolean']>;
  post_text_in?: Maybe<Array<Scalars['String']>>;
  post_text_neq?: Maybe<Scalars['String']>;
  post_text_nin?: Maybe<Array<Scalars['String']>>;
  post_text_startswith?: Maybe<Scalars['String']>;
  post_title_contains?: Maybe<Scalars['String']>;
  post_title_endswith?: Maybe<Scalars['String']>;
  post_title_eq?: Maybe<Scalars['String']>;
  post_title_exists?: Maybe<Scalars['Boolean']>;
  post_title_in?: Maybe<Array<Scalars['String']>>;
  post_title_neq?: Maybe<Scalars['String']>;
  post_title_nin?: Maybe<Array<Scalars['String']>>;
  post_title_startswith?: Maybe<Scalars['String']>;
  post_user_id_exists?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_endswith?: Maybe<Scalars['String']>;
  text_eq?: Maybe<Scalars['String']>;
  text_exists?: Maybe<Scalars['Boolean']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_neq?: Maybe<Scalars['String']>;
  text_nin?: Maybe<Array<Scalars['String']>>;
  text_startswith?: Maybe<Scalars['String']>;
  user_age_eq?: Maybe<Scalars['Int']>;
  user_age_exists?: Maybe<Scalars['Boolean']>;
  user_age_ge?: Maybe<Scalars['Int']>;
  user_age_gt?: Maybe<Scalars['Int']>;
  user_age_in?: Maybe<Array<Scalars['Int']>>;
  user_age_le?: Maybe<Scalars['Int']>;
  user_age_lt?: Maybe<Scalars['Int']>;
  user_age_neq?: Maybe<Scalars['Int']>;
  user_age_nin?: Maybe<Array<Scalars['Int']>>;
  user_and?: Maybe<Array<UsersWhere>>;
  user_firstname_contains?: Maybe<Scalars['String']>;
  user_firstname_endswith?: Maybe<Scalars['String']>;
  user_firstname_eq?: Maybe<Scalars['String']>;
  user_firstname_exists?: Maybe<Scalars['Boolean']>;
  user_firstname_in?: Maybe<Array<Scalars['String']>>;
  user_firstname_neq?: Maybe<Scalars['String']>;
  user_firstname_nin?: Maybe<Array<Scalars['String']>>;
  user_firstname_startswith?: Maybe<Scalars['String']>;
  user_id_eq?: Maybe<Scalars['Float']>;
  user_id_exists?: Maybe<Scalars['Boolean']>;
  user_id_ge?: Maybe<Scalars['Float']>;
  user_id_gt?: Maybe<Scalars['Float']>;
  user_id_in?: Maybe<Array<Scalars['ID']>>;
  user_id_le?: Maybe<Scalars['Float']>;
  user_id_lt?: Maybe<Scalars['Float']>;
  user_id_neq?: Maybe<Scalars['Float']>;
  user_id_nin?: Maybe<Array<Scalars['ID']>>;
  user_like?: Maybe<Scalars['String']>;
  user_not?: Maybe<Array<UsersWhere>>;
  user_or?: Maybe<Array<UsersWhere>>;
  user_search?: Maybe<Scalars['String']>;
};

export type CreateCommentInput = {
  post_id: Scalars['ID'];
  text: Scalars['String'];
  user_id: Scalars['ID'];
};

export type CreatePostInput = {
  date: Scalars['String'];
  image: Scalars['String'];
  points: Scalars['Int'];
  text: Scalars['String'];
  title: Scalars['String'];
  user_id: Scalars['ID'];
};

export type CreateUserInput = {
  age: Scalars['Int'];
  firstname: Scalars['String'];
};

export enum MathOptions {
  Ceil = 'CEIL',
  Floor = 'FLOOR',
  Round = 'ROUND'
}

export type Mutation = {
  __typename?: 'Mutation';
  _createSnapshot: Scalars['Boolean'];
  createComment: Comment;
  createPost: Post;
  createUser: User;
  decrementPostPoints?: Maybe<Scalars['Int']>;
  decrementUserAge?: Maybe<Scalars['Int']>;
  deleteComment: Scalars['ID'];
  deletePost: Scalars['ID'];
  deleteUser: Scalars['ID'];
  incrementPostPoints?: Maybe<Scalars['Int']>;
  incrementUserAge?: Maybe<Scalars['Int']>;
  updateComment: Comment;
  updatePost: Post;
  updateUser: User;
};


export type Mutation_CreateSnapshotArgs = {
  key: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDecrementPostPointsArgs = {
  id: Scalars['ID'];
};


export type MutationDecrementUserAgeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationIncrementPostPointsArgs = {
  id: Scalars['ID'];
};


export type MutationIncrementUserAgeArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  input: UpdateCommentInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  input: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  _boolean: Scalars['Boolean'];
  _float: Scalars['Float'];
  _int: Scalars['Int'];
  _nest: Post;
  _string: Scalars['String'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  date: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  points: Scalars['Int'];
  text: Scalars['String'];
  title: Scalars['String'];
  user: User;
};


export type Post_FloatArgs = {
  fixed?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};


export type Post_IntArgs = {
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};


export type Post_StringArgs = {
  casing?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  words?: Maybe<Scalars['Int']>;
};


export type PostCommentsArgs = {
  dir?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  ref?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<CommentsWhere>;
};


export type PostDateArgs = {
  length?: Maybe<Scalars['Int']>;
};


export type PostImageArgs = {
  length?: Maybe<Scalars['Int']>;
};


export type PostPointsArgs = {
  math?: Maybe<MathOptions>;
};


export type PostTextArgs = {
  length?: Maybe<Scalars['Int']>;
};


export type PostTitleArgs = {
  length?: Maybe<Scalars['Int']>;
};

export type PostsWhere = {
  and?: Maybe<Array<PostsWhere>>;
  date_contains?: Maybe<Scalars['String']>;
  date_endswith?: Maybe<Scalars['String']>;
  date_eq?: Maybe<Scalars['String']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  date_in?: Maybe<Array<Scalars['String']>>;
  date_neq?: Maybe<Scalars['String']>;
  date_nin?: Maybe<Array<Scalars['String']>>;
  date_startswith?: Maybe<Scalars['String']>;
  id_eq?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_gt?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_le?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
  image_contains?: Maybe<Scalars['String']>;
  image_endswith?: Maybe<Scalars['String']>;
  image_eq?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  image_in?: Maybe<Array<Scalars['String']>>;
  image_neq?: Maybe<Scalars['String']>;
  image_nin?: Maybe<Array<Scalars['String']>>;
  image_startswith?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  not?: Maybe<Array<PostsWhere>>;
  or?: Maybe<Array<PostsWhere>>;
  points_eq?: Maybe<Scalars['Int']>;
  points_exists?: Maybe<Scalars['Boolean']>;
  points_ge?: Maybe<Scalars['Int']>;
  points_gt?: Maybe<Scalars['Int']>;
  points_in?: Maybe<Array<Scalars['Int']>>;
  points_le?: Maybe<Scalars['Int']>;
  points_lt?: Maybe<Scalars['Int']>;
  points_neq?: Maybe<Scalars['Int']>;
  points_nin?: Maybe<Array<Scalars['Int']>>;
  search?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_endswith?: Maybe<Scalars['String']>;
  text_eq?: Maybe<Scalars['String']>;
  text_exists?: Maybe<Scalars['Boolean']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_neq?: Maybe<Scalars['String']>;
  text_nin?: Maybe<Array<Scalars['String']>>;
  text_startswith?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_endswith?: Maybe<Scalars['String']>;
  title_eq?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_neq?: Maybe<Scalars['String']>;
  title_nin?: Maybe<Array<Scalars['String']>>;
  title_startswith?: Maybe<Scalars['String']>;
  user_age_eq?: Maybe<Scalars['Int']>;
  user_age_exists?: Maybe<Scalars['Boolean']>;
  user_age_ge?: Maybe<Scalars['Int']>;
  user_age_gt?: Maybe<Scalars['Int']>;
  user_age_in?: Maybe<Array<Scalars['Int']>>;
  user_age_le?: Maybe<Scalars['Int']>;
  user_age_lt?: Maybe<Scalars['Int']>;
  user_age_neq?: Maybe<Scalars['Int']>;
  user_age_nin?: Maybe<Array<Scalars['Int']>>;
  user_and?: Maybe<Array<UsersWhere>>;
  user_firstname_contains?: Maybe<Scalars['String']>;
  user_firstname_endswith?: Maybe<Scalars['String']>;
  user_firstname_eq?: Maybe<Scalars['String']>;
  user_firstname_exists?: Maybe<Scalars['Boolean']>;
  user_firstname_in?: Maybe<Array<Scalars['String']>>;
  user_firstname_neq?: Maybe<Scalars['String']>;
  user_firstname_nin?: Maybe<Array<Scalars['String']>>;
  user_firstname_startswith?: Maybe<Scalars['String']>;
  user_id_eq?: Maybe<Scalars['Float']>;
  user_id_exists?: Maybe<Scalars['Boolean']>;
  user_id_ge?: Maybe<Scalars['Float']>;
  user_id_gt?: Maybe<Scalars['Float']>;
  user_id_in?: Maybe<Array<Scalars['ID']>>;
  user_id_le?: Maybe<Scalars['Float']>;
  user_id_lt?: Maybe<Scalars['Float']>;
  user_id_neq?: Maybe<Scalars['Float']>;
  user_id_nin?: Maybe<Array<Scalars['ID']>>;
  user_like?: Maybe<Scalars['String']>;
  user_not?: Maybe<Array<UsersWhere>>;
  user_or?: Maybe<Array<UsersWhere>>;
  user_search?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _aggregation: Scalars['Float'];
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  _typeDefs: Scalars['String'];
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type Query_AggregationArgs = {
  field?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
  stat: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryCommentsArgs = {
  dir?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  ref?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<CommentsWhere>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  dir?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  ref?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<PostsWhere>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  dir?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  ref?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<UsersWhere>;
};

export type UpdateCommentInput = {
  post_id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
};

export type UpdatePostInput = {
  date?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  age?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _boolean: Scalars['Boolean'];
  _float: Scalars['Float'];
  _int: Scalars['Int'];
  _nest: User;
  _string: Scalars['String'];
  age: Scalars['Int'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  firstname: Scalars['String'];
  id: Scalars['ID'];
  posts?: Maybe<Array<Maybe<Post>>>;
};


export type User_FloatArgs = {
  fixed?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};


export type User_IntArgs = {
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};


export type User_StringArgs = {
  casing?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  words?: Maybe<Scalars['Int']>;
};


export type UserAgeArgs = {
  math?: Maybe<MathOptions>;
};


export type UserCommentsArgs = {
  dir?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  ref?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<CommentsWhere>;
};


export type UserFirstnameArgs = {
  length?: Maybe<Scalars['Int']>;
};


export type UserPostsArgs = {
  dir?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  ref?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<PostsWhere>;
};

export type UsersWhere = {
  age_eq?: Maybe<Scalars['Int']>;
  age_exists?: Maybe<Scalars['Boolean']>;
  age_ge?: Maybe<Scalars['Int']>;
  age_gt?: Maybe<Scalars['Int']>;
  age_in?: Maybe<Array<Scalars['Int']>>;
  age_le?: Maybe<Scalars['Int']>;
  age_lt?: Maybe<Scalars['Int']>;
  age_neq?: Maybe<Scalars['Int']>;
  age_nin?: Maybe<Array<Scalars['Int']>>;
  and?: Maybe<Array<UsersWhere>>;
  firstname_contains?: Maybe<Scalars['String']>;
  firstname_endswith?: Maybe<Scalars['String']>;
  firstname_eq?: Maybe<Scalars['String']>;
  firstname_exists?: Maybe<Scalars['Boolean']>;
  firstname_in?: Maybe<Array<Scalars['String']>>;
  firstname_neq?: Maybe<Scalars['String']>;
  firstname_nin?: Maybe<Array<Scalars['String']>>;
  firstname_startswith?: Maybe<Scalars['String']>;
  id_eq?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_gt?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_le?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
  like?: Maybe<Scalars['String']>;
  not?: Maybe<Array<UsersWhere>>;
  or?: Maybe<Array<UsersWhere>>;
  search?: Maybe<Scalars['String']>;
};

export type _Entity = Comment | Post | User;

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type AllPostsQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
}>;


export type AllPostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, title: string, text: string, date: string, points: number, image: string, user: { __typename?: 'User', id: string }, comments?: Array<{ __typename?: 'Comment', text: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined };


export const AllPostsDocument = gql`
    query allPosts($page: Int) {
  posts(page: $page, limit: 10) {
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
    `;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
      }
export function useAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<AllPostsQuery, AllPostsQueryVariables>;