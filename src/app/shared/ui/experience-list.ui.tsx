import { ExperienceItem, ExperienceProps } from './experience-item.ui';

export class ExperienceListProps {
  className?: string = '';
  list: ExperienceProps[] = [];
}

export function ExperienceList({ className = '', list }: ExperienceListProps) {
  return (
    <ul className={`${className}`}>
      {
        list.map((s, i) => {
          return (
            <ExperienceItem key={s.name} name={s.name} start={s.start} level={s.level} />
          )
        })
      }
    </ul>
  )
}