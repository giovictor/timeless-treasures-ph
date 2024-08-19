import { gql } from "@apollo/client";

export const SERVICES_LIST = gql`
    query Services {
        productCategories(
            where: {
                slug: [
                    "best-sellers"
                    "digital-products"
                    "personalized-products"
                    "rentals"
                ]
                orderby: TERM_ID
                order: ASC
            }
        ) {
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
