import React from "react";

export const SectionDefault = (props) => {
    const {children} = props;
    return(
        <section className="wrapper otherWrapper">
            {children}
        </section>
    )
}
export const Section = (props) => {
    const {children} = props;
    return(
        <section className="wrapper">
            {children}
        </section>
    )
}

export const SectionUserAccount = (props) => {
    const {children} = props;
    return(
        <section className="wrapper userAccountSection">
            {children}
        </section>
    )
}
export const SectionFullWidth = (props) => {
    const {children} = props;
    return(
        <section className="wrapperFullWidth">
            {children}
        </section>
    )
}
export const SectionLargePadding = (props) => {
    const {children} = props;
    return(
        <section className="wrapperLargePadding">
            {children}
        </section>
    )
}