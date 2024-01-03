import axios, { AxiosError, AxiosResponse } from "axios"
const controller = new AbortController();


interface Product{
    id:1,
    title:string,
    price:number,
    category:string,
    description:string,
    image: string,
    rating: {
            rate: number,
            count: number
            }
}
            
export const getProducts= (cb:(status:boolean,res:any)=>void) => {
    axios<Product[]>('https://fakestoreapi.com/products', {
        timeout: 5000,
        timeoutErrorMessage:"request timeout",
        signal: controller.signal
    })
        .then(res => {
            cb(true,res.data);
        })
        .catch(err => {
            cb(false, err);
        })
}
export const getProduct = (id:number,cb:(status:boolean,res:any)=>void) => {
    axios<AxiosResponse|AxiosError>('https://fakestoreapi.com/products/'+id)
        .then((res:AxiosResponse) =>cb(true,res.data))
        .catch((err:AxiosError|Error) => cb(false, err))
}