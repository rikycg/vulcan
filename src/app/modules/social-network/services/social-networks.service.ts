import { dbService } from '../../../../../core/services/db.service';
import { SocialNetworksRepository } from '../repositories/social-networks.repository';

export class SocialNetworksService extends SocialNetworksRepository {
  async getAll() {
    return dbService.get('social-network');
  }
}