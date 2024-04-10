import { useRouter } from 'next/router';

import ALink from '@/components/features/CustomLink';

import { mainMenu } from '@/utils/data/menu';

function MainMenu() {
    const pathname = useRouter().pathname;

    return (
        <nav className="main-nav">
            <ul className="menu">
                <li id="menu-home" className={ pathname === '/' ? 'active' : '' }>
                    <ALink href='/'>Home</ALink>
                </li>

                <li className={ `${ pathname.includes( '/shop' ) ? 'active' : '' }` }>
                    <ALink href='/shop'>Categories</ALink>
                </li>

                <li className={ `${ pathname.includes( '/product' ) && !pathname.includes( '/elements' ) ? 'active' : '' }` }>
                    <ALink href="/product/default/fashionable-leather-satchel">Products</ALink>
                </li>

                <li className={ `${ pathname.includes( '/pages' ) ? 'active' : '' }` }>
                    <ALink href="#">Pages</ALink>
                </li>

                <li className={ `${ pathname.includes( '/blog' ) && !pathname.includes( '/elements' ) ? 'active' : '' }` }>
                    <ALink href={ `/blog/classic` }>Blog</ALink>
                </li>

                <li className={ `${ pathname.includes( '/elements' ) ? 'active' : '' } d-xl-show` }>
                    <ALink href={ `/elements` }>Elements</ALink>
                </li>

                <li>
                    <ALink href="/pages/about-us">About Us</ALink>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu;