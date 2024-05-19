import './Principal.css';

export default function Principal() {
  return (
    <div>
      <div className='slider-frame'>
        <ul>
          <li><img src={`${process.env.PUBLIC_URL}/semillero1.jpg`} alt ="semillero1" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/semillero2.jpg`} alt ="semillero1" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/semillero3.png`} alt ="semillero1" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/semillero4.jpg`} alt ="semillero1" /></li>
        </ul>
      </div>
      <div className='container-news'>

      </div>
    </div>
  )
}
