'use client';

import { useState } from 'react';
import {
  ArrowDown,
  Flame,
  MapPin,
  Minus,
  Plus,
  ShoppingBag,
  Star,
} from 'lucide-react';

const PRICE = 20;

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const orderText = encodeURIComponent(
    `Wah gwaan Mike! I'd like to order ${quantity} tub${quantity > 1 ? 's' : ''} of RUFF Pepper Shrimp ($${PRICE * quantity}).`,
  );

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="RUFF Pepper Shrimp home">
          <img src="/images/ruff-shrimp-logo.png" alt="" />
          <span>
            <b>RUFF</b>
            <small>PEPPER SHRIMP</small>
          </span>
        </a>
        <div className="navlinks">
          <a href="#story">Our story</a>
          <a href="#heat">The flavor</a>
          <a href="#order">Order</a>
        </div>
        <a className="nav-order" href="#order">
          Get a tub
        </a>
      </nav>
      <section id="top" className="hero">
        <img
          className="hero-bg"
          src="/images/pepper-shrimp-hero.png"
          alt="Whole Jamaican pepper shrimp with heads on in a clear takeout tub beside Black River"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="kicker">
            <span>From Jamaica to Broward</span>
          </p>
          <h1>
            Real yaad flavor.
            <br />
            <em>RUFF heat.</em>
          </h1>
          <p className="hero-lede">
            Whole shrimp with the heads on, drenched in our fiery Scotch bonnet
            blend. Bold, bright, and made the Jamaican way.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#order">
              Order a $20 tub <ShoppingBag size={18} />
            </a>
            <a className="text-link" href="#story">
              Meet the flavor <ArrowDown size={17} />
            </a>
          </div>
        </div>
        <div className="pepper-stamp">
          <Flame />
          <b>
            SCOTCH
            <br />
            BONNET
          </b>
          <small>HEAT</small>
        </div>
        <div className="hero-mascot" aria-hidden="true">
          <div className="mascot-bubble">
            Mi tell yuh
            <br />
            <b>it RUFF!</b>
          </div>
          <div className="mascot-art">
            <img src="/images/ruff-shrimp-logo.png" alt="" />
            <i className="falling-tear" />
          </div>
        </div>
        <p className="scroll-note">
          SCROLL FI DI STORY <span />
        </p>
      </section>
      <section className="marquee" aria-label="Product highlights">
        <div className="marquee-track">
          <span>
            HEADS ON <i>✦</i> SHELLS ON <i>✦</i> SCOTCH BONNET <i>✦</i> $20 A
            TUB <i>✦</i> BROWARD COUNTY <i>✦</i>
          </span>
          <span aria-hidden="true">
            HEADS ON <i>✦</i> SHELLS ON <i>✦</i> SCOTCH BONNET <i>✦</i> $20 A
            TUB <i>✦</i> BROWARD COUNTY <i>✦</i>
          </span>
          <span aria-hidden="true">
            HEADS ON <i>✦</i> SHELLS ON <i>✦</i> SCOTCH BONNET <i>✦</i> $20 A
            TUB <i>✦</i> BROWARD COUNTY <i>✦</i>
          </span>
          <span aria-hidden="true">
            HEADS ON <i>✦</i> SHELLS ON <i>✦</i> SCOTCH BONNET <i>✦</i> $20 A
            TUB <i>✦</i> BROWARD COUNTY <i>✦</i>
          </span>
        </div>
      </section>
      <section id="story" className="story">
        <div className="story-photo">
          <img
            src="/images/middle-quarters-roadside-recreation.jpg"
            alt="Artistic recreation of a Jamaican roadside vendor handing a small bag of head-on pepper shrimp to a customer"
          />
          <span>Roadside tradition · artistic recreation</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Straight from the source</p>
          <h2>
            Born by the river.
            <br />
            <em>Raised with flavor.</em>
          </h2>
          <p className="big-copy">
            In Jamaica, pepper shrimp is more than a snack. It is roadside
            laughter, river fresh catch, and a bag of fiery goodness passed
            through the car window.
          </p>
          <p>
            RUFF carries that tradition from the spirit of Black River and
            Middle Quarters to Broward County. Whole shrimp, heads on, seasoned
            deep, and never shy with the Scotch bonnet.
          </p>
          <div className="story-signoff">
            <img src="/images/ruff-shrimp-logo.png" alt="RUFF shrimp mascot" />
            <span>
              <b>Michael “Mike” Ferguson</b>
              <small>Founder · fisherman · cook</small>
            </span>
          </div>
        </div>
      </section>
      <section className="founder">
        <div className="founder-photo">
          <img
            src="/images/mike-and-jamal.jpg"
            alt="Michael Ferguson holding his young son"
          />
          <span>Ferguson family archive</span>
        </div>
        <div className="founder-copy">
          <p className="eyebrow">The man behind the flavor</p>
          <h2>Meet Mike.</h2>
          <p className="founder-lede">
            Fisherman. Cook. Father. The hands behind every RUFF tub.
          </p>
          <p>
            Every summer in Jamaica, Mike’s children looked forward to Dunn’s
            River Falls. But the moment they talked about long after the flight
            home was stopping for pepper shrimp on the island drive. The shrimp
            lady, the fire, the flavor. It became the best part of the trip.
          </p>
          <p>
            Mike wanted to give his family that same joy without needing a plane
            ticket. He knew the shortcut recipes online did not taste like the
            real thing, so he went deeper. He traveled, researched, and learned
            from people close to the source until he perfected a recipe worthy
            of the memory.
          </p>
          <p>
            Today, the complete recipe stays between Mike and his son Jamal.
            Father and son know every step, keeping the flavor true to the
            source and the family tradition protected.
          </p>
          <blockquote>Same joy. No plane ticket.</blockquote>
          <div className="founder-mark">
            <img src="/images/ruff-shrimp-logo.png" alt="" />
            <span>
              <b>Michael “Mike” Ferguson</b>
              <small>Founder · fisherman · cook</small>
            </span>
          </div>
        </div>
      </section>
      <section className="heritage">
        <img
          src="/images/black-river-fisherman.png"
          alt="A Jamaican fisherman casting a net from a narrow canoe on Black River at sunrise"
        />
        <div className="heritage-shade" />
        <div className="heritage-copy">
          <p className="eyebrow">A tradition at least 300 years deep</p>
          <h2>
            The river taught
            <br />
            the recipe.
          </h2>
          <p>
            Long before pepper shrimp became Jamaica’s famous roadside bite,
            fishers worked the Black River wetlands from dugout canoes.
            Jamaica’s environmental history connects the craft to Taíno canoe
            traditions and specialized African shrimp basket knowledge carried
            from the Niger Delta more than three centuries ago.
          </p>
          <p>
            In Middle Quarters, the catch became the bright red, deeply seasoned
            pepper shrimp sold by generations of roadside vendors. RUFF keeps
            that line moving through Mike, fisherman, cook, and keeper of the
            family flavor.
          </p>
          <div className="heritage-links">
            <a
              href="https://www.nepa.gov.jm/sites/default/files/2019-11/draft_black_river_management_plan_2017-2022.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Black River Management Plan ↗
            </a>
            <a
              href="https://jis.gov.jm/information/parish-profiles/parish-profile-st-elizabeth/"
              target="_blank"
              rel="noreferrer"
            >
              History of St. Elizabeth ↗
            </a>
          </div>
        </div>
      </section>
      <section id="heat" className="heat">
        <div className="heat-heading">
          <p className="eyebrow">What makes it RUFF?</p>
          <h2>
            Flavor first.
            <br />
            Fire right behind.
          </h2>
        </div>
        <div className="heat-grid">
          <article>
            <span>01</span>
            <Flame />
            <h3>Scotch bonnet bite</h3>
            <p>
              Fruity, fragrant heat that builds with every juicy bite. No flat
              hot sauce flavor here.
            </p>
          </article>
          <article>
            <span>02</span>
            <Star />
            <h3>Whole shrimp, always</h3>
            <p>
              Heads on. Shells on. That is where the flavor lives. That is how
              proper pepper shrimp should look.
            </p>
          </article>
          <article>
            <span>03</span>
            <MapPin />
            <h3>Made in Broward</h3>
            <p>
              Jamaican tradition prepared locally for pickup in Broward County,
              Florida.
            </p>
          </article>
        </div>
      </section>
      <section id="order" className="order">
        <div className="order-art">
          <img
            src="/images/pepper-shrimp-hero.png"
            alt="A $20 tub of whole Jamaican pepper shrimp"
          />
          <b>$20</b>
        </div>
        <div className="order-panel">
          <p className="eyebrow">Ready fi some?</p>
          <h2>Claim your tub.</h2>
          <p>
            Whole pepper shrimp with the heads on, packed fresh in our signature
            takeout tub by Mike Ferguson. Choose how many, then text your order.
          </p>
          <div className="order-line">
            <span>
              <small>RUFF Pepper Shrimp</small>
              <b>${PRICE} each</b>
            </span>
            <div className="quantity">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Remove one tub"
              >
                <Minus />
              </button>
              <b>{quantity}</b>
              <button
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Add one tub"
              >
                <Plus />
              </button>
            </div>
          </div>
          <div className="total">
            <span>Total</span>
            <b>${PRICE * quantity}</b>
          </div>
          <a
            className="order-button"
            href={`sms:+13052445130?body=${orderText}`}
          >
            <span>Text Mike to order</span>
            <b>305.244.5130</b>
          </a>
          <p className="pickup">
            <MapPin size={16} /> Broward County pickup · Details confirmed by
            text
          </p>
        </div>
      </section>
      <footer>
        <div className="footer-brand">
          <img src="/images/ruff-shrimp-logo.png" alt="" />
          <h2>RUFF</h2>
          <p>PEPPER SHRIMP · YARD STYLE</p>
        </div>
        <div>
          <small>ORDER FROM MIKE</small>
          <a href="tel:+13052445130">305.244.5130</a>
          <a href="mailto:ruffpeppershrimp@gmail.com">
            ruffpeppershrimp@gmail.com
          </a>
        </div>
        <div>
          <small>SERVING</small>
          <p>Broward County, Florida</p>
          <p>Pickup details by text</p>
        </div>
        <p className="copyright">
          © 2026 RUFF Pepper Shrimp · Michael Ferguson, fisherman & cook
        </p>
      </footer>
    </main>
  );
}
