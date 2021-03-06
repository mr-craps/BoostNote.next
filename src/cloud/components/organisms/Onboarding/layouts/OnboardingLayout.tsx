import React from 'react'
import styled from '../../../../../shared/lib/styled'
import { AppComponent } from '../../../../../shared/lib/types'
import cc from 'classcat'
import VerticalScroller from '../../../../../shared/components/atoms/VerticalScroller'

interface OnboardingLayoutProps {
  title: string
  subtitle: string
  contentWidth: 600 | 1020
}

const OnboardingLayout: AppComponent<OnboardingLayoutProps> = ({
  children,
  className,
  title,
  subtitle,
  contentWidth,
}) => (
  <Container
    className={cc(['onboarding', className])}
    contentWidth={contentWidth}
  >
    <VerticalScroller className='onboarding__scroller'>
      <div className='onboarding__page'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className='onboarding__content'>{children}</div>
      </div>
    </VerticalScroller>
  </Container>
)

const Container = styled.div<{ contentWidth: number }>`
  display: flex;
  height: 100vh;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.sizes.fonts.xl}px;
    margin-top: 80px;
  }

  .onboarding__scroller {
    width: 100%;
  }

  .onboarding__page {
    position: relative;
    width: ${({ contentWidth }) => contentWidth}px;
    max-width: 96%;
    margin: 0 auto;
    text-align: center;
  }
`

export default OnboardingLayout
