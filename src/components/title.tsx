import React from 'react';

type TitleProps = {
  title: string, description: string
};

class Title extends React.Component<TitleProps> {
  render() {
    return (
      <div className="title">
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