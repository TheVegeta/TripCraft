import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type IGoogleAuthInput = {
  jwt: Scalars['String']['input'];
};

export type IGoogleAuthResponse = {
  __typename?: 'IGoogleAuthResponse';
  jwt: Scalars['String']['output'];
  msg: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authMobileUser: IGoogleAuthResponse;
};


export type MutationAuthMobileUserArgs = {
  options: IGoogleAuthInput;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String']['output'];
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  picture: Scalars['String']['output'];
};

export type AuthMobileUserMutationVariables = Exact<{
  options: IGoogleAuthInput;
}>;


export type AuthMobileUserMutation = { __typename?: 'Mutation', authMobileUser: { __typename?: 'IGoogleAuthResponse', success: boolean, msg: string, jwt: string, user?: { __typename?: 'User', _id: string, name: string, email: string, picture: string } | null } };

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', hello: string };


export const AuthMobileUserDocument = gql`
    mutation AuthMobileUser($options: IGoogleAuthInput!) {
  authMobileUser(options: $options) {
    success
    msg
    jwt
    user {
      _id
      name
      email
      picture
    }
  }
}
    `;
export type AuthMobileUserMutationFn = Apollo.MutationFunction<AuthMobileUserMutation, AuthMobileUserMutationVariables>;

/**
 * __useAuthMobileUserMutation__
 *
 * To run a mutation, you first call `useAuthMobileUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthMobileUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authMobileUserMutation, { data, loading, error }] = useAuthMobileUserMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useAuthMobileUserMutation(baseOptions?: Apollo.MutationHookOptions<AuthMobileUserMutation, AuthMobileUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthMobileUserMutation, AuthMobileUserMutationVariables>(AuthMobileUserDocument, options);
      }
export type AuthMobileUserMutationHookResult = ReturnType<typeof useAuthMobileUserMutation>;
export type AuthMobileUserMutationResult = Apollo.MutationResult<AuthMobileUserMutation>;
export type AuthMobileUserMutationOptions = Apollo.BaseMutationOptions<AuthMobileUserMutation, AuthMobileUserMutationVariables>;
export const QueryDocument = gql`
    query Query {
  hello
}
    `;

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryQuery(baseOptions?: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
      }
export function useQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export function useQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QuerySuspenseQueryHookResult = ReturnType<typeof useQuerySuspenseQuery>;
export type QueryQueryResult = Apollo.QueryResult<QueryQuery, QueryQueryVariables>;