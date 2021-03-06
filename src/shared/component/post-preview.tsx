import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./post-preview.module.scss";
import PostType from "./post-type";
import Tags from "./post-tags";

interface PostProps {
  title: string;
  date: string;
  excerpt?: string;
  contentType?: Array<string>;
  tags?: Array<string>;
  featuredImage?: any;
  link: string;
  extended?: boolean;
  mobile?: boolean;
  type?: string;
}

interface Post {
  post: PostProps;
}

const PostPreview = (props: PostProps) => {
  return props.mobile ? (
    <MobileView post={props}></MobileView>
  ) : props.extended ? (
    <ExtendedView post={props}></ExtendedView>
  ) : (
    <RegularView post={props}></RegularView>
  );
};

const RegularView = (props: Post) => {
  return (
    <Container fluid className={styles.container}>
      <Row className={styles.row}>
        <Col className={styles.contentCol}>
          <Link
            className={[styles.title, "headline-3"].join(" ")}
            to={props.post.link}
          >
            {props.post.title}
          </Link>
          <p className={[styles.date, "small-text"].join(" ")}>
            {props.post.date}
          </p>
          {props.post.contentType ? (
            <PostType postType={props.post.type} types={props.post.contentType}></PostType>
          ) : (
            ""
          )}
          <p className={[styles.excerpt, "paragraph"].join(" ")}>
            {props.post.excerpt}
          </p>
          {props.post.tags ? <Tags tags={props.post.tags}></Tags> : ""}
        </Col>
        {props.post.featuredImage ? (
          <Col lg={4} xl={4} className={[styles.imageCol, "p-0"].join(" ")}>
            <Link to={props.post.link}>
              <img src={props.post.featuredImage} alt="" />
            </Link>
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
};

const MobileView = (props: Post) => {
  return (
    <Container fluid className={[styles.container, styles.mobile].join(" ")}>
      <Row className={[styles.row, "justify-content-center"].join(" ")}>
        <Col xs={10} sm={10}>
          <Link
            className={[styles.title, "headline-3"].join(" ")}
            to={props.post.link}
          >
            {props.post.title}
          </Link>
          <p className={[styles.date, "small-text"].join(" ")}>
            {props.post.date}
          </p>
          {props.post.contentType ? (
            <PostType postType={props.post.type} types={props.post.contentType}></PostType>
          ) : (
            ""
          )}
        </Col>
        {props.post.featuredImage ? (
          <Col xs={10} sm={10} className={styles.imageCol}>
            <Link to={props.post.link}>
              <img src={props.post.featuredImage} alt="" />
            </Link>
          </Col>
        ) : (
          ""
        )}
        <Col xs={10} sm={10}>
          <p
            className={[
              styles.excerpt,
              "paragraph m-0",
              styles.mobileExcerpt
            ].join(" ")}
          >
            {props.post.excerpt}
          </p>
          {props.post.tags ? <Tags tags={props.post.tags}></Tags> : ""}
        </Col>
      </Row>
    </Container>
  );
};

const ExtendedView = (props: Post) => {
  return (
    <Container fluid className={styles.extendedContainer}>
      <Row className={styles.row}>
        {props.post.featuredImage ? (
          <Col lg={5} xl={5} className={[styles.imageCol, "p-0"].join(" ")}>
            <Link to={props.post.link}>
              <img src={props.post.featuredImage} alt="" />
            </Link>
          </Col>
        ) : (
          ""
        )}
        <Col className="p-0">
          <Link
            className={[styles.title, "headline-3"].join(" ")}
            to={props.post.link}
          >
            {props.post.title}
          </Link>
          <p className={[styles.date, "small-text"].join(" ")}>
            {props.post.date}
          </p>
          {props.post.contentType ? (
            <PostType postType={props.post.type} types={props.post.contentType}></PostType>
          ) : (
            ""
          )}
          <p className={[styles.excerpt, "paragraph"].join(" ")}>
            {props.post.excerpt}
          </p>
          {props.post.tags ? <Tags tags={props.post.tags}></Tags> : ""}
        </Col>
      </Row>
    </Container>
  );
};

export default PostPreview;
