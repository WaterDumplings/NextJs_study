'use client'

import Image from "next/image";
import { useState } from "react";

export default function List() {
  let 상품: string[] = ['Tomatoes', 'Pasta', 'Coconut'];
  let array: number[] = [2, 3, 4]
  let [수량, 수량변경] = useState([0, 0, 0])

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        상품.map((a, i) => {
          return (
            <div className="food" key={i}>
              <img src={`food${i}.png`} alt="" className="food-img" />
              <h4>{a} $40</h4>
              <span> {수량[i]} </span>
              <button onClick={() => {
                let copy: number[] = [...수량]
                copy[i]++
                수량변경(copy)
              }}>+</button>
              <button onClick={() => {
                let copy: number[] = [...수량]
                copy[i]--
                수량변경(copy)
              }}>-</button>
            </div>
          )
        })
      }
    </div>
  )
}