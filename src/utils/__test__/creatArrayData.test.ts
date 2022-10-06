import { countAge } from '../countAge';

const TEST_VALUE = 34;

describe('countAge', () => {
  const ageOne = '01.06.1988';
  const ageTwo = '06.10.2022';

  test('age should be counted', () => {
    const ageNewOne = countAge(ageOne);
    const ageNewTwo = countAge(ageTwo);
    expect(ageNewOne).toBe(TEST_VALUE);
    expect(ageNewTwo).toBe(0);
  });
});
