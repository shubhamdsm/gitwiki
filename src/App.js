import Search from './components/Search';
import './App.css';
import {motion} from 'framer-motion'

function App() {
  return (
    <motion.main initial={{y:100}} animate={{y:0}} transition={{type:'spring', damping:12, stiffness:200}} className="App">
    <footer className='text-white text-right mt-5 mr-3 '>
            <a className='pr-5 hover:underline' href='https://github.com/shubhamdsm' target='_ blank'>github</a>
            <a className='hover:underline' href='https://shubhamdsm-portfolio.netlify.com/' target='_ blank'>portfolio</a>
        </footer>    
    <a href ='/'>
      <h1 className='text-white font-black text-6xl text-center pt-6'>Gitwiki</h1>
    </a>
      
      <Search/>
    </motion.main>
  );
}

export default App;
