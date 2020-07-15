import React from 'react';
import styles from './title.module.css'
type TitleProps = {
  title: string, description: string
};

class Title extends React.Component<TitleProps> {
  render() {
    return (
      <div className={styles.title}>
        <h1>
          {this.props.title}
        </h1>
        <p>
          {this.props.description}
        </p>
      </div>
      );
  }
}

export default Title;