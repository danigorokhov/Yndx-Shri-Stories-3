import { SlideTheme, Slide } from './application/types';

export const messageUpdate = (alias: Slide['alias'], data: Slide['data']) => ({
  type: 'message@UPDATE',
  alias,
  data,
} as const);

export const messageSetTheme = (theme: SlideTheme) => ({
  type: 'message@SET_THEME',
  theme,
} as const);

export const messageAction = (action: string, params: string | undefined) => ({
  type: 'message@ACTION',
  action,
  params,
} as const);

export type XMessage =
  | ReturnType<typeof messageUpdate>
  | ReturnType<typeof messageSetTheme>
  | ReturnType<typeof messageAction>;
