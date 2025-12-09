import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    adSpend: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        adSpend: '',
        message: ''
      })

      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Adcraze - Performance-Based Digital Advertising That Scales Revenue</title>
        <meta name="description" content="Stop wasting ad spend. Partner with a performance-driven agency that only wins when you win. Scale your revenue with transparent, ROI-focused advertising." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="landing-page">
        {/* Navigation */}
        <nav className="nav">
          <div className="container">
            <div className="nav-content">
              <div className="logo">
                <span className="logo-text">ADCRAZE</span>
              </div>
              <a href="#contact" className="nav-cta">Get Started</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">Performance-Based Results</div>
              <h1 className="hero-title">
                Stop Wasting Ad Spend.<br />
                Start Scaling Revenue.
              </h1>
              <p className="hero-subtitle">
                We only win when you win. Transparent, performance-driven advertising that grows your business—not your costs.
              </p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">Book Free Consultation</a>
                <a href="#how-it-works" className="btn btn-secondary">See How It Works</a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">3.2x</div>
                  <div className="stat-label">Avg. ROAS</div>
                </div>
                <div className="stat">
                  <div className="stat-number">$47M+</div>
                  <div className="stat-label">Client Revenue</div>
                </div>
                <div className="stat">
                  <div className="stat-number">92%</div>
                  <div className="stat-label">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="problem">
          <div className="container">
            <h2 className="section-title">Tired of Agencies That Overpromise and Underdeliver?</h2>
            <div className="problem-grid">
              <div className="problem-card">
                <div className="problem-icon">💸</div>
                <h3>Burning Cash on Vanity Metrics</h3>
                <p>They show you clicks and impressions—but your revenue stays flat.</p>
              </div>
              <div className="problem-card">
                <div className="problem-icon">📊</div>
                <h3>Zero Transparency</h3>
                <p>Black-box strategies with no clear path to ROI or accountability.</p>
              </div>
              <div className="problem-card">
                <div className="problem-icon">🔄</div>
                <h3>Cookie-Cutter Campaigns</h3>
                <p>Generic playbooks that ignore your unique business model.</p>
              </div>
              <div className="problem-card">
                <div className="problem-icon">⏰</div>
                <h3>Slow Results, Fast Excuses</h3>
                <p>Months of "testing" with nothing to show but invoices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="solution">
          <div className="container">
            <div className="solution-content">
              <div className="solution-text">
                <div className="section-label">Our Approach</div>
                <h2 className="section-title">Performance-Based. Transparent. Scalable.</h2>
                <p className="section-description">
                  We're not here to impress you with jargon. We're here to grow your revenue. Our performance-based model means we only succeed when you do—no fluff, no excuses.
                </p>
                <ul className="solution-list">
                  <li>
                    <span className="check">✓</span>
                    <div>
                      <strong>Pay for Results</strong>
                      <p>Performance-based pricing aligned with your revenue goals</p>
                    </div>
                  </li>
                  <li>
                    <span className="check">✓</span>
                    <div>
                      <strong>Full Transparency</strong>
                      <p>Real-time dashboards showing every dollar spent and earned</p>
                    </div>
                  </li>
                  <li>
                    <span className="check">✓</span>
                    <div>
                      <strong>Custom Strategies</strong>
                      <p>Data-driven campaigns tailored to your business model</p>
                    </div>
                  </li>
                  <li>
                    <span className="check">✓</span>
                    <div>
                      <strong>Fast Iteration</strong>
                      <p>Weekly optimizations based on performance data</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="solution-visual">
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-icon">📈</span>
                    <span className="metric-trend">+287%</span>
                  </div>
                  <div className="metric-title">Revenue Growth</div>
                  <div className="metric-subtitle">E-commerce Client - 6 Months</div>
                  <div className="metric-bar">
                    <div className="metric-bar-fill" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-icon">💰</span>
                    <span className="metric-trend">4.8x ROAS</span>
                  </div>
                  <div className="metric-title">Return on Ad Spend</div>
                  <div className="metric-subtitle">SaaS Client - 3 Months</div>
                  <div className="metric-bar">
                    <div className="metric-bar-fill" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="how-it-works">
          <div className="container">
            <div className="section-label">The Process</div>
            <h2 className="section-title">How We Scale Your Business</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">01</div>
                <h3>Revenue Audit</h3>
                <p>We analyze your current ad spend, customer lifetime value, and growth bottlenecks—no fluff, just data.</p>
              </div>
              <div className="step-connector"></div>
              <div className="step">
                <div className="step-number">02</div>
                <h3>Custom Strategy</h3>
                <p>We build a performance roadmap with clear KPIs, budget allocation, and revenue targets.</p>
              </div>
              <div className="step-connector"></div>
              <div className="step">
                <div className="step-number">03</div>
                <h3>Launch & Optimize</h3>
                <p>Campaigns go live with weekly optimization cycles. You see results in real-time, not quarterly reports.</p>
              </div>
              <div className="step-connector"></div>
              <div className="step">
                <div className="step-number">04</div>
                <h3>Scale Profitably</h3>
                <p>Once we hit targets, we scale winners and cut losers. Your revenue grows without ballooning costs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services">
          <div className="container">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Channels That Drive Revenue</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🎯</div>
                <h3>Paid Search (Google Ads)</h3>
                <p>High-intent keywords that convert searchers into buyers.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📱</div>
                <h3>Paid Social (Meta, TikTok, LinkedIn)</h3>
                <p>Scroll-stopping creative that drives engagement and sales.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🛍️</div>
                <h3>E-commerce Advertising</h3>
                <p>Shopping campaigns optimized for product margins and LTV.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🔄</div>
                <h3>Retargeting & CRM</h3>
                <p>Convert warm traffic and maximize customer lifetime value.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Analytics & Conversion Tracking</h3>
                <p>Full-funnel attribution so you know what's working.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">✍️</div>
                <h3>Creative & Landing Pages</h3>
                <p>Conversion-focused design that turns clicks into customers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="testimonials">
          <div className="container">
            <div className="section-label">Client Results</div>
            <h2 className="section-title">Real Businesses. Real Growth.</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-quote">"We were burning $15k/month with our old agency and saw zero ROI. Adcraze cut our costs by 40% and tripled our revenue in 4 months. Finally, an agency that gets it."</div>
                <div className="testimonial-author">
                  <div>
                    <div className="author-name">Sarah Chen</div>
                    <div className="author-title">Founder, BloomBox Co.</div>
                  </div>
                </div>
                <div className="testimonial-stats">
                  <span className="stat-pill">+312% Revenue</span>
                  <span className="stat-pill">4.2x ROAS</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-quote">"Switched from our in-house team to Adcraze. The transparency and speed of optimization are unmatched. We're scaling faster than ever."</div>
                <div className="testimonial-author">
                  <div>
                    <div className="author-name">Marcus Rodriguez</div>
                    <div className="author-title">CMO, TechFlow SaaS</div>
                  </div>
                </div>
                <div className="testimonial-stats">
                  <span className="stat-pill">+189% Lead Gen</span>
                  <span className="stat-pill">58% Lower CPA</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-quote">"No more black-box reporting. We see exactly where our budget goes and what's driving revenue. This is how advertising should work."</div>
                <div className="testimonial-author">
                  <div>
                    <div className="author-name">Emily Patterson</div>
                    <div className="author-title">Owner, Luxe Interiors</div>
                  </div>
                </div>
                <div className="testimonial-stats">
                  <span className="stat-pill">+267% Sales</span>
                  <span className="stat-pill">5.1x ROAS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Stop Wasting Ad Spend?</h2>
              <p className="cta-subtitle">Book a free consultation and get a custom revenue growth roadmap—no obligations, no sales pitch.</p>
              <a href="#contact" className="btn btn-primary btn-large">Book Your Free Consultation</a>
              <p className="cta-note">⚡ Limited spots available this month</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-info">
                <h2>Let's Talk About Your Growth</h2>
                <p>Fill out the form and we'll send you a custom revenue audit within 48 hours.</p>
                <div className="contact-features">
                  <div className="contact-feature">
                    <span className="feature-icon">✓</span>
                    <span>Free revenue audit ($2,500 value)</span>
                  </div>
                  <div className="contact-feature">
                    <span className="feature-icon">✓</span>
                    <span>Custom growth strategy</span>
                  </div>
                  <div className="contact-feature">
                    <span className="feature-icon">✓</span>
                    <span>No long-term contracts</span>
                  </div>
                </div>
              </div>
              <div className="contact-form-wrapper">
                {submitStatus === 'success' && (
                  <div className="form-success">
                    <div className="success-icon">✓</div>
                    <h3>Thanks! We'll be in touch within 24 hours.</h3>
                    <p>Check your email for next steps.</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="adSpend">Current Monthly Ad Spend *</label>
                    <select
                      id="adSpend"
                      name="adSpend"
                      value={formData.adSpend}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select range</option>
                      <option value="0-5k">$0 - $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">What's your biggest challenge with advertising? *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Get My Free Revenue Audit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <div className="logo-text">ADCRAZE</div>
                <p>Performance-based advertising that scales revenue.</p>
              </div>
              <div className="footer-links">
                <div className="footer-column">
                  <h4>Services</h4>
                  <a href="#services">Paid Search</a>
                  <a href="#services">Paid Social</a>
                  <a href="#services">E-commerce</a>
                  <a href="#services">Analytics</a>
                </div>
                <div className="footer-column">
                  <h4>Company</h4>
                  <a href="#how-it-works">How It Works</a>
                  <a href="#testimonials">Case Studies</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Adcraze. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
