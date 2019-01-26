import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { chunk, sum } from 'lodash'
import { Box } from 'rebass'

const Wrapper = styled(Box)`
  position: relative;
  background: var(--color-secondary);
`

const Heading = styled(Img)`
  align-self: start;
  margin: 0 0 2rem;
  width: 50%;
  @media screen and (min-width: 52em) {
    width: 25%;
  }
  & > img {
    object-fit: ${props => props.fit || 'contain'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shareOpen: false,
      anchorEl: null,
      lightbox: false,
      currentImage: 0,
      photos: props.photos.map(photo =>
        Object.assign({ srcSet: photo.fluid.srcSet })
      ),
    }
  }

  gotoPrevLightboxImage() {
    const { photo } = this.state
    this.setState({ photo: photo - 1 })
  }

  gotoNextLightboxImage() {
    const { photo } = this.state
    this.setState({ photo: photo + 1 })
  }

  openLightbox(photo, event) {
    event.preventDefault()
    this.setState({ lightbox: true, photo })
  }

  closeLightbox() {
    this.setState({ lightbox: false, currentImage: 0 })
  }

  render() {
    const { photos, itemsPerRow: itemsPerRowByBreakpoints } = this.props

    const aspectRatios = photos.map(photos => photos.fluid.aspectRatio)
    const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
      itemsPerRow =>
        chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
          sum(rowAspectRatios)
        )
    )

    return (
      <Wrapper py={[4, 5]} px={[4, 5, 5, 6, 7]}>
        <Heading
          fluid={this.props.sectionHead.fluid}
          alt={this.props.sectionHead.title}
          title={this.props.sectionHead.title}
        />

        <Box>
          {photos.map((photo, i) => (
            <Box
              key={i}
              as={Img}
              fluid={photo.fluid}
              title={photo.title}
              width={rowAspectRatioSumsByBreakpoints.map(
                (rowAspectRatioSums, j) => {
                  const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j])
                  const rowAspectRatioSum = rowAspectRatioSums[rowIndex]

                  return `${(photo.fluid.aspectRatio / rowAspectRatioSum) *
                    100}%`
                }
              )}
              css={`
            display: inline-block;
            vertical-align: middle;
            objectFit: 'cover !important',
            height: '100%',
          `}
            />
          ))}
        </Box>
      </Wrapper>
    )
  }
}
export default Gallery
