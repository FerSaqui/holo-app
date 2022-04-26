import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getVtuberById } from '../../helpers/getVtuberById';

export const VtuberScreen = () => {
  /**
   * Para obtener los parametros de la url se ocupa el hook de react-router-dom
   */
  const { vtuberId } = useParams();

  /**useMemo memoriza valores, objetos, casi todo.
   * Memoriza el valor y cuando cambié el valor de vtuberId va a memorizar el nuevo valor
   */
  const vtuber = useMemo(() => getVtuberById(vtuberId), [vtuberId]);
  const navigate = useNavigate();

  /**Para redirigir al usuario a una pantalla en especifico en caso de que el id de la vtuber no exista */
  if (!vtuber) {
    return <Navigate to={"/"} /> //Se ocupa un componente de la librería react-router-dom
  }

  const {
    id,
    name,
    publisher,
    profile,
    first_appearance,
    presentation
  } = vtuber;

  const imagePath = `/assets/${id}.png`;

  const handleReturn = () => {
    return navigate(-1); //Le indicamos que regrese a la página anterior antes de esta página actual
  }

  return (
    <>
      <div className="card mb-3 my-5 animate__animated animate__bounceInLeft">
        <div className="row g-0">
          <div className="col-12 col-md-12 col-lg-4">
            <img src={imagePath} className="img-fluid rounded-start h-100 w-100" alt={name} />
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h5 className="card-title">Publisher</h5>
              <p>{publisher}</p>
              <h5 className="card-title">Profile</h5>
              <p>{profile}</p>
              <h5 className="card-title">First Appearance</h5>
              <p className="card-text">{first_appearance}</p>
              <h5 className="card-title">Presentation</h5>
              <p className="card-text"><small className="text-muted">{presentation}</small></p>
            </div>
          </div>
        </div>
      </div>
      <button 
        className="w-100 btn btn-primary mt-2 animate__animated animate__bounceInLeft"
        onClick={handleReturn}
      >
        Leave
      </button>
    </>
  )
}
