/* eslint-disable react/prop-types */


import { useEffect,useRef,useContext } from "react"
import { useSelector } from "react-redux"
import { DarkMode } from "../../context/DarkMode"
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContex";
import { RootState } from "../../redux/store";
  
// }

const TableCart = ({ products }: { products:TypeProducts }) => {
  const cart = useSelector((state:RootState) => state.cart.data);
  // const [total, setTotal] = useState(0);
  const { isDark } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const {total} = useTotalPrice()
  
  useEffect(() => {
    console.log('called', cart.length, products.length);
    if (cart.length > 0 && products.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        if (product) return acc + product.price * item.qty;
        return acc;
      }, 0);
      // setTotal(sum);
      dispatch({
        type: 'UPDATE',
        payload: {
          total: sum
        }
      });
          
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, products]);

  const totalRef = useRef<HTMLTableRowElement>(null);
  useEffect(() => {
    if (totalRef.current) { 
      if (cart.length > 0 && products.length > 0) {
        totalRef.current.style.display = 'table-row'
      } else {
        totalRef.current.style.display = 'none'
      }
    }
  }, [cart, products]);

  return (
    <table className={`text-left table-auto border-separate border-spacing-x-3 ${isDark && 'text-slate-300'}`}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className="text-xs">
        {cart.map(item => {
          const product = products.find(p => p.id == item.id)
          if (product) {
            return (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price.toLocaleString('id-ID', { maximumFractionDigits: 0, style: 'currency', currency: 'IDR' })}</td>
                <td>{item.qty}</td>
                <td className="">{(item.qty * product.price).toLocaleString('en-US', { maximumFractionDigits: 0, style: 'currency', currency: 'USD' })}</td>
              </tr>
            )
          }
        })}
        <tr ref={totalRef} className="font-bold text-md" >
          <td colSpan={3} className="text-center">Total</td>
          <td className="text-right">{total.toLocaleString('en-US', { maximumFractionDigits: 0, style: 'currency', currency: 'USD' })}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableCart
