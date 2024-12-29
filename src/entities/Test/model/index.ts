import { TestEvents } from './events';
import { TestStores } from './stores';

export { TestStores, TestEvents };

import { persist } from 'effector-storage/local';

import { appService } from '@/shared/services/app';

import './testForm';
import './submitModal';
import './progressModel';

persist({
    store: TestStores.$currentPage,
    pickup: appService.appStarted,
});

persist({
    store: TestStores.$scaleForm,
    pickup: appService.appStarted,
});

persist({
    store: TestStores.$currentProgress,
    pickup: appService.appStarted,
});
