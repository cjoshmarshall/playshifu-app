declare module "*svg" {
  import type React from "react";
  import type { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
declare module "*jpg";
declare module "*png";
declare module "*ttf" {
  const value: string;
  export default value;
}
declare module "*otf" {
  const value: string;
  export default value;
}
