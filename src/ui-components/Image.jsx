/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Image(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="20.5px"
      height="20.5px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
      paths={[
        {
          d: "M0 18L0 0L18 0L18 18L0 18ZM3 9.575L7 5.575L11 9.575L15 5.575L16 6.575L16 2L2 2L2 8.575L3 9.575ZM2 16L16 16L16 9.4L15 8.4L11 12.4L7 8.4L3 12.4L2 11.4L2 16ZM2 16L2 9.4L2 11.4L2 16Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.88%, 7.32%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Image")}
      {...rest}
    ></Icon>
  );
}
