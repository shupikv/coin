import Routes from './Routes';
import { MainRouteParams } from '../screens/MainScreen';
import { DetailsRouteParams } from '../screens/DetailsScreen';

export type NavigatorParams = {
    [Routes.MAIN]: MainRouteParams;
    [Routes.DETAILS]: DetailsRouteParams;
};
