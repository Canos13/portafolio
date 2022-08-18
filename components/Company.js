
export const Company = ({company,years,description}) => {
  return (
    <>
        <h3> {company} </h3>
        <h5> {years} </h5>
        <p className='text-justify'> {description} </p>
    </>
  )
}
