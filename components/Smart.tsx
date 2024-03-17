"use client"
import React, { useEffect, useState } from 'react'


function Smart() {

    const [fanSpeed, setFanSpeed] = React.useState(0);
    const [bulbOn, setBulb] = React.useState("Off");
    const [acOn, setAc] = useState("off");
    const [temp, setTemp] = useState(16);
    const [color, setColor] = useState("red");
    const [data, setData] = useState({
        fan: 0,
        bulb: "",
        led: "",
        ac: {
            temp: 0,
            state: 0
        }
    });
    
    useEffect(() => {

        fetch("https://kodessphere-api.vercel.app/devices/ksZ2pPg")
            .then((res) => res.json())
            .then((res) => { return setData(res)})
        console.log(data);
        

    }, [])
    useEffect(()=>{
        
            setFanSpeed(data.fan);
            setBulb(data.bulb);
            setColor(data.led);
            setTemp(data.ac.temp);
            setAc((data.ac.state == 0) ? "off" : "on");
        
    },[data])
    useEffect(() => {
        fetch("https://kodessphere-api.vercel.app/devices/", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                "teamid":"ksZ2pPg",
                "device":"fan",
                "value":{
                    fanSpeed
                }
            })
          }).then(res => {
            console.log("Request complete! response:", res);
          });
          fetch("https://kodessphere-api.vercel.app/devices/", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                "teamid":"ksZ2pPg",
                "device":"led",
                "value":{
                    color
                }
            })
          }).then(res => {
            console.log("Request complete! response:", res);
          });
          fetch("https://kodessphere-api.vercel.app/devices/", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                "teamid":"ksZ2pPg",
                "device":"bulb",
                "value":{
                    bulbOn
                }
            })
          }).then(res => {
            console.log("Request complete! response:", res);
          });
    },[fanSpeed,bulbOn,temp,acOn,color])
    return (
        <div className='bg-slate-900 flex flex-wrap items-center gap-6 justify-center p-10'>
            <div className="card w-60 bg-base-100 shadow-xl h-[420px]">
                <figure><img className='m-4 h-[140px]' src="https://cdn-icons-png.flaticon.com/512/556/556878.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Fan</h2>
                    <p> Control the speed of the fan</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => setFanSpeed(fanSpeed + 1)} className="btn btn-primary">Speed {fanSpeed}</button>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl h-[420px]">
                <figure><img className='m-4 h-[140px]' src="https://cdn-icons-png.flaticon.com/512/8534/8534359.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Bulb</h2>
                    <p>Turn on or off the bulb</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => {
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
                    <div className="card-actions justify-end">
                        <button onClick={() => {
                            if (color === "red") {
                                setColor("blue");
                            } else {
                                setColor("red");
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
                    <div className="card-actions justify-end">
                        <button onClick={() => {
                            if (acOn === "Off") {
                                setAc("On");
                            }
                            else {
                                setAc("Off");
                            }
                        }} className="btn btn-primary">State {acOn}</button>
                        <button onClick={() => setTemp(temp + 1)} className="btn btn-primary">Temperature {temp}</button>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Smart