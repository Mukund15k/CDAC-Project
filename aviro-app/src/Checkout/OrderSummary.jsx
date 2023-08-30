import { createPayment } from "../State/Payment/Action"


useEffect(()=>{
    dispatch(getOrderbyId(orderId))
},[orderId])

const handleCheckout=()=>{
    dispatch(createPayment(orderId))
}