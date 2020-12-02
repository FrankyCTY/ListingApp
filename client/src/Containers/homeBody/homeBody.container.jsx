import React from "react";
import {Button, Decoration, Image} from "../../Components";
import { useMediaQuery } from "react-responsive";
import S from "./homeBody.styles";

export default function HomeBodyContainer() {
  const isTabletView = useMediaQuery({ query: "(min-width: 768px)" });

  return <div className="HomeBody_container">
      <section className="homepage-section--1">
      {!isTabletView && <div className="ml-5% mb-2">
          <h2 className="text-base md:text-xl">豬肉雞軟骨餃子</h2>
          <span className="ml-16 text-sm">豬肉雞軟骨餃子</span>
        </div>}
        {/* picture */}
        <div className="relative">
          <S.PicOneContainer className="relative">
              <img className="md:rounded-full md:w-64 md:h-64" src="https://images.unsplash.com/photo-1604870560352-c6fffb2a1e06?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=800" alt="pic01"/>
              {isTabletView && <Decoration.DualText mainText="豬肉雞軟骨餃子" subText="豬肉雞軟骨餃子" extraClass="absolute right-0 top-0 transform translate-y-16 lg:translate-y-24 -translate-x-2"/>}
          </S.PicOneContainer>
          <S.ThreeImagesContainer>
          <img className="w-30% md:w-24 lg:w-32 md:mr-4 lg:mr-6 translate-y-35% transform" src="https://images.unsplash.com/photo-1605459486495-d6236e892999?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=300" alt="pic02"/>
          <img className="w-30% md:w-24 lg:w-32 md:mr-4 lg:mr-6" src="https://images.unsplash.com/photo-1605459486495-d6236e892999?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=300" alt="pic03"/>
          <img className="w-30% md:w-24 lg:w-32 md:mr-4 lg:mr-6 -translate-y-35% transform" src="https://images.unsplash.com/photo-1605459486495-d6236e892999?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=300" alt="pic04"/>
          </S.ThreeImagesContainer>

          <div className="ml-5%">
            <div className="md:transform md:translate-x-36 md:-translate-y-12">
              <h2 className="text-base md:text-xl">豬肉雞軟骨餃子 豬肉雞軟骨餃子</h2>
              <p className="text-xs md:text-sm">豬肉雞軟骨餃子 豬肉雞軟骨餃子</p>
              <p className="text-xs md:text-sm">豬肉雞軟骨餃子 豬肉雞軟骨餃子</p>
              <p className="text-xs md:text-sm">豬肉雞軟骨餃子 豬肉雞軟骨餃子</p>
              <p className="text-xs md:text-sm">豬肉雞軟骨餃子 豬肉雞軟骨餃子</p>
              <p className="text-xs md:text-sm">豬肉雞軟骨餃子</p>
            </div>
            <Button.ReadMoreBtn className="mt-2 mb-24 md:absolute md:right-0 md:transform md:-translate-y-12 md:translate-x-6"/>
          </div>
        </div>
      </section>

      <section className="homepage-section--2 mt-8 mb-8">
        <S.Section3PlaceHolder className="w-screen relative">
          <S.BigImgContainer>
            <Decoration.DualText mainText="豬肉雞軟骨餃子" subText="豬肉雞軟骨餃子" />
            {/* picture */}
            <img className="ml-4" src="https://images.unsplash.com/photo-1605407869548-958d58b7cebc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixlib=rb-1.2.1&q=800&w=1280" alt="pic-04"/>
          {isTabletView && <Button.ReadMoreBtn className="absolute" style={{top: "80%", left: "-5rem"}}/>}
          </S.BigImgContainer>
          {!isTabletView && <Button.ReadMoreBtn className="mt-2 mx-auto"/>}
        </S.Section3PlaceHolder>
      </section>

      <section className="homepage-section--3 relative">
        <Decoration.ShortRectangle className="pl-5% relative">
          <h2 className="text-xl transform -translate-y-4 translate-x-12 absolute right-0">豬肉雞軟骨餃子</h2>
        </Decoration.ShortRectangle>

        {/* <S.Section4PlaceHolder className="relative"> */}
          <div className="flex my-8">
            <Image.ImgWithIntro className="" introText="豬肉雞軟骨餃子" imgSrc="https://images.unsplash.com/photo-1605390756826-929ca1afd861?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixlib=rb-1.2.1&q=80&w=800" alt="pic-100"/>
            <Image.ImgWithIntro className="" introText="豬肉雞軟骨餃子" imgSrc="https://images.unsplash.com/photo-1605390756826-929ca1afd861?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixlib=rb-1.2.1&q=80&w=800" alt="pic-101"/>
            <Image.ImgWithIntro className="" introText="豬肉雞軟骨餃子" imgSrc="https://images.unsplash.com/photo-1605390756826-929ca1afd861?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixlib=rb-1.2.1&q=80&w=800" alt="pic-102"/>
          </div>
        {/* </S.Section4PlaceHolder> */}
        <div className="overflow-hidden">
          <Button.ReadMoreBtn className="mx-auto mt-2 mb-12 md:absolute md:right-0 md:transform md:-translate-y-12 md:translate-x-6"/>
        </div>
      </section>
  </div>
}