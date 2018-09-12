import React from 'react'
import styles from './page-cover.module.css'

export class PageCover extends React.PureComponent {
  render() {
    return (
      <div>
        <img className={styles.image} src="" />
        {this.props.children}
      </div>
    )
  }
}
