import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { GALLERY_IMAGES } from "@/data/graphql/gallery"
import { ColumnsPhotoAlbum } from "react-photo-album"
import "react-photo-album/columns.css"
import { Skeleton } from "@/components/ui/skeleton";

interface MediaItem {
    mediaItemUrl: string
    altText: string
    caption: string
    description: string
    title: string
    databaseId: number
    mediaDetails: {
        file: string
        height: number
        width: number
    }
}

interface GalleryItem {
    src: string
    height: number
    width: number
}

export default function Gallery() {
    const { error, loading, data } = useQuery(GALLERY_IMAGES)
    const [photos, setPhotos] = useState<GalleryItem[]>([])
    
    useEffect(() => {
        if(data) {
            let items: GalleryItem[] = []
            data.mediaItems.nodes.map((item: MediaItem) => {
                items.push({
                    src: item.mediaItemUrl,
                    height: item.mediaDetails.height,            
                    width: item.mediaDetails.width            
                })
            })
            setPhotos(items)
        }
    }, [data])

    return (
        <section id="gallery" className="h-full w-full py-8 lg:py-16">
            <div className="container mx-auto">
                <h3 className="font-medium text-center mb-8 sm:mb-10">
                    Gallery
                </h3>
                {photos && photos.length !== 0 ? (
                    <div className="mb-4 mx-4">
                        <ColumnsPhotoAlbum
                            photos={photos}
                            spacing={5}
                            breakpoints={[320, 480, 768, 1200]}
                        />
                    </div>
                ) : (
                    <div className="grid grid-cols-12 gap-1 mb-4 mx-4">
                        <div className="col-span-4">
                            <Skeleton className="w-full h-64" />
                        </div>
                        <div className="col-span-4">
                            <Skeleton className="w-full h-64" />
                        </div>
                        <div className="col-span-4">
                            <Skeleton className="w-full h-64" />
                        </div>
                        <div className="col-span-4">
                            <Skeleton className="w-full h-64" />
                        </div>
                        <div className="col-span-4">
                            <Skeleton className="w-full h-64" />
                        </div>
                        <div className="col-span-4">
                            <Skeleton className="w-full h-64" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}