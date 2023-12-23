import axios from "axios"
const controller = new AbortController();

            
export const getProducts = (cb = () => { }) => {
    axios('https://fakestoreapi.com/products', {
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
export const getProduct = (id,cb = () => { }) => {
    axios('https://fakestoreapi.com/products/'+id)
        .then(res => {
            cb(true,res.data);
        })
        .catch(err => {
            cb(false, err);
        })
}