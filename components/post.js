
"use client"
import { useState } from "react";
import { useEffect } from "react";

const post = ({params}) => {

    const[post,setPost]=useState(null);

    const id = params.id;
    console.log('idddddddddd',id);

    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_API_URL + '/post/' + id)
        .then(res=>res.json())
        .then(res=>setPost(res))
    },[id])

    return (
        <>
        {post?.map((d)=>(
            <>
            <main className="container mx-auto px-4 py-6">
            <h2 className="text-4xl font-bold mb-4">{d.title}</h2>
            <p className="text-gray-500">{d.created_at_formated}</p>
            <img src={d.image} alt="Post Image" className="my-4"/>
                <p>{d.description}</p>
        </main>
        </>
        ))}
        
        
        </> 
    );
}

export default post;