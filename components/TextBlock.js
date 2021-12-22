import PropTypes from 'prop-types';

import styles from './textBlock.module.scss';

const TextBlock = ( {
  data,
} ) => {
  const { 
    titles, 
    paragraphs, 
    lists,
    cta,
  } = data;

  return (
    <div className={styles.textWrapper}>
      {/* Look for titles and loop through them */}
      {/* They include their own markup */}
      {titles && titles.map( ( title, index ) => (
        <div key={index} dangerouslySetInnerHTML={{__html: title}} />
      ))}

      {/* Look for and loop through paragraphs */}
      {paragraphs && paragraphs.map( ( paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{__html: paragraph}} />
      ))}
      
      {/* Look for and loop through lists */}
      {lists && props.data.lists.map( (list, index) => (
        // check to see if it is a UL
        list.type === 'ul' ? (
          <ul key={index}>
            {list.items.map( (item, index) => (
              <li key={index}>
                {/* if there is a title passed put it in an H4 */}
                {item.title && (
                  <h4>{item.title}</h4>
                )}
                {item.paragraphs.map( (paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{__html: paragraph}}></p>
                ))}
              </li>
            ))}
          </ul>
        ) : (
          // use an OL otherwise
          <ol key={index}>
            {list.items.map( (item, index) => (
              <li key={index}>
                {/* if there is a title passed put it in an H4 */}
                {item.title && (
                  <h4>{item.title}</h4>
                )}
                {item.paragraphs.map( (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </li>
            ))}
          </ol>
        )
      ))}

      {/* Look for a Call To Action */}
      {cta && (
        <div dangerouslySetInnerHTML={{__html: cta}}></div>
      )}
    </div>
  )
}

TextBlock.propTypes = {
  data: PropTypes.object,
}

export default TextBlock