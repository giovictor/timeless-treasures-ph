import { gql } from "@apollo/client";

export const TESTIMONIALS_LIST = gql`
    query Testimonials {
        testimonials {
            nodes {
                databaseId
                title
                content
                featuredImage {
                    node {
                        mediaItemUrl
                    }
                }
            }
        }
    }
`;
