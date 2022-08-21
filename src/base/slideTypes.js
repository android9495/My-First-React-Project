import React from "react";
export const SlideContainer = (props) => {
  const {children} = props;
  return(
      <div className="slider-wrapper">
          {children}
      </div>
  )
}
export const SlideOverlay = (props) => {
    const {children} = props;
    return(
        <div className="slider-overlay" >
            {children}
        </div>
    )
}
export const SliderWrapBoxOne = (props) => {
    const {children} = props;
    return(
        <div className="slider-wrap-box-one" >
            {children}
        </div>
    )
}
export const SliderWrapBoxTwo = (props) => {
    const {children} = props;
    return(
        <div className="slider-wrap-box-two" >
            {children}
        </div>
    )
}
export const SliderWrap = (props) => {
    const {children,className, ...other} = props;
    return(
        <div className={`slider-wrap ${className || ''}`} {...other}>
            {children}
        </div>
    )
}
export const SliderWrapT = (props) => {
    const {children} = props;
    return(
        <div className="slider-wrap two">
            {children}
        </div>
    )
}
export const SlideVideoWrap = (props) => {
    const {children} = props;
    return(
        <div className="videoWrapper">
            {children}
        </div>
    )
}
export const SlideVideo = (props) => {
    const {children} = props;
    return(
        <div className="videoBox">
            {children}
        </div>
    )
}
export const SlideContainerTwo = (props) => {
    const {children} = props;
    return(
        <div className="slider-wrapper two">
            {children}
        </div>
    )
}
export const SlideTextWrapper = (props) => {
    const {children} = props;
    return(
        <div className="slider-text-wrapper">
            {children}
        </div>
    )
}

export const FeatureBoxes = (props) => {
    const {children} = props;
    return(
        <div className="featureBoxes">
            {children}
        </div>
    )
}
export const FeatureBox = ({logo,title,subTitle}) => {
    return(
        <div className="featureBox">
            <img src={logo} alt=""/>
            <p className="title">{title}</p>
            <span className="subTitle">{subTitle}</span>
        </div>
    )
}
