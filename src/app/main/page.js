'use client'
import Card from "../components/1_Cards";
import { useState,useEffect } from "react";
const fetching = async(link)=>{
    const wasd = await fetch(link);
    const data= await wasd.json();
    return data;
}

function MainPage(){
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const jokes = await fetching("https://official-joke-api.appspot.com/random_ten");
            console.log(jokes);
            setData(jokes);
        };
        fetchData();
    }, []);
    return(
        <>
        <div className="flex flex-wrap justify-center mx-5 my-10"><Card data={data}/></div>
        </>
    );
}

export default MainPage;