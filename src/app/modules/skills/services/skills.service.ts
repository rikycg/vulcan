import { dbService } from '@/app/core/services/db.service';
import { SkillsRepository } from '../repositories/skills.repository';

export class SkillsService extends SkillsRepository {
  async getAll() {
    return dbService.get('skills');
  }
}