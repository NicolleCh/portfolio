import { ListItem, ProgressBar, Teste } from './styles'

export default function SkillList({ image, title, progress }) {
  console.log(progress)
  console.log(typeof progress)
  return (
    <ListItem>
      {image}
      <span>{title}</span>
      <ProgressBar>
        <Teste progress={progress} />
      </ProgressBar>
    </ListItem>
  )
}
