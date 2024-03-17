"use client"
import React, { useEffect, useState } from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import TypewriterEffectSmoothDemo from './Typewriter';


function Smart() {

    const [fanSpeed, setFanSpeed] = useState(0);
    const [bulbOn, setBulb] = useState("Off");
    const [acOn, setAc] = useState(0);
    const [temp, setTemp] = useState(16);
    const [color, setColor] = useState("#000");
    const [data, setData] = useState({
        fan: 0,
        bulb: 0,
        led: "",
        ac: {
            temp: 0,
            state: 0
        }
    });
    const [check, setCheck] = useState(1);

    useEffect(() => {

        fetch("https://kodessphere-api.vercel.app/devices/ksZ2pPg")
            .then((res) => res.json())
            .then((res) => { return setData(res) })
        console.log(data);


    }, [])
    useEffect(() => {
        setFanSpeed(data.fan);
        setBulb(data.bulb == 0 ? "Off" : "On");
        setColor(data.led);
        setTemp(data.ac.temp);
        setAc((data.ac.state == 0) ? 0 : 1);

    }, [data])
    useEffect(() => {
        if (check > 1) {
            fetch("https://kodessphere-api.vercel.app/devices/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "teamid": "ksZ2pPg",
                    "device": "fan",
                    "value": fanSpeed
                })
            }).then(res => {
                console.log("Request complete! response:", res);
            });
            fetch("https://kodessphere-api.vercel.app/devices/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "teamid": "ksZ2pPg",
                    "device": "led",
                    "value": color
                })
            }).then(res => {
                console.log("Request complete! response:", res);
            });
            fetch("https://kodessphere-api.vercel.app/devices/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "teamid": "ksZ2pPg",
                    "device": "bulb",
                    "value": (bulbOn == "Off") ? 0 : 1
                })
            }).then(res => {
                console.log("Request complete! response:", res);
            });
            fetch("https://kodessphere-api.vercel.app/devices/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "teamid": "ksZ2pPg",
                    "device": "ac",
                    "value": {
                        "temp": temp,
                        "state": acOn
                    }
                })
            }).then(res => {
                console.log("Request complete! response:", res);
            });
        }

    }, [check])
    return (
        <div>
            <TypewriterEffectSmoothDemo />
            <div className='bg-slate-900 flex flex-wrap items-center gap-6 justify-center p-10'>
                <div className="card w-60 bg-base-100 shadow-xl h-[420px]">
                    <figure><img className='m-4 h-[140px]' src="https://cdn-icons-png.flaticon.com/512/556/556878.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fan</h2>
                        <p> Control the speed of the fan - (max speed is 5)</p>
                        <div className="card-actions flex justify-betwen">
                            <div>
                                <button className=' bg-[#9333EA] px-[11px] py-[4px]  rounded-3xl mt-2' onClick={() => setFanSpeed(fanSpeed - 1)}>-</button>
                            </div>
                            <button onClick={() => { setCheck((prev) => prev + 1); return setFanSpeed(fanSpeed + 1) }} className="btn btn-primary">Speed {fanSpeed}</button>
                            <button className=' bg-[#9333EA] px-[11px] py-[4px]  rounded-3xl mt-2' onClick={() => setFanSpeed(fanSpeed + 1)}>+</button>
                        </div>
                    </div>
                </div>
                <div className="card w-60 bg-base-100 shadow-xl h-[420px]">
                    <figure><img className='m-4 h-[140px]' src="https://cdn-icons-png.flaticon.com/512/8534/8534359.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bulb</h2>
                        <p>Turn on or off the bulb</p>
                        <div className="card-actions justify-center">
                            <button onClick={() => {
                                setCheck((prev) => prev + 1);
                                if (bulbOn === "Off") {
                                    setBulb("On");
                                }
                                else {
                                    setBulb("Off");
                                }
                            }} className="btn btn-primary">State {bulbOn}</button>
                        </div>
                    </div>
                </div>
                <div className="card w-60 bg-base-100 shadow-xl">
                    <figure><img className='m-4 h-[180px]' src="https://cdn-icons-png.flaticon.com/512/427/427735.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Led</h2>
                        <p>Control the color of the led</p>
                        <div className="card-actions justify-center">
                            <button onClick={() => {
                                setCheck((prev) => prev + 1)
                                if (color === "#000") {
                                    setColor("#111");
                                } else {
                                    setColor("#000");
                                }
                            }} className="btn btn-primary">Color {color}</button>
                        </div>
                    </div>
                </div>
                <div className="card w-60 bg-base-100 shadow-xl  h-[420px]">
                    <figure><img className='m-4 h-[140px]' src="https://cdn-icons-png.flaticon.com/512/911/911409.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Air Connditioner</h2>
                        <p>Control state & temp of AC</p>
                        <div className="card-actions flex items-center justify-between">
                            <button onClick={() => {
                                setCheck((prev) => prev + 1);
                                if (acOn === 0) {
                                    setAc(1);
                                }
                                else {
                                    setAc(0);
                                }
                            }} className="btn btn-primary ml-[24%]">State {acOn == 0 ? "Off" : "On"}</button>
                            <div className='flex justify-betwen'>
                                <div>
                                    <button className=' bg-[#9333EA] px-[11px] py-[4px]  rounded-3xl mt-2' onClick={() => setTemp(temp - 1)}>-</button>
                                </div>
                                <div>
                                    <button onClick={() => { setCheck((prev) => prev + 1); return setTemp(temp + 1) }} className="btn btn-primary">Temperature {temp}</button>
                                </div>
                                <div>
                                    <button className='bg-purple-600 px-[10px] py-[4px]  rounded-3xl mt-2' onClick={() => setTemp(temp + 1)}>+</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Smart