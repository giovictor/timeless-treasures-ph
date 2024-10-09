import { gql } from "@apollo/client";

export const PRODUCTS = gql`
    query Products($category: String) {
        products(where: { category: $category }) {
            nodes {
                databaseId
                name
                reviewCount
                slug
                image {
                    altText
                    mediaItemUrl
                }
                ... on SimpleProduct {
                    rawPrice: price(format: RAW)
                    formattedPrice: price(format: FORMATTED)
                    productCategories {
                        nodes {
                            name
                            slug
                        }
                    }
                }
                ... on VariableProduct {
                    rawPrice: price(format: RAW)
                    formattedPrice: price(format: FORMATTED)
                    productCategories {
                        nodes {
                            name
                            slug
                        }
                    }
                }
            }
        }
    }
`;
