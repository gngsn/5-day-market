import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { CartIcon, MyPageIcon } from "../../static/svg";
// import CartIcon from "../../static/svg/ic-cart.svg";
import palette from "../../lib/styles/palette";
import useHeader from "../../lib/hooks/useHeader";
import storage from "../../lib/storage";

const Header = () => {
    const { menu, setMenu } = useHeader();

    const menuLoader = () => {
        const menu = storage.getItem('CURRENT_MENU');
        if (!menu) return;
        const { setMenu } = useHeader();
        setMenu(menu);
    };
    menuLoader();

    const listItems = [
        { title: "MAGAZINE", link: "/" },
        { title: "MARKET", link: "/market" },
        { title: "CONTACT", link: "/contact" },
        { title: "ABOUT", link: "/about" }];

    return (
        <Block>
            <Inner>
                <Menu>
                    <ul>
                        {
                            listItems.map((item) => (
                                <li className={item.title === menu ? "action" : undefined} key={item.title} onClick={() => setMenu(item.title)}>
                                    <Link to={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </Menu>
                <UserMenu>
                    <CartIcon />
                    <MyPageIcon />
                </UserMenu>
            </Inner>
        </Block>
    );
}

const Block = styled.div`
  height: 13rem;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
`;

const Menu = styled.div`
    max-width: 400px;
    ul {
        margin: 0px;
        padding: 0px;
    }
    li {
        list-style: none;
        margin-bottom: 30px;
        &.action a {
                color: ${palette.orange0};
            }
        a {
            color: ${palette.brown3};
            text-decoration: none;
            font-size: 1.125rem;
            font-weight: bold;            
        }
}
`;

const UserMenu = styled.div`
    & img:first-child { 
        margin-right: 1rem;
    }
`;

export default Header;