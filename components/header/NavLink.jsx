'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import classes from "./NavLink.module.css"

const NavLink = ({ href, children }) => {
    const path = usePathname();
    return (
      <Link
        href={href}
        className={`${classes.link} ${path.startsWith(href) ? classes.active : undefined}`}
      >
        {children}
      </Link>
    );
};

export default NavLink;