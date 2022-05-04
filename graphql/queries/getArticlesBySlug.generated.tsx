import * as Types from '../generated/graphql-types.generated';

import { gql } from '@apollo/client';
import { ArticleEntityFragmentFragmentDoc } from '../fragments/ArticleEntityFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetArticlesBySlugQueryVariables = Types.Exact<{
  filters?: Types.InputMaybe<Types.ArticleFiltersInput>;
}>;


export type GetArticlesBySlugQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, slug: string, title?: string | null, content?: string | null } | null }> } | null };


export const GetArticlesBySlugDocument = gql`
    query GetArticlesBySlug($filters: ArticleFiltersInput) {
  articles(filters: $filters) {
    data {
      ...ArticleEntityFragment
    }
  }
}
    ${ArticleEntityFragmentFragmentDoc}`;

/**
 * __useGetArticlesBySlugQuery__
 *
 * To run a query within a React component, call `useGetArticlesBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlesBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlesBySlugQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetArticlesBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetArticlesBySlugQuery, GetArticlesBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticlesBySlugQuery, GetArticlesBySlugQueryVariables>(GetArticlesBySlugDocument, options);
      }
export function useGetArticlesBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticlesBySlugQuery, GetArticlesBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticlesBySlugQuery, GetArticlesBySlugQueryVariables>(GetArticlesBySlugDocument, options);
        }
export type GetArticlesBySlugQueryHookResult = ReturnType<typeof useGetArticlesBySlugQuery>;
export type GetArticlesBySlugLazyQueryHookResult = ReturnType<typeof useGetArticlesBySlugLazyQuery>;
export type GetArticlesBySlugQueryResult = Apollo.QueryResult<GetArticlesBySlugQuery, GetArticlesBySlugQueryVariables>;