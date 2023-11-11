import { dbService } from '@/app/core/services/db.service';

import { ProfileRepository } from '../repositories/profile.respository';
import { Profile } from '../entities/profile.entity';

export class ProfileService extends ProfileRepository {
  async get() {
    return dbService.get('profile').then(profile => profile?.[0] || new Profile());
  }
}