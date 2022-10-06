import { useDispatch } from 'react-redux';

import { AppDispatchType } from 'store';

export const useAppDispatch = (): Function => useDispatch<AppDispatchType>();
