const FooterBar = () => {
  const newYear = new Date().getFullYear()
  return (
    <>
      <div className="m-footer">
        Copyright © 2022 - {newYear}
      </div>
    </>
  )
}
export default FooterBar
