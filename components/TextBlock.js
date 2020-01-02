import PropTypes from 'prop-types'

import './textBlock.scss'

const TextBlock = ( props ) => {
  console.log('props.data.lists: ', props.data.lists)
  return (
    <div className={`text-wrapper`}>
      {props.data.titles.map( ( title, index ) => (
        <div key={index} dangerouslySetInnerHTML={{__html: title}} />
      ))}

      {props.data.paragraphs.map( ( paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{__html: paragraph}} />
      ))}
      
      {props.data.lists && props.data.lists.map( (list, index) => (
        list.type === 'ul' ? (
          <ul key={index}>
            {list.items.map( (item, index) => (
              <li key={index}>
                {item.title && (
                  <h4>{item.title}</h4>
                )}
                {item.paragraphs.map( (paragraph, index) => (
                  <p>{paragraph}</p>
                ))}
              </li>
            ))}
          </ul>
        ) : (
          <ol key={index}>
            {list.items.map( (item, index) => (
              <li key={index}>
                {item.title && (
                  <h4>{item.title}</h4>
                )}
                {item.paragraphs.map( (paragraph, index) => (
                  <p>{paragraph}</p>
                ))}
              </li>
            ))}
          </ol>
        )
      ))}
    </div>
  )
}

TextBlock.propTypes = {
  data: PropTypes.object,
}

export default TextBlock