
const Portafolio = ({title, description, img}) => {
  return (
    <> 
        <div className="overflow" >
            <img src={img} alt={img} className="card-img-top" />
        </div>
        <div className="card-body">
            <h3> {title} </h3>
            <p> {description} </p>
            <a href="#" className="btn btn-primary" >Leer Más</a>
        </div>
    </>
  )
}

export default Portafolio;