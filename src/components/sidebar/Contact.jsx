import { GrContactInfo } from 'react-icons/gr';

function Contact({ name, company, cellphone }) {
  return (
    <div className='d-flex justify-content-between gap-2'>
      <GrContactInfo size={34} />
      <div>
        <h6>
          {name}, {company}
        </h6>
        <p className='text-end'>{cellphone}</p>
      </div>
    </div>
  );
}

export default Contact;
