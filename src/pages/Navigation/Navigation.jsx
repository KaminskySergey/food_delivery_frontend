import { List, Link } from "./Navigation.styled";
const getActiveLink = ({isActive}) => {
    return isActive ? 'active' : '';
    
}

const Navigation = () => {
    return (
        <>
        <List>
            <li className="nav-link">
                <Link className={getActiveLink} to="/shop" >
                    Shop
                </Link>
            </li>
            <li className="nav-link">
                <Link className={getActiveLink} to="/shoping" >
                    Shopping Cart
                </Link>
            </li>
            
        </List>
        

        <ul>
            <li>
                <Link className={getActiveLink} to='/register'>
                Auth
                </Link>
            </li>
        </ul>
        </>
    )
}

export default Navigation;