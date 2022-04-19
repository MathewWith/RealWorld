import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header">
            
            <div className='header__nav'>
                <Link className='header__nav--logo' to={'/'}>
                    conduit
                </Link>
                <ul className='header__nav-item'>
                    <li>
                        <Link className='link' to={'/'}>
                            Home
                        </Link>
                    </li>
                
                    <li>
                        <Link className='link' to={'/sign-in'}>
                            Sign in
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to={'/sign-up'}>
                            Sing up
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}