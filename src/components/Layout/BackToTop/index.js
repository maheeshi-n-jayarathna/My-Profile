import { useEffect, useState } from "react"
import "./style.css"
import { FaArrowUp } from "react-icons/fa6"

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return isVisible ? (
    <div className="back_to_top_wrapper" onClick={scrollToTop}>
      <FaArrowUp size={32} />
    </div>
  ) : null
}
export default BackToTop
