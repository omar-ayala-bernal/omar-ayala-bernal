export type Platform = 'facebook' | 'instagram' | 'tiktok';
export type PostStatus = 'Idea' | 'Draft' | 'Needs Revision' | 'Awaiting Approval' | 'Approved' | 'Auto-Approved' | 'Scheduled' | 'Posted' | 'Missed Approval' | 'Skipped' | 'Failed' | 'Paused';
export type Mode = 'Promote Products' | 'Showcase Portfolio' | 'Engage Audience' | 'Educational Content' | 'Build Personal Brand' | 'Lead Generation' | 'Seasonal Campaigns' | 'Custom Mode';

export interface PostItem { id: string; date: string; platform: Platform; status: PostStatus; title: string; caption: string; cta: string; hashtags: string[]; approvalDeadline?: string; }
export interface Settings { autonomyLevel: 0|1|2|3|4|5; activeMode: Mode; emergencyPause: boolean; approvalPolicy: 'Manual Approval Required'|'Auto-Approve If No Response'|'Auto-Skip If No Response'; }
export interface AuditLog { timestamp: string; action: string; platform: Platform; postId: string; source: 'user'|'system'; autonomyLevel: number; result: string; }
