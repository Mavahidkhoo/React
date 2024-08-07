import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faHandHoldingDollar, faGem, faBiohazard } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  const Icons = [
    {
      icon: faTruckFast,
      lablel: " تحویل سریع",
    },
    {
      icon: faHandHoldingDollar,
      lablel: " قیمت در دستان شما",
    },
    {
      icon: faGem,
      lablel: " ارزش بالا",
    },
    {
      icon: faBiohazard,
      lablel: "خطرناک",
    },
  ];
  return (
    <div className="">
      <div className="hr"></div>
      <div className="me-2 text-danger bold">
        <h1>به سایت من خوش آمدید</h1>
      </div>
      <Container className="mt-5 d-flex justify-content-between">
        {Icons.map((item, index) => (
          <div key={index} className="d-flex flex-column">
            <FontAwesomeIcon icon={item.icon} className="fs-1 text-warning" />
            <strong className="mt-2 text-primary">{item.lablel} </strong>
          </div>
        ))}
      </Container>
      <Container className="mt-4">
        <Row>
          <Col>
            <h3 className="bolder text-success">درباره ما</h3>
            <p className="text-info">
              ما با بیش از ده سال سابقه در زمینه ارائه خدمات فروشگاهی آنلاین، همواره تلاش می‌کنیم تا بهترین خدمات و محصولات را با بالاترین کیفیت و مناسب‌ترین قیمت‌ها به مشتریان عزیز ارائه دهیم. هدف ما ایجاد تجربه‌ای بی‌نظیر و رضایت‌بخش برای همه‌ی خریداران است.
            </p>
          </Col>
          <Col>
            <h3 className="bolder text-success">تماس با ما</h3>
            <p className="text-info">
              شما می‌توانید از طریق راه‌های زیر با ما در تماس باشید:
              <br />
              تلفن: 123-456-7890
              <br />
              ایمیل: info@example.com
              <br />
              آدرس: خیابان مثال، پلاک ۱۰، تهران
            </p>
          </Col>
        </Row>
      </Container>
      <Row className="mt-5 d-flex flex-row-reverse">
        <button
          className="btn btn-success col-2 mb-5"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
          بازگشت به بالا
        </button>
      </Row>
    </div>
  );
}

export default Footer;
