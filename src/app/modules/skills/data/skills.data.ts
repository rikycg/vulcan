import { SkillsListCase } from '../cases/skills-list.case';
import { SkillsService } from '../services/skills.service';

export const skillsService = new SkillsService();
export const skillsListCase = new SkillsListCase(skillsService);