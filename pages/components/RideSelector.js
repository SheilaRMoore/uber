import { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'
const RideSelector = (props) => {
  const [rideDuration, setrideDuration] = useState(0)
  useEffect(() => {
    if (props.pickupDuration && props.dropoffDuration) {
      console.log(props.dropoffDuration)
      fetchduration(props.pickupDuration, props.dropoffDuration)
    }
  }, [props.pickupDuration, props.dropoffDuration])

  const fetchduration = (pickupd, dropoffd) => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupd[0]},${pickupd[1]};${dropoffd[0]},${dropoffd[1]}?access_token=pk.eyJ1Ijoic2hlcmV4bXlrZXMiLCJhIjoiY2t2bG9laTluZGdiaDJwbWE3aHY2aHppZiJ9.jHHujNpes74-R7LlkEpKpg`
    )
      .then((res) => res.json())
      .then((data) => {
        setrideDuration(data.routes[0].duration)
      })
  }



    

    return (
        <Wrapper>
        <Title>Choose a ride,or swipe up for more</Title>
        <CarList>
          {carList.map((car, index) => {
            return (
              <Car key={index}>
                <CarImage src={car.imgUrl} />
                <CarDetails>
                  <Service>{car.service}</Service>
                  <Time>{car.Time}</Time>
                </CarDetails>
                <Price>
                  {'$ ' + ((rideDuration / 100) * car.multiplier).toFixed(2)}
                </Price>
              </Car>
            )
          })}
        </CarList>
      </Wrapper>
    )
  }
  

export default RideSelector

const Price = tw.div`
text-sm
`

const Time = tw.div`
text-xs text-blue-500
`

const Service = tw.div`
font-medium
`

const CarDetails = tw.div`
flex-1
`

const CarImage = tw.img`
h-14 mr-4
`

const Car = tw.div`
flex items-center p-4
`

const CarList = tw.div`
flex-1  overflow-y-scroll
`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const Wrapper = tw.div`
flex flex-col overflow-y-scroll
`