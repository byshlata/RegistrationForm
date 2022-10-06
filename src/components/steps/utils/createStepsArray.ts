import { StepsState } from 'components/steps/enums/StepsState';
import { Nullable } from 'types';

export const createStepsArray = (
  length: number,
  count: Nullable<number>,
): StepsState[] => {
  if (count !== null) {
    return new Array(length).fill(null).map((value, index) => {
      if (index < count - 1) {
        return StepsState.Finished;
      }
      if (index === count - 1) {
        return StepsState.Processed;
      }

      return StepsState.Waiting;
    });
  }

  return [];
};
