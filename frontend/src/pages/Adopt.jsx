import React from 'react'
import Header from '../Components/Adopt/Header'
import Select from '../Components/Adopt/Select'
import Cards from '../Components/Adopt/Cards'
import ProfileSection from '../Layout/ProfileSection'
import { ToastContainer, toast } from 'react-toastify';

  const notify = () => toast("Sorry, this feature is not implemented yet!");


const Adopt = () => {
  return (
    <>
    <ToastContainer />
      <Header/>
      <Select notify={notify} />
      <Cards notify={notify}/>
      <ProfileSection/>
    </>
  )
}

export default Adopt
