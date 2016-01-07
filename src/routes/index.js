import { Route, IndexRoute } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout'
import HomeView from 'views/HomeView'
import LoginView from 'views/LoginView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/login' component={LoginView} />
    <Route path='/signup' component={LoginView} />
    <Route path='/params' component={LoginView} />
    <Route path='*' component={HomeView} />
  </Route>
)
