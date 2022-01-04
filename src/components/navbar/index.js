import cash from '../../cash-coin.svg'

function NavBar() {
  return (
    <div className="mb-auto">
      <div className="d-flex flex-column text-center justify-content-center align-items-center flex-md-row p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm gap-3">
        <img src={cash} alt="TssWebApps" width="90" />

        <p className="fs-2 m-0">Gerador de apostas - Mega Sena(6 dezenas)</p>
      </div>
    </div>
  )
}

export default NavBar;