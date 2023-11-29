import React from 'react'

export default function Card() {
    return (
        <div className="card w-96 mt-10 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://media.istockphoto.com/id/635948926/photo/3d-rendering-of-antibiotic-pills-in-blister-pack.jpg?s=612x612&w=0&k=20&c=5dSgDQojTp0hR6VfdPNm5VYmXHZNobOhf3XT17YKc3s=" alt="Medicines" className="rounded-xl w-60 border" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Pain Relief Capsules</h2>
                <p> Effectively alleviate pain with our high-quality pain relief capsules.
                    Whether you're dealing with headaches, muscle aches, or joint pain,
                    our capsules provide fast and reliable relief.</p>
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
