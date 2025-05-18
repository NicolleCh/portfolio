import { ListItem } from './styles';

export default function SkillList({ image, title }) {
  return (
    <ListItem>
      {image}
      <span>{title}</span>
    </ListItem>
  );
}
