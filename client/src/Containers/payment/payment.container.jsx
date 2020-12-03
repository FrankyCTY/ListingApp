import React, {useState} from "react";
import {Button, Decoration} from "../../Components";

export default function PaymentContainer({tailwindClass, ...restProps}) {

  const [quantity, setQuantity] = useState(0);

  const onMinusClick = () => {
    if(quantity === 0) return;

    setQuantity(quantity - 1);
  }

  return <div className={`flex flex-col px-5% justify-items-center ${tailwindClass}`} {...restProps}>
    <p className="text-lg md:text-xl xl:text-3xl font-semibold mb-4 md:mb-8 xl:mb-16">HKD 599</p>
    <Decoration.PageIntroTextBlock className="mb-4 md:mb-8 xl:mb-16" topText="commercial products" title="業務用商品" intro="品質の良い原料を選び、食感を追求した加工方法。
      幅広い方に愛さ。"/>

    {/* Payment Button Console */}
    <div className="">
      {/* Quantity of Product Counter */}
      <div className="flex justify-between mb-4 md:mb-8">
        <Button.SimpleRoundedBtn onClick={onMinusClick} iconClass="iconfont iconminus"/>
        <span className="text-lg md:text-xl">{quantity}</span>
        <Button.SimpleRoundedBtn onClick={() => setQuantity(quantity + 1)} iconClass="iconfont iconplus"/>
      </div>
      <Button.CheckOutBtn className="w-full mb-4 md:mb-8 xl:mb-16"/>
    </div>

    {/* More Text */}
    <div className="">
      <p>豬肉雞軟骨餃子</p>
      <p>豬肉雞軟骨餃子</p>
      <p>豬肉雞軟骨餃子</p>
      <p>豬肉雞軟骨餃子</p>
      <p>豬肉雞軟骨餃子</p>
    </div>
  </div>
}