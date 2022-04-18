import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header">
            <Link className='header__link-conduit' to={'/'}>
                conduit
            </Link>
            <div className='header__links'>
                <ul>
                    <li>
                        <Link className='link' to={'/'}>
                            Home
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className='link' to={'/sign-in'}>
                            Sign in
                        </Link>
                    </li>
                </ul>
                <ul>
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