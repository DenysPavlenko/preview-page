import React from 'react';
import classNames from 'classnames'
import './button.styles.sass'

const Button = ({children, href, btnAlt, className, ...otherProps}) => {
   const classes = classNames({
      button: true,
      'button-alt': btnAlt,
		[className]: className
   });

   const Tag = href ? 'a' : 'button';

   return (
      <Tag href={href} className={classes} {...otherProps}>{children}</Tag>
   );
};

export default Button;