import React from 'react';
import { componentFromStream, createEventHandler } from 'recompose';
import { combineLatest } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

import Form from './components/Form';
import RequestItem from './components/RequestItem';

const App = componentFromStream(propsStream => {
  const { handler, stream } = createEventHandler();
  const valueStream = stream.pipe(
    map(e => e.target.value),
    startWith('')
  );

  return combineLatest(propsStream, valueStream).pipe(
    tap(console.warn),
    map(([props, value]) => (
      <React.Fragment>
        <Form onChange={handler} />
        <RequestItem term={value} />
      </React.Fragment>
    ))
  );
});

export default App;
