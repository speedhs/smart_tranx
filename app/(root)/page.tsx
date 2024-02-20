import Image from 'next/image'
import Coursepage from './(routes)/(landingpage)/Coursepage'
import Homepage from './(routes)/(landingpage)/Homepage'
import Testimonialspage from './(routes)/(landingpage)/Testimonialspage'
import Instructorpage from './(routes)/(landingpage)/Instructorpage'

export default function Home() {
  return (
    <div>
      <Homepage/>
      <Coursepage />
      <Testimonialspage/>
      <Instructorpage/>
    </div>
  )
}
