const ReactGA = require('react-ga')

ReactGA.initialize('UA-63104269-2')
ReactGA.set({
  appName: 'Progression at Monzo'
})

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname)
}
