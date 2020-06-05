export type Timestamp = Date | firebase.firestore.Timestamp;

export interface DocumentLog {
  timestamp: Timestamp;
  uid?: string;
}
export interface DocumentLogs {
  created: DocumentLog;
  updates: Array<DocumentLog>;
}