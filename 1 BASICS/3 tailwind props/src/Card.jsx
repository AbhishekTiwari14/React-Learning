
const Card = ({photu, naam, power}) => { //(props) -> props.photu, props.naam, props.power (we have destructured it) 
  return (
    <div className='grid-cols-2 bg-slate-700'>
      <img src={photu} alt="pekapeka" className='w-52' />
      <div className='text-white font-bold'>Name: {naam}</div>
      <div className='text-white font-bold'>Power: {power}</div>
    </div>
  )
}

export default Card
