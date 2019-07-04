const ReactGA = require('react-ga')

ReactGA.initialize('UA-143271060-1')
ReactGA.set({
  appName: 'Progression at Bright'
})

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname)
}