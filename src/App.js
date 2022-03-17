import logo from './logo.svg';
import './App.css';

const number = 5555;

const singer = {
  name: "dr.mahfuz",
  job: "singer",
};


const singer2 = { name: "eva rahman", job: "singer 2" };

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {

  const nayoks = ['Rubel', 'Bapparaz', 'Kuber', 'jashim', 'salman Shah','anowar'];

  return (
    <div className="App">
      {
        nayoks.map(nayok => <li> Name: {nayok}</li>)

      }

      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }

      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika='cheka'></Person>
      <Person name={nayoks[2]} nayika='Kopila'></Person> */}
      <h5>new component</h5>
      <Friend phone="017777" movie="singum"></Friend>
      <Friend phone="019999"></Friend>


    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  );
}

function Friend(props) {
  console.log(props);
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone}</p>
    </div>
  );
}

export default App;
