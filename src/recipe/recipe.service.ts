import { Body, Injectable, Post } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private readonly prisma: PrismaService) {
    
  }

  async findAll() {
    return this.prisma.recipe.findMany();
  }

  //  rest of the code
}
