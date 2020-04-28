import React from 'react';
import classNames from 'classnames'
// Styles
import './section.styles.sass'

const Section = ({children, className, ...otherProps}) => {
   const classes = classNames({
      section: true,
      [className]: className
   })

   return (
      <div className={classes || null} {...otherProps}>
         {children}
      </div>
   );
};

export default Section;