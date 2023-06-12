import { SelectStyles } from '../types/styles';

export const backgrounds = {
  gradient: 'linear-gradient(to left bottom, #f64d51, #fca7a3)',
  white: '#fff',
} as const;

export const colors = {
  main: '#f64d51',
  mainLight: 'rgba(252, 167, 163, 0.9)',
  white: '#fff',
} as const;

export const selectStyles: SelectStyles = {
  from: {
    backgroundColor: colors.mainLight,
    color: colors.white,
  },
  to: {
    backgroundColor: colors.white,
    color: colors.main,
  },
};
