import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'
import { PageLoader } from './components/PageLoader'
import { Box } from '@chakra-ui/core'
import { Header } from './components/Header'

export const App: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Box minH="105vh">
        <Header/>
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
      </Box>
    </Suspense>
  );
}
