import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {getAccountList} from '../../api/user'
export default function Home() {
    const [userList,setuserList]=useState([])
    useEffect(()=>{
        getUsertList()
    },[])
    const getUsertList=()=>{
        getAccountList().then(res=>{
            if(res.code==1){
                setuserList(res.data)
            }
        })
    }
  return (
    <div>Home</div>
  )
}
