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
  return (
    <div className="App">

      <Person name='Rubel' nayika="moushumi"></Person>
      <Person name='BappaRaz' nayika='cheka'></Person>
      <Person name="Kuber" nayika='Kopila'></Person>
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
      <p>Nayika: {props.nayika}</p>
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
