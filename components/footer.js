class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        
        .footer {
          background-color: #b2443a;
          color: white;
          padding: 3rem 0;
          text-align: center;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }
        
        .footer-info {
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }
        
        .footer-links {
          margin: 2rem 0;
        }
        
        .footer-links a {
          color: white;
          font-size: 1.5rem;
          margin: 0 0.5rem;
          transition: color 0.3s;
          display: inline-block;
        }
        
        .footer-links a:hover {
          color: #ff6584;
          transform: translateY(-3px);
        }
        
        .copyright {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          margin-top: 1.5rem;
        }
      </style>
      
      <footer class="footer">
        <div class="footer-content">
          <h3 class="footer-title">Cindy Multimedia</h3>
          <p class="footer-info">Cindy Vanessa Pineda</p>
          <div class="footer-links">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Behance"><i class="fab fa-behance"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <p class="copyright">&copy; ${new Date().getFullYear()} Cindy Pineda. Todos los derechos reservados.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);