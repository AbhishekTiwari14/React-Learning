import './App.css'
import ExUseMemo from './components/ExUseMomo'
import ExUseRef from './components/ExUseRef'

function App() {

  return (
    <div className='flex gap-6'>
      <ExUseMemo />
      <ExUseRef />
    </div>
  )
}

export default App
