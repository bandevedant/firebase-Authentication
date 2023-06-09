import { MDBCard, MDBCardBody,MDBBtn,MDBCardText,MDBCardTitle } from 'mdb-react-ui-kit'
import React from 'react'
import { useUserAuthContext } from '../context/UserAuthContext'
export const Home = () => {
    const {user,logout}=useUserAuthContext();

  const handleLogout=async(e)=>{
   e.preventDefault();
   try{
    await logout();
 
   }catch(err){
        console.log(err);
   }
  }

  return (
    <MDBCard>
      <MDBCardBody style={{fontSize:"1.6rem"}}>
        <MDBCardTitle><h1>Home</h1></MDBCardTitle>
        <MDBCardText>
         Welcome {user.email}
        </MDBCardText>
        <MDBBtn onClick={handleLogout} style={{fontSize:"1.2rem"}}>Log out</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  )
}
