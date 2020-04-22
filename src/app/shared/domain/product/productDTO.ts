export class ProductDTO {
  productId?: number;
  name?: string;
  reference?: string;
  salePrice?: number;
  purchasePrice?: number;
  description?: string;
  state?: boolean;
  available?: boolean;
  createdOn?: Date;
  lastModified?: Date;
  quantity?: number;
}
