export default function Gallery() {
    return (
        <section id="gallery" className="h-full w-full py-8 lg:py-16">
            <div className="container mx-auto">
                <h3 className="font-medium text-center mb-8 sm:mb-10">Gallery</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                    <div className="flex flex-col gap-3">
                        <img className="w-full h-full object-cover" src="/images/gallery-img-1.jpg" />
                        <img className="w-full h-full object-cover" src="/images/gallery-img-2.jpg" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <img className="w-full h-full object-cover" src="/images/gallery-img-3.jpg" />
                        <img className="w-full h-full object-cover" src="/images/gallery-img-4.jpg" />
                        <img className="w-full h-full object-cover" src="/images/gallery-img-5.jpg" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <img className="w-full h-full object-cover" src="/images/gallery-img-6.jpg" />
                        <img className="w-full h-full object-cover" src="/images/gallery-img-7.jpg" />
                    </div>
                </div>
            </div>
        </section>
    )
}