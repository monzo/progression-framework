import ReactGA from 'react-ga';

ReactGA.initialize('UA-63104269-1');
ReactGA.set({
  appName: 'Progression at Monzo'
});

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.location.pathname);
};
