import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

import CreatingRepo from '../CreateRepo'

class Page1 extends Component {
  state = {StarredData: [], status: true}

  componentDidMount() {
    this.getStarredData()
  }

  getStarredData = async () => {
    const apiUrl =
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc'
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
    const dummy = {
      avatar: 'https://avatars.githubusercontent.com/u/1383811?v=4',
      description:
        'a template for media art installations using Electron in kiosk mode',
      id: 191633724,
      name: 'mattdesl/template-electron-installation',
      pushedAt: '2022-12-09T06:08:04Z',
      starCount: 199,
      username: 'kalyan',
      issues: 222,
    }
    return (
      <div>
        <CreatingRepo RepoData={dummy} />
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
        <Link to="/page-2">
          <button type="button">Next Page</button>
        </Link>
      </div>
    )
  }
}

export default Page1
