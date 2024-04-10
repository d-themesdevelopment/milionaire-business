import Link from "next/link";

import { parseContent } from "@/utils";

export default function ALink({
  children,
  className,
  content,
  style,
  ...props
}) {
  const preventDefault = (e) => {
    if (props.href === "#") {
      e.preventDefault();
    }

    if (props.onClick) {
      props.onClick();
    }
  };

  return content ? (
    <Link {...props}>
      <span
        className={className}
        style={{ position: "static" }}
        onClick={preventDefault}
        dangerouslySetInnerHTML={parseContent(content)}
      >
        {children}
      </span>
    </Link>
  ) : (
    <Link {...props}>
      <span
        className={className}
        style={{ position: "static" }}
        onClick={preventDefault}
      >
        {children}
      </span>
    </Link>
  );
}
