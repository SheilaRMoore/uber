import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken =
  'pk.eyJ1Ijoic2hlcmV4bXlrZXMiLCJhIjoiY2t2bG82cHVhZGd0dTJ2bW56ZzE4MnhkbyJ9.F_iOC96mG7kLg6_PWDn1Xw'

  const Map = (props) => {

    useEffect(()=>{
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.39172],
          zoom: 3
          });

        if(props.pickUpCoordinates){
            addToMap(map, props.pickUpCoordinates);
        }

        if(props.dropoffCoordinates){
            addToMap(map, props.dropoffCoordinates);
        }

        if(props.pickUpCoordinates && props.dropoffCoordinates){
            map.fitBounds([
                props.pickUpCoordinates,
                props.dropoffCoordinates
            ], {
                padding: 60
            })
        }
      }, [props.pickUpCoordinates, props.dropoffCoordinates])

    const addToMap = (map, coordinates) => {
        const marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map)
    }

    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`