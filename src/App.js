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

      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>new component</h5>
      <Friend></Friend>
      <Friend></Friend>


    </div>
  );
}

function Person() {
  return (
    <div className='person'>
      <h1>Sakib al Hasan</h1>
      <p>Profession: criceketer</p>
    </div>
  );
}

function Friend() {

  return (
    <div className='container'>
      <h3>Name: Ajay devgun</h3>
      <p>job: maramari</p>
    </div>
  );
}

export default App;
