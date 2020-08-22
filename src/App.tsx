import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from './routes'
import { PageLoader } from './components/PageLoader'

export const App: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route path={path} key={path}>
              <Component />
            </Route>
          ))}
        </Switch>
    </Suspense>
  );
}
