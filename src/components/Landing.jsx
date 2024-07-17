import { useEffect, useState } from "react"
import "./Landing.css"
import { InformationCharts } from "./InformationCharts"
import { Assets } from "./Assets"
export function Landing() {
    const [assets, setAssets] = useState({})
    const [chartsData, setChartsData] = useState()
    const [chosenFilter, setChosenFilter] = useState('all')

    useEffect(() => {
        const apiRequest = async () => {
            try {
                let response = await fetch('https://run.mocky.io/v3/775dbd89-9369-4928-a9c1-71c39bffeefd', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! Status  ${response.status}`)
                }

                let data = await response.json();
                setAssets(data.assets)
                delete data.assets
                setChartsData(data)

            } catch (error) {
                console.log("Error: ", error)
            }
        }
        apiRequest()
    }, [])

    if (!assets || !chartsData) return

    return (
        <div className="landing-container">
            <InformationCharts {...{ chartsData, setChosenFilter }} />
            <Assets {...{ assets, chosenFilter, setChosenFilter }} />
        </div>
    )
}