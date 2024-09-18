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
                    price
                    productCategories {
                        nodes {
                            name
                            slug
                        }
                    }
                }
                ... on VariableProduct {
                    price
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
