import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import * as React from "react";
import cn from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function handleEmail() {
  const mail = "mailto:";
  // prettier-ignore
  const address = ["m", "a", "o", "b", "c", "c", ".", "d", "l", "e", "i", "f", "a", "g", "m", "h", "g", "i", "@", "j", "o", "k", "f", "l", "l", "m", "o", "n", "n", "o", "n", "p", "a", "q", "d", "r", ".", "s", "n", "t", "o", "u", "t", "v", "n", "w", "i", "x", "l", "y", "c"];
  const add = address
    .reverse()
    .filter((_, i) => i % 2 === 0)
    .join("");
  const subj = "subject=Hi";
  const body = "body=Hey Clint,";

  window.location.href = `${mail}${add}?${subj}&${body}`;
}

interface ISocialFooterButtonProps {
  className?: string;
  href?: string;
  icon: IconProp;
  text: string;
}
function SocialFooterButton(props: ISocialFooterButtonProps): JSX.Element {
  const { className, href, icon, text } = props;

  return (
    <a className={cn(className, "flex items-center")} href={href}>
      <FontAwesomeIcon className="mr-2" height={22} icon={icon} />
      {text}
    </a>
  );
}

export function SocialFooter(): JSX.Element {
  return (
    <footer className="content-layout py-4">
      <h3 className="font-bold pb-2 text-center">Connect with me:</h3>
      <section className="flex flex-col items-center space-y-4">
        <SocialFooterButton
          className="md:basis-1/3"
          href="https://www.linkedin.com/in/clintondannolfo"
          icon={faLinkedin}
          text="LinkedIn"
        />
        <SocialFooterButton
          className="md:basis-1/3"
          href="https://twitter.com/ClintonDAnnolfo"
          icon={faTwitter}
          text="Twitter"
        />
        <SocialFooterButton
          className="md:basis-1/3"
          href="https://github.com/clintonwoo"
          icon={faGithubSquare}
          text="GitHub"
        />
        <button
          className="bg-gray-400 flex-auto p-2 px-4 rounded text-white md:flex-none"
          onClick={handleEmail}
        >
          📧 Email
        </button>
      </section>
    </footer>
  );
}
