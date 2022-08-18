import Layout from '../components/Layout';
import Link from 'next/link'

const Custom404 = () => (
    <Layout>
        <div className="text-center py-4">
            <h1>Esta página no existe</h1>
            <p>
                Por favor regresa al <Link href="/"><a>inicio</a></Link>
            </p>
        </div>
    </Layout>
)

export default Custom404;