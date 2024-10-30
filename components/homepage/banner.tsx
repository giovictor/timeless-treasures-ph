import styles from "@/styles/banner.module.css"
const { banner, siteDescription } = styles

export default function Banner() {
    return (
        <section
            className={`${banner} h-full w-full pb-12 relative`}
        >
            <div className="container mx-auto">
                <p className={`${siteDescription} text-center`}>
                    Memories are <i>Timeless Treasures</i> of the Heart
                </p>
                <div className="flex justify-center flex-wrap lg:mt-12">
                    <div className="h-full w-full mb-10 md:mb-0 mx-10 md:mx-0 md:w-6/12 lg:w-4/12 flex justify-center relative lg:bottom-32">
                        <img src="/images/banner-image-1.png" alt="Banner Image 1" />
                    </div>

                    <div className="h-full w-full mb-10 md:mb-0 mx-10 md:mx-0 md:w-6/12 lg:w-4/12 flex justify-center">
                        <img src="/images/banner-image-2.png" alt="Banner Image 2" />            
                    </div>

                    <div className="h-full w-full mb-10 md:mb-0 mx-10 md:mx-0 md:w-6/12 lg:w-4/12 flex justify-center relative lg:bottom-32">
                        <img src="/images/banner-image-3.png" alt="Banner Image 3" />       
                    </div>
                </div>
            </div>
        </section>
    );
}
