import React from "react";
import {VisiblePasswordUser} from '../helpers/visiblePassword'

export const VisiblePassword = (props) => {
    const {children} = props;
    return(
        <section className="show-hidden-box" onClick={VisiblePasswordUser}>
            {children}
        </section>
    )
}