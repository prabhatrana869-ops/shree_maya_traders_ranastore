import './style.css'

const icons = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 4.5 5 5.8c-.8.4-1.2 1.3-1 2.2 1.4 6.4 5.1 10.1 11.5 11.5.9.2 1.8-.2 2.2-1l1.3-2.5-3.5-2.1-1.5 1.5a12.1 12.1 0 0 1-5.4-5.4l1.5-1.5-2.1-3.5Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 7 3v5c0 4.7-3 8.3-7 10-4-1.7-7-5.3-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
  box: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 7 8-4 8 4-8 4-8-4Zm0 0v10l8 4 8-4V7M12 11v10"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/></svg>',
  user: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M5 20c.5-3.1 3.2-5 7-5s6.5 1.9 7 5"/></svg>',
  truck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>'
}

const categoryImages = [
  ...Array.from({ length: 17 }, (_, index) => `/images/${index + 1}.png`)
]

const locationUrl = 'https://maps.app.goo.gl/wu54EB12XzAZi6ka6'

const app = document.querySelector('#app')
app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Rana Store Shree Maya Traders"><span class="brand-mark"><i></i><i></i><i></i></span><span class="brand-copy"><strong>RANA STORE</strong><em>SHREE MAYA TRADERS</em></span><img class="header-portrait" src="/images/WhatsApp%20Image%202026-09-19%20at%209.35.17%20PM.jpeg" alt="Store owner" /></a>
    <nav class="nav-links" aria-label="Primary navigation"><a href="#top">Home</a><a href="#categories">Explore Range</a><a href="#why">Built on Trust</a><a href="#about">About Us</a><a href="#contact">Enquiry</a><a href="/blog">Blog</a><a href="#footer">Contact</a></nav>
    <div class="header-actions"><details class="language-menu"><summary aria-label="Select language"><span class="language-current">EN</span></summary><div class="language-options"><button type="button" data-language="en">English</button><button type="button" data-language="hi">हिंदी</button></div></details><a class="outline-action" href="tel:9771372419" aria-label="Call Rana Store">${icons.phone}</a><a class="quote-action" href="#contact" aria-label="Request a quote"><span></span>${icons.arrow}</a></div>
    <button class="menu-toggle" aria-label="Open menu">${icons.menu}</button>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-wash"></div>
      <div class="hero-content">
        <div class="eyebrow placeholder-line short">SHREE MAYA TRADERS</div>
        <h1 class="hero-title">Rana Store<br /><span>of General Store</span></h1>
        <p class="hero-copy">Cement &amp; Construction Materials</p>
        <div class="hero-ctas"><a class="solid-btn" href="tel:9771372419" aria-label="Call Rana Store">${icons.phone}</a><a class="ghost-btn" href="mailto:chandrashekhar2419@gmail.com" aria-label="Email Rana Store">${icons.arrow}</a></div>
      </div>
      <div class="hero-stacks" aria-hidden="true"><div class="stack stack-a"></div><div class="stack stack-b"></div><div class="stack stack-c"></div><div class="pipe-stack"></div></div>
      <div class="hero-note"><span></span><span></span><span></span></div>
      <div class="proof-strip"><div>${icons.shield}<span></span></div><div>${icons.box}<span></span></div><div>${icons.truck}<span></span></div><div>${icons.user}<span></span></div></div>
    </section>

    <section class="store-reel section" id="store-reel" aria-labelledby="store-reel-title">
      <div class="reel-copy">
        <div class="section-heading left"><div class="heading-rule"></div><h2 id="store-reel-title">A Look Inside Rana Store</h2></div>
        <p>See the products, people and everyday work behind Shree Maya Traders.</p>
        <a class="reel-link" href="#contact">Enquire with us ${icons.arrow}</a>
      </div>
      <div class="reel-frame">
        <video autoplay muted loop playsinline controls preload="auto" aria-label="A reel from Rana Store">
          <source src="/images/WhatsApp%20Video%202026-09-19%20at%209.16.28%20PM.mp4" type="video/mp4" />
        </video>
        <span class="reel-badge">RANA STORE <i>•</i> SHREE MAYA TRADERS</span>
      </div>
    </section>

    <section class="event-gallery section" id="event-gallery" aria-labelledby="event-gallery-title">
      <div class="gallery-heading-row">
        <div class="section-heading left"><div class="heading-rule"></div><h2 id="event-gallery-title">Event Gallery</h2><p>Celebrating moments from Shree Maya Traders.</p></div>
        <div class="gallery-arrows"><button class="gallery-arrow gallery-previous" type="button" aria-label="Previous event photos">${icons.arrow}</button><button class="gallery-arrow gallery-next" type="button" aria-label="Next event photos">${icons.arrow}</button></div>
      </div>
      <div class="gallery-track" aria-label="Event photos" tabindex="0">
        ${[
          ['/images/event.jpeg', 'Shree Maya Traders event photo 1'],
          ['/images/event2.jpeg', 'Shree Maya Traders event photo 2'],
          ['/images/event3.jpeg', 'Shree Maya Traders event photo 3']
        ].map(([image, alt], index) => `<button class="gallery-slide" type="button" data-gallery-index="${index}" aria-label="View larger: ${alt}"><img src="${image}" alt="${alt}" loading="lazy" /><span class="gallery-slide-number">0${index + 1}</span></button>`).join('')}
      </div>
      <dialog class="gallery-lightbox" aria-label="Event photo viewer">
        <div class="lightbox-toolbar"><span class="lightbox-count" aria-live="polite"></span><div class="lightbox-tools"><button class="lightbox-zoom-out" type="button" aria-label="Zoom out">−</button><button class="lightbox-zoom-in" type="button" aria-label="Zoom in">+</button><button class="lightbox-close" type="button" aria-label="Close photo viewer">${icons.close}</button></div></div>
        <button class="lightbox-nav lightbox-prev" type="button" aria-label="Previous photo">${icons.arrow}</button>
        <img class="lightbox-image" alt="" />
        <button class="lightbox-nav lightbox-next" type="button" aria-label="Next photo">${icons.arrow}</button>
      </dialog>
    </section>

    <section class="categories section" id="categories">
      <div class="section-heading"><div class="heading-rule"></div><h2>Explore Our Range</h2></div>
      <div class="category-grid">${categoryImages.map((image, index) => `<article class="category-card"><div class="category-image"><img src="${image}" alt="Product ${index + 1}" /><div class="image-shade"></div><button aria-label="Open category">${icons.arrow}</button></div><div class="card-foot"><span></span><i>${icons.arrow}</i></div></article>`).join('')}</div>
    </section>

    <section class="more-materials section" id="more-materials">
      <div class="section-heading"><div class="heading-rule"></div><h2>🏗️ Need More for Your Construction?</h2></div>
      <div class="materials-slider-wrap"><button class="slider-arrow previous" aria-label="Previous materials">${icons.arrow}</button><div class="materials-slider">${[
        ['Bricks', 'Quality bricks available on request'],
        ['Concrete', 'Concrete material can be arranged as required'],
        ['Sand', 'Sand available on enquiry'],
        ['Stone / Gitti', 'Construction aggregates can be arranged'],
        ['Other Building Materials', 'Tell us what you need — we’ll help arrange it']
      ].map(([title, description]) => `<article class="material-card"><div class="material-art"></div><h3>${title}</h3><p>${description}</p><div class="material-actions"><a href="tel:9771372419">Call Us ${icons.arrow}</a><a href="https://wa.me/919771372419" target="_blank" rel="noreferrer">WhatsApp ${icons.arrow}</a></div></article>`).join('')}</div><button class="slider-arrow next" aria-label="Next materials">${icons.arrow}</button></div>
      <div class="materials-note"><strong>Can’t find what you need?</strong><span>Contact Shree Maya Traders — we can help arrange bricks, concrete, sand, stone and other construction materials as per your requirement.</span></div>
    </section>

    <section class="why section" id="why"><div class="why-overlay"></div><div class="why-inner"><div class="section-heading inverse"><div class="heading-rule"></div><h2>Built on <em>Trust</em></h2><p class="why-subtitle">Reliable products. Trusted brands. Service you can count on.</p></div><div class="feature-grid"><div class="feature"><div class="feature-top"><div class="feature-icon">${icons.shield}</div></div><strong>Trusted Brands</strong><i class="feature-rule"></i><p class="feature-list">ACC &bull; Nuvoco &bull; TUFCONXT</p><small>Quality products from established brands.</small></div><div class="feature"><div class="feature-top"><div class="feature-icon">${icons.box}</div></div><strong>Wide Range</strong><i class="feature-rule"></i><p class="feature-list">Cement &bull; Rod &bull; Hardware</p><small>Everything you need for your construction work.</small></div><div class="feature"><div class="feature-top"><div class="feature-icon">${icons.truck}</div></div><strong>On-Time Delivery</strong><i class="feature-rule"></i><p class="feature-list">Reliable &bull; Fast &bull; Local</p><small>Timely delivery with dependable service.</small></div></div></div></section>

    <section class="about section" id="about"><div class="about-photo"></div><div class="about-copy"><div class="section-heading left"><div class="heading-rule"></div><h2>Shree Maya Traders</h2></div><p class="about-text">Cement &amp; Construction Materials</p><p class="owner-line">Owner: Chandra Shekhar Kumar Rana</p><div class="stats"><div><b>RANA STORE</b><span>General Store</span></div><div><b>SHREE MAYA</b><span>Construction</span></div><div><b>LOCAL</b><span>Kubri</span></div></div></div></section>

    <section class="contact section" id="contact"><div class="form-panel"><div class="section-heading left"><div class="heading-rule"></div><h2>Send an Enquiry</h2></div><form><div class="input-row"><label><i></i><input name="name" aria-label="Name" placeholder="Your name" required /></label><label><i></i><input name="mobile" aria-label="Mobile number" placeholder="Mobile number" required /></label></div><div class="input-row"><label><i></i><input name="material" aria-label="Material type" placeholder="Material type" /></label><label><i></i><input name="quantity" aria-label="Quantity" placeholder="Quantity" /></label></div><label class="textarea-label"><textarea name="message" aria-label="Message" placeholder="How can we help?"></textarea></label><button class="submit-btn" type="submit" aria-label="Send enquiry">${icons.arrow}</button></form></div><div class="location-panel"><a class="map" href="${locationUrl}" target="_blank" rel="noreferrer" aria-label="Open Shree Maya Traders location in Google Maps"><img src="/images/Screenshot%202026-09-18%20225049.png" alt="Shree Maya Traders location map" /><span class="map-open-label">Open in Google Maps ${icons.arrow}</span></a><div class="contact-card"><div class="contact-icon">${icons.pin}</div><strong>Rana Store of General Store</strong><address>Near Post Office, Kubri<br />Landmark: Railway Overbridge of Rakeshbag</address><span class="contact-number">9771372419</span><span class="contact-email">chandrashekhar2419@gmail.com</span><div class="contact-actions"><a class="contact-action call-action" href="tel:9771372419">${icons.phone} Call Now</a><a class="contact-action email-action" href="mailto:chandrashekhar2419@gmail.com">${icons.arrow} Email Us</a></div></div></div></section>
  </main>

  <footer id="footer" class="site-footer">
    <div class="footer-grid">
      <div class="footer-intro"><a class="footer-title" href="#top">RANA STORE</a><strong>OF GENERAL STORE</strong><p>General Store &bull; Building Materials &bull; Trusted Service</p></div>
      <div class="footer-business"><strong>SHREE MAYA TRADERS</strong><p>Cement &amp; Construction Materials</p></div>
      <nav class="footer-links" aria-label="Footer navigation"><strong>QUICK LINKS</strong><a href="#top">Home</a><a href="#categories">Explore Range</a><a href="#about">About Us</a><a href="#contact">Enquiry</a><a href="/blog">Blog</a><a href="#footer">Contact</a></nav>
      <div class="footer-contact"><strong>CONTACT US</strong><a href="tel:9771372419">${icons.phone} 9771372419</a><a href="mailto:chandrashekhar2419@gmail.com">${icons.arrow} chandrashekhar2419@gmail.com</a><a href="${locationUrl}" target="_blank" rel="noreferrer">${icons.pin} Near Post Office, Kubri</a></div>
    </div>
    <div class="footer-bottom"><span>&copy; 2026 Rana Store</span><span>Shree Maya Traders</span></div>
  </footer>
`

if (location.pathname === '/blog') {
  app.innerHTML = `
    <header class="site-header">
      <a class="brand" href="/" aria-label="Rana Store Shree Maya Traders"><span class="brand-mark"><i></i><i></i><i></i></span><span class="brand-copy"><strong>RANA STORE</strong><em>SHREE MAYA TRADERS</em></span></a>
      <nav class="nav-links" aria-label="Primary navigation"><a href="/">Home</a><a href="#cement">Cement</a><a href="#tmt-rod">TMT Rod</a><a href="#hardware">Hardware</a><a href="#general-store">General Store</a></nav>
      <div class="header-actions"><details class="language-menu"><summary aria-label="Select language"><span class="language-current">EN</span></summary><div class="language-options"><button type="button" data-language="en">English</button><button type="button" data-language="hi">हिंदी</button></div></details><a class="outline-action" href="/" aria-label="Back to home">${icons.arrow}</a></div>
      <button class="menu-toggle" aria-label="Open menu">${icons.menu}</button>
    </header>
    <main class="blog-page">
      <section class="blog-intro"><div class="heading-rule"></div><h1>Blog</h1></section>
      <section class="blog-section blog-article" id="cement" aria-label="Cement">
        <article>
          <p class="article-kicker">Cement &amp; Building Materials</p>
          <h2>Shree Maya Traders: Decades of Trust in ACC Cement &amp; Building Materials</h2>
          <p class="article-lead">For over two decades, Shree Maya Traders has been serving customers with quality cement and building materials, building relationships that have continued from before 2000 to 2026.</p>

          <h3>A Journey Built on Trust</h3>
          <p>A strong building starts with a strong foundation, but a strong business starts with trust. <strong>Shree Maya Traders</strong> has been a part of the local cement and building-materials market since <strong>before 2000</strong>. Over the years, the construction industry has changed, new products have entered the market, and customer requirements have evolved. Through all these changes, our focus has remained on providing genuine building materials and dependable service.</p>
          <p>Our journey with <strong>ACC Cement</strong> goes back to the time when we started selling ACC Cement before 2000. Today, in <strong>2026</strong>, ACC Cement continues to be an important part of our product range.</p>

          <h3>Our Long Association with ACC Cement</h3>
          <p>For many years, customers have trusted ACC Cement for their construction requirements, and Shree Maya Traders has proudly kept ACC Cement among its available products.</p>
          <p>From individual homeowners to customers involved in different construction projects, we have served people looking for reliable cement products. Our long association with ACC Cement is an important part of the history of our business.</p>
          <p>With changing construction requirements, we continue to provide customers with options that suit different project needs.</p>

          <h3>Now Introducing PSC Cement</h3>
          <p>As the construction market continues to evolve, we have expanded our cement range with <strong>PSC Cement</strong>.</p>
          <p>The addition of PSC Cement gives our customers another cement option under the same roof. Whether customers are planning a new home, renovation, commercial work, or another construction project, they can contact us to know about available products and current prices.</p>
          <p>Our objective is simple: <strong>provide customers with more choice while continuing to focus on quality and service.</strong></p>

          <h3>More Than Just a Cement Store</h3>
          <p>Shree Maya Traders is not limited to cement. We are also associated with a wider range of <strong>building materials, rods and hardware products</strong>, helping customers find important construction materials in one place.</p>
          <p>Having different categories of materials available makes the purchasing process more convenient for customers. Instead of searching for every requirement separately, customers can contact us regarding their cement and construction-material needs.</p>

          <h3>Experience That Comes From the Years</h3>
          <p>Being in the cement business since before 2000 has given us valuable experience in understanding local customer requirements.</p>
          <p>Over these years, we have seen changes in construction methods, product choices and market requirements. We have also seen customers and their families return to us for their future construction projects.</p>
          <p>For us, these long-term relationships are an important part of what Shree Maya Traders represents.</p>

          <h3>Trust That Continues in 2026</h3>
          <p>From the early years before 2000 to <strong>2026</strong>, our business journey has continued with the support of our customers.</p>
          <p>We understand that purchasing construction materials is an important decision. Customers want genuine products, clear information, competitive market prices and dependable service.</p>
          <p>That is why we continue to focus on these basic principles while expanding our product range.</p>

          <h3>Building for the Future</h3>
          <p>The construction industry is continuously developing, and so are we.</p>
          <p>With <strong>ACC Cement</strong> as part of our long-standing product range and <strong>PSC Cement</strong> now newly added, Shree Maya Traders continues to provide customers with more choices for their construction requirements.</p>
          <p>Our goal is not simply to sell building materials. We want to maintain the relationships and trust that have been developed over decades.</p>

          <h3>Why Customers Choose Shree Maya Traders</h3>
          <ul><li>Decades of experience in the cement business</li><li>ACC Cement available since before 2000</li><li>Newly added PSC Cement</li><li>Building materials and hardware products</li><li>Focus on genuine products</li><li>Customer-focused service</li><li>Local and convenient source for construction materials</li><li>Direct enquiry for current prices and availability</li></ul>

          <h3>Our Commitment</h3>
          <p>Every construction project is different, and every customer has different requirements. We are always ready to help customers understand the products available with us and provide information about current stock and pricing.</p>
          <p>For technical decisions regarding cement selection or construction methods, customers should consult their engineer or qualified construction professional.</p>
          <p>Our responsibility is to provide dependable products and service while helping customers find the materials they need.</p>

          <h3>A Story That Started Before 2000</h3>
          <p>Our story is not just about cement bags, rods or hardware. It is about the customers who have been connected with our business over the years.</p>
          <p><strong>Before 2000, we started our journey with ACC Cement. Today, in 2026, that journey continues.</strong></p>
          <p>With the addition of PSC Cement and our wider range of building materials, we are preparing for the next chapter while carrying forward the experience of the past.</p>

          <div class="article-closing"><h3>Shree Maya Traders</h3><strong>Decades of Experience. Long-Term Trust. Building Materials for the Future.</strong><p>For cement, rod, hardware and other building-material requirements, customers can contact Shree Maya Traders for current product availability and pricing.</p></div>
        </article>
      </section>
      <section class="blog-section blog-article" id="tmt-rod" aria-label="TMT Rod">
        <article>
          <p class="article-kicker">TMT Rod &amp; Reinforcement Steel</p>
          <h2>TUFCONXT TMT 600: Strong Steel for Stronger Construction</h2>
          <p class="article-lead"><strong>Shree Maya Traders</strong> brings TUFCONXT TMT 600 to customers looking for dependable reinforcement steel for residential and construction projects.</p>

          <h3>Strength Starts with the Right Steel</h3>
          <p>A strong and durable structure depends on many factors, and reinforcement steel is one of the most important materials used in reinforced concrete construction.</p>
          <p>At <strong>Shree Maya Traders</strong>, we understand the importance of choosing suitable TMT reinforcement for construction requirements. That is why we currently offer <strong>TUFCONXT TMT 600</strong>, giving local customers access to a modern TMT steel option for their construction needs.</p>

          <h3>TUFCONXT TMT 600 at Shree Maya Traders</h3>
          <p>TUFCONXT TMT 600 is part of our current TMT rod range. Customers can contact Shree Maya Traders for information about available diameters, stock and current market prices.</p>
          <p>TMT reinforcement bars are commonly used in RCC construction, including applications such as residential buildings, columns, beams, slabs and foundations, subject to the design and specifications provided by the project's engineer.</p>

          <h3>What Does TMT 600 Mean?</h3>
          <p>The <strong>“600” designation refers to the specified minimum yield strength class of the reinforcement steel</strong>, expressed in MPa, under the applicable standard/specification.</p>
          <p>In practical terms, higher-grade reinforcement can provide a higher strength level, but the correct grade and diameter should always be selected according to the structural design.</p>
          <p>For this reason, customers should follow the recommendations of their structural engineer rather than selecting reinforcement solely on the basis of grade number.</p>

          <h3>Why TMT Steel Matters in Construction</h3>
          <p>Concrete performs very well in compression, while reinforcement steel helps provide tensile capacity to reinforced concrete structures.</p>
          <p>This combination makes reinforced concrete suitable for a wide range of building applications.</p>
          <p>The quality and specification of reinforcement steel therefore matter when constructing a home or other structure.</p>

          <h3>Shree Maya Traders: Serving the Local Construction Market</h3>
          <p><strong>Shree Maya Traders</strong> has been serving customers in the local market for years with cement and construction materials.</p>
          <p>Our experience with building materials has helped us understand the everyday requirements of homeowners, contractors and other customers involved in construction.</p>
          <p>Today, TMT rods are an important part of our construction-material range, with <strong>TUFCONXT TMT 600</strong> currently available through our store.</p>

          <h3>One Place for Construction Materials</h3>
          <p>Customers working on a construction project often need several different materials at the same time.</p>
          <p>At Shree Maya Traders, our product range includes:</p>
          <ul><li>TMT Rod</li><li>Cement</li><li>Hardware</li><li>General construction materials</li><li>Other building-material requirements</li></ul>
          <p>Our aim is to make purchasing construction materials more convenient for local customers.</p>

          <h3>Choosing the Right TMT Rod</h3>
          <p>TMT selection should be based on the structural requirements of the project.</p>
          <p>Before purchasing, customers should consider:</p>
          <ul><li>Required steel grade</li><li>Required diameter</li><li>Project structural design</li><li>Applicable BIS/standard requirements</li><li>Manufacturer specifications</li><li>Quantity required</li><li>Current market availability</li></ul>
          <p>A qualified engineer or construction professional should make the final technical selection for a structural project.</p>

          <h3>Quality and Trust</h3>
          <p>For Shree Maya Traders, selling construction materials is about more than simply supplying products.</p>
          <p>A construction project represents a significant investment for a customer. We therefore understand the importance of supplying products with proper information and maintaining transparent communication about availability and pricing.</p>
          <p>Our long-standing presence in the local market has been built through customer relationships and consistent service.</p>

          <h3>TUFCONXT TMT 600 — Available at Shree Maya Traders</h3>
          <p>Customers looking for <strong>TUFCONXT TMT 600 TMT rods</strong> can contact Shree Maya Traders to check the latest availability, sizes and prices.</p>
          <p>Market prices and stock can change, so we recommend contacting us directly for the latest information.</p>

          <div class="article-closing"><h3>Building Stronger, Together</h3><p>From cement to TMT steel and hardware, <strong>Shree Maya Traders</strong> continues to expand its construction-material offerings to serve the needs of the local market.</p><p>With <strong>TUFCONXT TMT 600</strong> now part of our TMT range, we continue our focus on providing customers with dependable construction-material options and service.</p><strong>Shree Maya Traders — Your Local Partner for Cement, TMT Rod &amp; Building Materials.</strong></div>
        </article>
      </section>
      <section class="blog-section blog-article" id="hardware" aria-label="Hardware">
        <article>
          <p class="article-kicker">Hardware &amp; Building Materials</p>
          <h2>Hardware &amp; Building Materials: Everything You Need for Your Home</h2>
          <p class="article-lead"><strong>Building a home requires much more than cement and steel.</strong> From foundation work to finishing, hundreds of different materials are needed at different stages of construction. At Shree Maya Traders, we aim to make that process easier by keeping a wide range of hardware, plastic and essential building products under one roof.</p>

          <h3>Your Local Store for Home Construction Needs</h3>
          <p>When customers start building a new home, they often have to visit different shops for different materials. Cement from one place, TMT rods from another, hardware somewhere else and plastic products from another store.</p>
          <p><strong>Shree Maya Traders</strong> brings many of these essential requirements together in one convenient place.</p>
          <p>Our range covers products used across different stages of home construction, repair, renovation and maintenance.</p>

          <h3>Hardware Products for Everyday Construction</h3>
          <p>Hardware is an essential part of almost every construction project. Small items may look simple, but they are required throughout the building process.</p>
          <p>At our store, customers can enquire about a wide range of hardware and construction-use products according to their requirements and current stock.</p>
          <p>From basic fixing materials to tools and accessories, we aim to provide the products customers commonly need for their projects.</p>

          <h3>Plastic &amp; Utility Products</h3>
          <p>Construction and home requirements also include a variety of plastic products.</p>
          <p>These products can be useful for plumbing, water management, storage, fittings and other household or construction applications.</p>
          <p>Our store keeps a selection of plastic and utility products so customers can check availability while purchasing their other building materials.</p>

          <h3>From Foundation to Finishing</h3>
          <p>A home construction project goes through many stages.</p>
          <p class="stage-line"><strong>Foundation → Structure → Walls → Plumbing → Electrical → Flooring → Finishing</strong></p>
          <p>At each stage, different materials and accessories are required.</p>
          <p>That is why our goal is to provide customers with a broad product range instead of focusing on only one category.</p>

          <h3>Cement, TMT Rod &amp; Hardware Under One Roof</h3>
          <p>Our major construction-material categories include:</p>
          <div class="article-subsections"><h4>Cement</h4><p>We currently offer <strong>ACC Cement</strong> along with our newly added <strong>PSC Cement</strong> range.</p><h4>TMT Rod</h4><p>We currently offer <strong>TUFCONXT TMT 600</strong> TMT reinforcement steel.</p><h4>Hardware</h4><p>Essential hardware products and construction-use accessories are available according to current stock.</p><h4>Plastic Products</h4><p>Various plastic and utility products for construction and household requirements are available.</p><h4>Building Materials</h4><p>Customers can contact us regarding other materials required for home construction.</p></div>

          <h3>Why Buy Multiple Materials From One Store?</h3>
          <p>Getting different construction products from one place can make purchasing more convenient.</p>
          <p>Customers can:</p>
          <ul><li>Check multiple product categories at one location</li><li>Enquire about current prices</li><li>Check product availability</li><li>Discuss their material requirements</li><li>Save time when purchasing common construction products</li><li>Get cement, TMT and hardware requirements together</li></ul>

          <h3>For New Homes, Repairs &amp; Renovation</h3>
          <p>Our products are not limited to new house construction.</p>
          <p>Customers can also contact us for <strong>repair, renovation, maintenance and other household construction requirements</strong>.</p>
          <p>Whether you are starting a new project or simply need a few materials for an ongoing repair, our team can help you check what is currently available.</p>

          <h3>Serving the Local Market</h3>
          <p>Shree Maya Traders has been serving the local market with construction materials for years.</p>
          <p>Our experience in cement and building materials has helped us understand the importance of availability, genuine products and customer service.</p>
          <p>We continue to expand our range according to the requirements of customers and the changing construction market.</p>

          <h3>Your Construction Material Partner</h3>
          <p>Building a home is a long-term investment. Having access to the right materials at the right time can make the purchasing process much easier.</p>
          <p>At <strong>Shree Maya Traders</strong>, our aim is to become a convenient local destination for <strong>cement, TMT rods, hardware, plastic products and essential building materials</strong>.</p>

          <div class="article-closing"><h3>Need Building Materials?</h3><p>Visit or contact <strong>Shree Maya Traders</strong> to check the latest products, sizes, stock and prices.</p><strong>Cement • TMT Rod • Hardware • Plastic Products • Building Materials</strong><p><strong>Shree Maya Traders — One Place for Your Home Construction Needs.</strong></p></div>
        </article>
      </section>
      <section class="blog-section blog-article" id="general-store" aria-label="Rana Store a General Store">
        <article>
          <p class="article-kicker">General Store &amp; Everyday Essentials</p>
          <h2>Rana Store – Your Local General Store for Everyday Needs</h2>
          <p class="article-lead"><strong>From everyday groceries to household essentials, Rana Store is your convenient local destination for the products you need in your daily life.</strong></p>

          <h3>Everything You Need, Close to Home</h3>
          <p>Every household needs a store where everyday products are easily available. Whether you need groceries for the kitchen, snacks for the family, beverages, personal-care products or common household items, a nearby general store makes everyday shopping simple and convenient.</p>
          <p><strong>Rana Store – General Store</strong> serves local customers with a variety of daily-use products under one roof.</p>

          <h3>Grocery &amp; Food Products</h3>
          <p>Our general store provides a range of everyday food and grocery products according to current stock.</p>
          <p>Customers can find commonly used kitchen essentials such as:</p>
          <ul><li>Rice</li><li>Dal and pulses</li><li>Flour and atta</li><li>Cooking oil</li><li>Salt</li><li>Sugar</li><li>Spices and masala</li><li>Biscuits</li><li>Namkeen and snacks</li><li>Packaged food products</li><li>Tea and coffee</li><li>Cold drinks and beverages</li><li>Other everyday food items</li></ul>
          <p>Product availability may vary, so customers can contact or visit the store for the latest available products.</p>

          <h3>Household Essentials</h3>
          <p>A home needs more than just food.</p>
          <p>We also keep commonly required <strong>household and daily-use products</strong>, making Rana Store a convenient place for regular shopping.</p>
          <p>From cleaning products to basic household requirements, customers can check with us for available items.</p>

          <h3>Personal Care &amp; Daily-Use Products</h3>
          <p>Rana Store also caters to everyday personal-care requirements.</p>
          <p>Customers can enquire about products such as:</p>
          <ul><li>Soaps</li><li>Shampoo</li><li>Toothpaste</li><li>Toothbrushes</li><li>Hair-care products</li><li>Personal hygiene products</li><li>Other daily-use essentials</li></ul>

          <h3>Snacks &amp; Refreshments</h3>
          <p>Looking for something quick to eat or drink?</p>
          <p>Our store also offers commonly purchased <strong>biscuits, namkeen, snacks, beverages and other packaged food products</strong>, depending on current stock.</p>
          <p>It is a convenient stop for everyday refreshments for families and local customers.</p>

          <h3>Your Everyday Shopping Partner</h3>
          <p>A general store is not just a place to buy groceries. It becomes part of everyday life.</p>
          <p>From a packet of biscuits to monthly kitchen supplies, customers need convenient access to products throughout the year.</p>
          <p>At <strong>Rana Store</strong>, our aim is to make everyday shopping easier by keeping a useful range of food, grocery and household products in one place.</p>

          <h3>Local Store, Personal Service</h3>
          <p>As a local store, we understand the importance of convenient shopping and friendly customer service.</p>
          <p>Our focus is on serving customers with commonly needed products and helping them find what they are looking for.</p>
          <p>We continue to expand our product selection based on customer requirements and availability.</p>

          <h3>One Store for Everyday Needs</h3>
          <p>Whether you are doing your regular grocery shopping, looking for snacks, purchasing household essentials or simply need a daily-use product, <strong>Rana Store – General Store</strong> is here to serve your everyday needs.</p>

          <div class="article-closing"><h3>Visit Rana Store</h3><strong>Food • Grocery • Snacks • Beverages • Household Products • Personal Care • Daily Essentials</strong><p><strong>Rana Store – Your Local General Store for Everyday Needs.</strong></p></div>
        </article>
      </section>
    </main>
  `
}

const menu = document.querySelector('.menu-toggle')
const nav = document.querySelector('.nav-links')
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open')
  menu.innerHTML = open ? icons.close : icons.menu
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
})

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')))

const languageMenu = document.querySelector('.language-menu')
if (languageMenu) {
  const languageCurrent = languageMenu.querySelector('.language-current')
  const savedLanguage = localStorage.getItem('rana-store-language') || 'en'
  const blogPage = document.querySelector('.blog-page')
  const originalBlogMarkup = blogPage?.innerHTML
  const blogTranslationCacheKey = 'rana-store-blog-hi-cache-v2'
  let blogTranslationRun = 0
  const translations = {
    en: {
      nav: location.pathname === '/blog' ? ['Home', 'Cement', 'TMT Rod', 'Hardware', 'General Store'] : ['Home', 'Explore Range', 'Built on Trust', 'About Us', 'Enquiry', 'Blog', 'Contact'],
      common: {
        '.store-reel h2': 'A Look Inside Rana Store', '.store-reel p': 'See the products, people and everyday work behind Shree Maya Traders.',
        '.categories .section-heading h2': 'Explore Our Range', '.more-materials .section-heading h2': 'Need More for Your Construction?', '.why-subtitle': 'Reliable products. Trusted brands. Service you can count on.',
        '.about h2': 'Shree Maya Traders', '.about-text': 'Cement & Construction Materials', '.owner-line': 'Owner: Chandra Shekhar Kumar Rana', '.contact h2': 'Send an Enquiry', '.footer-intro>strong': 'OF GENERAL STORE', '.footer-intro p': 'General Store • Building Materials • Trusted Service', '.footer-business p': 'Cement & Construction Materials', '.footer-links>strong': 'QUICK LINKS', '.footer-contact>strong': 'CONTACT US'
      },
      featureTitles: ['Trusted Brands', 'Wide Range', 'On-Time Delivery'], featureLists: ['ACC • Nuvoco • TUFCONXT', 'Cement • Rod • Hardware', 'Reliable • Fast • Local'], featureDescriptions: ['Quality products from established brands.', 'Everything you need for your construction work.', 'Timely delivery with dependable service.'],
      materials: ['Bricks', 'Concrete', 'Sand', 'Stone / Gitti', 'Other Building Materials'], materialActions: ['Call Us', 'WhatsApp'], footerLinks: ['Home', 'Explore Range', 'About Us', 'Enquiry', 'Blog', 'Contact']
    },
    hi: {
      nav: location.pathname === '/blog' ? ['होम', 'सीमेंट', 'टीएमटी रॉड', 'हार्डवेयर', 'जनरल स्टोर'] : ['होम', 'रेंज देखें', 'विश्वास पर निर्मित', 'हमारे बारे में', 'पूछताछ', 'ब्लॉग', 'संपर्क'],
      common: {
        '.store-reel h2': 'राणा स्टोर की एक झलक', '.store-reel p': 'श्री माया ट्रेडर्स के उत्पादों और रोज़मर्रा के काम को देखें।',
        '.categories .section-heading h2': 'हमारी रेंज देखें', '.more-materials .section-heading h2': 'निर्माण के लिए और सामग्री चाहिए?', '.why-subtitle': 'विश्वसनीय उत्पाद। भरोसेमंद ब्रांड। ऐसी सेवा जिस पर आप भरोसा कर सकें।',
        '.about h2': 'श्री माया ट्रेडर्स', '.about-text': 'सीमेंट और निर्माण सामग्री', '.owner-line': 'मालिक: चंद्र शेखर कुमार राणा', '.contact h2': 'पूछताछ भेजें', '.footer-intro>strong': 'जनरल स्टोर', '.footer-intro p': 'जनरल स्टोर • निर्माण सामग्री • भरोसेमंद सेवा', '.footer-business p': 'सीमेंट और निर्माण सामग्री', '.footer-links>strong': 'त्वरित लिंक', '.footer-contact>strong': 'संपर्क करें'
      },
      featureTitles: ['भरोसेमंद ब्रांड', 'विस्तृत रेंज', 'समय पर डिलीवरी'], featureLists: ['ACC • Nuvoco • TUFCONXT', 'सीमेंट • रॉड • हार्डवेयर', 'भरोसेमंद • तेज़ • स्थानीय'], featureDescriptions: ['स्थापित ब्रांडों के गुणवत्तापूर्ण उत्पाद।', 'आपके निर्माण कार्य के लिए आवश्यक सामग्री।', 'निर्भर सेवा के साथ समय पर डिलीवरी।'],
      materials: ['ईंट', 'कंक्रीट', 'रेत', 'पत्थर / गिट्टी', 'अन्य निर्माण सामग्री'], materialActions: ['कॉल करें', 'WhatsApp'], footerLinks: ['होम', 'रेंज देखें', 'हमारे बारे में', 'पूछताछ', 'ब्लॉग', 'संपर्क']
    }
  }
  const translateBlogText = async (language) => {
    if (!blogPage || !originalBlogMarkup) return
    blogPage.innerHTML = originalBlogMarkup
    if (language !== 'hi') return
    const cache = JSON.parse(localStorage.getItem(blogTranslationCacheKey) || '{}')
    const textNodes = []
    const walker = document.createTreeWalker(blogPage, NodeFilter.SHOW_TEXT)
    let node
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim()) textNodes.push(node)
    }
    const run = ++blogTranslationRun
    const translate = async (text) => {
      const trimmed = text.trim()
      if (!trimmed || /^[•→—–\-]+$/.test(trimmed)) return text
      if (cache[trimmed]) return text.replace(trimmed, cache[trimmed])
      try {
        const protectedTerms = []
        const protectedText = trimmed.replace(/Shree Maya Traders|Rana Store|ACC Cement|PSC Cement|TUFCONXT TMT 600|TUFCONXT|Nuvoco|ACC|PSC/g, (term) => { protectedTerms.push(term); return `ZZZ${protectedTerms.length - 1}ZZZ` })
        const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=${encodeURIComponent(protectedText)}`)
        const result = await response.json()
        const translated = result[0].map((part) => part[0]).join('').replace(/ZZZ(\d+)ZZZ/g, (_, index) => protectedTerms[Number(index)] || '')
        cache[trimmed] = translated
        return text.replace(trimmed, translated)
      } catch {
        return text
      }
    }
    for (let index = 0; index < textNodes.length; index += 6) {
      if (run !== blogTranslationRun) return
      await Promise.all(textNodes.slice(index, index + 6).map(async (textNode) => { textNode.nodeValue = await translate(textNode.nodeValue) }))
    }
    localStorage.setItem(blogTranslationCacheKey, JSON.stringify(cache))
  }

  const applyLanguage = (language) => {
    const content = translations[language]
    languageMenu.querySelector('.language-current').textContent = language === 'hi' ? 'हिंदी' : 'EN'
    document.documentElement.lang = language
    document.title = language === 'hi' ? 'राणा स्टोर | श्री माया ट्रेडर्स' : 'Rana Store of General Store | Shree Maya Traders'
    document.querySelectorAll('.nav-links a').forEach((link, index) => { if (content.nav[index]) link.textContent = content.nav[index] })
    Object.entries(content.common).forEach(([selector, value]) => { const element = document.querySelector(selector); if (element) element.textContent = value })
    const trustHeading = document.querySelector('.why .section-heading h2')
    if (trustHeading) trustHeading.innerHTML = language === 'hi' ? 'विश्वास पर <em>निर्मित</em>' : 'Built on <em>Trust</em>'
    const reelLink = document.querySelector('.reel-link')
    if (reelLink && reelLink.firstChild) reelLink.firstChild.textContent = `${language === 'hi' ? 'पूछताछ करें' : 'Enquire with us'} `
    const blogTitle = document.querySelector('.blog-intro h1')
    if (blogTitle) blogTitle.textContent = language === 'hi' ? 'ब्लॉग' : 'Blog'
    if (location.pathname === '/blog') {
      const kickers = language === 'hi' ? ['सीमेंट और निर्माण सामग्री', 'टीएमटी रॉड और रीइन्फोर्समेंट स्टील', 'हार्डवेयर और निर्माण सामग्री', 'जनरल स्टोर और रोज़मर्रा की आवश्यकताएं'] : ['Cement & Building Materials', 'TMT Rod & Reinforcement Steel', 'Hardware & Building Materials', 'General Store & Everyday Essentials']
      const titles = language === 'hi' ? ['श्री माया ट्रेडर्स: ACC Cement और निर्माण सामग्री में दशकों का विश्वास', 'TUFCONXT TMT 600: मजबूत निर्माण के लिए मजबूत स्टील', 'हार्डवेयर और निर्माण सामग्री: आपके घर के लिए आवश्यक सब कुछ', 'राणा स्टोर – रोज़मर्रा की जरूरतों के लिए आपका स्थानीय जनरल स्टोर'] : ['Shree Maya Traders: Decades of Trust in ACC Cement & Building Materials', 'TUFCONXT TMT 600: Strong Steel for Stronger Construction', 'Hardware & Building Materials: Everything You Need for Your Home', 'Rana Store – Your Local General Store for Everyday Needs']
      const headings = language === 'hi' ? ['विश्वास से बनी यात्रा', 'ACC Cement के साथ हमारा लंबा संबंध', 'अब PSC Cement उपलब्ध', 'सिर्फ सीमेंट स्टोर से कहीं अधिक', 'वर्षों से मिला अनुभव', '2026 में भी जारी विश्वास', 'भविष्य के लिए निर्माण', 'ग्राहक श्री माया ट्रेडर्स को क्यों चुनते हैं', 'हमारी प्रतिबद्धता', '2000 से पहले शुरू हुई कहानी', 'सही स्टील से शुरू होती है मजबूती', 'श्री माया ट्रेडर्स पर TUFCONXT TMT 600', 'TMT 600 का अर्थ क्या है?', 'निर्माण में TMT स्टील क्यों महत्वपूर्ण है', 'स्थानीय निर्माण बाजार की सेवा', 'निर्माण सामग्री एक ही स्थान पर', 'सही TMT रॉड चुनना', 'गुणवत्ता और विश्वास', 'TUFCONXT TMT 600 उपलब्ध है', 'मिलकर मजबूत निर्माण', 'घर निर्माण के लिए आपका स्थानीय स्टोर', 'रोज़मर्रा के निर्माण के लिए हार्डवेयर उत्पाद', 'प्लास्टिक और उपयोगी उत्पाद', 'नींव से फिनिशिंग तक', 'सीमेंट, TMT रॉड और हार्डवेयर एक ही छत के नीचे', 'एक स्टोर से कई सामग्री क्यों खरीदें?', 'नए घर, मरम्मत और नवीनीकरण के लिए', 'स्थानीय बाजार की सेवा', 'आपका निर्माण सामग्री साझेदार', 'निर्माण सामग्री चाहिए?', 'घर के पास आपकी हर जरूरत', 'किराना और खाद्य उत्पाद', 'घरेलू आवश्यकताएं', 'पर्सनल केयर और रोज़मर्रा के उत्पाद', 'स्नैक्स और रिफ्रेशमेंट', 'आपका रोज़मर्रा का खरीदारी साझेदार', 'स्थानीय स्टोर, व्यक्तिगत सेवा', 'रोज़मर्रा की जरूरतों के लिए एक स्टोर', 'राणा स्टोर आएं'] : ['A Journey Built on Trust', 'Our Long Association with ACC Cement', 'Now Introducing PSC Cement', 'More Than Just a Cement Store', 'Experience That Comes From the Years', 'Trust That Continues in 2026', 'Building for the Future', 'Why Customers Choose Shree Maya Traders', 'Our Commitment', 'A Story That Started Before 2000', 'Strength Starts with the Right Steel', 'TUFCONXT TMT 600 at Shree Maya Traders', 'What Does TMT 600 Mean?', 'Why TMT Steel Matters in Construction', 'Shree Maya Traders: Serving the Local Construction Market', 'One Place for Construction Materials', 'Choosing the Right TMT Rod', 'Quality and Trust', 'TUFCONXT TMT 600 — Available at Shree Maya Traders', 'Building Stronger, Together', 'Your Local Store for Home Construction Needs', 'Hardware Products for Everyday Construction', 'Plastic & Utility Products', 'From Foundation to Finishing', 'Cement, TMT Rod & Hardware Under One Roof', 'Why Buy Multiple Materials From One Store?', 'For New Homes, Repairs & Renovation', 'Serving the Local Market', 'Your Construction Material Partner', 'Need Building Materials?', 'Everything You Need, Close to Home', 'Grocery & Food Products', 'Household Essentials', 'Personal Care & Daily-Use Products', 'Snacks & Refreshments', 'Your Everyday Shopping Partner', 'Local Store, Personal Service', 'One Store for Everyday Needs', 'Visit Rana Store']
      const subsections = language === 'hi' ? ['सीमेंट', 'TMT रॉड', 'हार्डवेयर', 'प्लास्टिक उत्पाद', 'निर्माण सामग्री'] : ['Cement', 'TMT Rod', 'Hardware', 'Plastic Products', 'Building Materials']
      document.querySelectorAll('.blog-article .article-kicker').forEach((element, index) => { element.textContent = kickers[index] })
      document.querySelectorAll('.blog-article h2').forEach((element, index) => { element.textContent = titles[index] })
      document.querySelectorAll('.blog-article h3').forEach((element, index) => { element.textContent = headings[index] })
      document.querySelectorAll('.article-subsections h4').forEach((element, index) => { element.textContent = subsections[index] })
    }
    document.querySelectorAll('.why .feature strong').forEach((element, index) => { element.textContent = content.featureTitles[index] })
    document.querySelectorAll('.why .feature-list').forEach((element, index) => { element.textContent = content.featureLists[index] })
    document.querySelectorAll('.why .feature small').forEach((element, index) => { element.textContent = content.featureDescriptions[index] })
    document.querySelectorAll('.material-card h3').forEach((element, index) => { element.textContent = content.materials[index] || element.textContent })
    document.querySelectorAll('.material-actions a').forEach((element, index) => { element.childNodes[element.childNodes.length - 1].textContent = ` ${content.materialActions[index % 2]}` })
    document.querySelectorAll('.footer-links a').forEach((link, index) => { if (content.footerLinks[index]) link.textContent = content.footerLinks[index] })
    document.querySelectorAll('.input-row input')[0]?.setAttribute('placeholder', language === 'hi' ? 'आपका नाम' : 'Your name')
    document.querySelectorAll('.input-row input')[1]?.setAttribute('placeholder', language === 'hi' ? 'मोबाइल नंबर' : 'Mobile number')
    document.querySelectorAll('.input-row input')[2]?.setAttribute('placeholder', language === 'hi' ? 'सामग्री का प्रकार' : 'Material type')
    document.querySelectorAll('.input-row input')[3]?.setAttribute('placeholder', language === 'hi' ? 'मात्रा' : 'Quantity')
    document.querySelector('.textarea-label textarea')?.setAttribute('placeholder', language === 'hi' ? 'हम आपकी कैसे सहायता कर सकते हैं?' : 'How can we help?')
    localStorage.setItem('rana-store-language', language)
    void translateBlogText(language)
  }
  const setLanguage = (language) => {
    applyLanguage(language === 'hi' ? 'hi' : 'en')
  }
  setLanguage(savedLanguage)
  languageMenu.querySelectorAll('[data-language]').forEach((option) => option.addEventListener('click', () => {
    setLanguage(option.dataset.language)
    languageMenu.removeAttribute('open')
  }))
}

const enquiryForm = document.querySelector('.form-panel form')
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const values = Object.fromEntries(new FormData(enquiryForm))
    const body = [`Name: ${values.name}`, `Mobile: ${values.mobile}`, `Material: ${values.material || 'Not specified'}`, `Quantity: ${values.quantity || 'Not specified'}`, `Message: ${values.message || 'No message'}`].join('\n')
    window.location.href = `mailto:chandrashekhar2419@gmail.com?subject=${encodeURIComponent('Rana Store enquiry')}&body=${encodeURIComponent(body)}`
  })
}

const materialsSlider = document.querySelector('.materials-slider')
if (materialsSlider) {
  const materialCards = [...materialsSlider.children]
  let direction = 1
  let autoSlide
  const moveSlider = () => {
    const cardWidth = materialCards[0].getBoundingClientRect().width + 16
    const maxScroll = materialsSlider.scrollWidth - materialsSlider.clientWidth
    if (materialsSlider.scrollLeft >= maxScroll - 4) direction = -1
    if (materialsSlider.scrollLeft <= 4) direction = 1
    materialsSlider.scrollBy({ left: cardWidth * direction, behavior: 'smooth' })
  }
  const startAutoSlide = () => { autoSlide = window.setInterval(moveSlider, 2800) }
  const stopAutoSlide = () => window.clearInterval(autoSlide)
  document.querySelector('.materials-slider-wrap').addEventListener('mouseenter', stopAutoSlide)
  document.querySelector('.materials-slider-wrap').addEventListener('mouseleave', startAutoSlide)
  document.querySelector('.materials-slider-wrap').addEventListener('touchstart', stopAutoSlide, { passive: true })
  document.querySelector('.materials-slider-wrap').addEventListener('touchend', startAutoSlide, { passive: true })
  const moveMaterials = (direction) => {
    const cardWidth = materialCards[0].getBoundingClientRect().width + 16
    materialsSlider.scrollBy({ left: cardWidth * direction, behavior: 'smooth' })
  }
  document.querySelector('.slider-arrow.previous').addEventListener('click', () => moveMaterials(-1))
  document.querySelector('.slider-arrow.next').addEventListener('click', () => moveMaterials(1))
  startAutoSlide()
}

const gallery = document.querySelector('.event-gallery')
if (gallery) {
  const track = gallery.querySelector('.gallery-track')
  const slides = [...gallery.querySelectorAll('.gallery-slide')]
  const lightbox = gallery.querySelector('.gallery-lightbox')
  const lightboxImage = gallery.querySelector('.lightbox-image')
  const lightboxCount = gallery.querySelector('.lightbox-count')
  let activeImage = 0
  let zoom = 1
  let pinchStart = 0
  let pinchZoom = 1
  const pointers = new Map()
  const images = slides.map((slide) => ({ src: slide.querySelector('img').src, alt: slide.querySelector('img').alt }))
  const renderImage = () => {
    const image = images[activeImage]
    lightboxImage.src = image.src
    lightboxImage.alt = image.alt
    lightboxCount.textContent = `${activeImage + 1} / ${images.length}`
    zoom = 1
    lightboxImage.style.transform = 'scale(1)'
  }
  const moveImage = (direction) => {
    activeImage = (activeImage + direction + images.length) % images.length
    renderImage()
  }
  const setZoom = (value) => {
    zoom = Math.min(4, Math.max(1, value))
    lightboxImage.style.transform = `scale(${zoom})`
  }
  slides.forEach((slide, index) => slide.addEventListener('click', () => {
    activeImage = index
    renderImage()
    lightbox.showModal()
  }))
  gallery.querySelector('.gallery-previous').addEventListener('click', () => track.scrollBy({ left: -track.clientWidth * 0.8, behavior: 'smooth' }))
  gallery.querySelector('.gallery-next').addEventListener('click', () => track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' }))
  gallery.querySelector('.lightbox-prev').addEventListener('click', () => moveImage(-1))
  gallery.querySelector('.lightbox-next').addEventListener('click', () => moveImage(1))
  gallery.querySelector('.lightbox-zoom-in').addEventListener('click', () => setZoom(zoom + 0.5))
  gallery.querySelector('.lightbox-zoom-out').addEventListener('click', () => setZoom(zoom - 0.5))
  gallery.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close())
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close() })
  lightbox.addEventListener('wheel', (event) => {
    event.preventDefault()
    setZoom(zoom + (event.deltaY < 0 ? 0.2 : -0.2))
  }, { passive: false })
  lightboxImage.addEventListener('pointerdown', (event) => {
    lightboxImage.setPointerCapture(event.pointerId)
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY })
    if (pointers.size === 2) {
      const [first, second] = [...pointers.values()]
      pinchStart = Math.hypot(first.x - second.x, first.y - second.y)
      pinchZoom = zoom
    }
  })
  lightboxImage.addEventListener('pointermove', (event) => {
    if (!pointers.has(event.pointerId)) return
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY })
    if (pointers.size === 2 && pinchStart) {
      const [first, second] = [...pointers.values()]
      setZoom(pinchZoom * Math.hypot(first.x - second.x, first.y - second.y) / pinchStart)
    }
  })
  const releasePointer = (event) => pointers.delete(event.pointerId)
  lightboxImage.addEventListener('pointerup', releasePointer)
  lightboxImage.addEventListener('pointercancel', releasePointer)
  lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') moveImage(-1)
    if (event.key === 'ArrowRight') moveImage(1)
    if (event.key === '+' || event.key === '=') setZoom(zoom + 0.5)
    if (event.key === '-') setZoom(zoom - 0.5)
  })
}
