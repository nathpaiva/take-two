import React, { useContext } from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { CardUserContext } from './CardUserContext'

type TCardPicture = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  userSelected: boolean
}

export const CardUserContainer = styled.div<TCardPicture>`
  ${({ userSelected, as }) => {
    const { cardStyle } = useContext(CardUserContext)

    return css`
      --stagger-delay: 90ms;
      --bg-color-style: ${cardStyle === 'short'
        ? 'var(--bg-c-light)'
        : 'var(--bg-c-dark)'};
      --color: ${cardStyle === 'short'
        ? 'var(--color-dark)'
        : 'var(--color-light)'};
      --pd-top: ${cardStyle === 'short' ? '20px' : '10px'};
      --flex-dir: ${cardStyle === 'short' ? 'row' : 'column'};

      --bg-color: ${userSelected
        ? 'var(--color-highlight)'
        : 'var(--bg-color-style)'};
      --bg-color-hover: ${cardStyle === 'short'
        ? 'var(--color-highlight-inverse)'
        : 'var(--bg-color)'};

      ${as === 'button' && 'cursor: pointer;'}
    `
  }}

  background-color: var(--bg-color);
  color: var(--color);
  padding: 10px 10px 10px;

  .card-bio {
    &__image {
      width: 100%;
    }
  }

  &:hover,
  &:focus {
    background-color: var(--bg-color-hover);
  }
`
