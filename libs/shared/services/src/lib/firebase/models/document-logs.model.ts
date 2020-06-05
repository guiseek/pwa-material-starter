export interface DocumentLog {
  timestamp: firebase.firestore.Timestamp;
  accountId: firebase.firestore.Timestamp;
}
export interface DocumentLogs {
  created: DocumentLog;
  updates: Array<DocumentLog>;
}