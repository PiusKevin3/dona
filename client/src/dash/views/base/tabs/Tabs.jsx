import React, { useState } from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip } from 'mdbreact';
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from '../../../reusable'

const Tabs = () => {
  const [active, setActive] = useState(1)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'

  return (
    <>
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold text-center my-5'>Orders</h2>
      <p className='grey-text text-center w-responsive mx-auto mb-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg='3' md='12' className='mb-lg-0 mb-4'>
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg'
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='text-muted'>
                <h5>Camera</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>GoPro</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>UGX 1439</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg='3' md='12' className='mb-lg-0 mb-4'>
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (49).jpg'
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='text-muted'>
                <h5>Photography</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Camera</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>UGX 1160</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg='3' md='12' className='mb-lg-0 mb-4'>
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg'
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='text-muted'>
                <h5>Smartphone</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>iPhone 6S</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>UGX 2160</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg='3' md='12' className='mb-lg-0 mb-4'>
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg'
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='text-muted'>
                <h5>Smartphone</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>iPhone 6S</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>UGX 2160</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>

    <CRow>
      <CCol xs="12" md="6" className="mb-4">
        <CCard>
          <CCardHeader>
            Index indentifiers
            <DocsLink name="CTabs"/>
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Profile
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Messages
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  {`1. ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {`2. ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {`3. ${lorem}`}
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6" className="mb-4">
        <CCard>
          <CCardHeader>
            Id indentifiers
          </CCardHeader>
          <CCardBody>
            <CTabs activeTab="home">
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink data-tab="home">
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="profile">
                    Profile
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="messages">
                    Messages
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane data-tab="home">
                  {`1. ${lorem}`}
                </CTabPane>
                <CTabPane data-tab="profile">
                  {`2. ${lorem}`}
                </CTabPane>
                <CTabPane data-tab="messages">
                  {`3. ${lorem}`}
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>      
    </CRow>
    </>
  )
}

export default Tabs
