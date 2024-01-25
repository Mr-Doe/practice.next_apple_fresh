import { age, name } from "./data"

export default function Cart() {
    let bucket = ['Tomatoes', 'Pasta']
    return (
      <div>
        <h4 className="title">Cart</h4>
        <CartItem item={ bucket[0] } />
        <CartItem item={ bucket[1] } />
        <Banner name="현대" />
      </div>
    )
  }

  function Banner(props) {
    return <h5>{ props.name }카드 결제 행사중</h5>
  }

  function CartItem(props) {
    return (
        <div className="cart-item">
          <p>{ props.item }</p>
          <p>$40</p>
          <p>1개</p>
        </div>
    )
  }