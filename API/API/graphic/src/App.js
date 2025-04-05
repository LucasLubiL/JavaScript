import { useEffect, useState } from 'react';
import Chart from './chart';
import { getCandles } from './dataService';

function App() {
  
  const [data, setData] = useState([]);
  const [moeda, setMoeda] = useState('');

  useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search);
    const moedaSelecionada = urlParams.get('moeda');

    getCandles(moedaSelecionada, '1m')
      .then(data => setData(data))
      .catch(err => alert(err.response ? err.response.data : err.message));
  }, []);

  return (
    <div>
      <h2>Gráfico: {moeda}</h2>
      <Chart data={data} />
    </div>
  );
}

export default App;