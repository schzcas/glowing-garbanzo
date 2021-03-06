import React, { Component, Fragment } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./layout.module.scss";
import collapse from "../../assets/icon/collapse-arrow.svg";

interface LayoutProps {
  title?: string;
  children?: any;
}

interface LayoutState {
  landscapeCollapsedSidebar: boolean;
  mobileCollapsedSidebar: boolean;
}

class Layout extends Component<LayoutProps, LayoutState> {
  private landing: boolean 
  constructor(props: LayoutProps) {
    super(props);
    this.landing = true
    this.state = {
      landscapeCollapsedSidebar: true,
      mobileCollapsedSidebar: true
    };
  }

  componentDidMount() {
    this.landing = window.location.pathname == "/"
    this.setState({
      landscapeCollapsedSidebar: !this.landing,
    })
  }

  contentWidth = 9;
  hiddenClass = "fixed-top one";
  contentClass = "two";

  toggleHideHandler = () => {
    this.setState({
      landscapeCollapsedSidebar: !this.state.landscapeCollapsedSidebar,
      mobileCollapsedSidebar: !this.state.mobileCollapsedSidebar,
    });
  };

  render() {
    return (
      <Container fluid className={styles.container}>
        <Row className={styles.row}>
          <Col className="d-block d-lg-none p-0">
            <Mobile
              collapsedSidebar={this.state.mobileCollapsedSidebar}
              toggleHideHandler={this.toggleHideHandler}
            >
              {this.props.children}
            </Mobile>
          </Col>
          <Col className="d-none d-lg-block p-0">
            <Landscape
              collapsedSidebar={this.state.landscapeCollapsedSidebar}
              toggleHideHandler={this.toggleHideHandler}
            >
              {this.props.children}
            </Landscape>
          </Col>
        </Row>
      </Container>
    );
  }
}

const Mobile = (props: any) => {
  return (
    <Fragment>
      <div
        className={[
          styles.sidebar,
          props.collapsedSidebar ? styles.hidden : styles.mobileVisible,
        ].join(" ")}
      >
        <Sidebar
          hidden={props.collapsedSidebar}
          closeHandle={props.toggleHideHandler}
          mobile={true}
        ></Sidebar>
      </div>
      {typeof window !== `undefined` ? (
        <Header
          extendedSearchbar={
            window.location.pathname == "/" ||
            window.location.pathname == "/search-result/"
              ? true
              : false
          }
          mobile={true}
          toggleHide={props.toggleHideHandler}
        ></Header>
      ) : (
        ""
      )}
      <body className={styles.body}>
        <main>{props.children}</main>
        <Footer mobile={true}></Footer>
      </body>
    </Fragment>
  );
};

const Landscape = (props: any) => {
  return (
    <Fragment>
      <div
        className={[
          styles.sidebar,
          props.collapsedSidebar ? styles.hidden : styles.visible,
        ].join(" ")}
      >
        <Sidebar hidden={props.collapsedSidebar}></Sidebar>
      </div>

      <div
        className={[
          "d-none d-lg-block ",
          styles.content,
          !props.collapsedSidebar ? styles.contentOffset : "",
        ].join(" ")}
      >
        <div
          className={[
            props.collapsedSidebar ? styles.rotated : "",
            styles.hideButton,
          ].join(" ")}
          onClick={props.toggleHideHandler}
        >
          <img src={collapse} alt="" />
        </div>
        {typeof window !== `undefined` ? (
          <Header
            extendedSearchbar={
              window.location.pathname == "/" ||
              window.location.pathname == "/search-result/"
                ? true
                : false
            }
          ></Header>
        ) : (
          ""
        )}
        <body className={styles.body}>
          <main>{props.children}</main>
          <Footer></Footer>
        </body>
      </div>
    </Fragment>
  );
};

export default Layout;
