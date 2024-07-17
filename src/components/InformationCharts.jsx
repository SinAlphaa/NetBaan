import { Divider } from '@mui/material'
import { BG_URL, PUBLIC_URL } from './utils/utils'
import dashboardLogo from '../assets/pngs/dashboard.png'
import globeLogo from '../assets/pngs/globe.png'
import conflictLogo from '../assets/pngs/conflict.png'
import bugLogo from '../assets/pngs/bug.png'
import planetLogo from '../assets/pngs/planet.png'
import cloudLogo from '../assets/pngs/cloud.png'
import arrowDownLogo from '../assets/pngs/arrowDown.png'

export function InformationCharts({ chartsData, setChosenFilter }) {
    return (
        <div className='text-white grid grid-cols-12 '>
            {Object.entries(chartsData).map((item, index) => {
                return (
                    <div key={index} className="col-span-4 bg-[#1D2229] p-4 mb-4 rounded-3xl my-4 mx-8 cursor-pointer" onClick={() => setChosenFilter(item[0])}>
                        <div className="flex justify-between items-center mb-2 ">
                            <ChartLogoIdent
                                total={item[1].total}
                                logo={item[0] == 'cloud' ? cloudLogo : planetLogo}
                                bgColor={item[0] == 'ip' ? "#565392" : (item[0] == "cloud" ? "#D1B003" : "#DF6710")}
                            />
                            <img className='w-8 h-8 rotate-180 self-start' src={arrowDownLogo} alt="arrowDown" />
                            {/* <ArrowDown /> */}
                        </div>
                        <div className='text-left flex flex-col gap-2'>
                            <span className='text-lg font-bold'>
                                {item[0] == 'cloud' ? "Cloud Accounts" : (item[0] == "ip" ? "IP Addresses" : "Domains")}
                            </span>
                            <Divider className='bg-gray-400' />
                        </div>
                        <div className='flex justify-between px-3 py-6 text-left'>
                            <div className='flex items-center gap-6'>
                                <div className='flex flex-col font-bold'>
                                    <span className='text-lg'>Live</span>
                                    <span className='text-2xl'>
                                        {item[1].live.reduce(((accumulator, currentValue) => accumulator + currentValue))}
                                    </span>
                                </div>
                                <img className='w-28 h-18' src={dashboardLogo} alt="dashboard" />
                            </div>
                            <div className='flex items-center gap-6'>
                                <div className='flex flex-col font-bold'>
                                    <span className='text-lg'>Monitored</span>
                                    <span className='text-2xl'>
                                        {item[1].monitored.reduce(((accumulator, currentValue) => accumulator + currentValue))}
                                    </span>
                                </div>
                                <img className='w-28 h-18' src={dashboardLogo} alt="dashboard" />
                            </div>
                        </div>
                        <div className='mb-8'>
                            <Divider className='bg-gray-400' />
                        </div>
                        <div className='flex justify-between text-left'>
                            <div className='flex font-bold items-center gap-3'>
                                <img className='bg-[#327794] rounded-xl w-16 h-16 p-2' src={globeLogo} alt="globe" />
                                <div className='flex flex-col'>
                                    <span className='text-lg'>IPs</span>
                                    <span className='text-2xl'>{item[1].ips}</span>
                                </div>
                            </div>
                            <div className='flex font-bold items-center gap-3'>
                                <img className='bg-[#327794] rounded-xl w-16 h-16 p-2' src={conflictLogo} alt="globe" />
                                <div className='flex flex-col'>
                                    <span className='text-lg'>Ports</span>
                                    <span className='text-2xl'>{item[1].ports}</span>
                                </div>
                            </div>
                            <div className='flex font-bold items-center gap-3'>
                                <img className='bg-[#327794] rounded-xl w-16 h-16 p-2' src={bugLogo} alt="globe" />
                                <div className='flex flex-col'>
                                    <span className='text-lg'>Vulns</span>
                                    <span className='text-2xl'>{item[1].vulns}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>


    )
}

function ChartLogoIdent({ total, logo, bgColor }) {
    return (
        <>
            <div className='rounded-xl w-20 mb-6'>
                <img className='rounded-t-xl p-2 px-4' style={{ backgroundColor: bgColor }} src={logo} alt="globe" />
                <div className='bg-white rounded-b-xl text-black font-bold text-xl'>{total}</div>
            </div>
        </>
    )
}