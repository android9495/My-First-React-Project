export const BlogWrap = (props) => {
    const{children} = props
    return(
        <div className="blogWrap">
            {children}
        </div>
    )
}
export const BlogMedia = (props) => {
    const{children} = props
    return(
        <div className="blogMedia">
            {children}
        </div>
    )
}
export const BlogInfo = (props) => {
    const{children} = props
    return(
        <div className="blogInfo">
            {children}
        </div>
    )
}