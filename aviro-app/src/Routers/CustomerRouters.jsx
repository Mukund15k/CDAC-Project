<div>

<Route path='/login' element={<HomePage/>}></Route>
<Route path='/register' element={<HomePage/>}></Route>

<Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
<Route path='/payment/order/:orderId' element={<PaymentSuccess/>}></Route>

</div>