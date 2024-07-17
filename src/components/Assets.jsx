import { formatTimestamp } from "./utils/utils"
export function Assets({ assets, chosenFilter, setChosenFilter }) {
    return (
        <>
            <div className="bg-[#1d1e2c] text-left text-white p-4 runded-3xl mx-8 ">
                <div className="flex justify-between items-start">
                    <div className="font-bold text-xl pb-16">Assets</div>
                    <button className="hover:bg-[#2a2b3f] px-4 py-2 rounded-lg" onClick={() => setChosenFilter('all')}>Reset Filter</button>
                </div>
                <div className="flex flex-col gap-2">
                    <TableHeader />
                    <TableRows assets={assets} chosenFilter={chosenFilter} />
                </div>
            </div>
        </>
    )
}

function TableHeader() {
    return (
        <>
            <div className="bg-[#464660] flex py-2 rounded font-bold text-center">
                <div className=" text-center w-[10%] font-medium">Grade</div>
                <div className=" text-center w-[20%] font-medium">Name</div>
                <div className=" text-center w-[50%] font-medium">Total Vulnerabilities</div>
                <div className=" text-center w-[30%] font-medium">Last Seen</div>
            </div>
        </>
    )
}

function TableRows({ assets, chosenFilter }) {
    const bgColor = {
        "F": "#431819",
        "D": "#77011e",
    }
    return (
        <>
            <div className="flex flex-col gap-2">
                {assets.filter(asset => {
                    if (chosenFilter === 'all') {
                        return true
                    }
                    return asset.type == chosenFilter
                }).map((asset, index) => {
                    return (
                        <>
                            <div key={index} className="bg-[#2a2b3f] flex py-2 rounded text-center items-center">
                                <div className="py-3 px-4 flex items-center w-[10%] justify-center">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-black p-6 font-bold" style={{ background: bgColor[asset.grade] }}>
                                        {asset.grade}
                                    </div>
                                </div>
                                <div className="py-3 px-4 w-[20%]">{asset.name}</div>
                                <div className="py-3 px-4 w-[50%]">{asset.total_vuls}</div>
                                <div className="py-3 px-4 w-[30%]">{formatTimestamp(asset.lastSeen)}</div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}
