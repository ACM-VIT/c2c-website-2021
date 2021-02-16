import './SponsorsSection.css';

import githublogo from "../../assets/github_1.svg";
import slacklogo from "../../assets/slack_2.svg";
import devfoliologo from "../../assets/devfolio_3.svg";
import foldlogo from "../../assets/fold_4.svg";
import maticlogo from "../../assets/matic_5.svg";
import geeksforgeekslogo from "../../assets/geeksforgeeks_6.png";
import jetbrainslogo from "../../assets/jetbrains_8.svg";
import codingblockslogo from "../../assets/codingblocks_7.svg";
import wolframlogo from "../../assets/wolfram_9.svg";
import digitaloceanlogo from "../../assets/digitalocean_10.svg";
import cloudsploitlogo from "../../assets/cloudsploit_11.svg";
import rosenfeldlogo from "../../assets/rosenfeld_12.svg";
import hackerranklogo from "../../assets/hackerrank_13.svg";
import hackerearthlogo from "../../assets/hackerearth_14.svg";

const SponsorsSection = ()=>{
  return (
    <div className="sponsorsection">
      <div className="sponsorhead">Previous Sponsors</div>
        <div className="sponsorsinner">
            <div className="sponsor1 sponsor"><img className="githublogo" src={githublogo} alt="github Logo" /></div>
            <div className="sponsor2 sponsor"><img className="slacklogo" src={slacklogo} alt="github Logo" /></div>
            <div className="sponsor3 sponsor"><img className="devfoliologo" src={devfoliologo} alt="github Logo" /></div>
            <div className="sponsor4 sponsor"><img className="foldlogo" src={foldlogo} alt="github Logo" /></div>
            <div className="sponsor5 sponsor"><img className="maticlogo" src={maticlogo} alt="github Logo" /></div>
            <div className="sponsor6 sponsor"><img className="geeksforgeekslogo" src={geeksforgeekslogo} alt="github Logo" /></div>
            <div className="sponsor7 sponsor"><img className="codingblockslogo" src={codingblockslogo} alt="github Logo" /></div>
            <div className="sponsor8 sponsor"><img className="jetbrainslogo" src={jetbrainslogo} alt="github Logo" /></div>
            <div className="sponsor9 sponsor"><img className="wolframlogo" src={wolframlogo} alt="github Logo" /></div>
            <div className="sponsor10 sponsor"><img className="digitaloceanlogo" src={digitaloceanlogo} alt="github Logo" /></div>
            <div className="sponsor11 sponsor"><img className="cloudsploitlogo" src={cloudsploitlogo} alt="github Logo" /></div>
            <div className="sponsor12 sponsor"><img className="rosenfeldlogo" src={rosenfeldlogo} alt="github Logo" /></div>
            <div className="sponsor13 sponsor"><img className="hackerranklogo" src={hackerranklogo} alt="github Logo" /></div>
            <div className="sponsor14 sponsor"><img className="hackerearthlogo" src={hackerearthlogo} alt="github Logo" /></div>
        </div>
    </div>
  );
}

export default SponsorsSection