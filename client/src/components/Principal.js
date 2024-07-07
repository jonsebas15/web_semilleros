import './Principal.css';
import { useAuth } from "../context/authContext";
import {Link} from 'react-router-dom'

export default function Principal() {
  return (
    <div>
      <div className='slider-frame'>
        <ul>
          <li><Link to='/semillero1'><img src={`${process.env.PUBLIC_URL}/semillero2.jpg`} alt="semillero1" /></Link></li>
          <li><Link to='/semillero1'><img src={`${process.env.PUBLIC_URL}/semillero1.jpg`} alt="semillero1" /></Link></li>
          <li><Link to='/semillero1'><img src={`${process.env.PUBLIC_URL}/semillero3.png`} alt="semillero1" /></Link></li>
          <li><Link to='/semillero1'><img src={`${process.env.PUBLIC_URL}/semillero4.jpg`} alt="semillero1" /></Link></li>
        </ul>
      </div>
      <div className='container-news'>
        <h1>
          Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor vestibulum lorem, eu tincidunt quam mattis id. Praesent viverra orci enim, vel mollis erat viverra at. Donec tincidunt interdum eros sit amet tempor. Cras ac facilisis purus. Nulla scelerisque, elit quis aliquam feugiat, diam dolor pretium nisl, id pretium purus felis id velit. Nunc eleifend facilisis quam, dapibus fermentum elit bibendum eu. Ut purus dui, facilisis vehicula porta nec, condimentum ut enim.

          Fusce euismod commodo ante eu ultricies. Phasellus sollicitudin erat ut porttitor mattis. Sed ac dignissim ligula. Quisque sit amet vehicula dolor, non vehicula diam. Aliquam sed dui vel lectus ultrices aliquet. Duis erat eros, cursus ut sollicitudin id, placerat a tellus. Mauris sollicitudin libero quis nisi dignissim, ut pharetra nulla elementum. Pellentesque venenatis dignissim consectetur. Mauris eget mauris sodales, dictum eros quis, eleifend libero. Sed feugiat dapibus laoreet. Vestibulum ut orci ac metus pharetra suscipit.

          Mauris eu est mattis ligula sagittis iaculis varius eu tellus. Duis tortor nulla, imperdiet in leo quis, lobortis scelerisque dolor. Fusce et felis cursus neque blandit tempus quis a augue. Suspendisse feugiat tempor dignissim. Pellentesque finibus hendrerit turpis, in vestibulum augue maximus eu. Integer in libero non urna consectetur consectetur. Aliquam erat volutpat. Morbi laoreet dui ac magna volutpat, eu sollicitudin quam ultrices. Etiam convallis euismod diam, vel tempor mi ultricies vitae.</p>
      </div>
    </div>
  )
}
