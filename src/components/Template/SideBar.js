import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Steve Wang</h2>
        <p><a href="mailto:ywang155@gmail.com">ywang155@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I spend a lot of time thinking about my flaws. This is an outlet for these many thoughts.
      </p>

    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Steve Wang <Link to="/">ywang155@gmail.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
