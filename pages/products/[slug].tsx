import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { PRODUCT } from "@/data/graphql/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function Product() {
    const router = useRouter();
    const { data, loading, error } = useQuery(PRODUCT, {
        variables: { id: router.query.slug },
    });

    useEffect(() => {
        console.log("loading", loading);
        console.log("error", error);
        console.log("data", data);
    }, [data]);

    return (
        <section
            id="product"
            className="h-full px-4 sm:px-8 py-8 sm:py-12 lg:py-16"
        >
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {data?.product ? (
                        <>
                            <div className="w-full h-full lg:w-6/12 p-6 lg:p-12">
                                <img src={data.product.image.mediaItemUrl} />
                            </div>

                            <div className="w-full h-full lg:w-6/12 p-6 lg:p-12">
                                <h3 className="product-name text-3xl mb-8">{data.product.name}</h3>
                                <p className="product-price text-2xl mb-8">{data.product.price}</p>
                            </div>
                        </>
                    ) : (
                        <div className="spinner h-96 w-full flex justify-center items-center">
                            <FontAwesomeIcon
                                icon={faCircleNotch}
                                size="xl"
                                spin
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
