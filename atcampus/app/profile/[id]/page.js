
import Navbar from './../../components/navbar/Navbar';
import Avatar from '@mui/material/Avatar';

function page({params}) {
  return (
    <div>
      <Navbar />
      <section>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <h2>Ali Al Nahian</h2>
      <p>Fresher • {params.id}</p>
      <p>Hello, This is Ark</p>
      </section>
      
      <section>

      </section>
    </div>
  )
}

export default page
