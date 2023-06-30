import React from 'react'

// import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer,CDBBox } from 'cdbreact';
import { CDBBtn, CDBIcon,CDBBox } from 'cdbreact';
import Image from 'react-bootstrap/Image';

const Footer = () => {
  return (
    <>
      <hr className='mt-5'></hr>

    <CDBBox
      display="flex"
      justifyContent="between"
      alignItems="center"
      className="mx-auto py-4 flex-wrap"
      style={{ width: '100%' }}
    >
      <CDBBox display="flex" alignItems="center">
        <a href="/" className="d-flex align-items-center p-0 text-dark">
          <Image
            alt="logo"
            src="https://plus.unsplash.com/premium_photo-1670015230537-5c6253727a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            width="90px"
            roundedCircle
          />
        </a>
          <span className="ms-4 h5 mb-0 font-weight-bold" style={{color:"brown"}}>Buy Me Sip</span>
      </CDBBox>
      <CDBBox>
        <small className="ms-2" style={{color:"brown"}}>&copy; BuyMeSip, 2023. All rights reserved.</small>
      </CDBBox>
      <CDBBox display="flex">
        <CDBBtn style={{background:"linear-gradient(90deg, #a11242 0%, #411d0e 100%)"}} flat color="dark" className="p-2">
          <CDBIcon fab icon="facebook-f" />
        </CDBBtn>
        <CDBBtn style={{background:"linear-gradient(90deg, #a11242 0%, #411d0e 100%)"}} flat color="dark" className="mx-3 p-2">
          <CDBIcon fab icon="twitter" />
        </CDBBtn>
        <CDBBtn  style={{background:"linear-gradient(90deg, #a11242 0%, #411d0e 100%)"}} flat color="dark" className="p-2">
          <CDBIcon fab icon="instagram" />
        </CDBBtn>
      </CDBBox>
    </CDBBox>
  </>
  )
}

export default Footer