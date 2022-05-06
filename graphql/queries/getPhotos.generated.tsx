import * as Types from '../generated/graphql-types.generated';

import { gql } from '@apollo/client';
import { PhotoEntityFragmentFragmentDoc } from '../fragments/PhotoEntityFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PhotosQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PhotosQuery = { __typename?: 'Query', photos?: { __typename?: 'PhotoEntityResponseCollection', data: Array<{ __typename?: 'PhotoEntity', id?: string | null, attributes?: { __typename?: 'Photo', description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, name: string } | null } | null } | null } | null }> } | null };


export const PhotosDocument = gql`
    query Photos {
  photos {
    data {
      ...PhotoEntityFragment
    }
  }
}
    ${PhotoEntityFragmentFragmentDoc}`;

/**
 * __usePhotosQuery__
 *
 * To run a query within a React component, call `usePhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePhotosQuery({
 *   variables: {
 *   },
 * });
 */
export function usePhotosQuery(baseOptions?: Apollo.QueryHookOptions<PhotosQuery, PhotosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PhotosQuery, PhotosQueryVariables>(PhotosDocument, options);
      }
export function usePhotosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PhotosQuery, PhotosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PhotosQuery, PhotosQueryVariables>(PhotosDocument, options);
        }
export type PhotosQueryHookResult = ReturnType<typeof usePhotosQuery>;
export type PhotosLazyQueryHookResult = ReturnType<typeof usePhotosLazyQuery>;
export type PhotosQueryResult = Apollo.QueryResult<PhotosQuery, PhotosQueryVariables>;