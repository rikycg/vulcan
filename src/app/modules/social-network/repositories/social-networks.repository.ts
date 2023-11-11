import { SocialNetwork } from '../entities/social-network.entity';

export abstract class SocialNetworksRepository {
  abstract getAll(): Promise<SocialNetwork[]>;
}