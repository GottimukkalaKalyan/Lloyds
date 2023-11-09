import {Component} from 'react'

import './index.css'
//  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

import CreatingRepo from '../CreateRepo'

class Page2 extends Component {
  state = {StarredData: [], status: true}

  componentDidMount() {
    this.getStarredData()
  }

  getStarredData = async () => {
    const apiUrl =
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2'
    const response = await fetch(apiUrl)
    const responseData = await response.json()
    console.log(responseData)
    console.log(responseData.items)
    const UpdatedData = responseData.items.map(each => ({
      id: each.id,
      name: each.full_name,
      description: each.description,
      starCount: each.stargazers_count,
      pushedAt: each.pushed_at,
      avatar: each.owner.avatar_url,
      loginName: each.owner.login,
      issues: each.open_issues,
    }))
    console.log(UpdatedData)
    this.setState({StarredData: UpdatedData, status: true})
  }

  getUser = () => {
    const {StarredData, status} = this.state
    return (
      <div>
        {StarredData.map(eachData => (
          <CreatingRepo RepoData={eachData} key={eachData.id} />
        ))}
      </div>
    )
  }

  render() {
    const {StarredData, status} = this.state
    return (
      <div className="main-container">
        <h1>Most Starred Repos</h1>
        {status && this.getUser()}
      </div>
    )
  }
}

export default Page2
