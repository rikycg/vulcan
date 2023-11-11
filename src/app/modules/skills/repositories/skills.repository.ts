import { Skill } from '../entities/skill.entity';

export abstract class SkillsRepository {
  abstract getAll(): Promise<Skill[]>;
}