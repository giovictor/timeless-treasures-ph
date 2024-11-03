import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { PRODUCTS } from "@/data/graphql/products-list";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "@/styles/products.module.css";
const { productsContainer, spinner } = styles
export default function Products() {
    const router = useRouter();
    const categoryName = (router?.query?.slug as string)?.split("-").join(" ");

    const { loading, error, data } = useQuery(PRODUCTS, {
        variables: { category: router.query.slug },
    });

    return (
        <section
            id="products"
            className={`${productsContainer} h-full px-4 sm:px-8 py-8 sm:py-12 lg:py-16`}
        >
            <div className="container mx-auto">
                <h3 className="font-medium capitalize mb-8 sm:mb-10">
                    {categoryName}
                </h3>
                <div className="flex flex-wrap">
                    {!loading ? (
                        data?.products?.nodes && data?.products?.nodes.length !== 0 ? (
                            data?.products?.nodes.map((product: any) => (
                                <div
                                    className="w-full h-full sm:w-6/12 md:w-4/12 xl:w-3/12"
                                    key={product.databaseId}
                                >
                                    <Link href={`/products/${product.slug}`}>
                                        <div className={`${styles.product} m-4 pb-4 cursor-pointer`}>
                                            <img
                                                src={product.image.mediaItemUrl}
                                                className="w-full"
                                            />
                                            <div className="px-4">
                                                <p className="text-sm h-8 leading-4 my-2 line-clamp-2 text-ellipsis hover:underline font-bold">
                                                    {product.name}
                                                </p>
                                                <p className="text-md font-medium mt-2 mb-4">
                                                    {product.formattedPrice}
                                                </p>
                                                <Button className="w-full">
                                                    View Product
                                                </Button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <span className="h-96 text-md py-4">No products available for {categoryName}.</span>
                        )
                    ) : (
                        <div className={`${spinner} h-96 w-full flex justify-center items-center`}>
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
