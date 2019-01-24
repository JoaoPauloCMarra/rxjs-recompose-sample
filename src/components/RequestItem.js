import React from 'react';
import { componentFromStream } from 'recompose';
import {
  debounceTime,
  delay,
  filter,
  map,
  pluck,
  switchMap,
  catchError
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { merge, of } from 'rxjs';

import Profile from './Profile';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

const API = 'https://api.github.com/users';

const RequestItem = componentFromStream(props =>
  props.pipe(
    debounceTime(500),
    pluck('term'),
    filter(item => item && item.length),
    map(term => `${API}/${term}`),
    switchMap(url =>
      merge(
        of(<Loading />),
        ajax(url).pipe(
          pluck('response'),
          delay(1500),
          map(data => <Profile data={data} />),
          catchError(error => of(<ErrorMessage {...error} />))
        )
      )
    )
  )
);

export default RequestItem;
