// 'use client' -> 맨 위에 이렇게 작성 해놓으면 use client가 됨 -> onclick이나 useEffect 사용 가능
import { age, name } from './data';
import Hi from './hi';

export default function Cart() {
  let 장바구니 : string[] = ['Tomatoes', 'Pasta']

  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <CartItem item = {장바구니[0]} />
      <CartItem item = {장바구니[1]} />
      <Banner content = "롯데카드" />
      <Banner content = "현대카드" />
      <Button color = 'blue' />
    </div>
  )
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>
}

function Button(props) {
  return <button style={{color : props.color}} > 하이 </button>
}


// server component -> 아무데나 만든거 : 로딩 속도가 빠르다.
function CartItem(props) {
  return (
    <div>
      <div className="cart-item">
        <p>{props.item}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </div>
  )
}