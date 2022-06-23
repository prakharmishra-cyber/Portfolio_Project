import React from 'react'

const About = React.forwardRef(({}, refs) => {
  return (
    <div ref={refs} className="about_outer">About</div>
  )
});

export default About