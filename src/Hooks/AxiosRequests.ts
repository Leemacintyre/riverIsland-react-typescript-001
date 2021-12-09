import axios, {AxiosResponse,} from "axios";

export const getAllWomenProductData = async (): Promise<{ data: any }> => {
    const {data}: AxiosResponse = await axios.get("https://static-r2.ristack-3.nn4maws.net/v1/plp/en_gb/2506/products.json")
    return {data}
}
