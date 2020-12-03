import React from "react";
import S from "./styles/Counter.styles";
import {Button} from "..";

export default function Counter({children}) {
  return <>{children}</>
}

Counter.CardCounter = function CardCounter({
  btnShape="rect", children, ...restProps
}) {

  const [quantity, setQuantity] = React.useState(0);

  const onMinusClick = () => {
    if(quantity === 0) return;

    setQuantity(quantity - 1);
  }

  return <S.CardCounter className="flex justify-between w-full" {...restProps}>
    <Button.SimpleBtn className="md:text-xxs lg:text-sm xl:text-xl" shape={btnShape} onClick={onMinusClick} iconClass="iconfont iconminus"/>
        <span className="text-lg md:text-sm lg:text-lg xl:text-2xl">{quantity}</span>
    <Button.SimpleBtn className="md:text-xxs lg:text-sm xl:text-xl" shape={btnShape} onClick={() => setQuantity(quantity + 1)} iconClass="iconfont iconplus"/>
    {children}
    </S.CardCounter>
}