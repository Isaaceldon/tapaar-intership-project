import React,{useState} from 'react'
import Project from '../components/Project';

import image1 from '../img/form-image.png'


export default function Projects() {

const [projects, setProjects] = useState(
    [
        {
            id:1,
            libelle:"Business, video",
            type:"Web Development",
            image:image1
        },
        {
            id:2,
            libelle:"Business, video",
            type:"Web Development",
            image:image1
        },
        {
            id:3,
            libelle:"Business, video",
            type:"Web Development",
            image:image1
        },
        {
            id:4,
            libelle:"Business, video",
            type:"Web Development",
            image:image1
        },
        {
            id:5,
            libelle:"Business, video",
            type:"Web Development",
            image:image1
        },
        {
            id:6,
            libelle:"Business, video",
            type:"Web Development",
            image:image1
        }
    ]
)

  return projects.map((project)=>{
      return <Project item = {project}/>
  })
}
