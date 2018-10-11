import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Lightbox from 'react-images'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Reveal from 'react-reveal/Reveal'

const Wrapper = styled.div`
  position: relative;
  min-height: 85vh;
  width: 100%;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 5vh calc(env(safe-area-inset-right) + 2rem) 5vh
    calc(env(safe-area-inset-left) + 2rem);
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 100vh;
  }
`
const GridWrapper = styled.div`
  padding: 0 2rem;
`
const Heading = styled(Img)`
  align-self: start;
  margin: 2rem;
  width: 50%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 25%;
  }
  & > img {
    object-fit: ${props => props.fit || 'contain'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`
const Image = styled(Img)`
  width: 100%;
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
    const { photos } = this.props
    return (
      <>
        <Reveal>
          <Wrapper>
            <Heading
              fluid={this.props.sectionHead.fluid}
              alt={this.props.sectionHead.title}
              title={this.props.sectionHead.title}
            />
            <GridWrapper>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 3, 750: 5, 900: 7 }}
              >
                <Masonry gutter="0">
                  {photos.map((photo, i) => (
                    <a
                      key={i}
                      href={photo.fluid.srcSet}
                      onClick={e => this.openLightbox(i, e)}
                    >
                      <Image fluid={photo.fluid} />
                    </a>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </GridWrapper>
          </Wrapper>
        </Reveal>
        <Lightbox
          backdropClosesModal
          enableKeyboardInput
          showImageCount
          imageCountSeparator={' of '}
          images={this.state.photos}
          preloadNextImage
          currentImage={this.state.photo}
          isOpen={this.state.lightbox}
          onClickPrev={() => this.gotoPrevLightboxImage()}
          onClickNext={() => this.gotoNextLightboxImage()}
          onClose={() => this.closeLightbox()}
        />
      </>
    )
  }
}
export default Gallery
