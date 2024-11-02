import { useRouter } from "next/router";
import { useState, useMemo, ChangeEvent } from "react";
import { useQuery } from "@apollo/client";
import { PRODUCT } from "@/data/graphql/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import styles from "@/styles/products.module.css";
const { productContainer, productName, productPrice, spinner } = styles
export default function Product() {
    const router = useRouter();
    const { data, loading, error } = useQuery(PRODUCT, {
        variables: { id: router.query.slug },
    });

    const [selectedVariation, setSelectedVariation] = useState<any>({});
    const [quantity, setQuantity] = useState<string>("1");

    const variationPriceList = useMemo(() => {
        return data?.product?.variations?.nodes.map((variation: any) => {
            let attributes:any = {}
            variation.attributes.nodes.forEach((attribute: any) => {
                attributes[attribute.label] = attribute.value
            })
            return {
                rawPrice: variation.rawPrice,
                formattedPrice: variation.formattedPrice,
                ...attributes
            }
        })
    }, [data])

    const computedPrice = useMemo(() => {
        if(data?.product?.variations?.nodes) {
            if (Object.keys(selectedVariation).length === 0) {
                return null;
            }

            let selectedVariationPrice = variationPriceList?.filter((variation: any) => {
                return Object.keys(selectedVariation).every((key) => {
                    return selectedVariation[key] == variation[key]
                })
            })

            if(selectedVariationPrice?.length === 0) {
                return null
            }

            let pricePerQuantity = Number(selectedVariationPrice[0]?.rawPrice) * Number(quantity)
            let currencySymbol = selectedVariationPrice[0]?.formattedPrice[0]
            return `${currencySymbol}${pricePerQuantity.toFixed(2)}`
        } else {
            let pricePerQuantity = Number(data?.product?.rawPrice) * Number(quantity)
            let currencySymbol = data?.product?.formattedPrice[0]
            return `${currencySymbol}${pricePerQuantity.toFixed(2)}`
        }
    }, [data, selectedVariation, quantity]);

    const handleVariationChange = (e: ChangeEvent<HTMLSelectElement>) => {
       setSelectedVariation((prevState: any) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
        setQuantity(e.target.value)
    }

    const decreaseQuantity = () => {
        if(Number(quantity) > 1) {
            setQuantity((prevState) => {
                let updatedQuantity = Number(prevState) - 1
                return String(updatedQuantity)
            })
        }
    }

    const increaseQuantity = () => {
        setQuantity((prevState) => {
            let updatedQuantity = Number(prevState) + 1
            return String(updatedQuantity)
        })
    }

    return (
        <section
            id="product"
            className={`${productContainer} h-full px-4 sm:px-8 py-8 sm:py-12 lg:py-16`}
        >
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {!loading && data?.product ? (
                        <>
                            <div className="w-full h-full lg:w-6/12 p-6 lg:p-12">
                                <img src={data?.product?.image?.mediaItemUrl} />
                            </div>

                            <div className="w-full h-full lg:w-6/12 p-6 lg:p-12">
                                <h3 className={`${productName} text-3xl mb-8`}>
                                    {data?.product?.name}
                                </h3>
                                <p className={`${productPrice} text-2xl mb-8`}>
                                    {data?.product?.variations?.nodes ? data?.product?.formattedPrice : computedPrice}
                                </p>
                                {data?.product?.attributes?.nodes &&
                                    data.product.attributes.nodes.map(
                                        (attribute: any, index: number) => (
                                            <div
                                                className="variationField mb-8"
                                                key={index}
                                            >
                                                <label className="block">
                                                    {attribute.label}
                                                </label>
                                                <select className="w-4/12" name={attribute.label} onChange={handleVariationChange} value={selectedVariation[attribute.label] || ""}>
                                                    <option value="" disabled>Choose {attribute.label.toLowerCase()}</option>
                                                    {attribute.options.map(
                                                        (option: any, optionIndex: number) => (
                                                            <option
                                                                value={option}
                                                                key={optionIndex}
                                                            >
                                                                {option}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                        )
                                    )}
                                <div className="flex w-full items-center my-4">
                                    <label className="mr-5">Quantity</label>
                                    <div className="flex">
                                        <Button type="button" className="rounded-none" onClick={decreaseQuantity}>
                                            <FontAwesomeIcon
                                                icon={faMinus}
                                            />
                                        </Button>
                                        <Input type="number" min="1" max="100" className="w-20 rounded-none" onChange={handleQuantity} value={quantity} />
                                        <Button type="button" className="rounded-none"  onClick={increaseQuantity}>
                                            <FontAwesomeIcon
                                                icon={faPlus}
                                            />
                                        </Button>
                                    </div>
                                </div>

                                {Object.keys(selectedVariation).length !== 0 && computedPrice && (
                                    <p className={`${productPrice} text-2xl mb-8`}>
                                        {computedPrice}
                                    </p>
                                )}

                                <div className="my-4">
                                    <p>Note:</p>
                                    <p>Cart page is under construction. To buy products kindly send us your inquiry via contact form or message us on our social media accounts directly.</p>
                                </div>
                            </div>
                        </>
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
