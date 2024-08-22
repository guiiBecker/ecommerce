import { IsNotEmpty, IsNumber, IsString, IsArray, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  tags: string[];

  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @IsNotEmpty()
  category: { connect: { id: number } }; // Ajustado para refletir o relacionamento
}
