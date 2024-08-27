import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Prisma, Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService,
              private readonly prisma: PrismaService,) {}

  @Post()
  async createProduct(data: CreateProductDto): Promise<Product> {
    return this.prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        sku: data.sku,
        imageUrl: data.imageUrl,
        tags: data.tags,
        stock: data.stock,
        size: data.size, 
        color: data.color,
        category: {
          connect: { id: data.category.connect.id }, // Usar o campo de relacionamento
        },
      },
    });
  }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number): Promise<Product> {
    return this.productsService.getProductById(id);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<Product> {
    return this.productsService.deleteProduct(id);
  }
}

