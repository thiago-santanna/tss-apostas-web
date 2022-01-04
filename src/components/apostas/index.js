import { formatLocalDate } from '../../utils/formatDate';

function Apostas({ apostas }) {

  console.log(apostas)

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Aposta</th>
          </tr>
        </thead>
        <tbody>
          {
            apostas?.map(aposta => (
              <tr key={aposta.id}>
                <td>{formatLocalDate(aposta.dataAposta, 'dd/MM/yyyy')}</td>
                <td>{aposta.dezenas.map(dezena => `${dezena} `)}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Apostas;