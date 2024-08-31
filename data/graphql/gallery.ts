import { gql } from "@apollo/client";

export const GALLERY_IMAGES = gql`
    query MediaItems {
        mediaItems(where: { categoryName: "gallery" }) {
            nodes {
                mediaItemUrl
                altText
                caption
                description
                title
                databaseId
                mediaDetails {
                    file
                    height
                    width
                }
            }
        }
    }
`;
