import {
  EMPTY,
  interval,
  merge,
  MonoTypeOperatorFunction,
  Observable,
  of,
} from 'rxjs';
import {
  filter,
  mapTo,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  Action,
  actionMessage,
  actionNext,
  actionPrev,
  actionRestart,
  actionTimer,
  actionUpdate,
} from './actions';
import {
  DELAY,
  INTERVAL,
  Slide,
  State,
} from './types';

export function ofType<T extends Action>(type: Action['type']): MonoTypeOperatorFunction<T> {
  return filter((a) => type === a.type);
}

export function createEffects(
  actions$: Observable<Action>,
  state$: Observable<State>,
): Observable<Action> {
  const timerEffect$ = interval(INTERVAL).pipe(
    mapTo(actionTimer()),
  );

  const changeSlideEffect$ = timerEffect$.pipe(
    withLatestFrom(state$),
    mergeMap(([, state]) => {
      if (state.progress >= DELAY && state.index < state.stories.length - 1) {
        return of(actionNext());
      }
      return EMPTY;
    }),
  );

  const messageEffect$ = actions$.pipe(
    ofType<ReturnType<typeof actionMessage>>('message'),
    mergeMap((a) => {
      switch (a.action) {
        case 'go-prev': {
          return of(actionPrev());
        }
        case 'go-next': {
          return of(actionNext());
        }
        case 'restart': {
          return of(actionRestart());
        }
        case 'update': {
          let data: Partial<Slide>;

          if (typeof a.params === 'string') {
            data = JSON.parse(a.params);
          } else {
            // Handle case, when data-params is undefined
            data = {};
          }

          return of(actionUpdate(data));
        }
        default: {
          return EMPTY;
        }
      }
    }),
  );

  return merge(timerEffect$, changeSlideEffect$, messageEffect$);
}
