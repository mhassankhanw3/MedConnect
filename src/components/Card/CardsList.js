import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from './Card'

export default function CardsList() {
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
        backgroundColor: '#d4d4d8',
        borderRadius: '50%',
    };

    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className=' my-20'>
            <div className="text-center">
                <h1 className="text-xl font-extrabold sm:text-4xl flex flex-row items-center mx-auto justify-center">
                    Featued {" "}
                    <strong className="font-bold py-[1px] px-2 rounded bg-green-700 text-gray-100 sm:block sm:ml-2 ml-0">
                        {" "} Products
                    </strong>
                </h1>
                <p className="text-gray-600 my-1 mb-4 sm:w-[35%] w-[80%] mx-auto">
                    Discover top-quality medicines for your health needs. Rigorous checks ensure safety. From pain relief to vitamins, find trusted medications delivered to your doorstep.

                </p>
            </div>
            <Carousel
                className='py-10 bg-gray-100 rounded-lg'
                showThumbs={false}
                showIndicators={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                            ❮
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                            ❯
                        </button>
                    )
                }
            >

                {
                    array.map((item, i) => (
                        <div className='flex flex-row flex-wrap items-center justify-center sm:space-x-10 space-x-0 bg-gray-100'>

                            <Card />
                            <Card />
                            <Card />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}





// import React from 'react'
// import Card from './Card'

// export default function CardsList() {
//     return (
//         <div className='flex flex-row flex-wrap items-center justify-center space-x-10  '>
//             <Card />
//             <Card />
//             <Card />
//             <Card />
//             <Card />
//         </div>
//     )
// }
