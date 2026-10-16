import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const sekcje = ['Piłka nożna', 'Szachy', 'Robotyka', 'Pływanie'];

  const [imieNazwisko, setImieNazwisko] = useState('');
  const [numerSekcji, setNumerSekcji] = useState('');

  function zapiszFormularz(event) {
    event.preventDefault();

    const numer = Number(numerSekcji);

    console.log(imieNazwisko);

    if (Number.isInteger(numer) && numer >= 1 && numer <= sekcje.length) {
      console.log(sekcje[numer - 1]);
    } else {
      console.log('Nieprawidłowy numer sekcji');
    }
  } 

return (
    <div className="container mt-4">
      <h2>Liczba sekcji: {sekcje.length}</h2>

      <ol>
        {sekcje.map((sekcja, indeks) => (
          <li key={indeks}>{sekcja}</li>
        ))}
      </ol>

    </div>
  );

}


export default App
