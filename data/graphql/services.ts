import { gql } from "@apollo/client";

export const SERVICES_LIST = gql`
    query Services {
        productCategories {
            nodes {
                databaseId
                name
                image {
                    sourceUrl
                }
                slug
            }
        }
    }
`;
