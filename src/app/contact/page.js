export default function page() {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Contact Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Have a question or need assistance? We&aposre here to help. Contact us using the information below and we&apos;ll get back to you as soon as possible.</p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Customer Service</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">For customer service inquiries, including questions about orders, products, or returns, please email us at customer.service@techtrendz.com or call us at 1-800</p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Business Inquiries</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">For business inquiries, partnerships, or collaborations, please email us at partnerships@techtrendz.com.</p>
                </div>
            </div>
        </div>
    )
}
