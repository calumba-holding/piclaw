export type BudgetExecutionKind =
  | "interactive"
  | "goal"
  | "scheduled"
  | "background"
  | "delegate"
  | "side_prompt";

export type BudgetWorkStatus = "active" | "paused" | "stopped" | "completed" | "cancelled";

export type BudgetCapScope = "task" | "instance_daily" | "instance_monthly" | "scheduled_run" | "provider_window";

export type BudgetMetric =
  | "api_usd_micros"
  | "provider_percent_used_micros"
  | "provider_credits_remaining_micros"
  | "provider_key_usd_micros";

export interface BudgetWorkContext {
  workId: string;
  chatJid: string;
  kind: BudgetExecutionKind;
  parentWorkId?: string | null;
}

export interface BudgetCap {
  id: string;
  scope: BudgetCapScope;
  metric: BudgetMetric;
  amount: number;
  enabled: boolean;
  work_id: string | null;
  scheduled_task_id: string | null;
  provider_id: string | null;
  quota_dimension: string | null;
  account_ref: string | null;
  timezone: string | null;
  revision: number;
  created_at: string;
  updated_at: string;
}

export interface BudgetCapInput {
  id?: string;
  scope: BudgetCapScope;
  metric: BudgetMetric;
  /** Integer base units: USD/percent/credits are all stored as millionths. */
  amount: number;
  enabled?: boolean;
  workId?: string | null;
  scheduledTaskId?: string | null;
  providerId?: string | null;
  quotaDimension?: string | null;
  accountRef?: string | null;
  timezone?: string | null;
}

export interface BudgetUsageAttribution {
  workId: string | null;
  invocationId: string | null;
  usageEventId: string | null;
  executionKind: BudgetExecutionKind | null;
}
