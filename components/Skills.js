
const Skills = ({skills,percent}) => {
  return (
    <>
        <h5>{skills} - {percent}%</h5>
        <div className="progress">
            <div 
                className="progress-bar" 
                role="progressbar" 
                style={{width:`${percent}%`}}
            ></div>
        </div>
    </>
  )
}

export default Skills