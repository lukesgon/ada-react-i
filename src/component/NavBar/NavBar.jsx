import './NavBar.css';


const NavBar = ({ children, ...props}) => {
    return (
        <nav className={props.className} id={props.id}>
            { children }
        </nav>
    );
};

export default NavBar;