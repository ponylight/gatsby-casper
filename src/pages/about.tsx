import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                We are professional network and system engineers with extensive experience, and
                we have been working on Cardano testnet from beginning.
              </p>
              <p>
                To diversify the infrastructure for Cardano Ecosystem and brace decentralization, and
                be prepared for the potential exploding requirements, we built the EARTH Inground Stake
                Pool on a Cisco UCS C-Series Server with dual Intel Xeon CPUs and 64GB Memory hosted
                in our data center. The server is connected to a 1 Gbps dedicated Internet link through
                a Cisco Security Appliance.
              </p>
              <p>
                With the income from staking, we are planning to reinvest to build the state of art ADA
                staking pool with DDoS Protection, Next Gen Firewall, Malware Protection and Hyper
                Convergence Infrastructure hosting in dual data centers for high availability.
              </p>
              <p>
                So please support us and stake with us. Our ticker name is <b>EARTH</b>, and our
                pool ID is <b>0915c3599c9155abd550abdc6fab4dbbd08e80e7532bb7decd29767d</b>.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
