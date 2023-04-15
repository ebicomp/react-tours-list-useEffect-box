import React, { useEffect, useState } from "react"
import { url } from "../constants"
import Loading from "./Loading"
import Tour from "./Tour"
const ToursList = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const reload = () => {
    fetchTours()
  }

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setTours(data)
      console.log(tours)
    } catch (error) {}
    setIsLoading(false)
  }
  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = id => {
    const newList = tours.filter(q => q.id !== id)
    setTours(newList)
  }
  if (isLoading)
    return (
      <main>
        <Loading />
      </main>
    )

  return (
    <div>
      <h3 className="title">
        our tours
        <div className="title-underline"></div>
      </h3>
      <div className="tours">
        {tours.map(tour => (
          <Tour tour={tour} key={tour.id} onRemoveTour={removeTour} />
        ))}
      </div>
      {!tours.length && (
        <div>
          <button onClick={reload} className="btn">
            Reload
          </button>
        </div>
      )}
    </div>
  )
}

export default ToursList
