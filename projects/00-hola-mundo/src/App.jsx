import './App.css'
import TwitterFollowCard from './TwitterFollowCard'
function App() {
  const users = [
    {
      userName: 'Andonny1up',
      name:'Andoni Barba Noe',
      isFollowing: true,
    },{
      userName: 'agustinmejia',
      name:'Agustin Mejia',
      isFollowing: false,
    },
    {
      userName: 'ignacio1997img',
      name:'Ignacio Molina Guzman',
      isFollowing: false,
    }
  ]
  return (
    <section className='App'>
      {
        users.map(user => {
          const { userName,name,isFollowing} = user
          return (
            <TwitterFollowCard
              key={userName} 
              username={userName}
              name={name}
              initialIsFollowing={isFollowing}
            />
          )
        })
      }
      
    </section>
  )
}

export default App
