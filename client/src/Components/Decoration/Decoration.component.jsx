import React from "react";
import S from "./styles/Decoration.styles";

export default function Decoration({children}) {
  return <>{children}</>
}

Decoration.WavyDivider = function WavyDivider({
  bottomWaveColor
}) {
return <S.WavyDivider>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={bottomWaveColor} fill-opacity="1" d="M0,192L80,160C160,128,320,64,480,74.7C640,85,800,171,960,208C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
</S.WavyDivider>
}

Decoration.EditorialDivider = function EditorialDivider({
  bottomWaveColor,
}) {
  return (
    <S.EditorialDividerSvg
      className="editorial"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 
            58-18 88-18s
            58 18 88 18 
            58-18 88-18 
            58 18 88 18
            v44h-352z"
        />
      </defs>
      <g className="parallax1">
        <use href="#gentle-wave" x="50" y="3" fill="#f461c1" />
      </g>
      <g className="parallax2">
        <use href="#gentle-wave" x="50" y="0" fill="#4579e2" />
      </g>
      <g className="parallax3">
        <use href="#gentle-wave" x="50" y="9" fill="#3461c1" />
      </g>
      <g className="parallax4">
        <use href="#gentle-wave" x="50" y="6" fill={bottomWaveColor} />
      </g>
    </S.EditorialDividerSvg>
  );
};