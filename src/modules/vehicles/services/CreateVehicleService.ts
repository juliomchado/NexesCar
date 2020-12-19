import Vehicle from '@modules/vehicles/entities/vehicle';
import VehiclesRepository from '../repositories/VehicleRepository';

interface IRequest {
  name: string;
  brand: string;
  daily_value: number;
}

class CreateVehicleService {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  public async execute({
    name,
    brand,
    daily_value,
  }: IRequest): Promise<Vehicles | string> {
    const checkVehiclesExists = await this.usersRepository.findByEmail(email);

    if (checkVehicleExists) {
      return 'Error';
    }

    const vehicle = await this.vehiclesRepository.create({
      name,
      email,
      password,
    });

    return vehicle;
  }
}

export default CreateVehicleService;
