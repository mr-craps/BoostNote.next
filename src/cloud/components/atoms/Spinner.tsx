import React from 'react'
import cc from 'classcat'
import styled, { rotateKeyframe } from '../../lib/styled'
import { baseIconStyle } from '../../lib/styled/styleFunctions'

interface CustomIconProps {
  viewbox?: string
  color?: string
  size?: string | number
  width?: string | number
  height?: string | number
  className?: string
  style?: React.CSSProperties
}

export const Spinner = (props: CustomIconProps) => (
  <StyledCustomIcon className='spinner-wrapper'>
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 47 39'
      {...props}
      className={cc(['icon rotate', props.className])}
      style={
        props.size != null
          ? { ...props.style, width: props.size, height: props.size }
          : props.style
      }
    >
      <path
        d='M36.432 5.54l8.616 2.123a2.34 2.34 0 11-1.12 4.547l-3.03-.748a19.088 19.088 0 011.59 7.63c0 10.527-8.566 19.092-19.093 19.092-2.784 0-5.467-.585-7.976-1.742a2.342 2.342 0 011.958-4.253 14.277 14.277 0 006.018 1.313c7.946 0 14.41-6.464 14.41-14.41 0-1.824-.344-3.613-1-5.28l-.783 3.178a2.343 2.343 0 01-2.833 1.713 2.34 2.34 0 01-1.714-2.833l2.122-8.617a2.345 2.345 0 012.835-1.714zM23.395 0c2.979 0 5.833.667 8.483 1.983a2.342 2.342 0 01-2.083 4.195 14.25 14.25 0 00-6.4-1.495c-7.945 0-14.41 6.464-14.41 14.41 0 1.867.347 3.672 1.021 5.353l.802-3.252a2.343 2.343 0 014.548 1.12l-2.123 8.618a2.342 2.342 0 01-2.834 1.713L1.782 30.52a2.343 2.343 0 01-1.714-2.833 2.343 2.343 0 012.834-1.713l2.989.737a19.143 19.143 0 01-1.59-7.62C4.302 8.565 12.868 0 23.396 0z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  </StyledCustomIcon>
)

const StyledCustomIcon = styled.div`
  display: inline-block;
  color: currentColor;
  background-color: transparent;
  border: none;
  vertical-align: middle;

  svg {
    vertical-align: sub;

    &.icon {
      ${baseIconStyle}
      position: absolute;
      top: ${({ theme }) => theme.space.xxsmall}px;
      left: ${({ theme }) => theme.space.xxsmall}px;
      font-size: ${({ theme }) => theme.fontSizes.default}px;
      z-index: 0;
      pointer-events: none;
      color: ${({ theme }) => theme.subtleIconColor};
      opacity: 0.4;
    }

    &.rotate {
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      -ms-transition: all 1s ease;
      transition: all 1s ease;
      transform-box: fill-box;
      transform-origin: center;
      animation: ${rotateKeyframe} 4s linear infinite;
    }

    &.relative {
      position: relative;
      top: 0;
      bottom: 0;
      vertical-align: middle;
    }
  }
`
