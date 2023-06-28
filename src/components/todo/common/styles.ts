export const MarginWrapper = style.div<{
  left?: number;
  right?: number;
}>`
  margin-left: ${(props) => props.left || 0}px;
  margin-right: ${(props) => props.right || 0}px;
`;
