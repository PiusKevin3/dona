import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { doSignOut, logOutFB, logOutGoogle } from "../store/action/userAction";
import {
  getKategori,
  getNegara,
  getKota,
  changeInputFilterNegara,
  changeInputFilterKategori,
  changeInputFilterKota,
  changeInputFilterBudget,
  getVendor,
  getVendorBspay,
  getVendorFlexi,
  getVendorBspayFlexi,
} from "../store/action/filterAction";
import NavBarVendor from "../components/NavBarVendor";
import "../css/Store.css";
import FilterKategori from "../components/FilterKategori";
import Cards from "../components/StoreCards";
import CardStore from "../components/CardStore"
import BreadCrumbs from "../components/BreadCrumbs";
import { MDBRow, MDBBtn, MDBCol } from "mdbreact";
import FilterNegara from "../components/FilterNegara";
import FilterKota from "../components/FilterKota";
import FilterHarga from "../components/FilterHarga";
import PageFooter from "../components/PageFooter"
import {Usertwo} from "../images/functionjuctionug/IMG-20210108-WA0004.jpg"


class Store extends React.Component {
  state = {
    isOpen: false,
    checkedBspay: false,
    checkedFlexi: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleChangeBspay = async () => {
    this.setState({ checkedBspay: !this.state.checkedBspay });
    if (
      this.state.checkedBspay === false &&
      this.state.checkedFlexi === false
    ) {
      await this.props.getVendorBspay();
    } else if (
      this.state.checkedBspay === false &&
      this.state.checkedFlexi === true
    ) {
      await this.props.getVendorBspayFlexi();
    } else if (
      this.state.checkedBspay === true &&
      this.state.checkedFlexi === true
    ) {
      await this.props.getVendorFlexi();
    }
  };

  handleChangeFlexi = async () => {
    this.setState({ checkedFlexi: !this.state.checkedFlexi });
    if (
      this.state.checkedBspay === false &&
      this.state.checkedFlexi === false
    ) {
      await this.props.getVendorFlexi();
    } else if (
      this.state.checkedFlexi === false &&
      this.state.checkedBspay === true
    ) {
      await this.props.getVendorBspayFlexi();
    } else if (
      this.state.checkedBspay === false &&
      this.state.checkedFlexi === true
    ) {
      await this.props.getVendor();
    } else if (
      this.state.checkedBspay === true &&
      this.state.checkedFlexi === true
    ) {
      await this.props.getVendorBspay();
    }
  };

  handleCariVendor = async () => {
    await this.props.getVendor();
  };

  componentDidMount = async () => {
    await this.props.getKategori();
    await this.props.getNegara();
    await this.props.getKota();
    await this.props.getVendor();
  };

  render() {
    const login = localStorage.getItem("is_login");
    // if (login === false) {
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: "/",
    //       }}
    //     />
    //   );
    // } else {

      return (
        <div>
        <Fragment>
          {/* NAVBAR PERTAMA DAN KEDUA */}
          <NavBarVendor
            // toggle={() => this.toggleCollapse()}
            // isOpen={this.state.isOpen}
            // {...this.props}
          />
          {/* NAVBAR DROPDOWN dan BREADCRUMBS*/}
          <MDBRow
            className="dd-filter d-flex justify-content-center"
            style={{ marginRight: "0px" }}
          >
            {/* FILTER-FILTER */}
            <FilterKategori
              dataKategori={this.props.dataKategori}
              changeInputFilterKategori={this.props.changeInputFilterKategori}
            />
            <FilterNegara
              dataNegara={this.props.dataNegara}
              changeInputFilterNegara={this.props.changeInputFilterNegara}
              getKota={this.props.getKota}
            />
            <FilterKota
              dataKota={this.props.dataKota}
              changeInputFilterKota={this.props.changeInputFilterKota}
            />
            <FilterHarga
              budget={this.props.budget}
              changeInputFilterBudget={this.props.changeInputFilterBudget}
            />
            <MDBBtn class="cari-vendor" onClick={this.handleCariVendor}>
              Find Vendor
            </MDBBtn>
          </MDBRow>
          <BreadCrumbs
            checkedBspay={this.state.checkedBspay}
            checkedFlexi={this.state.checkedFlexi}
            handleChangeBspay={() => this.handleChangeBspay()}
            handleChangeFlexi={() => this.handleChangeFlexi()}
            kategori={this.props.dataKategori}
            {...this.props}
          />
          {/* CARD OF CONTENT */}
          {/* {this.props.isLoading ? ( */}

            {/* <MDBRow
              className="d-flex justify-content-center"
             // style={{ marginRight: "0px" }}
            > */}
              {/* <MDBCol md="12 d-flex justify-content-center"> */}
              {/* <MDBCol md="10 d-flex justify-content-center"> */}
                 {/* <div>
                  <img
                    src="https://www.bridestory.com/images/loadersmall.gif"
                    alt="loading"
                    style={{ marginTop: "10px", marginLeft: "-10px" }}
                  ></img>
                </div> */}
                 {/* <div class="row row-cols-1 row-cols-md-4 g-4 ">
                 <Cards  />
                <Cards  />
                <Cards  />
                <Cards  />
                <Cards  />
                <Cards  />
                </div>
              </MDBCol>
            </MDBRow> */}
            
            
          {/* // ) : ( */}
            {/* <Cards dataVendor={this.props.dataVendor} /> */}
          {/* )} */}
        </Fragment>
        
        <CardStore/>        
        <PageFooter/>

        


        </div>
      );
   // }
  }
}
const mapStateToProps = (state) => {
  return {
    emailPengguna: state.user.emailPengguna,
    kataKunci: state.user.kataKunci,
    login: state.user.is_login,
    loading: state.user.isLoading,
    isLoginFB: state.user.isLoginFB,
    isLoginGoogle: state.user.isLoginGoogle,
    nama: state.user.name,
    foto: state.user.foto,
    dataKategori: state.filter.dataKategori,
    dataNegara: state.filter.dataNegara,
    dataKota: state.filter.dataKota,
    categoryID: state.filter.categoryID,
    countryID: state.filter.countryID,
    cityID: state.filter.cityID,
    budget: state.filter.budget,
    dataVendor: state.filter.dataVendor,
    isLoading: state.filter.isLoadingVendor,
  };
};

const mapDispatchToProps = {
  doSignOut,
  getKategori,
  getNegara,
  getKota,
  changeInputFilterNegara,
  changeInputFilterKategori,
  changeInputFilterKota,
  changeInputFilterBudget,
  getVendor,
  getVendorBspay,
  getVendorFlexi,
  getVendorBspayFlexi,
  logOutFB,
  logOutGoogle,
};
export default connect(mapStateToProps, mapDispatchToProps)(Store);
//export default Store;
