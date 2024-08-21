function MainPageContainer({
  mainSectionElement,
  secondSectionElement,
  secondSectionCustomClassName,
  backgroundImage = true
}) {
  return (
    <div>
      <div className="relative">{mainSectionElement}</div>
      {secondSectionElement && (
        <div
          className={`relative ${
            secondSectionCustomClassName
              ? secondSectionCustomClassName
              : "secound_container"
          }`}
        >
          {secondSectionElement}
        </div>
      )}
    </div>
  )
}

export default MainPageContainer
