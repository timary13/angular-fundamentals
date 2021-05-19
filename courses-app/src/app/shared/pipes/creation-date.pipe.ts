import { Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment";

import { DATE_FORMAT } from "src/app/features/constants";

@Pipe({
  name: 'creationdate',
})
export class CreationDateTransformPipe implements PipeTransform {
  transform(creationDate: string): string {
    const date = new Date(creationDate);
    return moment(date).format(DATE_FORMAT);
  }
}
