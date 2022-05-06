import * as Types from '../generated/graphql-types.generated';

import { gql } from '@apollo/client';
export type PhotoEntityFragmentFragment = { __typename?: 'PhotoEntity', id?: string | null, attributes?: { __typename?: 'Photo', description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, name: string } | null } | null } | null } | null };

export const PhotoEntityFragmentFragmentDoc = gql`
    fragment PhotoEntityFragment on PhotoEntity {
  id
  attributes {
    description
    image {
      data {
        id
        attributes {
          url
          name
        }
      }
    }
  }
}
    `;