import React from 'react'

const Projects = React.forwardRef(({}, refs) => {
  return (
    <div ref={refs} className="project_outer">Projects</div>
  )
});

export default Projects