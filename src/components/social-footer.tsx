import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
  backgroundColor: string;
  className?: string;
  href?: string;
  icon: IconProp;
  text: string;
  textColor: string;
}
function SocialFooterButton(props: ISocialFooterButtonProps): JSX.Element {
  const { backgroundColor, className, href, icon, text, textColor } = props;

  return (
    <a className={cn(className, "flex")} href={href}>
      <button
        className={`${backgroundColor} hover:shadow-lg md:flex-auto flex-1 p-2 rounded ${textColor}`}
      >
        <FontAwesomeIcon className="mr-2" height={22} icon={icon} />
        {text}
      </button>
    </a>
  );
}

export function SocialFooter(): JSX.Element {
  return (
    <footer className="px-8 py-4">
      <h3 className="font-bold pb-2">Connect with me:</h3>
      <section className="flex flex-col gap-4 md:flex-row">
        <SocialFooterButton
          backgroundColor="bg-blue-600"
          className="md:basis-1/3"
          href="https://www.linkedin.com/in/clintondannolfo"
          icon={faLinkedin}
          text="LinkedIn"
          textColor="text-white"
        />
        <SocialFooterButton
          backgroundColor="bg-gray-800"
          className="md:basis-1/3"
          href="https://github.com/clintonwoo"
          icon={faGithubSquare}
          text="GitHub"
          textColor="text-white"
        />
        <button
          className="bg-gray-400 flex-1 p-2 rounded text-white md:basis-1/3 md:flex-auto"
          onClick={handleEmail}
        >
          📧 Email
        </button>
      </section>
    </footer>
  );
}
