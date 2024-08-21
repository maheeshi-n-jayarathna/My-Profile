import GreenText from "./GreenText"

export default function Heading({ children, type }) {
  if (!children) {
    return
  }

  const words = children.split(" ")
  let content

  if (words.length === 1) {
    content = (
      <span>
        <GreenText>{children}</GreenText>
      </span>
    )
  } else if (words.length === 2) {
    content = (
      <span>
        <GreenText>{words[0]}</GreenText> {words[1]}
      </span>
    )
  } else if (words.length === 3 && type === "about") {
    content = (
      <span>
        <GreenText>{words[0] + " "}</GreenText>
        <br />
        {words.slice(1, -1).join(" ")}{" "}
        <GreenText>{words[words.length - 1]}</GreenText>
      </span>
    )
  } else if (words.length === 3) {
    content = (
      <span>
        <GreenText>{words[0] + " "}</GreenText>
        {words.slice(1, -1).join(" ")}{" "}
        <GreenText>{words[words.length - 1]}</GreenText>
      </span>
    )
  } else if (type === "home") {
    content = (
      <span>
        <GreenText>{words[0] + " " + words[1]}</GreenText>{" "}
        {words.slice(2, -5).join(" ")}
        <br /> {words.slice(4, -3).join(" ")} <br />
        {words.slice(6, -2).join(" ")}{" "}
        <GreenText>
          {words[words.length - 2] + " " + words[words.length - 1]}
        </GreenText>
      </span>
    )
  } else {
    content = (
      <span>
        <GreenText>{words[0] + " " + words[1]}</GreenText>{" "}
        {words.slice(2, -1).join(" ")}{" "}
        <GreenText>
          {words[words.length - 2] + " " + words[words.length - 1]}
        </GreenText>
      </span>
    )
  }

  return <div className="heading">{content}</div>
}
