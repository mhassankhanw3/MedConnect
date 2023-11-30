import React from 'react'

export default function Card() {
    return (
        <div className="card w-96 my-1 bg-base-100 ">
            <figure className="">
                <img src="https://media.istockphoto.com/id/635948926/photo/3d-rendering-of-antibiotic-pills-in-blister-pack.jpg?s=612x612&w=0&k=20&c=5dSgDQojTp0hR6VfdPNm5VYmXHZNobOhf3XT17YKc3s=" alt="Medicines" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-zinc-700 font-bold">Pain Relief Capsules</h2>
                <p className='text-start text-sm text-zinc-500 font-medium'> Effectively alleviate pain with our high-quality pain relief capsules.
                    Whether you're dealing with headaches.</p>
                <div className="card-actions justify-end">
                    <div className="flex items-center justify-center space-x-3">
                        <select className="select select-bordered focus:outline-none outline-none w-full max-w-xs">
                            <option disabled selected>Select Quantity</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <select className="select select-bordered focus:outline-none outline-none w-full max-w-xs">
                            <option disabled selected>Select Dosage</option>
                            <option>Half</option>
                            <option>Full</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary text-gray-100 hover:text-white">Buy Now</button>
            </div>
        </div>
    )
}
