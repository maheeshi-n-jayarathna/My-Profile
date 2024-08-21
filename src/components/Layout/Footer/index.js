import { Button, Col, Flex, Input, Row } from "antd"
import {
  AiFillCaretRight,
  AiFillCaretUp,
  AiOutlineCopyright
} from "react-icons/ai"
import { Link } from "react-router-dom"
import { Link as ScrolLink } from "react-scroll"
import "./Footer.css"
import { IoMdMail } from "react-icons/io"
import { FaPhoneVolume } from "react-icons/fa6"
import Logo from "./../../../assets/octal_logo_no_bg.png"

function Footer() {
  return (
    <footer className="footer_container">
      <p className="text-[12px]">
                    Copyright ©2024 All rights reserved | Developed by <span
                    className="text-accent">Ruvini Rangathara</span>
                </p>
    </footer>
  )
}

export default Footer
