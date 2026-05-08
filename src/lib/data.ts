import fs from 'fs';
import path from 'path';
import { AuditLog, PostItem, Settings } from './types';
const base = path.join(process.cwd(), 'data');
const read = <T,>(file: string, fallback: T): T => { try { return JSON.parse(fs.readFileSync(path.join(base,file),'utf8')); } catch { return fallback; } };
export const getPosts = () => read<PostItem[]>('calendar/posts.json', []);
export const getSettings = () => read<Settings>('brand/settings.json', { autonomyLevel: 1, activeMode: 'Showcase Portfolio', emergencyPause: false, approvalPolicy: 'Manual Approval Required' });
export const getLogs = () => read<AuditLog[]>('logs/audit.json', []);
