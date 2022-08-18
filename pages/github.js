import GitHub from '../components/GitHub';
import Layout from '../components/Layout'
import Error from '../pages/_error'

const github = ({user, statusCode}) => {
      console.log(statusCode)

      if(statusCode){
          return <Error statusCode={statusCode} />
      }

      return (
          <Layout title="GitHub">
              <GitHub data={user} />
          </Layout>
      )
}

export async function getServerSideProps(){
    const res = await fetch('https://api.github.com/users/Canos13');
    const data = await res.json();
    const statusCode = res.status > 200 ? res.status : false;

    return {
        props: { 
            user: data,
            statusCode 
        }
    }
}

export default github