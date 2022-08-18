import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import {addToCart,removeToCart} from './redux/shopping/actions';

function App() {


  const select = useSelector((state) => state.cartItem);
  const dispatch = useDispatch()

  const handleAddToCart = (id)=>{

    const item = select.products.find(item=> item.id === id)
    dispatch(addToCart(item))
  
    
  }
  const handleRemoveToCart = (id)=>{

    const item = select.products.find(item=> item.id === id)
    dispatch(removeToCart(item))
  
    
  }


  return (
    <div className="bg-gray-50 h-full md:h-screen">
      <div className="grid place-items-center">
        <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
          Shopping Cart
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
          {select?.products?.map((item, idx) => (
            <div
              className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
              key={idx}
            >
              <div className="flex justify-between px-4 items-center">
                <div className="text-lg font-semibold">
                  <p>
                    {item.name} ({item.qty})
                  </p>
                  <p className="text-gray-400 text-base">Tk {item.price}</p>
                </div>
                <div className="text-lg font-semibold">
                  <button onClick={()=> handleAddToCart(item.id)} className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
         
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">

            {select?.products?.map((item, idx) => (

            <div className="flex justify-between border-b-2 mb-2" key={item.id}>
              <div className="text-lg py-2">
                <p>{item.name}</p>
              </div>
              <div className="text-lg py-2">
                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                  <button onClick={()=> handleRemoveToCart(item.id)} className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p>{item.totalThisItem}</p>
                  <button onClick={()=> handleAddToCart(item.id)}  className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            ))}


            

            <div className="flex justify-center items-center text-center">
              <div className="text-xl font-semibold">
                <p>Total Item</p>
                <p className="text-5xl">{select.totalItem}</p>
              </div>
            </div>
          </div>
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-center items-center text-center">
              <div className="text-xl font-semibold">
                <p>Total Price</p>
                <p className="text-5xl">{select.totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
