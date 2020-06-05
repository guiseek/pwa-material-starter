import { DocumentBase, DocumentLogs } from '@amd/shared/services';

export interface Product extends DocumentBase, DocumentLogs {
  id: string;
  name: string;
  description: string;
  tags?: string[];
  price?: number;
}
