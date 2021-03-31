import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from "../../../reusable"


const Cards = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
     <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our Products
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      {/* <MDBRow>
        <MDBCol lg="2.5" md="3" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Red trousers <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2.5" md="3" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Sweatshirt <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2.5" md="3" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Accessories <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2.5" md="3" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Sweatshirt <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow> */}
    </section>

    <section className="text-center my-5">
        <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Shirt</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Denim shirt{" "}
                    <MDBBadge pill color="danger">
                      NEW
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>UGX 120</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sport wear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Sweatshirt
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>UGX 139</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sport wear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Grey blouse{" "}
                    <MDBBadge pill color="primary">
                      BEST
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>UGX 99</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Outwear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Black jacket
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>UGX 219</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>

    <section className='text-center my-5'>
     
      <MDBRow>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/1.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Denim</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Denim trousers</a>
                </strong>
              </MDBCardTitle>
              
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>UGX 49</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/2.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Shoes</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>High heels</a>
                </strong>
              </MDBCardTitle>
             
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>UGX 89</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart  ml-3' />
                    <span>Add to cart</span>
                  </MDBTooltip>

                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt  ml-3' />
                    <span>Share</span>
                  </MDBTooltip>

                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart  ml-3' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/4.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Outwear</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Brown coat</a>
                </strong>
              </MDBCardTitle>
             
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>UGX 59</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/3.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Blouses</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Shirt</a>
                </strong>
              </MDBCardTitle>
             
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>UGX 119</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
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
    
      {/* <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              Card title
              <DocsLink name="CCard"/>
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>           
       
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              Card with label
              <div className="card-header-actions">
                <CBadge color="success" className="float-right">Success</CBadge>
              </div>
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                Card actions
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>       
      </CRow> */}
           
    </>
  )
}

export default Cards
