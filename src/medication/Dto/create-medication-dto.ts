export class CreateMedicationDto {
  readonly name: string;
  readonly description: string;
  readonly article_number: string;
  readonly category: string;
  readonly priority: number;
  readonly price: number;
  readonly allowed_dosage: string;
  readonly pharmacy_id: number;
  readonly quantity: number;
}
