

const GitHub = ({data}) => {
  return (
    <div className="row">
        <div className="col-md-12">
            <div className="card card-body bg-secondary text-light">
                <div className="row">
                    <div className="col-md-4">
                        <img 
                            className='img-fluid w-75 d-block mx-auto'
                            src={data.avatar_url} />
                    </div>
                    <div className="col-md-8">
                        <h1>{data.name}</h1>
                        <h5>Nombre de usuario: {data.login} </h5>
                        <h5>De: {data.location} </h5>
                        <h5>Correo: {data.company} </h5>
                        <h5>Seguidores: {data.followers} </h5>
                        <a href={data.html_url} target="_blank"className="my-2 btn btn-outline-light">Perfil en GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GitHub