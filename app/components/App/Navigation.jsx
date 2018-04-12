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
        
			  <div id="intro">
				  <h1>Annesque Studios</h1>
				  <p><span>World-class Competition Salsa</span><br /><span>in Santa Cruz and San Jose</span></p>
				  <ul className="actions">
					  <li><a href="#header" className="button icon solo fa-arrow-down scrolly">Continue</a></li>
				  </ul>
			  </div>
        
			  <header id="header">
				  <a href="index.html" className="logo">Dance With Pantea</a>
			  </header>
        
			  <nav id="nav">
				  <ul className="links">
					  <li className="active"><a href="index.html">News</a></li>
					  <li><a href="schedule.html">Schedule</a></li>
					  <li><a href="private-lessons.html">Private&nbsp;Lessons</a></li>
					  <li><a href="online-learning.html">Online&nbsp;Learning</a></li>
				  </ul>
				  <ul className="icons">
					  <li><a href="https://www.youtube.com/channel/UCwgt8e_WpOcwWeTr9_Z7z-Q" className="icon fa-youtube"><span className="label">Youtube</span></a></li>
					  <li><a href="https://www.facebook.com/Dance-With-Pantea-347392945668162/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
					  <li><a href="https://www.instagram.com/dancewithpantea" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
				  </ul>
			  </nav>

			  <div id="main">

				  <article className="post featured">
					  <header className="major">
						  <h2>Salsa & Bachata</h2>
						  <p>Pantea offers dance instruction in a number of styles: salsa, bachata, merengue, cha cha cha, swing and tango.<br />
                Weekly classes are currently offered in Bachata (Wednesdays) and Salsa (all other days).<br />
                Pantea teaches in San Francisco Bay Area, South Bay.<br />
                Contact us to teach a workshop at your location anywhere in North America!</p>
					  </header>
				  </article>

			  </div>

			  <footer id="footer">
				  <section className="footer-contact-form" >
            <p>Use this form for inquiries or to schedule a private class.</p>
					  <form method="post" action="#" id="contact" >
						  <div className="field">
							  <label for="name">Name</label>
							  <input type="text" name="name" id="name" />
						  </div>
						  <div className="field">
							  <label for="email">Email</label>
							  <input type="text" name="email" id="email" />
						  </div>
						  <div className="field">
							  <label for="message">Message</label>
							  <textarea name="message" id="message" rows="3"></textarea>
						  </div>
						  <ul className="actions">
							  <li><input type="submit" value="Send Message" /></li>
						  </ul>
					  </form>
				  </section>
				  <section className="split contact">
					  <section className="alt">
              <ul className="actions footer-links">
							  <li><a className="button" href="index.html">News</a></li>
							  <li><a className="button" href="schedule.html">Schedule</a></li>
							  <li><a className="button" href="private-lessons.html">Private&nbsp;Lessons</a></li>
							  <li><a className="button" href="online-learning.html">Online&nbsp;Learning</a></li>
						  </ul>
					  </section>
					  <section>
						  <h3>Email</h3>
						  <p><a href="mailto:salsawithpantea@gmail.com">salsawithpantea@gmail.com</a></p>
					  </section>
					  <section>
						  <h3>Social</h3>
						  <ul className="icons alt">
							  <li><a href="https://www.youtube.com/channel/UCwgt8e_WpOcwWeTr9_Z7z-Q" className="icon alt fa-youtube"><span className="label">Youtube</span></a></li>
							  <li><a href="https://www.facebook.com/Dance-With-Pantea-347392945668162/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
							  <li><a href="https://www.instagram.com/dancewithpantea" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
						  </ul>
					  </section>
				  </section>
			  </footer>

        { /* <div className="modal" id="contactModal" >
             <h3>Please email<br />
             <b>salsawithpantea@gmail.com</b>
             </h3>
             <p>Regretfully, due to the current hosting setup, the contact form is out of order. Please email salsawithpantea@gmail.com or call, (877) 216-3525.</p>
             <p>We apologize for any inconvenience.</p>
             </div> */ }
        
			  <div id="copyright">
				  <ul><li><span>&copy; Dance With Pantea</span></li><li><span>Design: <a href="https://wasya.co">Wasya.co</a></span></li></ul>
			  </div>
        
        
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
