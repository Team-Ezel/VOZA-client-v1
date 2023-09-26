import React from 'react'

const Out = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='191'
      height='212'
      viewBox='0 0 191 212'
      fill='none'
    >
      <g filter='url(#filter0_d_697_1609)'>
        <path
          d='M5 20C5 11.7157 11.7157 5 20 5H171C179.284 5 186 11.7157 186 20V192C186 200.284 179.284 207 171 207H20C11.7157 207 5 200.284 5 192V20Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_697_1609'
          x='0'
          y='0'
          width='191'
          height='212'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='2.5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_697_1609'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_697_1609'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  )
}

export default Out
