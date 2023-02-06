import Fuse from 'fuse.js';
import { projects } from '@/src/data/projects';

export const projectsFuse = new Fuse(projects, {
  keys: ['name', 'description', 'startYear'],
});
