import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  doLogin,
  changeInputUser,
  doSignUp,
  logInFB,
  logInGoogle,
} from "../store/action/userAction";
import Typist from "react-typist";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBModal} from "mdbreact";
import "../css/Home.css";
import NavBar from "../components/NavBar";
import Carousel from "../components/CarouselHome"
import CardHome from "../components/CardHome"
import Footer from "../components/Footer";
import KotakLogIn from "../components/KotakLogIn";
import CarouselHome from "../components/Carousel";
import ModalKu from "../components/Modal";




class Home extends React.Component {
  state = {
    modal: false,
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.toggle);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggle);
  }

  toggle = () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) >= scrollable) {
      this.setState({
        modal: true,
      });
    } else if (scrolled === 0 || Math.ceil(scrolled) !== scrollable) {
      this.setState({
        modal: false,
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="bodi">
          {/* JUMBOTRON */}
          <MDBJumbotron fluid className="jumbotronjumbs">
            <MDBContainer className="containerjumbs">
              <MDBRow>
                <MDBCol md={5}>
                  <h3 className="h3">Join Chap Events and get access to</h3>
                  <Typist className="MyTypist">
                    <span> 10 million+ Wedding Inspirations</span>
                    <Typist.Backspace count={29} delay={200} />
                    <span> 20K+ Curated Vendors </span>
                    <Typist.Backspace count={22} delay={200} />
                    <span> 100K+ Trusted Reviews</span>
                  </Typist>             
                  {/* KOTAK BAWAH TYPIST */}
                  <MDBRow>
                    <MDBCol md={12}>
                      <div className="bawah-typist">
                        <span className="bawah1">
                          Use Chap Events Pay and enjoy the benefits:
                        </span>
                        <MDBRow className="bawah2">
                          <MDBCol md={4} className="text-center">
                            <i className="fas fa-hourglass-half fa-2x"></i>
                            <br />
                            <p>
                              0% CC Installment
                              <br />
                              for up to 24 months
                            </p>
                          </MDBCol>
                          <MDBCol md={4} className="text-center">
                            <i className="far fa-credit-card fa-2x"></i>
                            <br />
                            <span>More Payment Options</span>
                          </MDBCol>
                          <MDBCol md={4} className="text-center">
                            <i className="fas fa-file-invoice-dollar fa-2x"></i>
                            <br />
                            <span>Easy and Secure Payment</span>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <button className="learn-more" type="button">
                    Learn More
                  </button>
                </MDBCol>
                {/* KOTAK LOGIN */}
                {/* <KotakLogIn {...this.props} login={this.props.login} /> */}
              </MDBRow>
              {/* <JoinVendor /> */}
            </MDBContainer>
          </MDBJumbotron>
          {/* NAVIGATIONBAR */}
          <NavBar {...this.props} />
          
          {/* AFTER HOME NAVBAR  */}
          <Carousel/>
         
      {/* BEFORE FOOTER */}
          <CardHome/>      
      {/* ACCESS TO HOME */}
          <CarouselHome />
          <Footer />
        </div>
        <div onScroll={this.toggle}>
          <MDBModal isOpen={this.state.modal} className="modalku">
            {/* <ModalKu {...this.props} /> */}
          </MDBModal>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    emailPengguna: state.user.emailPengguna,
    kataKunci: state.user.kataKunci,
    login: state.user.is_login,
    loading: state.user.isLoading,
    is_signup: state.user.is_signup,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin,
  doSignUp,
  logInFB,
  logInGoogle,
  // patchSignUp,
};
//export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
