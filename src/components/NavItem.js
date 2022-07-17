import '../css/NavItem.css'

function NavItem(props) {
    return (
        <nav className={`${props.test}`}>
            <h1>KDW's  Portfolio</h1>

            <ul>
                <li onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}>Home</li>
                <li onClick={() => {
                    window.scrollTo({ top: props.a.current.offsetTop - 70, left: 0, behavior: "smooth" });
                }}>About me</li>
                <li onClick={() => {
                    window.scrollTo({ top: props.b.current.offsetTop - 70, left: 0, behavior: "smooth" });
                }}>Skills</li>
                <li onClick={() => {
                    window.scrollTo({ top: props.c.current.offsetTop - 70, left: 0, behavior: "smooth" });
                }}>Portfolio </li>
            </ul>
        </nav>
    )
} export default NavItem;