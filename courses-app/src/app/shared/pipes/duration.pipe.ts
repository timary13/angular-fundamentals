import { Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'duration',
})
export class DurationTransformPipe implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}:${mins} ${hours > 1 ? 'hours' : 'hour'}`;
  }
}
