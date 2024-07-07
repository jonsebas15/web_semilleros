export default function Semillero1() {
  const Estiloimg = {
    width: '600px', 
    height: '400px', 
    border: '2px solid black', 
    borderRadius: '10px',
    display: 'block',
    margin: '0 auto'
    
  }
  return (
    <div>
        <h1 className="titulo"> Semillero 1</h1>
        <img style={Estiloimg} src={`${process.env.PUBLIC_URL}/semillero3.png`} alt="semillero1" />
    </div>
  )
}
