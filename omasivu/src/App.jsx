import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <h1>Welcome to my Single Page Website !</h1>
        <div className="menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={menuOpen ? 'piilos' : ''}>
          <a href="#info">Info</a>
          <a href="#lorem">Lorem ipsum</a>
          <a href="#extra">Extra info</a>
          <a href="#extra2">Don't look here</a>
        </nav>
      </header>
      <section id="info" className="section">
        <h2>Information</h2>
        <p>This page is a part of Centria University of Applied Sciences' Spring 2025 curriculum Web Development continuation course's tasks to complete.<br />
          I will need to complete this work prompt in such a way that I reach the same effect of this page in both one single .html file, as well as in three different files.<br />
          The work must include HTML, CSS, and JavaScript in such a way that it makes the page scale/respond differently depending on if you are viewing it on different devices.<br />
          There are four keywords in the header, below the main heading. By clicking on the button, you will be moved down the page to the part of the site where the name of the title corresponds to the name of the button.<br />
          If viewing on mobile, this changes into a hamburger menu, where you must click the little icon to open the menu, after which you can click on each of the buttons.<br />
          After the page is ready for submission on the ItsLearning, I will have to have both versions of the task (one file, three files) uploaded to a GitHub repo (which has been shared to the teacher beforehand or made public)
          , and then return a link of the repo in the ItsLearning. I will also have to: "Tee Repoon oma versio (Tag) palauksesta ja palauta (kts. kuva) linkki versioon".</p>
      </section>
      <section id="lorem" className="section">
        <h2>A random blurb of lorem ipsum from an online text generator</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales orci vel elementum varius. Etiam eu consectetur dui, id rutrum dui.<br />
          Vestibulum venenatis rutrum neque sed fringilla. Fusce orci ipsum, dignissim ac bibendum sit amet, tristique ut sem.<br />
          Sed non iaculis lectus. Vivamus mattis, ex ut tempor efficitur, quam neque semper sem, ut lobortis ligula lacus eget diam. Vivamus a turpis sit amet quam fringilla eleifend id vitae tellus.<br />
          Phasellus ut pulvinar massa, ac fermentum purus. Ut bibendum pretium ipsum eu congue. Vestibulum fringilla posuere massa, non condimentum nibh. Proin consequat metus sed faucibus sodales.<br />
          Nunc in dictum urna, non volutpat magna. Nulla porta egestas rhoncus. Etiam neque mauris, pharetra at porta vel, mollis at odio. Pellentesque eget erat eget nisl ultricies semper a id velit.<br />
          Morbi eu pharetra erat. Proin maximus dui velit, eget aliquet tortor aliquet eu. Integer aliquam urna purus, ac volutpat velit commodo semper. Quisque at efficitur justo.<br />
          Donec sit amet nibh ac sem vehicula eleifend. Vestibulum convallis nisi varius, viverra augue sed, iaculis dui. Morbi ante orci, semper sed suscipit vitae, molestie tincidunt eros.<br />
          Aenean a metus nec sapien mollis bibendum in eget lacus. Praesent sagittis nunc sollicitudin felis tempus, a vulputate risus tempus. <br />
          Sed ultrices aliquam enim. Morbi suscipit lorem non risus venenatis iaculis. Maecenas eleifend odio ipsum, sed mattis magna laoreet non. Morbi nec accumsan ipsum. <br />
          Nam dignissim massa eget tellus interdum, quis ullamcorper mi finibus. Nam nisi nisl, tempus id enim sed, maximus commodo tortor. Curabitur quam orci, sagittis sed quam a, gravida consectetur odio. <br />
          Mauris nec molestie mi. Nullam nec elit condimentum massa fringilla blandit nec id justo. Aliquam ac nunc finibus, euismod ante non, convallis mauris. <br />
          Mauris massa arcu, pellentesque et faucibus et, tincidunt nec ligula. Fusce suscipit auctor accumsan. Suspendisse justo velit, porttitor et condimentum vel, malesuada aliquet nulla. <br />
          Integer porttitor mollis sem id molestie. Proin at nibh facilisis, semper urna in, facilisis eros. In dignissim in magna ut gravida. Sed imperdiet quis quam sed porta. <br />
          Curabitur vestibulum nisi ac magna bibendum rhoncus eu non nisl. Aenean gravida augue non nisl ultricies mollis. Curabitur laoreet hendrerit felis, fermentum congue justo laoreet sit amet. <br />
          Morbi mollis finibus sodales. Aliquam nec diam tempor, commodo sapien vel, ultricies nulla. Fusce ultricies justo sed egestas pharetra. Vestibulum ac massa molestie ante placerat pulvinar eget quis arcu.<br />
          Quisque sit amet efficitur risus. Suspendisse nunc eros, ultricies eget blandit vitae, vulputate et risus. Integer tellus lorem, iaculis tincidunt leo vitae, fermentum fermentum nisi. <br />
          Donec malesuada eleifend tortor, eu viverra neque facilisis sed. Suspendisse iaculis, sem nec ultrices hendrerit, diam ipsum pulvinar nunc, vel mattis dolor ipsum non sapien.</p>
      </section>
      <section id="extra" className="section">
        <h2>This text servers no purpose I just want to add a couple more options to click on.</h2>
        <p>Hello. Scroll on by.</p>
      </section>
      <section id="extra2" className="section">
        <h2>This section serves the exact same purpose as the previous section.</h2>
        <p>I just thought it might look a bit more "full" if I add a couple of extra options on the header.</p>
      </section>
      <footer>
        <p>Ville Rauta 2025</p>
        <p>This single HTML file has been edited to work with React !</p>
      </footer>
    </>
  );
}

export default App;