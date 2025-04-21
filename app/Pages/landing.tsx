import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, FileSpreadsheet, LineChart, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import "../styles.css"

export default function LandingPage() {
  return (
    <div className="page-container">
      <header className="main-header">
        <div className="container header-content">
          <div className="logo">
            <LineChart className="logo-icon" />
            <span className="logo-text">Dina</span>
          </div>
          <nav className="main-nav">
            <Link href="#features" className="nav-link">
              Features
            </Link>
            <Link href="#how-it-works" className="nav-link">
              How It Works
            </Link>
            <Link href="#pricing" className="nav-link">
              Pricing
            </Link>
          </nav>
          <div className="auth-buttons">
            <Link href="/dashboard" className="login-link">
              Log in
            </Link>
            <Button className="cta-button" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="hero-text">
                  <h1 className="hero-title">Transform Your Data into Actionable Insights</h1>
                  <p className="hero-description">
                    Upload your data, choose your visualizations, and get powerful forecasts instantly.
                  </p>
                </div>
                <div className="hero-buttons">
                  <Button size="lg" className="primary-button" asChild>
                    <Link href="/signup">
                      Start for Free <ArrowRight className="button-icon" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="secondary-button" asChild>
                    <Link href="#demo">Watch Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="hero-image-container">
                <div className="dashboard-preview">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Dashboard preview"
                    className="dashboard-image"
                  />
                  <div className="image-overlay" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Features</div>
              <h2 className="section-title">Everything you need for data-driven decisions</h2>
              <p className="section-description">
                Dina makes it easy to visualize your data and forecast future trends without any technical expertise.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-container">
                  <FileSpreadsheet className="feature-icon" />
                </div>
                <h3 className="feature-title">Easy Data Import</h3>
                <p className="feature-description">
                  Upload Excel, CSV, or QuickBooks exports with our simple drag-and-drop interface.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-container">
                  <BarChart3 className="feature-icon" />
                </div>
                <h3 className="feature-title">Custom Visualizations</h3>
                <p className="feature-description">
                  Choose from bar charts, line graphs, pie charts, and more to visualize your data exactly how you want.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-container">
                  <TrendingUp className="feature-icon" />
                </div>
                <h3 className="feature-title">Powerful Forecasting</h3>
                <p className="feature-description">
                  Get accurate predictions for future trends based on your historical data.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">How Dina Works</h2>
              <p className="section-description">Transform your data into insights in just three simple steps</p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="step-title">Upload Your Data</h3>
                <p className="step-description">Simply drag and drop your Excel files, CSVs, or QuickBooks exports.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="step-title">Customize Your Dashboard</h3>
                <p className="step-description">
                  Select the visualizations you want and how far ahead you want to forecast.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="step-title">Get Insights Instantly</h3>
                <p className="step-description">
                  View your interactive dashboard with clean charts and forecasting results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Trusted by businesses of all sizes</h2>
              <p className="section-description">See what our customers are saying about Dina</p>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "Dina has transformed how we analyze our sales data. The forecasting feature has been incredibly
                  accurate and helped us make better inventory decisions."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <p className="author-name">Sarah Johnson</p>
                    <p className="author-title">CFO, Retail Solutions Inc.</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "As a small business owner, I don't have time to learn complex data tools. Dina makes it easy to
                  upload my QuickBooks data and get beautiful visualizations instantly."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <p className="author-name">Michael Chen</p>
                    <p className="author-title">Owner, Chen's Grocery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Simple, transparent pricing</h2>
              <p className="section-description">Start for free, upgrade when you need more</p>
            </div>
            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3 className="pricing-tier">Free</h3>
                  <p className="pricing-subtitle">Perfect for trying out Dina</p>
                </div>
                <div className="pricing-cost">
                  $0
                  <span className="pricing-period">/month</span>
                </div>
                <ul className="pricing-features">
                  <li className="pricing-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feature-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Up to 3 data uploads
                  </li>
                  <li className="pricing-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feature-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Basic visualizations
                  </li>
                  <li className="pricing-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feature-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    7-day forecasting
                  </li>
                </ul>
                <Button className="pricing-button outline" variant="outline" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
              <div className="pricing-card featured">
                <div className="pricing-header">
                  <h3 className="pricing-tier">Pro</h3>
                  <p className="pricing-subtitle">For small to medium businesses</p>
                </div>
                <div className="pricing-cost">
                  $49
                  <span className="pricing-period">/month</span>
                </div>
                <ul className="pricing-features">
                  <li className="pricing-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feature-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Unlimited data uploads
                  </li>
                  <li className="pricing-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feature-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Advanced visualizations
                  </li>
                  <li className="pricing-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feature-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    30-day forecasting
                  </li>
                  <li className="pricing-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feature-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Export to PDF/Excel
                  </li>
                </ul>
                <Button className="pricing-button featured-button" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3 className="pricing-tier">Enterprise</h3>
                  <p className="pricing-subtitle">For large organizations</p>
                </div>
                <div className="pricing-cost">
                  $199
                  <span className="pricing-period">/month</span>
                </div>
                <ul className="pricing-features">
                  <li className="pricing-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feature-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Everything in Pro
                  </li>
                  <li className="pricing-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feature-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    365-day forecasting
                  </li>
                  <li className="pricing-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feature-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    API access
                  </li>
                  <li className="pricing-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feature-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Dedicated support
                  </li>
                </ul>
                <Button className="pricing-button outline" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to transform your data?</h2>
              <p className="cta-description">Join thousands of businesses making better decisions with Dina.</p>
              <div className="cta-buttons">
                <Button size="lg" className="cta-primary-button" asChild>
                  <Link href="/signup">
                    Get Started for Free <ArrowRight className="button-icon" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="cta-secondary-button" asChild>
                  <Link href="/contact">Schedule a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="main-footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <LineChart className="logo-icon" />
            <span className="logo-text">Dina</span>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Dina. All rights reserved.</p>
          <div className="footer-links">
            <Link href="/terms" className="footer-link">
              Terms
            </Link>
            <Link href="/privacy" className="footer-link">
              Privacy
            </Link>
            <Link href="/contact" className="footer-link">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
