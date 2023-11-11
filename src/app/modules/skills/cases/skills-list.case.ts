import { Case } from '@/app/core/interfaces/case.interface';

import { Skill } from '../entities/skill.entity';
import { SkillsRepository } from '../repositories/skills.repository';

export class SkillsListCase implements Case<Promise<Skill[]>> {
  constructor(
    private readonly skillsRepository: SkillsRepository
  ) {}

  execute() {
    return this.skillsRepository.getAll();
  }
}