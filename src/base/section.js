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