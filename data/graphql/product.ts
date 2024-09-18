import { gql } from "@apollo/client";

export const PRODUCT = gql`
    query Product($id: ID!) {
        product(id: $id, idType: SLUG) {
            databaseId
            name
            reviewCount
            image {
                altText
                mediaItemUrl
            }
            slug
            attributes {
                nodes {
                    label
                    name
                    options
                }
            }
            productCategories {
                nodes {
                    name
                    slug
                }
            }
            ... on SimpleProduct {
                price
                stockQuantity
                image {
                    altText
                    mediaItemUrl
                }
            }
            ... on VariableProduct {
                price
                stockQuantity
                variations {
                    nodes {
                        price
                        stockQuantity
                        image {
                            altText
                            mediaItemUrl
                        }
                        attributes {
                            nodes {
                                name
                                label
                                value
                            }
                        }
                    }
                }
            }
        }
    }
`;