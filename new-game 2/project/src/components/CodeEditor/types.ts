export type Language = 'javascript' | 'python' | 'java';

export interface ExecutionResult {
  type: 'success' | 'error';
  content: string;
}