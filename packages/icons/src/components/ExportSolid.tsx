import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type ExportSolidIconProps = IconProps;

export const ExportSolidIcon = forwardRef<SVGSVGElement, ExportSolidIconProps>(
  function ExportSolidIcon(props: ExportSolidIconProps, ref) {
    return (
      <Icon
        data-testid="ExportSolidIcon"
        aria-label="export solid"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M12 0H0v12h12V0Zm0 6L8 9V7H3V5h5V3l4 3ZM1 1h4v1H2v8h3v1H1V1Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  }
);
