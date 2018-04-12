import React           from 'react'
import PropTypes       from 'prop-types'
import scrollToElement from 'scroll-to-element'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showScrollTop: '' }
    this.scrollTop    = this.scrollTop.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  scrollTop () {
    // console.log('+++ scollTop here')
    scrollToElement('body')
  }

  handleScroll (e) {
    if (window.scrollY > 260) {
      this.setState({ showScrollTop: 'showScrollTop' })
    } else {
      this.setState({ showScrollTop: '' })
    }
  }

  componentDidMount () {
    if (!this.props.fixed) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount () {
    if (!this.props.fixed) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  componentWillReceiveProps (p) {
    setTimeout(() => {
      if (p.location.query && p.location.query.scrollTo) {
        scrollToElement(`#${p.location.query.scrollTo}Content`, { offset: -60 })
      }
    }, 0)
  }

  componentWillUpdate () {
    // happens too often
  }

  render () {
    // console.log('+++ Navigation:', this.props, this.state)

    return (
      <div id="wrapper" className="fade-in" >
        { this.props.children }
        <button className={`scroltop fa fa-chevron-up`} style={{ display: this.state.showScrollTop === 'showScrollTop' ? 'block' : 'none' }} onClick={() => this.scrollTop() }></button>
      </div>
    )
  }
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Navigation
