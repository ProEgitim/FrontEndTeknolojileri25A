import React,{useState} from "react"
export const UserInfo=()=>{

    const [users,setUsers]=useState({
        no:1,
        ad:'Mesut',
        soyad:'GÜLSOY',
        email:'asdasd@asdasd.com'
    })







    return (
    <div>
        <div>{users.no}</div>
        <div>{users.ad}</div>
        <div>{users.soyad}</div>
        <div>{users.email}</div>
    </div>
    )
}