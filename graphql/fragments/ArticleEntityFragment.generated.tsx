import * as Types from '../generated/graphql-types.generated';

import { gql } from '@apollo/client';
export type ArticleEntityFragmentFragment = { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, slug: string, title?: string | null, content?: string | null } | null };

export const ArticleEntityFragmentFragmentDoc = gql`
    fragment ArticleEntityFragment on ArticleEntity {
  id
  attributes {
    createdAt
    updatedAt
    publishedAt
    slug
    title
    content
  }
}
    `;