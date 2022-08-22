import Button from '@mui/material/Button';

interface Props {
  text: string;
  variant: "text" | "outlined" | "contained" | undefined;
  click: any;
}

const ExtButton = (props: Props) => {
  return (
    <Button variant={props.variant} onClick={props.click}>{props.text}</Button>
  );
}

export default ExtButton;
