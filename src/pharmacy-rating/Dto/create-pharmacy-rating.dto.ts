export class CreatePharmRatingDto {
  readonly rating: number;
  readonly comment: string;
  readonly pharmacyId: number;
  readonly userIIN: number;
}
