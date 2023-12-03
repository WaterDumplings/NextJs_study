import Image from "next/image";;

export default function List() {
  let 상품 : string[] = ['Tomatoes', 'Pasta', 'Coconut'];
  let array :number[] = [2, 3, 4]

  return (
    <div>
      <h2>Products</h2>
      {
        상품.map((a, i) => {
          return (
          <div className="food" key = {i}>
            <img src={`food${i}.png`} alt="" className="food-img" />
            <h4>{a} $40</h4>
          </div>
          )
        })
      }
    </div>
  )
}