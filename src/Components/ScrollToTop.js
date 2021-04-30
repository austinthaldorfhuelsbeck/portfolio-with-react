export default function ScrollToTop() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="flex-container">
      <i
        className="fas fa-arrow-circle-up fa-4x mx-auto"
        onClick={scrollToTop}
      ></i>
    </div>
  )
}
