import React from 'react'

export default function AboutPage() {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">At Tech Trendz, we are passionate about technology and innovation. Our goal is to provide our customers with the latest and most cutting-edge tech gadgets to enhance their lives</p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Mission</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Our mission is to be a leader in the tech industry, offering a wide range of products that cater to the needs and interests of tech enthusiasts worldwide. We strive to provide exceptional customer service and value to our customers.</p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Contact Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 mb-2">If you have any questions or need assistance, please dont hesitate to contact us. We are here to help!</p>
                    <p className="font-normal text-base leading-6 text-gray-600">Thank you for choosing Tech Trendz for all your tech gadget needs.</p>
                </div>
            </div>
        </div>
    )
}
