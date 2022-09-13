import { Link } from 'react-router-dom'

const EditContatc = () => {
  return (
    <>
      <section className='add-contac p-3'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='h4 text-primary fw-bold'>Edit Contact</p>
              <p className='fst-italic'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                voluptatum, labore itaque fugit, excepturi at praesentium
                tempore tenetur beatae corrupti odio, facere deleniti. Dolorem
                quaerat maiores tenetur inventore, a illo!
              </p>
            </div>
          </div>
          <div className='row align-items-center'>
            <div className='col-md-4 me-5'>
              <form>
                <div className='mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                  />
                </div>
                <div className='mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Photo URL'
                  />
                </div>
                <div className='mb-2'>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Mobile Number'
                  />
                </div>
                <div className='mb-2'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                  />
                </div>
                <div className='mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Company'
                  />
                </div>
                <div className='mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Title'
                  />
                </div>
                <div className='mb-2'>
                  <select className='form-control text-center'>
                    <option value=''> --- Select a Group ---</option>
                  </select>
                </div>
                <div className='mb-2'>
                  <input
                    type='submit'
                    className=' btn btn-primary'
                    value='Add Contact'
                  />
                  <Link to={'/contacts/list'} className='btn btn-dark ms-2'>
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
            <div className='col-md-6'>
              <img
                src='https://cdn-icons-png.flaticon.com/512/219/219986.png'
                alt='User'
                className='edit-img'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EditContatc
