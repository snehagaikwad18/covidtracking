import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Covid = () => {
  const [myData, setMyData] = useState([]);

  const getCovidData = () => {

    axios.get('https://data.covid19india.org/data.json')
      .then((responce) => {
        let res = responce.data
        let statewisedata = res.statewise[0]
        console.log(statewisedata)
        setMyData(statewisedata)
      })

  }

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className='bg-black text-white h-screen w-screen font-railway '>
        <div className='h-[20%] w-screen bg-black flex items-center justify-center'>
          <div className='w-[35%] h-full bg-black text-2xl font-semibold text-center p-[2.5%] '>
            <div className='flex justify-center gap-3 text items-center'>
              <i className="fa-solid fa-circle text-lg"></i>
              <h1 >LIVE</h1>
            </div>

            <h1 >COVID-19 CORONAVIRUS TRACKER</h1>
          </div>

        </div>
        <div className='h-[80%] w-screen flex items-center justify-center'>
          <div className='h-[90%] w-[95%] group'>
            {/* 3 cards */}
            <div className='h-[50%] w-full bg-black flex justify-between items-center pl-5 pr-5 '>
              {/* card1 */}
              <div className='w-[31%] h-[90%] hover:!blur-none cursor-pointer group-hover:blur-sm group-hover:scale-[0.92] hover:!scale-100 rounded-xl text-white bg-sky-600 text justify-center items-center flex '>
                <div className='text-center font-bold h-auto w-auto space-y-4'>
                  <div className='flex h-auto w-auto items-baseline gap-1 justify-center'>
                    <p className='text-xs '> OUR </p>
                    <p className='text-3xl'>COUNTRY</p>
                  </div>

                  <h1 className='text-7xl'>INDIA</h1>
                </div>

              </div>
              {/* card2 */}
              <div className='w-[31%] h-[90%] hover:!blur-none cursor-pointer group-hover:blur-sm group-hover:scale-[0.92] hover:!scale-100 rounded-xl text-white bg-green-700 text justify-center items-center flex'>
                <div className='text-center font-bold h-auto w-auto space-y-4'>
                  <div className='flex h-auto w-auto items-baseline gap-1 justify-center'>
                    <p className='text-xs '> TOTAL </p>
                    <p className='text-3xl'>RECOVERED</p>
                  </div>

                  <h1 className='text-7xl'>{myData.recovered}</h1>
                </div>

              </div>

              {/* card3 */}
              <div className='w-[31%] h-[90%] hover:!blur-none cursor-pointer group-hover:blur-sm group-hover:scale-[0.92] hover:!scale-100 rounded-xl text-white bg-yellow-600 text justify-center items-center flex'>
                <div className='text-center font-bold h-auto w-auto space-y-4'>
                  <div className='flex h-auto w-auto items-baseline gap-1 justify-center'>
                    <p className='text-xs '> TOTAL </p>
                    <p className='text-3xl'>CONFIRMED</p>
                  </div>

                  <h1 className='text-7xl'>{myData.confirmed}</h1>
                </div>

              </div>


            </div>

            {/* 3 cards */}
            <div className='h-[50%] w-full bg-black flex justify-between items-center pl-5 pr-5 '>
              {/* card1 */}
              <div className='w-[31%] h-[90%] hover:!blur-none cursor-pointer group-hover:blur-sm group-hover:scale-[0.92] hover:!scale-100 rounded-xl text-white bg-orange-700 text justify-center items-center flex'>
                <div className='text-center font-bold h-auto w-auto space-y-4'>
                  <div className='flex h-auto w-auto items-baseline gap-1 justify-center'>
                    <p className='text-xs '> TOTAL </p>
                    <p className='text-3xl'>DEATHS</p>
                  </div>

                  <h1 className='text-7xl'>{myData.deaths}</h1>
                </div>

              </div>
              {/* card2 */}
              <div className='w-[31%] h-[90%] hover:!blur-none cursor-pointer group-hover:blur-sm group-hover:scale-[0.92] hover:!scale-100 rounded-xl text-white bg-sky-800 text justify-center items-center flex'>
                <div className='text-center font-bold h-auto w-auto space-y-4'>
                  <div className='flex h-auto w-auto items-baseline gap-1 justify-center'>
                    <p className='text-xs '> TOTAL </p>
                    <p className='text-3xl'>ACTIVE</p>
                  </div>

                  <h1 className='text-7xl'>{myData.active}</h1>
                </div>

              </div>

              {/* card3 */}
              <div className='w-[31%] h-[90%] hover:!blur-none cursor-pointer group-hover:blur-sm group-hover:scale-[0.92] hover:!scale-100 rounded-xl text-white bg-teal-800 text justify-center items-center flex'>
                <div className='text-center font-bold h-auto w-auto space-y-4'>
                  <div className='flex h-auto w-auto items-baseline gap-1 justify-center'>
                    <p className='text-xs '> LAST </p>
                    <p className='text-3xl'>UPDATED</p>
                  </div>

                  <h1 className='text-7xl'>{myData.lastupdatedtime}</h1>
                </div>

              </div>


            </div>

          </div>


        </div>



      </div>
    </>
  )
}

export default Covid
