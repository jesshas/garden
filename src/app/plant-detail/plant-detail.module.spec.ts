import { PlantDetailModule } from './plant-detail.module';

describe('PlantDetailModule', () => {
  let plantDetailModule: PlantDetailModule;

  beforeEach(() => {
    plantDetailModule = new PlantDetailModule();
  });

  it('should create an instance', () => {
    expect(plantDetailModule).toBeTruthy();
  });
});
