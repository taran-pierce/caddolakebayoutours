import PropTypes from 'prop-types'

import './textBlock.scss'

const TextBlock = ( props ) => {
  return (
    <div className={`text-wrapper`}>
      {props.data.titles.map( ( title, index ) => (
        <div key={index} dangerouslySetInnerHTML={{__html: title}} />
      ))}
      {props.data.paragraphs.map( ( paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{__html: paragraph}} />
      ))}
    </div>
  )
}

TextBlock.propTypes = {
  data: PropTypes.object,
}

export default TextBlock