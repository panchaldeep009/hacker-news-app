import React, { Suspense } from 'react'
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { routes } from './routes'
import { PageLoader } from './components/PageLoader'

export const App: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to={routes.topStories.path} />
          </Route>
          {Object.values(routes).map(({ path, Component }) => (
            <Route path={path} key={path}>
              <Component />
            </Route>
          ))}
        </Switch>
    </Suspense>
  );
}
