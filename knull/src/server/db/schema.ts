// @ts-nocheck

import { relations } from "drizzle-orm";
import {
  index,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";

// Enums
export const userRole = pgEnum("user_role", ["admin", "moderator", "member"]);
export const channelType = pgEnum("channel_type", [
  "text",
  "voice",
  "code_review",
]);
export const integrationProvider = pgEnum("integration_provider", [
  "github",
  "gitlab",
]);
export const taskStatus = pgEnum("task_status", [
  "todo",
  "in_progress",
  "review",
  "done",
]);

// Users and Authentication
export const users = pgTable(
  "users",
  {
    id: varchar("id").primaryKey(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    name: varchar("name", { length: 255 }).notNull(),
    avatarUrl: text("avatar_url"),
    role: userRole("role").notNull().default("member"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    emailIdx: index("users_email_idx").on(table.email),
    nameIdx: index("users_name_idx").on(table.name),
  })
);

export const userIntegrations = pgTable(
  "user_integrations",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: varchar("user_id")
      .notNull()
      .references(() => users.id),
    provider: integrationProvider("provider").notNull(),
    providerId: varchar("provider_id", { length: 255 }).notNull(),
    accessToken: text("access_token").notNull(),
    refreshToken: text("refresh_token"),
    tokenScope: jsonb("token_scope").notNull().default("[]"),
    tokenExpiresAt: timestamp("token_expires_at"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    providerIdIdx: index("user_integrations_provider_id_idx").on(
      table.providerId
    ),
    userIdIdx: index("user_integrations_user_id_idx").on(table.userId),
  })
);

// Channels and Communication
export const channels = pgTable(
  "channels",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    description: text("description"),
    type: channelType("type").notNull(),
    createdById: varchar("created_by_id")
      .notNull()
      .references(() => users.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    nameIdx: index("channels_name_idx").on(table.name),
    typeIdx: index("channels_type_idx").on(table.type),
  })
);

export const threads = pgTable(
  "threads",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    channelId: uuid("channel_id")
      .notNull()
      .references(() => channels.id),
    title: varchar("title", { length: 255 }).notNull(),
    content: text("content").notNull(),
    authorId: varchar("author_id")
      .notNull()
      .references(() => users.id),
    parentId: uuid("parent_id").references(() => threads.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    channelIdx: index("threads_channel_idx").on(table.channelId),
    authorIdx: index("threads_author_idx").on(table.authorId),
    parentIdx: index("threads_parent_idx").on(table.parentId),
  })
);

// Project Management
export const projects = pgTable(
  "projects",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    description: text("description"),
    ownerId: varchar("owner_id")
      .notNull()
      .references(() => users.id),
    techStack: jsonb("tech_stack").notNull().default("[]"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    nameIdx: index("projects_name_idx").on(table.name),
    ownerIdx: index("projects_owner_idx").on(table.ownerId),
  })
);

export const tasks = pgTable(
  "tasks",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    projectId: uuid("project_id")
      .notNull()
      .references(() => projects.id),
    title: varchar("title", { length: 255 }).notNull(),
    description: text("description"),
    status: taskStatus("status").notNull().default("todo"),
    assigneeId: varchar("assignee_id").references(() => users.id),
    createdById: varchar("created_by_id")
      .notNull()
      .references(() => users.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    projectIdx: index("tasks_project_idx").on(table.projectId),
    statusIdx: index("tasks_status_idx").on(table.status),
    assigneeIdx: index("tasks_assignee_idx").on(table.assigneeId),
  })
);

// Integrations
export const webhooks = pgTable(
  "webhooks",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    url: text("url").notNull(),
    secret: text("secret").notNull(),
    events: jsonb("events").notNull().default("[]"),
    projectId: uuid("project_id")
      .notNull()
      .references(() => projects.id),
    createdById: varchar("created_by_id")
      .notNull()
      .references(() => users.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    projectIdx: index("webhooks_project_idx").on(table.projectId),
  })
);

// GitHub Repositories
export const repositories = pgTable(
  "repositories",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    integrationId: uuid("integration_id")
      .notNull()
      .references(() => userIntegrations.id),
    name: varchar("name", { length: 255 }).notNull(),
    fullName: varchar("full_name", { length: 255 }).notNull(),
    description: text("description"),
    private: boolean("private").notNull(),
    htmlUrl: text("html_url").notNull(),
    defaultBranch: varchar("default_branch", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
    lastSyncedAt: timestamp("last_synced_at").notNull().defaultNow(),
  },
  (table) => ({
    integrationIdx: index("repositories_integration_idx").on(table.integrationId),
    fullNameIdx: index("repositories_full_name_idx").on(table.fullName),
  })
);

// Audit Logs
export const auditLogs = pgTable(
  "audit_logs",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: varchar("user_id")
      .notNull()
      .references(() => users.id),
    action: varchar("action", { length: 255 }).notNull(),
    resourceType: varchar("resource_type", { length: 255 }).notNull(),
    resourceId: uuid("resource_id").notNull(),
    metadata: jsonb("metadata").notNull().default("{}"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => ({
    userIdx: index("audit_logs_user_idx").on(table.userId),
    resourceIdx: index("audit_logs_resource_idx").on(
      table.resourceType,
      table.resourceId
    ),
  })
);

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  integrations: many(userIntegrations),
  channels: many(channels),
  threads: many(threads),
  projects: many(projects),
  assignedTasks: many(tasks, { relationName: "assignee" }),
  createdTasks: many(tasks, { relationName: "creator" }),
}));

export const projectsRelations = relations(projects, ({ one, many }) => ({
  owner: one(users, {
    fields: [projects.ownerId],
    references: [users.id],
  }),
  tasks: many(tasks),
  webhooks: many(webhooks),
}));

export const channelsRelations = relations(channels, ({ one, many }) => ({
  createdBy: one(users, {
    fields: [channels.createdById],
    references: [users.id],
  }),
  threads: many(threads),
}));

export const threadsRelations = relations(threads, ({ one, many }) => ({
  channel: one(channels, {
    fields: [threads.channelId],
    references: [channels.id],
  }),
  author: one(users, {
    fields: [threads.authorId],
    references: [users.id],
  }),
  parent: one(threads, {
    fields: [threads.parentId],
    references: [threads.id],
  }),
  replies: many(threads, { relationName: "parent" }),
}));

export const repositoriesRelations = relations(repositories, ({ one }) => ({
  integration: one(userIntegrations, {
    fields: [repositories.integrationId],
    references: [userIntegrations.id],
  }),
}));

export const userIntegrationsRelations = relations(userIntegrations, ({ one, many }) => ({
  user: one(users, {
    fields: [userIntegrations.userId],
    references: [users.id],
  }),
  repositories: many(repositories),
}));
