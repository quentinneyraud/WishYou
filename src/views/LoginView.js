// import { connect } from 'react-redux'
// import { Link } from 'react-router'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html

export class LoginView extends React.Component {
  static propTypes = {
  }

  componentDidMount () {
    console.log('test de login')
  }

  render () {
    return (
      <div className='container text-center'>
        Test
      </div>
    )
  }
}

export default LoginView
