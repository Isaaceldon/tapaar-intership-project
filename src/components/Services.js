import React,{useState} from 'react'
import Service from '../components/Service';

export default function Services() {
    const [services, setServices] = useState([
            {
                id:1,
                name:"Web Developement",
                description:`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and typesetting`
                
            },
            {
                id:2,
                name:"Web Developement",
                description:`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and typesetting`
                
            },
            {
                id:3,
                name:"Web Developement",
                description:`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and typesetting`
                
            },
            {
                id:4,
                name:"Web Developement",
                description:`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and typesetting`
                
            },

            {
                id:5,
                name:"Web Developement",
                description:`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and typesetting`
                
            },
            {
                id:6,
                name:"Web Developement",
                description:`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and typesetting`
                
            },
    ])

  return services.map((service)=>{
      return <Service  item={service}/>
  })
}
