import DateManager from 'dayjs';
import utc from 'dayjs/plugin/utc';
import isBetween from 'dayjs/plugin/isBetween';

import 'dayjs/locale/pt-br';

DateManager.locale('pt-br');
DateManager.extend(utc);
DateManager.extend(isBetween);

export { DateManager };
