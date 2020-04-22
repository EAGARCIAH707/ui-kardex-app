import {ProductDTO} from '../product/productDTO';
import {OutDTOl} from './outDTO';
import {InDTO} from './inDTO';

export class KardexDTO {
  idKardex?: number;
  minimumStock?: number;
  maximumStock?: number;
  reference?: string;
  unitCost?: number;
  totalCost?: number;
  quantity?: number;
  productId?: ProductDTO;
  outList?: OutDTOl[];
  inList?: InDTO[];
}
