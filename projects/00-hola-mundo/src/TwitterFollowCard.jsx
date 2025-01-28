import { useState } from "react"

function TwitterFollowCard({username, name}) {
  const [isFollowing, setIsFollowing] = useState(false)
  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  const handleClick = () =>{
    setIsFollowing(!isFollowing)
  }
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar' 
          src={`https://github.com/${username}.png`}
          alt="El avatar de andoni" />
        <div className='tw-followCard-info'>
          <strong >
            {name}
          </strong>
          <span className='tw-followCard-infoUserName'>
            @{username}
          </span>
        </div>
      </header>
      <aside>
        <button
             onClick={handleClick}
            className={`tw-followCard-button ${isFollowing ? 'is-following': ''}`}
        >
          {text}
        </button>
      </aside>
     </article>
  )
}

export default TwitterFollowCard