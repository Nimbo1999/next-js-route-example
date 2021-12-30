import Link from 'next/link';

import classes from './button.module.css';

function Button({ link, onClick, type = 'button', children }) {
    return link ? (
        <Link href={link}>
            <a className={classes.btn}>{children}</a>
        </Link>
    ) : (
        <button onClick={onClick} className={classes.btn} type={type}>
            {children}
        </button>
    );
}

export default Button;
