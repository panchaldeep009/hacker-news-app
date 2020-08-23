import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './routes';
import { PageLoader } from './components/PageLoader';
import { Box } from '@chakra-ui/core';
import { Header } from './components/Header';

export const App: React.FC = () => {
  return (
    <Box minH="105vh">
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to={routes.stories.path} />
          </Route>
          {Object.values(routes).map(({ path, Component }) => (
            <Route path={path} key={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </Suspense>
    </Box>
  );
};
