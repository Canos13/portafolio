import Layout from '../components/Layout'

const Error = ({statusCode}) => {
  return (
    <Layout>
        <h3 className='text-center pt-2'>No se pudo cargar la pagina</h3>
        <h4 className='text-center'> Codigo de error: {statusCode} </h4>
    </Layout>
  )
}

export default Error