export default function Banner() {
    return (
        <section
            id="banner"
            className="h-full w-full pb-12 relative"
        >
            <div className="container mx-auto">
                <p className="site-description text-center">
                    Memories are <i>Timeless Treasures</i> of the Heart
                </p>
                <div className="flex justify-center flex-wrap mt-12">
                    <div className="h-full w-full sm:w-6/12 md:w-4/12 flex justify-center relative bottom-32">
                        <img src="/images/banner-image-1.png" alt="Banner Image 1" />
                    </div>

                    <div className="h-full w-full sm:w-6/12 md:w-4/12 flex justify-center">
                        <img src="/images/banner-image-2.png" alt="Banner Image 2" />            
                    </div>

                    <div className="h-full w-full sm:w-6/12 md:w-4/12 flex justify-center relative bottom-32">
                        <img src="/images/banner-image-3.png" alt="Banner Image 3" />       
                    </div>
                </div>
            </div>
        </section>
    );
}
