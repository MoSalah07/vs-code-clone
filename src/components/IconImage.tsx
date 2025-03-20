interface IProps {
  src: string;
  classname?: string;
}

export default function IconImage({ src, classname = "size-5" }: IProps) {
  return <img src={src} className={classname} />;
}
