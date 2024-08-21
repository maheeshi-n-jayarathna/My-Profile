import React, { useState } from "react"
import "./style.css"
import { Button, Checkbox, Col, Input, Row } from "antd"
import { FaPhoneVolume } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { IoLogoWhatsapp } from "react-icons/io"
import { IoArrowForward } from "react-icons/io5"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function ContactSection() {
  const [isChecked, setChecked] = useState(false)
  const [company, setCompany] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const serviceId = process.env.REACT_APP_SERVICE_ID
  const templateId = process.env.REACT_APP_TEMPLATE_ID
  const publicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY

  const handleSubmit = async () => {
    if (!company) {
      toast.error("Company cannot be empty")
      return
    }
    if (!name) {
      toast.error("Name cannot be empty")
      return
    }
    if (!phone) {
      toast.error("Phone number cannot be empty")
      return
    }
    if (!email) {
      toast.error("Email cannot be empty")
      return
    }
    if (!message) {
      toast.error("Project Details cannot be empty")
      return
    }
    if (!isChecked) {
      toast.error("Acceptance of privacy policy is required")
      return
    }

    const body = `
      Company: ${company}
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Message: ${message}

    `

    const templateParams = {
      company: company,
      name: name,
      to_name: "octal admin",
      from_email: email,
      message: body,
      reply_to: email
    }

    await emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        toast.success("Your query has been successfully submitted!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        })
        setCompany("")
        setName("")
        setPhone("")
        setEmail("")
        setMessage("")
      })
      .catch((error) => {
        toast.error("Your query failed!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        })
        console.error(error)
      })
  }

  return (
    <div className="contact_page">
      <ToastContainer position="top-right" />
      <Row
        style={{
          // marginTop: "-60px",
          justifyContent: "center"
          // alignItems: "center"
        }}
      >
        <Col lg={10} className="contact_left">
          <div>
            <div className="contact_section">
              <h1>Maheeshi Jayarathna</h1>
              <h1>maheeshijayarathna@gmail.com</h1>
              <div>
                
              </div>
            </div>
          </div>
        </Col>
        <Col lg={14}>
          <form className="contact_form">
            <div style={{ paddingBottom: "20px" }}>
                <h1
                  style={{
                    color: "var(--main-color)",
                    fontSize: "40px"
                  }}
                >
                  Get in touch
                </h1>
                <p style={{ margin: "0", color: "#043762", fontSize: "20px" }}>
                  We are here to answer any question <br />
                  you may have. Feel free to reach via <br />
                  contact form.
                </p>
              </div>
            <Row>
              {/* <Col lg={12} sm={24}>
                <p className="form_lable">
                  Your Name<sup style={{ color: "red" }}>*</sup>
                </p>
                <Input
                  type="text"
                  placeholder=""
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Col> */}
              <Col lg={12} sm={24}>
                <p className="form_lable">
                  Your Name<sup style={{ color: "red" }}>*</sup>
                </p>
                <Input
                  type="text"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col lg={12} sm={24}>
                <p className="form_lable">
                  Your Phone Number<sup style={{ color: "red" }}>*</sup>
                </p>
                <Input
                  type="text"
                  placeholder=""
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Col>
              <Col lg={12} sm={24}>
                <p className="form_lable">
                  Your Email<sup style={{ color: "red" }}>*</sup>
                </p>
                <Input
                  type="email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Col sm={24}>
                <p className="form_lable message_lable">
                  Your Message<sup style={{ color: "red" }}>*</sup>
                </p>
                <Input
                  type="text"
                  placeholder=""
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Col>
              {/* <Col
                sm={24}
                style={{ display: "flex", gap: 8, alignItems: "center" }}
              >
                <Checkbox
                  checked={isChecked}
                  onChange={() => setChecked(!isChecked)}
                />
                <p style={{ color: "#043762", fontWeight: "400" }}>
                  By sending this form I confirm that I have read and accept the
                  <br />
                  <span style={{ fontWeight: "bold" }}>Privacy Policy</span>
                </p>
              </Col> */}
              <Col sm={24} style={{}}>
                <Button
                  disabled={!isChecked}
                  className="btn_contact_submit"
                  onClick={handleSubmit}
                >
                  Send Message
                </Button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  )
}
export default ContactSection
