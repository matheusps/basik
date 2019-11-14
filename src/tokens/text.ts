import { DraftToken } from '../types'

export const TextAlign: DraftToken = {
  values: {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify'
  },
  propName: {
    textAlign: 'ta'
  }
}

export const TextTransform: DraftToken = {
  values: {
    none: 'none',
    capital: 'capitalize',
    lower: 'lowercase',
    upper: 'uppercase'
  },
  propName: {
    textTransform: 'tt'
  }
}

export const TextDecoration: DraftToken = {
  values: {
    none: 'none',
    underline: 'underline',
    strike: 'line-throught'
  },
  propName: {
    textDecoration: 'td'
  }
}
