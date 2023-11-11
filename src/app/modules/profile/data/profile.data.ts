import { ProfileCase } from '../cases/profile.case';
import { ProfileService } from '../services/profile.service';

export const profileService = new ProfileService();
export const profileCase = new ProfileCase(profileService);