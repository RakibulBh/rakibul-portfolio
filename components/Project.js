import Image from "next/image"

const Project = ({image, titile, description, technologies}) => {
  return (
    <div style={{ height: '200px',width:"400px", backgroundColor: 'lightgray', padding: '10px', position: 'relative' }}>
      <div style={{ height: '10px', backgroundColor: 'blue', position: 'absolute', left: '-10px', width: 'calc(100% + 10px)' }}></div>
    </div>
  )
}

export default Project
