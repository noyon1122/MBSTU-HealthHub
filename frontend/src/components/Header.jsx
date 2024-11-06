
import group_profiles from '../assets/assets_frontend/group_profiles.jpg'
import arrow_icon from '../assets/assets_frontend/arrow_icon.svg'
import Banner from '../assets/assets_frontend/Banner.png'
const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* Left side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br />With Trusted Doctors</p>
            <div className='flex flex-col md:flex-row items-center gap-2 text-white text-sm font-light'>
                <img className="w-28 rounded-full" src={group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block' /> 
                schedule your appointment hassle-free.</p>
            </div>
            <a id="#speciality" className='flex gap-2 items-center bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-150 transition-all duration-300' href="#speciality">Book Appointment 
                <img className='w-3' src={arrow_icon} alt="" />
            </a>
        </div>

        {/* Right side  */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={Banner} alt="" />
        </div>
    </div>
  )
}

export default Header