import { FaLanguage } from "react-icons/fa6";

function Language({ language, level }) {
  return (
    <section className="d-flex justify-content-between gap-2">
      <FaLanguage  size={42} />
      <div>
        <h6>
          {language}
        </h6>
        <p className='text-end'>{level}</p>
      </div>
    </section>
  )
}

function Languages() {
  return (
    <>
      <h5 className='fw-medium mb-3'>Idiomas</h5>
      <Language language={'Español'} level={'Nativo'} />
      <Language language={'Ingles'} level={'B1'} />
    </>
  )
}

export default Languages