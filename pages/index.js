import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import Link from 'next/link'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import router, { useRouter } from 'next/router'
import { auth } from '../firebase'
export default function Home() {
  const [User, setUser] = useState(null)
  const router = useRouter()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        setUser({
          name: user.displayName,
          photo: user.photoURL,
          phone: user.phoneNumber,
        })
      } else {
        router.push('/login')
      }
    })
  }, [])
  return (
    <Wrapper>
      <Map />
      <Actionitems>
        <Header>
          <Logo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />
          <Profile>
            <Name>{User && User.name}</Name>
            <ProfileImage
              onClick={() => {
                signOut(auth)
              }}
              src={User && User.photo}
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href='/search'>
            <ActionButton>
              <ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png' />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </Actionitems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col h-screen
`
const Actionitems = tw.div`
flex-1 bg-white p-4
`
const Header = tw.div`
flex justify-between items-center 
`
const Logo = tw.img`
 w-32
`
const Profile = tw.div`
  flex items-center
`
const Name = tw.div`
  mr-3 text-sm
`

const ActionButtons = tw.div`
flex 
`
const ActionButton = tw.div`
flex mr-2  flex-1 flex-col bg-gray-200 justify- items-center rounded-lg h-32 text-xl  transform hover:scale-105 hover:border-12 hover:border-black-300 hover:shadow-lg cursor-pointer transition
`
const ActionButtonImage = tw.img`
h-3/5
`
const InputButton = tw.div`
h-20 flex bg-gray-200 mt-8 text-2xl items-center px-6 
`
const ProfileImage = tw.img`
 rounded-full w-10 h-10 cursor-pointer
`