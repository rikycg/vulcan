import { Case } from '@/app/core/interfaces/case.interface';

import { Profile } from '../entities/profile.entity';
import { ProfileRepository } from '../repositories/profile.respository';

export class ProfileCase implements Case<Promise<Profile>> {
  constructor(
    private readonly profieRepository: ProfileRepository
  ) {}

  execute() {
    return this.profieRepository.get();
  }
}