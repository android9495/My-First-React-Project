import MenuItem from "../base/menuItem";

const Layout = ({children}) => {
    return (
        <>
            <header>
                <a href="/" className="identity">

                </a>
                <nav className="menu-list-items">
                    <ul>
                      <MenuItem link="/" label="home"/>
                      <MenuItem link="/about-us" label="about us"/>
                      <MenuItem link="/stones" label="stones"/>
                      <MenuItem link="/blog" label="blog"/>
                      <MenuItem link="/contact-us" label="contact us"/>
                      <MenuItem link="/*" label="404"/>
                    </ul>
                </nav>
            </header>
            {children}
            <footer>
                footer
            </footer>
        </>
    )
}
export default Layout;