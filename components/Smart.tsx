import React from 'react'

function Smart() {
    return (
        <div className='bg-slate-900 flex flex-wrap items-center gap-6 justify-center p-10'>
            <div className="card w-60 bg-base-100 shadow-xl h-[420px]">
                <figure><img className='m-4 h-[140px]' src="https://cdn-icons-png.flaticon.com/512/556/556878.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Fan</h2>
                    <p> Control the speed of the fan</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Speed 0</button>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl h-[420px]">
                <figure><img className='m-4 h-[140px]' src="https://cdn-icons-png.flaticon.com/512/8534/8534359.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Bulb</h2>
                    <p>Turn on or off the bulb</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">State off</button>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl">
                <figure><img className='m-4 h-[180px]' src="https://cdn-icons-png.flaticon.com/512/427/427735.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Led</h2>
                    <p>Control the color of the led</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Color #ff</button>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl  h-[420px]">
                <figure><img className='m-4 h-[140px]' src="https://cdn-icons-png.flaticon.com/512/911/911409.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Air Connditioner</h2>
                    <p>Control state & temp of AC</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">State Off</button>
                        <button className="btn btn-primary">Temperature 23</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Smart