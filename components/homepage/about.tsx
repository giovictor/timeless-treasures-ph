import styles from "@/styles/about.module.css";
const { aboutUs } = styles;

export default function About() {
    return (
        <section
            id="about-us"
            className={`${aboutUs} h-full w-full flex flex-col justify-center py-8 sm:py-12 lg:py-16 relative bg-cover bg-no-repeat bg-center`}
        >
            <div className="container mx-auto z-10">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 mb-8 sm:mb-16 lg:mb-0 mx-12 md:mx-24 lg:mx-48 xl:mx-64">
                        <h3 className="font-medium mb-4 sm:mb-8 text-center lg:text-left relative">
                            About Us
                        </h3>
                        <div className="font-light text-center lg:text-left relative">
                            <p className="mb-8">
                                Hi! We are Timeless Treasures. We want to make
                                your events unique and memorable through the
                                years! We believe in products that guests can
                                use even after the event. We design things to
                                look personalized yet usable for daily use.
                            </p>
                            <p className="mb-8">
                                Quality Product – We work hard to create quality
                                products that creates memories and puts a smile
                                on our clients’ faces.
                            </p>
                            <p className="mb-8">
                                Professional Staffs – Working with each couple’s
                                love story we cater to them professionally and
                                personable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
