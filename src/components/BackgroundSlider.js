import React from 'react'
import PropTypes from 'prop-types'
import generateStyleSheet from './generateStyleSheet'

const NAME = 'ReactBackgroundSlider'

const injectCss = (css, meta) => {
    const head = document.getElementsByTagName('head')[0]
    const style = document.createElement('style')
    style.setAttribute('type', 'text/css')
    style.setAttribute('data-meta', meta)
    if (style.styleSheet) {
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css))
    }
    head.appendChild(style)
  }
  
 
function BackgroundSlider ({
  images,
  duration,
  transition
}) {
  React.useEffect(() => {
    injectCss(
      generateStyleSheet({
        imagesCount: images.length,
        duration,
        transition
      }),
      NAME
    )
  })

  return (
    <div id={NAME}>
      {images.map((img, key) =>
        <figure key={key}
          style={{
            backgroundImage: `url(${img})`,
            animationDelay: `${(duration + transition) * key}s`
          }}
        />
      )}
    </div>
  )
}

BackgroundSlider.defaultProps = {
  duration: 10,
  transition: 2
}

BackgroundSlider.propTypes = {
  images: PropTypes.array.isRequired,
  duration: PropTypes.number,
  transition: PropTypes.number
}

export default BackgroundSlider