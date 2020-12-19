import { getRepository, Repository } from 'typeorm';

import Vehicle from '@modules/vehicles/entities/vehicle';
import ICreateVehicleDTO from '../dtos/ICreateVehicleDTO';

class VehiclesRepository {
  private ormRepository: Repository<Vehicle>;

  constructor() {
    this.ormRepository = getRepository(Vehicle);
  }

  public async findByName(name: string): Promise<Vehicle | undefined> {
    const vehicle = await this.ormRepository.findOne({ where: { name } });

    return vehicle;
  }

  public async findById(id: string): Promise<Vehicle | undefined> {
    const vehicle = await this.ormRepository.findOne(id);

    return vehicle;
  }

  public async create(userData: ICreateVehicleDTO): Promise<Vehicle> {
    const appointment = this.ormRepository.create(userData);

    await this.ormRepository.save(appointment);

    return appointment;
  }

  public async save(vehicle: Vehicle): Promise<Vehicle> {
    return this.ormRepository.save(vehicle);
  }
}

export default VehiclesRepository;
