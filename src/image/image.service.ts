import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from 'src/typeorm/entities/Image';
import { Repository } from 'typeorm';
import { CreateImageParams, UpdateImageParams } from 'src/utils/types';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image) private imageRepository: Repository<Image>,
  ) {}

  findAll() {
    return this.imageRepository.find();
  }

  findById(id: number) {
    return this.imageRepository.findOne({
      where: { imageID: id },
    });
  }

  create(createImageDetails: CreateImageParams) {
    const newImage = this.imageRepository.create(createImageDetails);
    return this.imageRepository.save(newImage);
  }

  update(id: number, updateImageDetails: UpdateImageParams) {
    return this.imageRepository.update({ imageID: id }, updateImageDetails);
  }

  delete(id: number) {
    return this.imageRepository.delete({ imageID: id });
  }
}
