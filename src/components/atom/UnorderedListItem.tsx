interface unorderedListItemProps {
  title?: string;
}

export default function UnorderedListItem({
  title = "",
}: unorderedListItemProps) {
  return <li className="hover:cursor-pointer">{title}</li>;
}
