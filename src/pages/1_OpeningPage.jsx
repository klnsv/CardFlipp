'use client'

import { SlArrowRight } from "react-icons/sl";
import { useRouter } from "next/navigation";

function OpeningPage(){
    const router = useRouter();
    return(
        <div className="flex justify-center w-full h-screen">
            <div className="flex flex-col h-screen justify-center items-center mx-16">
                <h1 className="my-8 text-cyan-400 font-bold text-6xl">Card Flip</h1>
                <div className="my-8">
                    <p className="text-2xl">Welcome to <span className="font-bold text-cyan-400">Card Flip</span>, where you can get 10 random jokes. Made use of<span className="font-bold text-cyan-400"> Axios </span>to fetch API data
                    </p>
                </div>
                <div className="flex flex-col justify-center">
                <button className="flex justify-around my-8 bg-cyan-400 rounded-full w-52 h-12 text-black font-semibold hover:opacity-85 transiton ease-in-out delay-550 transition duration-300 ease-in-out transform hover:scale-105" onClick={()=>router.push('/main')}><p className="mt-3 pl-4">Click to Proceed</p><SlArrowRight className="mt-4 mr-1"/> </button>
                </div>
            </div>
        </div>
    )
}


export default OpeningPage;