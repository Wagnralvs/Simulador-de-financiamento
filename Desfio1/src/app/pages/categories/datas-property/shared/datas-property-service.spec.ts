import{ DatasPropertyService} from './datas-property-service';

describe('DatasPropertyService', () => {
let service: DatasPropertyService

beforeEach(() => {

})
it('should have no value to strat', () =>{
    service = new DatasPropertyService();

    expect(service.valorDaEntrada.length).toBe(0);

})

})