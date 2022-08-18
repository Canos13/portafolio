import { skills, experience, portafolio } from '../lib/skills'
import Portafolio from '../components/Portafolio'
import { Company } from '../components/Company'
import Layout from '../components/Layout'
import Skills from '../components/Skills'
import Link from 'next/link'

const Index = () => {
  return (
    <Layout title="Portafolio">
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img 
                            className='img-fluid'
                            src="https://raw.githubusercontent.com/FaztTech/next-simple-portfolio/main/public/ryan-ray-profile2.jpeg" alt="Sergio Cano Profile" />
                        </div>
                        <div className="col-md-8">
                            <h1>Sergio Cano Martínez</h1>
                            <h4>JavaScript Developer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illo eius ratione molestias perspiciatis esse culpa molestiae quaerat ea. Accusantium delectus expedita numquam mollitia esse odio earum nisi rporis consequatur corporis .</p>
                            <Link href="/contact">
                                <a className='btn btn-outline-light' >Contáctame</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                            skills.map(({skills,percent}, i)=>{
                                return (
                                    <div key={i} className="py-2">
                                        <Skills
                                            skills={skills}
                                            percent={percent}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experiencia</h1>
                        <ul>
                            {
                                experience.map(({company,years,description}, i) => (
                                        <li key={i}>
                                            <Company
                                                company={company}
                                                years={years}
                                                description={description}
                                            />
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className='text-center text-light'>Portafolio</h1>
                        </div>  
                        {
                            portafolio.map(({title, img, description},i)=>(
                                <div key={i} className="col-md-4 p-2 ">
                                    <div className="card h-100">
                                        <Portafolio
                                            title={title}
                                            img={img}
                                            description={description}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-4">
                        <Link href='/projects'>
                            <a className='btn btn-outline-light'>Más Proyectos</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Index;