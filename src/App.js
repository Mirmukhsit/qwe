import React from 'react'
import Cards from './components/Card'
// import ChildCom from './components/ChildCom'
import Container from './components/Container'
 
const data = [
  {id:1,names:"Bobur",age:23, email:"bbbbbbbbbb@gmail.com",address:"Tashkent"},
  {id:2,names:"Sardor",age:17, email:"sssssss@gmail.com",address:"Samarqand"},
  {id:3,names:"Azim",age:25, email:"aaaaaaa@gmail.com",address:"Jizzax"},
  {id:4,names:"Temur",age:12, email:"tttttttt@gmail.com",address:"Buxoro"},
  {id:5,names:"Davron",age:24, email:"dddddd@gmail.com",address:"Xorazm"},
]
function App() {
  return (
    <div style={{padding:"20px"}}>
      <h1>App</h1>
      <Cards datas={data}/>
      <Container datas={data}/>
    </div>
  )
}

export default App