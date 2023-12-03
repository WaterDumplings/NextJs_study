// 'use client' -> 맨 위에 이렇게 작성 해놓으면 use client가 됨 -> onclick이나 useEffect 사용 가능
import { age, name } from './data';
import Hi from './hi';

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      {
        <Hi/>
      }
      <div className="cart-item">
        <p>상품명 {age}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <CartItem />
    </div>
  )
}

// server component -> 아무데나 만든거 : 로딩 속도가 빠르다.
function CartItem(props) {
  return (
    <div>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </div>
  )
}