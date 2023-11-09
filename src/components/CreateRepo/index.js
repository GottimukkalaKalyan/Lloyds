import './index.css'

const CreatingRepo = props => {
  const {RepoData} = props
  const {name, description, starCount, pushedAt, avatar, issues, loginName} =
    RepoData
  return (
    <div className="repo-container">
      <div className="image-card">
        <img src={avatar} alt="Avatar" className="profile-pic" />
      </div>
      <div className="details-card">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="stars-card">
          <p className="stars-para">{starCount}</p>
          <p className="stars-para">{issues}</p>
          <p>Last pushed : {pushedAt}</p>
        </div>
      </div>
    </div>
  )
}
export default CreatingRepo
