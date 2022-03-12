import './App.css'
import data from "./data"
import List from './List';
export default function App() {
  return (
    <div className="App">
     <main>
       <section className='container'>
         <h2>{data.length} birthdays today</h2>
         <List people={data}/>
         </section>
     </main>
    </div>
  );
}
