import style from '../login-card/login-card.css'

export default function LoginCard({ children, title }) {
    return (
      <div className='card'>
        <h2 className='title'>{title}</h2>
        {children}
      </div>
     
      
    )
  }