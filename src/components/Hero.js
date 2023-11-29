
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        // <div className="hero w-full h-full mt-10 bg-blue-600 rounded-xl py-4">
        //     <div className="hero-content text-center">
        //         <div className="max-w-md">
        //             <h1 className="text-5xl text-gray-50 font-bold">Hello there</h1>
        //             <p className="py-6 text-gray-200">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button className="btn ">Get Started</button>
        //         </div>
        //     </div>
        // </div>
        <section className="bg-slate-50 mt-4 rounded-xl w-full">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-32">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Your Trusted Source for {" "}
                        <strong className="font-extrabold text-green-700 sm:block">
                            Quality Medicines
                        </strong>
                    </h1>
                    <p className="mt-4 w-[80%] text-center mx-auto sm:text-xl/relaxed">
                        Discover a wide range of medicines delivered to your doorstep.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/"
                            className="btn block w-full sm:w-auto rounded bg-green-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none active:bg-green-600"
                        >
                            Start Exploring
                        </Link>
                        <Link
                            href="/"
                            className="btn block w-full sm:w-auto bg-transparent rounded border border-green-600 hover:border-green-600 px-6 py-3 text-sm font-medium text-green-600 shadow hover:bg-white"
                        >
                            Purchase Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>



    )
}
