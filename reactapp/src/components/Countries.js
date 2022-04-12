import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as ReactBootStrap from 'react-bootstrap'


const Countries = () => {



const [posts, setPosts] = useState({blogs: []})

useEffect(() => {
    const fetchPostList = async () => {
        const {data} = await axios("https://restcountries.com/v2/all")

        setPosts({blogs: data})
    }
    fetchPostList()
}, [setPosts])

return(

    <div>
        <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Capital</th>
      <th>Region</th>
      <th>Flag</th>
    </tr>
  </thead>
  <tbody>

    {
        posts.blogs && posts.blogs.map((item) =>(
            <tr key={item.name}>
             <td>{item.name}</td>
             <td>{item.capital}</td>
             <td>{item.region}</td>
             <img src={item.flag} width={100} ></img>
         </tr>
        ))
    }
    
  </tbody>
</ReactBootStrap.Table>
    </div>

)
}
export default Countries;