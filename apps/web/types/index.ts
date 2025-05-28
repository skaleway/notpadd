export enum MemberRole {
  Owner = "Owner",
  Member = "Member",
  Moderator = "Moderator",
  Editor = "Editor",
}

export interface User {
  id: string;
  name: string | null;
  email: string;
  imageUrl: string | null;
}

export interface Member {
  id: string;
  teamId: string;
  userId: string;
  role: MemberRole;
  user: User;
  craetedAt: Date;
  updatedAt: Date;
}

export interface PaginationState {
  page: number;
  limit: number;
  totalPages: number;
  totalCount: number;
  hasMore: boolean;
}
