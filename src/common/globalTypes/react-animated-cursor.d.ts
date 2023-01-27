declare module "react-animated-cursor" {
  export interface AnimatedCursor {
    color?: string;
    innerSize?: number;
    outerSize?: number;
    outerAlpha?: number;
    innerScale?: number;
    outerScale?: number;
    trailingSpeed?: number;
    hasBlendMode?: boolean;
    outerStyle?: object;
    clickables?: [
      "a",
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      "label[for]",
      "select",
      "textarea",
      "button",
      ".link"
    ];
  }

  export default class Cursor extends React.Component<AnimatedCursor> {}
}
