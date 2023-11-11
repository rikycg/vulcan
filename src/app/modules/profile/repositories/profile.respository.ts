import { Profile } from '../entities/profile.entity';

export abstract class ProfileRepository {
  abstract get(): Promise<Profile>;
}