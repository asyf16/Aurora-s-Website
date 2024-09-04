import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faI } from "@fortawesome/free-solid-svg-icons";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { GiBullHorns } from "react-icons/gi";

function Timeline() {
  return (
    <section className="timelinecontainer">
      <h1>Experience</h1>
      <VerticalTimeline lineColor={"white"}>
        <VerticalTimelineElement
          dateClassName="datecolor"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#433d66" }}
          contentArrowStyle={{ borderRight: "7px solid  #433d66" }}
          date="Sep 2024 - present"
          iconStyle={{ background: "#4064b8", color: "#fff" }}
          icon={<GiBullHorns />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer | WatStreet
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          dateClassName="datecolor"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#433d66" }}
          contentArrowStyle={{ borderRight: "7px solid  #433d66" }}
          date="May 2024 - Aug 2024"
          iconStyle={{ background: "#4064b8", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faI} />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer | ISARA Corp.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
          <p>
            - Redesigned application's cryptographic risk scoring process,
            enhancing risk assessment accuracy by 80%.
          </p>
          <p>
            - Collaborated with QA team to resolve system bugs, resulting in a
            60% reduction in application failures and efficiency increase.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          dateClassName="datecolor"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#433d66" }}
          contentArrowStyle={{ borderRight: "7px solid  #433d66" }}
          date="Nov 2023 - present"
          iconStyle={{ background: "#4064b8", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faMountain} />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer | Case Mining
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
          <p>
            - Developed company website showcasing services, information, and
            user-friendly contact page using <b>React.js</b>
          </p>
          <p>
            - Implemented edits tailored to client specifications and feedback.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          dateClassName="datecolor"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#433d66" }}
          contentArrowStyle={{ borderRight: "7px solid  #433d66" }}
          date="Sep 2021 - July 2023"
          iconStyle={{ background: "#4064b8", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBrush} />}
        >
          <h3 className="vertical-timeline-element-title">
            President | Art Society
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
          <p>- Managed executive team to host events for students </p>
          <p>
            - Spearheaded annual mural initiative, recieving grants of $1000
          </p>
          <p>
            - Directed art enrichment meetings for 30+ members, leading 25+
            lessons in 2 years
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          dateClassName="datecolor"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#433d66" }}
          contentArrowStyle={{ borderRight: "7px solid  #433d66" }}
          date="Sep 2021 - Feb 2023"
          iconStyle={{ background: "#4064b8", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faComputer} />}
        >
          <h3 className="vertical-timeline-element-title">
            Captain | CyberPatriots
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
          <p>
            - Led team of 6 students in international cyber security competition
            hosted by the Air & Space Forces Association
          </p>
          <p>
            - Secured Windows, Linux, and Server systems from cyber security
            threats
          </p>
          <p>- Placed in the top 2.5% out of 3000+ teams</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          dateClassName="datecolor"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#433d66" }}
          contentArrowStyle={{ borderRight: "7px solid  #433d66" }}
          date="Sep 2021 - Apr 2022"
          iconStyle={{ background: "#4064b8", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faPenNib} />}
        >
          <h3 className="vertical-timeline-element-title">
            Graphic Designer | Canada Confesses
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
          <p>
            - Designed engaging social media campaigns for federally-funded
            program
          </p>
          <p>
            - Brought awareness to social injustices through designs, reaching
            audience of 16,000+
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          dateClassName="datecolor"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#433d66" }}
          contentArrowStyle={{ borderRight: "7px solid  #433d66" }}
          date="Sep 2021 - Feb 2022"
          iconStyle={{ background: "#4064b8", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faMedal} />}
        >
          <h3 className="vertical-timeline-element-title">
            Assistant Coach | Edmonton Fencing Club
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
          <p>
            - Worked alongside head coach of one of the largest fencing club in
            North America
          </p>
          <p>- Led groups of 20+ students in exercises </p>
          <p>
            - Monitored student progress, organized equipment, judged matches
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
