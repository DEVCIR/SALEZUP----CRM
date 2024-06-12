import React from 'react'

const ExperienceSelected = () => {
    return (
        <div>
            <div className="flex flex-row justify-around gap-20 w-full">
                <div className="">
                    <img src="/image-35@2x.png" alt="cash" />
                    <h1>You selected EXPERIENCE!</h1>
                </div>
                <div>
                    <h1 className='text-center'>Select Experience</h1>
                    <img src="/exp-image-1.png" alt="" className='mt-3' />
                    <img src="/exp-image-2.png" alt="" className='mt-3' />
                </div>
                <div className="table my-auto">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <thead className="rounded-t-lg bg-[#2D808559]">
                                <tr className="text-right">
                                    <th title="Place" className="p-3 text-center">Place</th>
                                    <th title="Amount" className="p-3 text-center">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-right border-b border-opacity-20 bg-[#F5F5F5]">
                                    <td className="px-3 py-2 text-center">
                                        <span>1st</span>
                                    </td>
                                    <td className="px-3 py-2 text-center">
                                        <span>Enter Amount</span>
                                    </td>
                                </tr>
                                <tr className="text-right border-b border-opacity-20 bg-[#F5F5F5]">
                                    <td className="px-3 py-2 text-center">
                                        <span>2nd</span>
                                    </td>
                                    <td className="px-3 py-2 text-center">
                                        <span>Enter Amount</span>
                                    </td>
                                </tr>
                                <tr className="text-right border-b border-opacity-20 bg-[#F5F5F5]">
                                    <td className="px-3 py-2 text-center">
                                        <span>3rd</span>
                                    </td>
                                    <td className="px-3 py-2 text-center">
                                        <span>Enter Amount</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <button className='px-4 py-2 bg-green-900 text-white rounded-lg'>Confirm</button>
        </div>
    )
}

export default ExperienceSelected