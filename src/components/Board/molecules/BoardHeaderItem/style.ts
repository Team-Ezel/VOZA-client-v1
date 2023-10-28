import styled from '@emotion/styled'

export const BoardHeaderItem = styled.div<{ textColor: string }>`
  a {
    color: ${(props): string => props.textColor};
  }
`
