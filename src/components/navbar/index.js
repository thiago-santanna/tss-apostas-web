import logo from '../../logo.svg';
function NavBar() {
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center flex-md-row p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm gap-3">
        <img src={logo} alt="TssWebApps" width="120" />
        <p className="fs-2">TSS Gerador de apostas</p>
      </div>
    </div>
  )
}

export default NavBar;