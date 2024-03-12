import Image from "next/image"

const getData = async () => {
 const res = await fetch('http://localhost:3000/api/posts', {cache : 'no-store'})
 if(!res.ok) {
  throw new Error('Network is Error')
 }
 return res.json()
}
const Profile = async () => {

const data = await getData();
  return (
    <>
    <h1 className='text-5xl text-center pt-28'>profile page</h1>
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h1> {item.title} </h1>
        </div>
      ))}
    </div>

    <Image alt="car" width={200} height={200} src='https://images.pexels.com/photos/20591598/pexels-photo-20591598/free-photo-of-profile.jpeg'  ></Image>
    </>
  )
}

export default Profile