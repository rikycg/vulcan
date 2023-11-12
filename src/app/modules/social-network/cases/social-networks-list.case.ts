import { Case } from '../../../../../core/interfaces/case.interface';

import { SocialNetwork } from '../entities/social-network.entity';
import { SocialNetworksRepository } from '../repositories/social-networks.repository';

export class SocialNetworksListCase implements Case<Promise<SocialNetwork[]>> {
  constructor(
    private readonly socialNetworksRepository: SocialNetworksRepository
  ) {}

  execute() {
    return this.socialNetworksRepository.getAll();
  }
}